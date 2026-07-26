import React from 'react'

const Footer = () => {
  return (
    <>
      <style>{`
        footer.site-footer {
          position: relative;
          z-index: 2;
          border-top: 1px solid #232b3d;
          background: rgba(6, 8, 14, 0.6);
          backdrop-filter: blur(6px);
          padding: 60px 24px 30px;
        }
        .footer-grid {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr repeat(4, 1fr);
          gap: 32px;
        }
        .footer-brand p {
          color: #8a92aa;
          font-size: 13px;
          line-height: 1.6;
          margin-top: 14px;
          max-width: 220px;
        }
        .footer-col h5 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5b6377;
          margin-bottom: 14px;
        }
        .footer-col a {
          display: block;
          color: #8a92aa;
          font-size: 13.5px;
          margin-bottom: 10px;
        }
        .footer-col a:hover { color: #eef1f8; }
        .footer-bottom {
          max-width: 1080px;
          margin: 40px auto 0;
          padding-top: 24px;
          border-top: 1px solid #232b3d;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #5b6377;
          letter-spacing: 0.04em;
        }
        @media (max-width: 800px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brandmark">
              <span className="glyph" style={{ width: 20, height: 20, borderRadius: 5, background: 'linear-gradient(135deg, #8b6bf6, #2fd3d0)', display: 'inline-block' }}></span>
              ENTERPRISED
            </div>
            <p>Enterprise-grade hybrid retrieval. Every document, one searchable core.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <a href="#trusted">Platform</a>
            <a href="#dashboard">Console</a>
            <a href="#">Pricing</a>
            <a href="#">Changelog</a>
          </div>
          <div className="footer-col">
            <h5>Developers</h5>
            <a href="#">Documentation</a>
            <a href="#">API reference</a>
            <a href="#">Status</a>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 ENTERPRISED — HYBRID RETRIEVAL SYSTEM · GLOBAL EDITION</span>
          <span>SOC 2 TYPE II · GDPR READY · ISO 27001</span>
        </div>
      </footer>
    </>
  )
}

export default Footer