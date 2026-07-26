import React, { useState, useEffect } from 'react'

const Console = () => {
  const [query, setQuery] = useState("What's our refund window for enterprise contracts?")
  const [response, setResponse] = useState("Enterprise contracts carry a 45-day refund window from invoice date, per the Q3 Master Services Agreement")

  useEffect(() => {
    const hudLeft = document.getElementById('hud-left')
    const hudRight = document.getElementById('hud-right')
    if (hudLeft) hudLeft.classList.remove('visible')
    if (hudRight) hudRight.classList.remove('visible')
    
    if (window.__threeState) {
      window.__threeState.morph = 0.5
      window.__threeState.dive = 0.3
      window.__threeState.fade = 0.6
    }
  }, [])

  const searchHistory = [
    'Refund policy for enterprise',
    'Q3 MSA terms',
    'Data retention policy',
    'Security compliance SOC2'
  ]

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
          grid-template-columns: 250px 1fr;
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

        .response-box {
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 24px;
          min-height: 100px;
        }

        .response-box .label {
          font-size: 11px;
          text-transform: uppercase;
          color: #5b6377;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }

        .response-box .content {
          color: #eef1f8;
          line-height: 1.7;
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #232b3d;
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-item .label {
          font-size: 10px;
          text-transform: uppercase;
          color: #5b6377;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.08em;
        }

        .metric-item .value {
          font-size: 18px;
          font-weight: 600;
          font-family: 'JetBrains Mono', monospace;
          color: #eef1f8;
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
          box-shadow: 0 4px 20px rgba(139, 107, 246, 0.3);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139, 107, 246, 0.4);
        }

        @media (max-width: 900px) {
          .console-layout {
            grid-template-columns: 1fr;
          }
          .metrics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <h1>AI Search Console</h1>
        <p>Test your queries with hybrid search and see real-time scores and retrieved documents.</p>
      </div>

      <div className="console-layout">
        <div className="console-sidebar">
          <h4>Search History</h4>
          {searchHistory.map((item, i) => (
            <div className="history-item" key={i}>
              {item}
            </div>
          ))}
        </div>

        <div className="console-main">
          <textarea 
            className="query-input" 
            rows="3"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn" style={{ marginBottom: 24 }}>Search</button>

          <div className="response-box">
            <div className="label">Response</div>
            <div className="content">{response}</div>
          </div>

          <div className="metrics-grid">
            <div className="metric-item">
              <span className="label">Latency</span>
              <span className="value" style={{ color: '#2fd3d0' }}>142ms</span>
            </div>
            <div className="metric-item">
              <span className="label">Tokens Used</span>
              <span className="value" style={{ color: '#8b6bf6' }}>1,247</span>
            </div>
            <div className="metric-item">
              <span className="label">Sources</span>
              <span className="value" style={{ color: '#f2b65c' }}>5 documents</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Console