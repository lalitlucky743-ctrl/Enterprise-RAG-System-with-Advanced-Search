import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <style>{`
        footer.site-footer {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(35,43,61,0.3);
          background: rgba(6,8,14,0.8);
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
          color: #eef1f8;
          text-decoration: none;
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
          flex-wrap: wrap;
        }
        .footer-social a {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.05);
          color: #8a92aa;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 13px;
        }
        .footer-social a:hover {
          background: rgba(139,107,246,0.15);
          border-color: #8b6bf6;
          color: #eef1f8;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(139,107,246,0.15);
        }
        .footer-social .social-icon {
          font-size: 18px;
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
          border-top: 1px solid rgba(35,43,61,0.3);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #5b6377;
          letter-spacing: 0.04em;
        }
        .footer-bottom .developer-link {
          color: #8a92aa;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-bottom .developer-link:hover {
          color: #8b6bf6;
        }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-social a { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="brandmark">
            <span className="glyph"></span> ENTERPRISED
          </Link>
          <p>Enterprise-grade hybrid retrieval. Every document, one searchable core.</p>
          <div className="footer-social">
            {/* ✅ External links - Normal <a> tag with target="_blank" */}
            <a 
              href="https://github.com/lalitlucky743-ctrl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="social-icon">🐙</span> GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/lalit-bisht-50b52b384/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <span className="social-icon">🔗</span> LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🐦</span> Twitter
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">▶️</span> YouTube
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h5>Product</h5>
          <Link to="/platform">Platform</Link>
          <Link to="/console">Console</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/payment">Subscribe</Link>
        </div>

        <div className="footer-col">
          <h5>Resources</h5>
          <Link to="/docs">Documentation</Link>
          <a href="#">API Reference</a>
          <a href="#">Status</a>
          <a href="https://github.com/lalitlucky743-ctrl" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <Link to="/about">About</Link>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-col">
          <h5>Legal</h5>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Security</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 ENTERPRISED — Hybrid Retrieval System · Global Edition</span>
        <span>
          Built by{' '}
          <a 
            href="https://github.com/lalitlucky743-ctrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="developer-link"
          >
            Lalit Bisht
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;