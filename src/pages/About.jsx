import React, { useEffect } from 'react'  // ← useEffect import karo

const About = () => {
  useEffect(() => {
    // Hide HUD on about page
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
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .about-text h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          margin-bottom: 16px;
          margin-top: 24px;
          color: #eef1f8;
        }
        .about-text h2:first-child {
          margin-top: 0;
        }
        .about-text p {
          color: #8a92aa;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .stats-side {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 32px;
          height: fit-content;
        }
        .stats-side .stat-item {
          padding: 16px 0;
          border-bottom: 1px solid #232b3d;
        }
        .stats-side .stat-item:last-child {
          border-bottom: none;
        }
        .stats-side .stat-item .number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stats-side .stat-item .label {
          color: #5b6377;
          font-size: 14px;
          margin-top: 4px;
        }
        .stats-side .stat-item .desc {
          color: #8a92aa;
          font-size: 13px;
          margin-top: 8px;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="page-header">
        <h1>About Enterprised</h1>
        <p>Building the future of enterprise document retrieval with hybrid search and AI.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            Enterprised is on a mission to make every document in your organization 
            instantly searchable and actionable. We believe that knowledge shouldn't 
            be locked away in silos — it should be accessible, contextual, and secure.
          </p>
          
          <h2>Why We Built This</h2>
          <p>
            Traditional search fails at understanding context. Keyword matching misses 
            meaning, and pure vector search loses precision. We combined the best of 
            both worlds with hybrid search and reranking, creating a system that 
            understands your documents like a human researcher.
          </p>
          
          <h2>Our Technology</h2>
          <p>
            Built on modern embedding models, BM25, and cross-encoder reranking, 
            Enterprised processes millions of documents with sub-100ms latency. 
            Deploy anywhere — cloud, on-premise, or hybrid — with enterprise-grade 
            security and observability.
          </p>
        </div>

        <div className="stats-side">
          <div className="stat-item">
            <div className="number">128K+</div>
            <div className="label">Documents Indexed</div>
            <div className="desc">Across enterprise deployments worldwide</div>
          </div>
          <div className="stat-item">
            <div className="number">99.97%</div>
            <div className="label">Uptime SLA</div>
            <div className="desc">Guaranteed reliability for mission-critical systems</div>
          </div>
          <div className="stat-item">
            <div className="number">42</div>
            <div className="label">Languages Supported</div>
            <div className="desc">From English to Arabic, Japanese to Portuguese</div>
          </div>
          <div className="stat-item">
            <div className="number">180ms</div>
            <div className="label">P95 Query Latency</div>
            <div className="desc">Lightning-fast retrieval at any scale</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About