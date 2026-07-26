import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    // Cursor glow effect
    const handleMouseMove = (e) => {
      const glow = document.getElementById('cursor-glow')
      if (glow) {
        glow.style.opacity = '1'
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      <style>{`
        #hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 24px;
          position: relative;
          overflow: hidden;
        }

        /* Gradient mesh background overlay */
        #hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(139, 107, 246, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(47, 211, 208, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(242, 182, 92, 0.05) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          max-width: 940px;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139, 107, 246, 0.12);
          border: 1px solid rgba(139, 107, 246, 0.2);
          border-radius: 100px;
          padding: 6px 16px 6px 6px;
          font-size: 12px;
          color: #8b6bf6;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .hero-badge .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2fd3d0;
          display: inline-block;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        #hero .eyebrow {
          justify-content: center;
          margin-bottom: 22px;
        }

        #hero .eyebrow::after {
          content: '';
          width: 18px;
          height: 1px;
          background: #2fd3d0;
        }

        h1.hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 7vw, 88px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        h1.hero-title .accent {
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        h1.hero-title .highlight {
          position: relative;
          display: inline-block;
        }

        h1.hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          border-radius: 2px;
          opacity: 0.4;
        }

        .hero-sub {
          margin: 0 auto 32px;
          font-size: 18px;
          color: #8a92aa;
          max-width: 540px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          border: none;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(139, 107, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139, 107, 246, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: rgba(255, 255, 255, 0.05);
          color: #eef1f8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hero-trust .item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #5b6377;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.05em;
        }

        .hero-trust .item .icon {
          font-size: 16px;
        }

        .hero-trust .item .label {
          color: #8a92aa;
        }

        .hero-locales {
          margin-top: 24px;
          display: flex;
          gap: 22px;
          justify-content: center;
          flex-wrap: wrap;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: #5b6377;
          text-transform: uppercase;
        }

        .scroll-cue {
          position: absolute;
          bottom: 44px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          color: #5b6377;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 1;
        }

        .scroll-cue .bar {
          width: 1px;
          height: 34px;
          background: linear-gradient(#2fd3d0, transparent);
          animation: pulseDown 1.8s ease-in-out infinite;
        }

        @keyframes pulseDown {
          0% { opacity: 0.15; transform: scaleY(0.4); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0.15; transform: scaleY(0.4); transform-origin: top; }
        }

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-trust {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>

      <section id="hero" ref={heroRef}>
        <div className="hero-inner">
          <div className="hero-badge">
            <span className="dot"></span>
            <span>AI-Powered Enterprise Search</span>
          </div>

          <h1 className="hero-title">
            Ask Your<br />
            <span className="highlight">Company Knowledge</span><br />
            <span className="accent">Anything</span>
          </h1>

          <p className="hero-sub">
            Search millions of documents instantly with hybrid AI retrieval. 
            Get precise answers from your PDFs, emails, and internal data in seconds.
          </p>

          <div className="hero-buttons">
            <Link to="/console" className="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
              Launch Console
            </Link>
            <Link to="/pricing" className="btn-secondary">
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

          <div className="hero-trust">
            <div className="item">
              <span className="icon">⭐</span>
              <span className="label">Trusted by 500+ teams</span>
            </div>
            <div className="item">
              <span className="icon">⚡</span>
              <span className="label">99.9% uptime</span>
            </div>
            <div className="item">
              <span className="icon">🔒</span>
              <span className="label">SOC2 Ready</span>
            </div>
          </div>

          <div className="hero-locales">EN · DE · JA · HI · PT-BR · AR</div>
        </div>

        <div className="scroll-cue">
          <span className="bar"></span>
          SCROLL
        </div>
      </section>
    </>
  )
}

export default Hero