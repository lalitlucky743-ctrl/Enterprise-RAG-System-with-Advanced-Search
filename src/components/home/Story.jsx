import React, { useEffect, useRef } from 'react'

const Story = () => {
  const cardHybridRef = useRef(null)
  const cardRerankRef = useRef(null)
  const captionRef = useRef(null)

  useEffect(() => {
    // Animation handled by GSAP in main component
  }, [])

  return (
    <>
      <style>{`
        #story {
          height: 340vh;
          position: relative;
        }
        .story-pin {
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .story-card {
          position: absolute;
          width: min(420px, 86vw);
          padding: 30px 30px 32px;
          background: rgba(15, 20, 32, 0.72);
          border: 1px solid #232b3d;
          border-radius: 2px;
          backdrop-filter: blur(14px);
          opacity: 0;
          transform: translateY(28px);
        }
        .story-card .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .story-card h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 27px;
          font-weight: 600;
          margin: 12px 0 14px;
          letter-spacing: -0.01em;
        }
        .story-card p {
          color: #8a92aa;
          font-size: 14.5px;
          line-height: 1.65;
        }
        .story-card .metric-row {
          display: flex;
          gap: 18px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #232b3d;
        }
        .story-card .metric {
          font-family: 'JetBrains Mono', monospace;
        }
        .story-card .metric .num {
          font-size: 19px;
          font-weight: 600;
        }
        .story-card .metric .lbl {
          font-size: 10.5px;
          color: #5b6377;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        #card-hybrid {
          left: 8%;
          top: 50%;
          transform: translate(0, -50%) translateY(28px);
        }
        #card-rerank {
          right: 8%;
          top: 50%;
          transform: translate(0, -50%) translateY(28px);
        }
        #card-hybrid .tag { color: #8b6bf6; }
        #card-hybrid .num { color: #8b6bf6; }
        #card-rerank .tag { color: #f2b65c; }
        #card-rerank .num { color: #f2b65c; }
        .story-caption {
          position: absolute;
          top: 44px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          opacity: 0;
        }
        .story-caption h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600;
        }
        .story-caption p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: #5b6377;
          letter-spacing: 0.1em;
          margin-top: 8px;
          text-transform: uppercase;
        }
        @media (max-width: 860px) {
          #card-hybrid, #card-rerank {
            left: 50%;
            right: auto;
            top: auto;
            transform: translate(-50%, 0);
          }
          #card-hybrid { top: 22%; }
          #card-rerank { top: 62%; }
        }
      `}</style>

      <section id="story">
        <div className="story-pin">
          <div className="story-caption" id="story-caption" ref={captionRef}>
            <h3>Scattered documents orbit into a single Data Core</h3>
            <p>Unstructured PDFs — self-organizing on ingest</p>
          </div>

          <div className="story-card" id="card-hybrid" ref={cardHybridRef}>
            <div className="tag">01 · Hybrid Search</div>
            <h2>Two ways of finding the truth, run in parallel</h2>
            <p>Dense vectors capture meaning. Sparse BM25 catches exact terms and codenames dense embeddings miss. Both fire on every query, then fuse with Reciprocal Rank Fusion.</p>
            <div className="metric-row">
              <div className="metric">
                <div className="num">0.83</div>
                <div className="lbl">Dense score</div>
              </div>
              <div className="metric">
                <div className="num">0.71</div>
                <div className="lbl">Sparse score</div>
              </div>
              <div className="metric">
                <div className="num">RRF</div>
                <div className="lbl">Fusion method</div>
              </div>
            </div>
          </div>

          <div className="story-card" id="card-rerank" ref={cardRerankRef}>
            <div className="tag">02 · Reranking</div>
            <h2>Then the core reorders everything</h2>
            <p>The top 20 fused candidates pass through a cross-encoder reranker — BGE or Cohere — which re-scores each for true relevance before the best 5 ever reach the model.</p>
            <div className="metric-row">
              <div className="metric">
                <div className="num">20 → 5</div>
                <div className="lbl">Candidates kept</div>
              </div>
              <div className="metric">
                <div className="num">+38%</div>
                <div className="lbl">Precision gain</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Story