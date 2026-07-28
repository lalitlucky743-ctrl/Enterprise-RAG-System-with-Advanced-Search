import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const Console = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [foundDocs, setFoundDocs] = useState([]);
  
  const [newDoc, setNewDoc] = useState({ title: '', content: '' });
  const [uploading, setUploading] = useState(false);
  
  const { token } = useAuth();

  useEffect(() => {
    if (token) {
      loadDocuments();
    }
  }, [token]);

  const loadDocuments = async () => {
    try {
      const result = await api.getDocuments(token);
      console.log('Documents:', result);
      if (result.success) {
        setDocuments(result.documents || []);
      }
    } catch (error) {
      console.error('Error loading documents:', error);
    }
  };

  const handleSearch = async () => {
  if (!query.trim()) return;
  
  setLoading(true);
  setAnswer('');
  setFoundDocs([]);
  
  try {
    const result = await api.search(query, token);
    console.log('Search result:', result);
    
    if (result.success) {
      // ✅ AI answer se priority
      if (result.answer) {
        setAnswer(result.answer);
      } else if (result.results && result.results.length > 0) {
        setAnswer(result.results[0].content || 'No content found');
      } else {
        setAnswer('No results found. Please upload some documents first! 📚');
      }
      
      if (result.results && result.results.length > 0) {
        setFoundDocs(result.results);
      }
      
      setHistory(prev => [query, ...prev].slice(0, 5));
    } else {
      setAnswer('Error: ' + (result.error || 'Something went wrong'));
    }
  } catch (error) {
    console.error('Search error:', error);
    setAnswer('Error: ' + error.message);
  }
  setLoading(false);
};

  const handleUpload = async () => {
    if (!newDoc.title || !newDoc.content) {
      alert('Please enter both title and content');
      return;
    }
    
    setUploading(true);
    try {
      const result = await api.uploadDocument(newDoc, token);
      console.log('Upload result:', result);
      
      if (result.success) {
        alert('✅ Document uploaded successfully!');
        setNewDoc({ title: '', content: '' });
        loadDocuments();
      } else {
        alert('❌ Upload failed: ' + (result.error || 'Unknown error'));
      }
    } catch (error) {
      alert('❌ Upload failed: ' + error.message);
    }
    setUploading(false);
  };

  return (
    <div className="page-container">
      <style>{`
        .page-container {
          padding-top: 100px;
          min-height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          position: relative;
          z-index: 2;
        }
        .page-header {
          margin-bottom: 40px;
        }
        .page-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .page-header p {
          color: #8a92aa;
          font-size: 18px;
          max-width: 600px;
          line-height: 1.6;
        }

        .console-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
        }

        .console-sidebar {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 12px;
          padding: 24px;
          height: fit-content;
        }
        .console-sidebar h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #5b6377;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
          margin-top: 20px;
        }
        .console-sidebar h4:first-child {
          margin-top: 0;
        }
        .history-item {
          padding: 10px 12px;
          border-radius: 6px;
          color: #8a92aa;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          margin-bottom: 6px;
        }
        .history-item:hover {
          background: rgba(139, 107, 246, 0.08);
          border-color: rgba(139, 107, 246, 0.2);
          color: #eef1f8;
        }
        .doc-count {
          font-size: 12px;
          color: #5b6377;
          margin-top: 8px;
        }
        .doc-list {
          max-height: 200px;
          overflow-y: auto;
        }
        .doc-item {
          padding: 8px 12px;
          color: #8a92aa;
          font-size: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .doc-item .title {
          color: #eef1f8;
          font-weight: 500;
        }

        .console-main {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 12px;
          padding: 32px;
        }
        .query-input {
          width: 100%;
          padding: 16px;
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid #232b3d;
          border-radius: 8px;
          color: #eef1f8;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          margin-bottom: 16px;
          resize: vertical;
          transition: border-color 0.3s ease;
        }
        .query-input:focus {
          outline: none;
          border-color: #8b6bf6;
        }

        .answer-box {
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid rgba(139, 107, 246, 0.2);
          border-radius: 8px;
          padding: 20px;
          margin-top: 24px;
          min-height: 80px;
        }
        .answer-box .label {
          font-size: 11px;
          text-transform: uppercase;
          color: #8b6bf6;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .answer-box .content {
          color: #eef1f8;
          line-height: 1.8;
          font-size: 15px;
        }

        .sources-box {
          margin-top: 12px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
        }
        .sources-box .source-item {
          color: #8a92aa;
          font-size: 12px;
          padding: 4px 0;
        }
        .sources-box .source-item .title {
          color: #2fd3d0;
        }

        .upload-section {
          background: rgba(20, 26, 41, 0.6);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
        .upload-section h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #eef1f8;
          margin-bottom: 12px;
        }
        .upload-section input,
        .upload-section textarea {
          width: 100%;
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #232b3d;
          border-radius: 6px;
          color: #eef1f8;
          font-size: 13px;
          margin-bottom: 10px;
          font-family: 'Inter', sans-serif;
        }
        .upload-section input:focus,
        .upload-section textarea:focus {
          outline: none;
          border-color: #8b6bf6;
        }
        .upload-section .btn-upload {
          padding: 10px 24px;
          background: linear-gradient(135deg, #2fd3d0, #1a9e9c);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .upload-section .btn-upload:hover {
          transform: translateY(-2px);
        }
        .upload-section .btn-upload:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn {
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139, 107, 246, 0.4);
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 900px) {
          .console-layout {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <h1>AI Search Console</h1>
        <p>Upload documents and search them</p>
      </div>

      <div className="console-layout">
        {/* Sidebar */}
        <div className="console-sidebar">
          <h4>Search History</h4>
          {history.length === 0 ? (
            <p style={{ color: '#5b6377', fontSize: '13px' }}>No searches yet</p>
          ) : (
            history.map((item, i) => (
              <div className="history-item" key={i} onClick={() => setQuery(item)}>
                {item}
              </div>
            ))
          )}

          <h4>📄 Your Documents</h4>
          <div className="doc-list">
            {documents.length === 0 ? (
              <p style={{ color: '#5b6377', fontSize: '13px' }}>No documents uploaded</p>
            ) : (
              documents.map((doc, i) => (
                <div className="doc-item" key={i}>
                  <div className="title">{doc.title}</div>
                </div>
              ))
            )}
          </div>
          <div className="doc-count">
            Total: {documents.length} documents
          </div>
        </div>

        {/* Main Console */}
        <div className="console-main">
          <textarea 
            className="query-input" 
            rows="3"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask anything about your documents..."
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSearch()}
          />
          <button className="btn" onClick={handleSearch} disabled={loading || !query.trim()}>
            {loading ? 'Searching...' : '🔍 Search'}
          </button>

          {/* Answer */}
          {answer && (
            <div className="answer-box">
              <div className="label">📝 Answer</div>
              <div className="content">{answer}</div>
              
              {foundDocs.length > 0 && (
                <div className="sources-box">
                  <div style={{ color: '#5b6377', fontSize: '11px', marginBottom: '6px' }}>
                    📚 Sources:
                  </div>
                  {foundDocs.map((doc, i) => (
                    <div className="source-item" key={i}>
                      <span className="title">{doc.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Upload Section */}
          <div className="upload-section">
            <h4>📤 Add Document</h4>
            <input
              type="text"
              placeholder="Document Title"
              value={newDoc.title}
              onChange={(e) => setNewDoc({...newDoc, title: e.target.value})}
            />
            <textarea
              placeholder="Document Content"
              value={newDoc.content}
              onChange={(e) => setNewDoc({...newDoc, content: e.target.value})}
              rows="3"
            />
            <button 
              className="btn-upload" 
              onClick={handleUpload} 
              disabled={uploading || !newDoc.title || !newDoc.content}
            >
              {uploading ? 'Uploading...' : '📤 Upload'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Console;