import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;
  const isHome = location.pathname === '/';

  return (
    <>
      <style>{`
        .topnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px clamp(20px, 4vw, 56px);
          background: ${isHome ? 'linear-gradient(rgba(5,7,13,0.7), transparent)' : 'rgba(8,10,18,0.95)'};
          border-bottom: 1px solid ${scrolled ? '#232b3d' : 'transparent'};
          transition: background 0.35s ease, border-color 0.35s ease, padding 0.35s ease;
        }
        .topnav.scrolled {
          background: rgba(8,10,18,0.95);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #232b3d;
          padding-top: 13px;
          padding-bottom: 13px;
        }
        .brandmark {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.01em;
          text-decoration: none;
          color: #eef1f8;
        }
        .brandmark .glyph {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          display: inline-block;
        }
        .navlinks {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navlinks a {
          padding: 8px 14px;
          border-radius: 4px;
          font-size: 13px;
          color: ${isActive('/') ? '#eef1f8' : '#8a92aa'};
          opacity: ${isActive('/') ? '1' : '0.9'};
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .navlinks a:hover {
          color: #eef1f8;
          background: rgba(255,255,255,0.04);
        }
        .navlinks a.active {
          color: #eef1f8;
          background: rgba(139,107,246,0.12);
        }
        .navlinks .nav-sep {
          width: 1px;
          height: 18px;
          background: #232b3d;
          margin: 0 6px;
        }
        .navlinks .cta-nav {
          border: 1px solid #232b3d;
          padding: 8px 16px;
          border-radius: 3px;
          color: #eef1f8;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, background 0.2s;
        }
        .navlinks .cta-nav:hover {
          border-color: #2fd3d0;
          background: rgba(47,211,208,0.08);
        }
        .navlinks .user-name {
          color: #8a92aa;
          font-size: 13px;
          padding: 8px 12px;
        }
        .navlinks .logout-btn {
          background: none;
          border: none;
          color: #ff6b6b;
          cursor: pointer;
          font-size: 13px;
          padding: 8px 12px;
        }
        .navlinks .logout-btn:hover {
          background: rgba(255,0,0,0.05);
        }
        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 22px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
        }
        .burger span {
          height: 1.5px;
          width: 100%;
          background: #eef1f8;
          display: block;
          transition: transform 0.25s, opacity 0.25s;
        }
        .burger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
        .burger.open span:nth-child(2) { opacity: 0; }
        .burger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 49;
          width: min(300px, 80vw);
          height: 100vh;
          background: rgba(10,13,22,0.97);
          backdrop-filter: blur(16px);
          border-left: 1px solid #232b3d;
          padding: 100px 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16,1,0.3,1);
        }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-menu a {
          padding: 14px 4px;
          font-size: 16px;
          color: #8a92aa;
          border-bottom: 1px solid #232b3d;
          font-family: 'Space Grotesk', sans-serif;
          text-decoration: none;
        }
        .mobile-menu a:hover { color: #eef1f8; }
        .mobile-menu .cta-mobile {
          margin-top: 14px;
          border: 1px solid #232b3d;
          border-radius: 4px;
          text-align: center;
          color: #eef1f8;
          padding: 16px;
        }
        @media (max-width: 760px) {
          .navlinks { display: none; }
          .burger { display: flex; }
        }
      `}</style>

      <header className={`topnav ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brandmark">
          <span className="glyph"></span>
          ENTERPRISED
        </Link>

        <nav className="navlinks">
          <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
          <Link to="/platform" className={isActive('/platform') ? 'active' : ''}>Platform</Link>
          <Link to="/console" className={isActive('/console') ? 'active' : ''}>Console</Link>
          <Link to="/pricing" className={isActive('/pricing') ? 'active' : ''}>Pricing</Link>
          <Link to="/docs" className={isActive('/docs') ? 'active' : ''}>Docs</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''}>About</Link>
          <span className="nav-sep"></span>
          {user ? (
            <>
              <span className="user-name">👤 {user.name}</span>
              <button className="logout-btn" onClick={logout}>Logout</button>
              <Link to="/console" className="cta-nav">Console</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="navlink">Login</Link>
              <Link to="/payment" className="cta-nav">Subscribe</Link>
            </>
          )}
        </nav>

        <button className={`burger ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </header>

      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/platform" onClick={() => setMobileOpen(false)}>Platform</Link>
        <Link to="/console" onClick={() => setMobileOpen(false)}>Console</Link>
        <Link to="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
        <Link to="/docs" onClick={() => setMobileOpen(false)}>Docs</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
        {user ? (
          <>
            <span style={{ color: '#8a92aa', padding: '14px 4px' }}>👤 {user.name}</span>
            <button onClick={() => { logout(); setMobileOpen(false); }} style={{ background: 'none', border: 'none', color: '#ff6b6b', padding: '14px 4px', textAlign: 'left', fontSize: '16px', cursor: 'pointer' }}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMobileOpen(false)}>Login</Link>
            <Link to="/payment" className="cta-mobile" onClick={() => setMobileOpen(false)}>Subscribe</Link>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;