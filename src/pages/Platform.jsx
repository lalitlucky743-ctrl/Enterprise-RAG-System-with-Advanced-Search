import React, { useEffect } from 'react'

const Platform = () => {
  useEffect(() => {
    // Hide HUD on platform page
    const hudLeft = document.getElementById('hud-left')
    const hudRight = document.getElementById('hud-right')
    if (hudLeft) hudLeft.classList.remove('visible')
    if (hudRight) hudRight.classList.remove('visible')
    
    // Dim 3D scene for non-home pages
    if (window.__threeState) {
      window.__threeState.morph = 0.5
      window.__threeState.dive = 0.3
      window.__threeState.fade = 0.6  // Dimmed
    }

    // Hide cursor glow
    const glow = document.getElementById('cursor-glow')
    if (glow) glow.style.opacity = '0'
  }, [])

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
          margin-bottom: 60px;
        }
        .page-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
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
        .platform-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }
        .platform-card {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 32px;
          transition: transform 0.3s, border-color 0.3s;
        }
        .platform-card:hover {
          transform: translateY(-4px);
          border-color: #8b6bf6;
        }
        .platform-card .icon {
          font-size: 32px;
          margin-bottom: 16px;
        }
        .platform-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #eef1f8;
        }
        .platform-card p {
          color: #8a92aa;
          line-height: 1.6;
        }
        .platform-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 40px;
        }
        .platform-features li {
          list-style: none;
          padding: 8px 0;
          color: #8a92aa;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .platform-features li::before {
          content: '✓';
          color: #2fd3d0;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .platform-features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <h1>Enterprise RAG Platform</h1>
        <p>Everything you need to build production-ready retrieval systems with hybrid search and reranking.</p>
      </div>

      <div className="platform-grid">
        <div className="platform-card">
          <div className="icon">📄</div>
          <h3>Multi-format Ingestion</h3>
          <p>PDFs, Word documents, HTML, Confluence exports, and Slack messages — automatically parsed and embedded.</p>
        </div>
        <div className="platform-card">
          <div className="icon">🔒</div>
          <h3>Enterprise Security</h3>
          <p>SSO/SAML, row-level access control, audit trails, and encryption at rest for all your documents.</p>
        </div>
        <div className="platform-card">
          <div className="icon">🌍</div>
          <h3>Any-region Deployment</h3>
          <p>VPC, on-premise, or hybrid cloud. Your data never leaves your infrastructure.</p>
        </div>
        <div className="platform-card">
          <div className="icon">📊</div>
          <h3>Full Observability</h3>
          <p>Trace every retrieval step — dense scores, sparse scores, rerank scores, and token costs.</p>
        </div>
      </div>

      <div className="platform-features">
        <div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16, color: '#eef1f8' }}>Hybrid Search</h3>
          <li>Dense vector embeddings for semantic understanding</li>
          <li>Sparse BM25 for exact term matching</li>
          <li>Reciprocal Rank Fusion for combining results</li>
          <li>Cross-encoder reranking for precision</li>
        </div>
        <div>
          <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", marginBottom: 16, color: '#eef1f8' }}>Developer Tools</h3>
          <li>REST API with full Swagger documentation</li>
          <li>Python and JavaScript SDKs</li>
          <li>Webhook support for real-time updates</li>
          <li>Playground console for testing queries</li>
        </div>
      </div>
    </div>
  )
}

export default Platform