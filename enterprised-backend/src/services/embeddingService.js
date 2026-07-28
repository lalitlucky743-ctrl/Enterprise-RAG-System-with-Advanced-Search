import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

class EmbeddingService {
  async generateEmbedding(text) {
    try {
      const response = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: text.substring(0, 8000)
      });
      return response.data[0].embedding;
    } catch (error) {
      console.error('Embedding error:', error);
      throw error;
    }
  }

  async generateBatchEmbeddings(texts) {
    try {
      const response = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: texts.map(t => t.substring(0, 8000))
      });
      return response.data.map(item => item.embedding);
    } catch (error) {
      console.error('Batch embedding error:', error);
      throw error;
    }
  }
}

export default new EmbeddingService();