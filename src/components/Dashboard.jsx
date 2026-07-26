import React from 'react'

const Dashboard = () => {
  return (
    <>
      <style>{`
        #dashboard {
          min-height: 130vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 140px 24px 120px;
        }
        .dash-wrap {
          width: 100%;
          max-width: 1180px;
          opacity: 0;
          transform: translateY(60px) scale(0.97);
        }
        .dash-head {
          text-align: center;
          max-width: 560px;
          margin: 0 auto 40px;
        }
        .dash-head .eyebrow {
          justify-content: center;
        }
        .dash-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 600;
          margin-top: 16px;
          letter-spacing: -0.01em;
        }
        .dash-head p {
          color: #8a92aa;
          margin-top: 14px;
          font-size: 15px;
          line-height: 1.6;
        }
        .console {
          display: grid;
          grid-template-columns: 200px 1fr;
          background: #0f1420;
          border: 1px solid #232b3d;
          border-radius: 6px;
          overflow: hidden;
          box-shadow: 0 60px 120px -40px rgba(0, 0, 0, 0.7);
        }
        .console-nav {
          background: #141a29;
          border-right: 1px solid #232b3d;
          padding: 22px 16px;
        }
        .console-nav .brand {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.1em;
          color: #8a92aa;
          padding: 0 8px 18px;
          border-bottom: 1px solid #232b3d;
          margin-bottom: 16px;
        }
        .console-nav .brand b { color: #eef1f8; }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #8a92aa;
          padding: 9px 10px;
          border-radius: 4px;
          margin-bottom: 2px;
        }
        .nav-item .dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #5b6377;
        }
        .nav-item.active {
          background: rgba(139, 107, 246, 0.12);
          color: #eef1f8;
        }
        .nav-item.active .dot { background: #8b6bf6; }
        .console-main {
          padding: 26px 28px;
        }
        .console-main .row-title {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          margin-bottom: 18px;
        }
        .console-main .row-title h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
        }
        .console-main .row-title span {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #5b6377;
        }
        .split {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 18px;
        }
        .panel {
          background: #141a29;
          border: 1px solid #232b3d;
          border-radius: 5px;
          padding: 16px;
        }
        .chat-line {
          display: flex;
          gap: 10px;
          margin-bottom: 14px;
        }
        .chat-line .bubble {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid #232b3d;
          border-radius: 4px;
          padding: 10px 12px;
          font-size: 12.5px;
          color: #8a92aa;
          line-height: 1.55;
        }
        .chat-line.user .bubble {
          background: rgba(139, 107, 246, 0.1);
          color: #eef1f8;
          border-color: rgba(139, 107, 246, 0.25);
        }
        .chat-line .cursor {
          display: inline-block;
          width: 6px;
          height: 12px;
          background: #2fd3d0;
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
        .score-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }
        .score-row .k {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #5b6377;
          width: 64px;
          flex-shrink: 0;
        }
        .score-track {
          flex: 1;
          height: 5px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 3px;
          overflow: hidden;
        }
        .score-fill {
          height: 100%;
          border-radius: 3px;
        }
        .score-row .v {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          color: #8a92aa;
          width: 34px;
          text-align: right;
        }
        .cite-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 9px 10px;
          border: 1px solid #232b3d;
          border-radius: 4px;
          margin-top: 8px;
          font-size: 11.5px;
        }
        .cite-card .fname { color: #eef1f8; }
        .cite-card .meta {
          color: #5b6377;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          margin-top: 2px;
        }
        .cite-card .conf {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #f2b65c;
        }
        .cta-row {
          text-align: center;
          margin-top: 34px;
        }
        .cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #eef1f8;
          color: #05070d;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 13px 26px;
          border-radius: 3px;
          text-decoration: none;
        }
        .cta:hover { background: #2fd3d0; }
        @media (max-width: 760px) {
          .console {
            grid-template-columns: 1fr;
          }
          .console-nav { display: none; }
          .split {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="dashboard">
        <div className="dash-wrap" id="dash-wrap">
          <div className="dash-head">
            <div className="eyebrow" style={{ justifyContent: 'center' }}>You're inside the core</div>
            <h2>The console, fully assembled</h2>
            <p>Ingestion, hybrid retrieval, and reranking — the pipeline you just scrolled through, now running live behind a single pane of glass.</p>
          </div>

          <div className="console">
            <div className="console-nav">
              <div className="brand"><b>ENTERPRISED</b> / console</div>
              <div className="nav-item"><span className="dot"></span>Dashboard</div>
              <div className="nav-item"><span className="dot"></span>Data Ingestion</div>
              <div className="nav-item active"><span className="dot"></span>AI Search Sandbox</div>
              <div className="nav-item"><span className="dot"></span>Analytics</div>
              <div className="nav-item"><span className="dot"></span>Settings</div>
            </div>
            <div className="console-main">
              <div className="row-title">
                <h4>AI Search Sandbox</h4>
                <span>qdrant · hybrid · reranked</span>
              </div>
              <div className="split">
                <div className="panel">
                  <div className="chat-line user">
                    <div className="bubble">What's our refund window for enterprise contracts?</div>
                  </div>
                  <div className="chat-line">
                    <div className="bubble">
                      Enterprise contracts carry a 45-day refund window from invoice date, per the Q3 Master Services Agreement
                      <span className="cursor"></span>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="score-row">
                    <span className="k">DENSE</span>
                    <div className="score-track">
                      <div className="score-fill" style={{ width: '83%', background: '#8b6bf6' }}></div>
                    </div>
                    <span className="v">.83</span>
                  </div>
                  <div className="score-row">
                    <span className="k">SPARSE</span>
                    <div className="score-track">
                      <div className="score-fill" style={{ width: '71%', background: '#2fd3d0' }}></div>
                    </div>
                    <span className="v">.71</span>
                  </div>
                  <div className="score-row">
                    <span className="k">RERANK</span>
                    <div className="score-track">
                      <div className="score-fill" style={{ width: '94%', background: '#f2b65c' }}></div>
                    </div>
                    <span className="v">.94</span>
                  </div>
                  <div className="cite-card">
                    <div>
                      <div className="fname">MSA_Enterprise_Q3.pdf</div>
                      <div className="meta">page 12 · chunk 4</div>
                    </div>
                    <div className="conf">94%</div>
                  </div>
                  <div className="cite-card">
                    <div>
                      <div className="fname">Refund_Policy_v2.pdf</div>
                      <div className="meta">page 3 · chunk 1</div>
                    </div>
                    <div className="conf">88%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-row">
            <a className="cta" href="#hero">Re-enter the Portal ↑</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Dashboard