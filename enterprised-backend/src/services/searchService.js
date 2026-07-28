import embeddingService from './embeddingService.js';
import Document from '../models/Document.js';
import { Op } from 'sequelize';

class SearchService {
  async hybridSearch(query, userId, options = {}) {
    const { limit = 10, denseWeight = 0.7, sparseWeight = 0.3 } = options;

    // 1. Generate query embedding
    const embedding = await embeddingService.generateEmbedding(query);
    
    // 2. Dense Search (Vector similarity)
    const denseResults = await this.denseSearch(embedding, userId, limit * 2);
    
    // 3. Sparse Search (Text search)
    const sparseResults = await this.sparseSearch(query, userId, limit * 2);
    
    // 4. Fusion
    const fusedResults = this.rrfFusion(denseResults, sparseResults, {
      denseWeight,
      sparseWeight
    });
    
    return fusedResults.slice(0, limit);
  }

  async denseSearch(embedding, userId, limit) {
    try {
      // In production, use Qdrant/Pinecone for vector search
      // For now, return empty
      return [];
    } catch (error) {
      console.error('Dense search error:', error);
      return [];
    }
  }

  async sparseSearch(query, userId, limit) {
    try {
      const documents = await Document.findAll({
        where: {
          userId,
          status: 'completed',
          [Op.or]: [
            { title: { [Op.iLike]: `%${query}%` } },
            { content: { [Op.iLike]: `%${query}%` } }
          ]
        },
        limit,
        attributes: ['id', 'title', 'content', 'fileType', 'metadata']
      });
      
      return documents.map(doc => ({
        id: doc.id,
        title: doc.title,
        content: doc.content,
        fileType: doc.fileType,
        metadata: doc.metadata,
        score: this.calculateBM25(query, doc.content || '')
      }));
    } catch (error) {
      console.error('Sparse search error:', error);
      return [];
    }
  }

  rrfFusion(denseResults, sparseResults, options = {}) {
    const { denseWeight = 0.7, sparseWeight = 0.3 } = options;
    const scoreMap = new Map();
    
    // Process dense results
    denseResults.forEach((result, index) => {
      const score = denseWeight * (1 / (index + 1));
      scoreMap.set(result.id, { ...result, score });
    });
    
    // Process sparse results
    sparseResults.forEach((result, index) => {
      const score = sparseWeight * (1 / (index + 1));
      if (scoreMap.has(result.id)) {
        const existing = scoreMap.get(result.id);
        scoreMap.set(result.id, { ...existing, score: existing.score + score });
      } else {
        scoreMap.set(result.id, { ...result, score });
      }
    });
    
    return Array.from(scoreMap.values())
      .sort((a, b) => b.score - a.score);
  }

  calculateBM25(query, text) {
    const terms = query.toLowerCase().split(' ');
    const textLower = text.toLowerCase();
    let score = 0;
    
    terms.forEach(term => {
      const tf = (textLower.match(new RegExp(term, 'g')) || []).length;
      const idf = Math.log((1 + 1) / (1 + 1));
      score += tf * idf;
    });
    
    return Math.min(score / 10, 1);
  }
}

export default new SearchService();