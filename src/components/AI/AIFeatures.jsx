import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const AIFeatures = ({ content, onFeatureSelect }) => {
  const [activeFeature, setActiveFeature] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  const features = [
    { id: 'summary', label: '📝 Summary', icon: '📝' },
    { id: 'quiz', label: '📝 Quiz', icon: '📝' },
    { id: 'flashcard', label: '📇 Flashcards', icon: '📇' },
    { id: 'explain', label: '🧒 Explain like I\'m 5', icon: '🧒' },
    { id: 'translate', label: '🌐 Translate', icon: '🌐' },
    { id: 'suggest', label: '💡 Related Questions', icon: '💡' },
  ];

  const handleFeatureClick = async (featureId) => {
    setActiveFeature(featureId);
    setLoading(true);
    setResult('');

    try {
      let prompt = '';
      switch (featureId) {
        case 'summary':
          prompt = `Summarize the following content concisely:\n\n${content}`;
          break;
        case 'quiz':
          prompt = `Generate 5 quiz questions with answers based on:\n\n${content}`;
          break;
        case 'flashcard':
          prompt = `Create 5 flashcards (front/back) from:\n\n${content}`;
          break;
        case 'explain':
          prompt = `Explain the following content to a 5-year-old:\n\n${content}`;
          break;
        case 'translate':
          prompt = `Translate the following content to Hindi:\n\n${content}`;
          break;
        case 'suggest':
          prompt = `Suggest 5 related questions based on:\n\n${content}`;
          break;
        default:
          return;
      }

      const response = await fetch('http://localhost:5000/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ query: prompt })
      });

      const data = await response.json();
      if (data.success && data.answer) {
        setResult(data.answer);
        if (onFeatureSelect) onFeatureSelect(featureId, data.answer);
      } else {
        setResult('❌ Error: ' + (data.error || 'No response'));
      }
    } catch (error) {
      setResult('❌ Error: ' + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="ai-features">
      <div className="features-grid">
        {features.map(f => (
          <button
            key={f.id}
            className={`feature-btn ${activeFeature === f.id ? 'active' : ''}`}
            onClick={() => handleFeatureClick(f.id)}
            disabled={loading}
          >
            {f.label}
          </button>
        ))}
      </div>

      {loading && (
        <div className="feature-loading">
          <span className="loading-spinner"></span>
          <span>Generating...</span>
        </div>
      )}

      {result && (
        <div className="feature-result">
          <div className="feature-result-header">
            <span>{features.find(f => f.id === activeFeature)?.label}</span>
            <button onClick={() => navigator.clipboard.writeText(result)}>📋 Copy</button>
          </div>
          <div className="feature-result-content">{result}</div>
        </div>
      )}

      <style>{`
        .ai-features {
          margin: 12px 0;
          padding: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .features-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .feature-btn {
          padding: 8px 16px;
          border: 1px solid #232b3d;
          border-radius: 6px;
          background: rgba(255,255,255,0.03);
          color: #8a92aa;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .feature-btn:hover {
          border-color: #8b6bf6;
          color: #eef1f8;
        }
        .feature-btn.active {
          border-color: #8b6bf6;
          background: rgba(139, 107, 246, 0.15);
          color: #eef1f8;
        }
        .feature-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .feature-loading {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          color: #8a92aa;
        }
        .loading-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid #232b3d;
          border-top-color: #8b6bf6;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .feature-result {
          margin-top: 12px;
          padding: 16px;
          background: rgba(0,0,0,0.3);
          border-radius: 8px;
          border: 1px solid #232b3d;
        }
        .feature-result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-weight: 600;
          color: #eef1f8;
        }
        .feature-result-header button {
          padding: 4px 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #232b3d;
          border-radius: 4px;
          color: #8a92aa;
          font-size: 12px;
          cursor: pointer;
        }
        .feature-result-header button:hover {
          border-color: #8b6bf6;
          color: #eef1f8;
        }
        .feature-result-content {
          color: #eef1f8;
          line-height: 1.7;
          white-space: pre-wrap;
        }
      `}</style>
    </div>
  );
};

export default AIFeatures;