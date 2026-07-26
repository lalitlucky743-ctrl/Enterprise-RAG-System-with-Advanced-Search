import React from 'react'

const Preloader = ({ loading }) => {
  return (
    <div id="preloader" className={loading ? '' : 'hide'}>
      <style>{`
        #preloader {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: #05070d;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          transition: opacity 0.7s ease, visibility 0.7s ease;
        }
        #preloader.hide {
          opacity: 0;
          visibility: hidden;
        }
        .pre-mark {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          animation: preSpin 1.4s ease-in-out infinite;
        }
        @keyframes preSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(0.82); }
        }
        .pre-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          color: #5b6377;
          text-transform: uppercase;
        }
      `}</style>
      <div className="pre-mark"></div>
      <div className="pre-label">Booting Enterprised</div>
    </div>
  )
}

export default Preloader