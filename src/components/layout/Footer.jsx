import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <style>{`
        footer.site-footer {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(35, 43, 61, 0.3);
          background: rgba(6, 8, 14, 0.8);
          backdrop-filter: blur(20px);
          padding: 80px 24px 30px;
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-brand .brandmark {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.01em;
          margin-bottom: 16px;
        }

        .footer-brand .brandmark .glyph {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          display: inline-block;
        }

        .footer-brand p {
          color: #8a92aa;
          font-size: 14px;
          line-height: 1.7;
          max-width: 320px;
          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8a92aa;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-social a:hover {
          background: rgba(139, 107, 246, 0.15);
          border-color: #8b6bf6;
          color: #eef1f8;
          transform: translateY(-2px);
        }

        .footer-col h5 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5b6377;
          margin-bottom: 20px;
        }

        .footer-col a {
          display: block;
          color: #8a92aa;
          font-size: 14px;
          margin-bottom: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-col a:hover {
          color: #eef1f8;
          transform: translateX(4px);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 50px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(35, 43, 61, 0.3);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #5b6377;
          letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brandmark">
              <span className="glyph"></span>
              ENTERPRISED
            </div>
            <p>Enterprise-grade hybrid retrieval. Every document, one searchable core.</p>
            <div className="footer-social">
              <a href="#" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <Link to="/platform">Platform</Link>
            <Link to="/console">Console</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="#">Changelog</Link>
          </div>

          <div className="footer-col">
            <h5>Resources</h5>
            <Link to="/docs">Documentation</Link>
            <Link to="#">API Reference</Link>
            <Link to="#">Status</Link>
            <Link to="#">GitHub</Link>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/about">About</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Blog</Link>
            <Link to="#">Contact</Link>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Security</Link>
            <Link to="#">Cookie Policy</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 ENTERPRISED — Hybrid Retrieval System · Global Edition</span>
          <span>SOC 2 TYPE II · GDPR READY · ISO 27001</span>
        </div>
      </footer>
    </>
  )
}

export default Footer