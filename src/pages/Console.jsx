import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../hooks/useChat';
import MarkdownRenderer from '../components/Chat/MarkdownRenderer';
import TypingAnimation from '../components/Chat/TypingAnimation';
import CopyButton from '../components/Chat/CopyButton';
import DownloadButton from '../components/Chat/DownloadButton';
import ChatScroll from '../components/Chat/ChatScroll';
import AIFeatures from '../components/AI/AIFeatures';
import VoiceInput from '../components/AI/VoiceInput';
import TextToSpeech from '../components/AI/TextToSpeech';
import MultiPDFUpload from '../components/AI/MultiPDFUpload';
import { api } from '../services/api';

const Console = () => {
  const [query, setQuery] = useState('');
  const [newDoc, setNewDoc] = useState({ title: '', content: '' });
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const { token } = useAuth();
  
  const { messages, isLoading, streamingMessage, sendMessage, clearHistory, messagesEndRef } = useChat(token);

  useEffect(() => {
    if (token) loadDocuments();
  }, [token]);

  const loadDocuments = async () => {
    try {
      const result = await api.getDocuments(token);
      if (result.success) setDocuments(result.documents || []);
    } catch (error) {
      console.error('Error loading documents:', error);
    }
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    await sendMessage(query);
    setQuery('');
  };

  const handleUpload = async () => {
    if (!newDoc.title || !newDoc.content) {
      alert('Please enter both title and content');
      return;
    }
    setUploading(true);
    try {
      const result = await api.uploadDocument(newDoc, token);
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

  const handleVoiceTranscript = (transcript) => {
    setQuery(transcript);
    setTimeout(handleSearch, 500);
  };

  const handleFeatureSelect = (featureId, result) => {
    // Handle feature result
    console.log(`Feature ${featureId} result:`, result);
  };

  return (
    <div className="console-page">
      <div className="console-container">
        {/* Sidebar */}
        <div className="console-sidebar">
          <div className="sidebar-header">
            <h3>💬 Chat History</h3>
            {messages.length > 0 && (
              <button onClick={clearHistory} className="clear-btn">🗑️ Clear</button>
            )}
          </div>
          <div className="history-list">
            {messages.filter(m => m.role === 'user').map((msg, i) => (
              <div key={i} className="history-item" onClick={() => setQuery(msg.content)}>
                {msg.content.substring(0, 40)}...
              </div>
            ))}
            {messages.length === 0 && (
              <div className="empty-state">No chat history yet</div>
            )}
          </div>

          <div className="sidebar-docs">
            <h4>📄 Documents ({documents.length})</h4>
            {documents.map((doc, i) => (
              <div key={i} className="doc-item">{doc.title}</div>
            ))}
            <MultiPDFUpload onUploadComplete={loadDocuments} />
          </div>
        </div>

        {/* Main Chat */}
        <div className="console-main">
          <ChatScroll>
            <div className="messages-container">
              {messages.length === 0 && !streamingMessage && (
                <div className="welcome-message">
                  <h2>👋 Welcome to Enterprise RAG</h2>
                  <p>Ask anything about your documents or general knowledge</p>
                </div>
              )}

              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.role}`}>
                  <div className="message-avatar">
                    {msg.role === 'user' ? '👤' : '🤖'}
                  </div>
                  <div className="message-content">
                    {msg.role === 'assistant' && !msg.isError ? (
                      <MarkdownRenderer content={msg.content} />
                    ) : (
                      <div className="message-text">{msg.content}</div>
                    )}
                    {msg.role === 'assistant' && !msg.isError && (
                      <>
                        <div className="message-actions">
                          <CopyButton text={msg.content} />
                          <DownloadButton content={msg.content} title="AI-Answer" />
                          <TextToSpeech text={msg.content} />
                        </div>
                        <AIFeatures content={msg.content} onFeatureSelect={handleFeatureSelect} />
                      </>
                    )}
                    <div className="message-time">
                      {new Date(msg.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}

              {streamingMessage && (
                <div className="message assistant">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <MarkdownRenderer content={streamingMessage} />
                    <span className="cursor-blink">▌</span>
                  </div>
                </div>
              )}

              {isLoading && !streamingMessage && (
                <div className="message assistant">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <TypingAnimation />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </ChatScroll>

          <div className="input-container">
            <VoiceInput onTranscript={handleVoiceTranscript} />
            <textarea
              className="query-input"
              rows="2"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask anything..."
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSearch()}
            />
            <button className="send-btn" onClick={handleSearch} disabled={isLoading || !query.trim()}>
              {isLoading ? '⏳' : '➤'}
            </button>
          </div>

          <div className="upload-section">
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
              rows="2"
            />
            <button onClick={handleUpload} disabled={uploading || !newDoc.title || !newDoc.content}>
              {uploading ? 'Uploading...' : '📤 Upload'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .console-page {
          padding-top: 80px;
          min-height: 100vh;
          background: #05070d;
        }
        .console-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 20px 24px;
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          height: calc(100vh - 80px);
        }
        .console-sidebar {
          background: rgba(15, 20, 32, 0.85);
          border: 1px solid #232b3d;
          border-radius: 12px;
          padding: 20px;
          overflow-y: auto;
          backdrop-filter: blur(10px);
        }
        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .sidebar-header h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          color: #eef1f8;
        }
        .clear-btn {
          padding: 4px 10px;
          background: rgba(255,0,0,0.1);
          border: 1px solid rgba(255,0,0,0.2);
          border-radius: 4px;
          color: #ff6b6b;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .clear-btn:hover {
          background: rgba(255,0,0,0.2);
        }
        .history-item {
          padding: 8px 12px;
          border-radius: 6px;
          color: #8a92aa;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s;
          margin-bottom: 4px;
          border: 1px solid transparent;
        }
        .history-item:hover {
          background: rgba(139, 107, 246, 0.08);
          border-color: rgba(139, 107, 246, 0.2);
          color: #eef1f8;
        }
        .empty-state {
          color: #5b6377;
          font-size: 13px;
          text-align: center;
          padding: 20px 0;
        }
        .sidebar-docs {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #232b3d;
        }
        .sidebar-docs h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 12px;
          color: #5b6377;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }
        .doc-item {
          padding: 6px 8px;
          font-size: 12px;
          color: #8a92aa;
          border-bottom: 1px solid rgba(255,255,255,0.03);
        }

        .console-main {
          background: rgba(15, 20, 32, 0.85);
          border: 1px solid #232b3d;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          backdrop-filter: blur(10px);
          overflow: hidden;
          position: relative;
        }
        .messages-container {
          padding: 24px;
          min-height: 300px;
        }
        .welcome-message {
          text-align: center;
          padding: 60px 20px;
        }
        .welcome-message h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          color: #eef1f8;
          margin-bottom: 8px;
        }
        .welcome-message p {
          color: #8a92aa;
          font-size: 16px;
        }
        .message {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
          animation: fadeIn 0.3s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .message.user {
          flex-direction: row-reverse;
        }
        .message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          background: rgba(255,255,255,0.05);
        }
        .message.user .message-avatar {
          background: rgba(139, 107, 246, 0.2);
        }
        .message-content {
          max-width: 80%;
          padding: 12px 16px;
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid #232b3d;
        }
        .message.user .message-content {
          background: rgba(139, 107, 246, 0.15);
          border-color: rgba(139, 107, 246, 0.2);
        }
        .message-text {
          color: #eef1f8;
          line-height: 1.7;
        }
        .message-actions {
          display: flex;
          gap: 8px;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid rgba(255,255,255,0.05);
          flex-wrap: wrap;
        }
        .message-time {
          font-size: 10px;
          color: #5b6377;
          margin-top: 6px;
        }
        .cursor-blink {
          display: inline-block;
          animation: blink 0.8s step-end infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }

        .input-container {
          display: flex;
          gap: 12px;
          padding: 16px 24px;
          border-top: 1px solid #232b3d;
          background: rgba(0,0,0,0.2);
          align-items: center;
        }
        .query-input {
          flex: 1;
          padding: 12px 16px;
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid #232b3d;
          border-radius: 8px;
          color: #eef1f8;
          font-size: 14px;
          resize: none;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.3s;
        }
        .query-input:focus {
          outline: none;
          border-color: #8b6bf6;
        }
        .send-btn {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          border: none;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s;
          flex-shrink: 0;
        }
        .send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 20px rgba(139, 107, 246, 0.3);
        }
        .send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        .upload-section {
          display: grid;
          grid-template-columns: 1fr 2fr auto;
          gap: 12px;
          padding: 12px 24px;
          border-top: 1px solid #232b3d;
          background: rgba(0,0,0,0.15);
          align-items: end;
        }
        .upload-section input, .upload-section textarea {
          padding: 10px 14px;
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid #232b3d;
          border-radius: 6px;
          color: #eef1f8;
          font-size: 13px;
          font-family: 'Inter', sans-serif;
        }
        .upload-section input:focus, .upload-section textarea:focus {
          outline: none;
          border-color: #8b6bf6;
        }
        .upload-section textarea {
          resize: vertical;
          min-height: 40px;
        }
        .upload-section button {
          padding: 10px 20px;
          background: linear-gradient(135deg, #2fd3d0, #1a9e9c);
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }
        .upload-section button:hover {
          transform: translateY(-2px);
        }
        .upload-section button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 900px) {
          .console-container {
            grid-template-columns: 1fr;
            height: auto;
          }
          .console-sidebar {
            max-height: 200px;
          }
          .message-content {
            max-width: 90%;
          }
          .upload-section {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Console;