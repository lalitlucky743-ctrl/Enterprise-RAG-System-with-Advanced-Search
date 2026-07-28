import { documents } from './documentController.js';
import aiSearchService from '../services/aiSearchService.js';

export const search = async (req, res) => {
  try {
    const { query } = req.body;
    const userId = req.user.id;

    if (!query || query.trim().length === 0) {
      return res.status(400).json({ error: 'Query is required' });
    }

    console.log('🔍 Searching for:', query);
    console.log('📄 Documents in memory:', documents.length);

    // Search in documents
    const results = documents
      .filter(d => d.userId === userId)
      .filter(d => {
        const searchTerm = query.toLowerCase();
        return d.title.toLowerCase().includes(searchTerm) ||
               d.content.toLowerCase().includes(searchTerm);
      });

    console.log('📄 Found in documents:', results.length);

    // ✅ Use AI
    console.log('🤖 Calling AI Service...');
    const aiResult = await aiSearchService.search(query, results);
    console.log('🤖 AI Answer:', aiResult.answer?.substring(0, 100) + '...');

    res.json({
      success: true,
      query,
      answer: aiResult.answer,
      results: results.map(d => ({
        id: d.id,
        title: d.title,
        content: d.content.substring(0, 200) + '...',
        fileType: d.fileType
      })),
      total: results.length,
      isAI: true
    });

  } catch (error) {
    console.error('❌ Search error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const suggest = async (req, res) => {
  try {
    const { q } = req.query;
    const userId = req.user.id;

    if (!q) {
      return res.json({ suggestions: [] });
    }

    const suggestions = documents
      .filter(d => d.userId === userId)
      .filter(d => d.title.toLowerCase().includes(q.toLowerCase()))
      .map(d => d.title)
      .slice(0, 5);

    res.json({ suggestions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};