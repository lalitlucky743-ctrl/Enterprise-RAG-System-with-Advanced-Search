import React, { useState, useEffect, useRef } from 'react'

const Stats = () => {
  const [counts, setCounts] = useState([0, 0, 0, 0])
  const sectionRef = useRef(null)
  const animatedRef = useRef(false)
  
  const targets = [
    { value: 128644, suffix: '+', decimals: 0, prefix: '' },
    { value: 99.97, suffix: '%', decimals: 2, prefix: '' },
    { value: 42, suffix: '', decimals: 0, prefix: '' },
    { value: 180, suffix: 'ms', decimals: 0, prefix: '<' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          animateCounters()
        }
      })
    }, { threshold: 0.4 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const duration = 1400
    const start = performance.now()
    const startValues = [0, 0, 0, 0]

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      
      const newCounts = targets.map((target, i) => {
        const val = target.value * eased
        return val
      })
      
      setCounts(newCounts)
      
      if (t < 1) {
        requestAnimationFrame(tick)
      } else {
        setCounts(targets.map(t => t.value))
      }
    }
    
    requestAnimationFrame(tick)
  }

  const formatNumber = (num, decimals) => {
    return num.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  return (
    <>
      <style>{`
        #stats {
          padding: 10px 24px 90px;
        }
        .stats-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #232b3d;
          border: 1px solid #232b3d;
          border-radius: 6px;
          overflow: hidden;
        }
        .stat-cell {
          background: #0f1420;
          padding: 28px 20px;
          text-align: center;
        }
        .stat-cell .num {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: clamp(24px, 3vw, 32px);
          color: #eef1f8;
        }
        .stat-cell .lbl {
          margin-top: 8px;
          font-size: 12px;
          color: #8a92aa;
        }
        @media (max-width: 700px) {
          .stats-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>

      <section id="stats" ref={sectionRef}>
        <div className="stats-grid">
          {targets.map((target, i) => (
            <div className="stat-cell" key={i}>
              <div className="num">
                {target.prefix}
                {formatNumber(counts[i], target.decimals)}
                {target.suffix}
              </div>
              <div className="lbl">
                {['Nodes indexed', 'Uptime SLA', 'Languages supported', 'P95 query latency'][i]}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Stats