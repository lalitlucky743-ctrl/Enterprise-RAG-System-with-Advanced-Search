// ✅ Shared documents array - EXPORT KARO
export let documents = [];

export const uploadDocument = async (req, res) => {
  try {
    console.log('📤 Upload:', req.body);
    const { title, content, fileType } = req.body;
    const userId = req.user.id;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content required' });
    }

    const doc = {
      id: Date.now().toString(),
      title,
      content,
      fileType: fileType || 'txt',
      userId,
      status: 'completed',
      createdAt: new Date().toISOString()
    };

    documents.push(doc);
    console.log('📄 Total documents:', documents.length);
    console.log('📄 All docs:', documents.map(d => d.title));

    res.status(201).json({
      success: true,
      document: doc
    });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const getDocuments = async (req, res) => {
  try {
    const userId = req.user.id;
    const userDocs = documents.filter(d => d.userId === userId);

    console.log('📄 User documents:', userDocs.length);

    res.json({
      success: true,
      documents: userDocs,
      total: userDocs.length
    });
  } catch (error) {
    console.error('Get documents error:', error);
    res.status(500).json({ error: error.message });
  }
};

export const getDocumentById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const doc = documents.find(d => d.id === id && d.userId === userId);
    if (!doc) {
      return res.status(404).json({ error: 'Document not found' });
    }

    res.json({ success: true, document: doc });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteDocument = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const index = documents.findIndex(d => d.id === id && d.userId === userId);
    if (index === -1) {
      return res.status(404).json({ error: 'Document not found' });
    }

    documents.splice(index, 1);
    res.json({ success: true, message: 'Document deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};