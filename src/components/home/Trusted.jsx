import React from 'react'

const Trusted = () => {
  const companies = [
    'NORTHWIND', 'VERTEX CAPITAL', 'HELIOS LABS', 'ARCLIGHT',
    'MERIDIAN & CO', 'OBELISK', 'KOVA SYSTEMS', 'PALISADE'
  ]

  return (
    <>
      <style>{`
        #trusted {
          padding: 70px 0;
          position: relative;
        }
        .trusted-label {
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5b6377;
          margin-bottom: 30px;
        }
        .marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 64px;
          animation: scrollX 32s linear infinite;
        }
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track span {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 19px;
          letter-spacing: 0.03em;
          color: #8a92aa;
          opacity: 0.55;
          white-space: nowrap;
        }
      `}</style>

      <section id="trusted">
        <p className="trusted-label">Trusted by retrieval teams at</p>
        <div className="marquee">
          <div className="marquee-track">
            {[...companies, ...companies].map((name, i) => (
              <span key={i}>{name}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Trusted