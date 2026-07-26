import React, { useEffect, useRef } from 'react'

const Features = () => {
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
          entry.target.style.filter = 'blur(0)'
        }
      })
    }, { threshold: 0.1 })

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      color: '#8b6bf6',
      title: 'Multi-format ingestion',
      desc: 'PDFs, Word, HTML, Confluence and Slack exports — parsed, chunked, and embedded automatically on upload.'
    },
    {
      color: '#2fd3d0',
      title: 'Enterprise security',
      desc: 'SSO/SAML, row-level access control, and a full audit trail on every query and retrieval event.'
    },
    {
      color: '#f2b65c',
      title: 'Any-region deployment',
      desc: 'VPC, on-prem, or hybrid cloud. Your documents and embeddings never leave your own perimeter.'
    },
    {
      color: '#5b8cff',
      title: 'Full observability',
      desc: 'Trace every hop — dense score, sparse score, rerank score, and token cost — for every single query.'
    }
  ]

  return (
    <>
      <style>{`
        #features {
          padding: 80px 24px 60px;
          position: relative;
        }

        .features-head {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 56px;
        }

        .features-head .eyebrow {
          justify-content: center;
        }

        .features-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 3.8vw, 42px);
          font-weight: 600;
          margin-top: 16px;
          letter-spacing: -0.01em;
        }

        .features-head p {
          color: #8a92aa;
          margin-top: 14px;
          font-size: 16px;
          line-height: 1.7;
        }

        .features-grid {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .feature-card {
          background: rgba(20, 26, 41, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(35, 43, 61, 0.5);
          border-radius: 12px;
          padding: 28px 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(30px);
          filter: blur(4px);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 107, 246, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          border-color: rgba(139, 107, 246, 0.3);
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .feature-card .swatch {
          width: 12px;
          height: 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .feature-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .feature-card p {
          color: #8a92aa;
          font-size: 13.5px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .feature-card .glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .feature-card:hover .glow {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 520px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section id="features">
        <div className="features-head">
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Platform</div>
          <h2>Built for the enterprise stack</h2>
          <p>Everything around the core — ingestion, security, deployment, and visibility — comes standard, not bolted on.</p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div 
              className="feature-card" 
              key={i}
              ref={el => cardsRef.current[i] = el}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div 
                className="glow" 
                style={{ background: `radial-gradient(circle, ${f.color}33, transparent)` }}
              />
              <div className="swatch" style={{ background: f.color }}></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Features