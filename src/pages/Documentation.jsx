import React, { useEffect } from 'react'  // ← useEffect import karo

const Documentation = () => {
  useEffect(() => {
    // Hide HUD on documentation page
    const hudLeft = document.getElementById('hud-left')
    const hudRight = document.getElementById('hud-right')
    if (hudLeft) hudLeft.classList.remove('visible')
    if (hudRight) hudRight.classList.remove('visible')
    
    if (window.__threeState) {
      window.__threeState.morph = 0.3
      window.__threeState.dive = 0.2
      window.__threeState.fade = 0.5
    }
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
          margin-bottom: 40px;
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
        .docs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .docs-card {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 24px;
          transition: border-color 0.3s;
        }
        .docs-card:hover {
          border-color: #8b6bf6;
        }
        .docs-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          margin-bottom: 8px;
          color: #eef1f8;
        }
        .docs-card p {
          color: #8a92aa;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .docs-card .link {
          color: #8b6bf6;
          text-decoration: none;
          font-weight: 500;
        }
        .docs-card .link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .docs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <h1>Documentation</h1>
        <p>Everything you need to build with Enterprised — from getting started to advanced features.</p>
      </div>

      <div className="docs-grid">
        <div className="docs-card">
          <h3>🚀 Getting Started</h3>
          <p>Set up your first retrieval system in 5 minutes with our quickstart guide.</p>
          <a href="#" className="link">Read Guide →</a>
        </div>
        <div className="docs-card">
          <h3>📚 API Reference</h3>
          <p>Complete REST API documentation with examples in Python, JavaScript, and cURL.</p>
          <a href="#" className="link">View API →</a>
        </div>
        <div className="docs-card">
          <h3>🔧 SDKs & Libraries</h3>
          <p>Official Python and JavaScript SDKs for seamless integration with your stack.</p>
          <a href="#" className="link">See SDKs →</a>
        </div>
        <div className="docs-card">
          <h3>📖 Tutorials</h3>
          <p>Step-by-step tutorials for building search, Q&A, and document processing pipelines.</p>
          <a href="#" className="link">Start Tutorials →</a>
        </div>
        <div className="docs-card">
          <h3>🏗️ Architecture</h3>
          <p>Deep dive into hybrid search, reranking, and the indexing pipeline.</p>
          <a href="#" className="link">Learn Architecture →</a>
        </div>
        <div className="docs-card">
          <h3>❓ FAQ</h3>
          <p>Common questions about deployment, security, pricing, and more.</p>
          <a href="#" className="link">View FAQ →</a>
        </div>
      </div>
    </div>
  )
}

export default Documentation