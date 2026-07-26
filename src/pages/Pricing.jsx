import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  useEffect(() => {
    const hudLeft = document.getElementById('hud-left')
    const hudRight = document.getElementById('hud-right')
    if (hudLeft) hudLeft.classList.remove('visible')
    if (hudRight) hudRight.classList.remove('visible')
    
    if (window.__threeState) {
      window.__threeState.morph = 0.5
      window.__threeState.dive = 0.3
      window.__threeState.fade = 0.6
    }
  }, [])

  const plans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        'Up to 10,000 documents',
        'Hybrid search',
        'Basic reranking',
        'REST API',
        'Email support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      features: [
        'Up to 100,000 documents',
        'Advanced hybrid search',
        'Cross-encoder reranking',
        'Full API + SDKs',
        'Priority support',
        'SSO/SAML',
        'Audit logs'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited documents',
        'Custom models',
        'On-premise deployment',
        '24/7 dedicated support',
        'SLA guarantee',
        'Custom integrations',
        'Training & onboarding'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <div className="page-container">
      <style>{`
        .page-container {
          padding-top: 100px;
          min-height: 100vh;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
          position: relative;
          z-index: 2;
        }

        .page-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .page-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .page-header p {
          color: #8a92aa;
          font-size: 18px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          align-items: start;
        }

        .pricing-card {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 16px;
          padding: 40px 32px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .pricing-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .pricing-card.popular {
          border-color: #8b6bf6;
          transform: scale(1.05);
          box-shadow: 0 0 40px rgba(139, 107, 246, 0.15);
        }

        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow: 0 0 60px rgba(139, 107, 246, 0.25);
        }

        .pricing-card.popular::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          padding: 1px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0, #8b6bf6);
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: borderGlow 3s ease-in-out infinite;
        }

        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          padding: 6px 20px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          box-shadow: 0 4px 20px rgba(139, 107, 246, 0.3);
        }

        .pricing-card .name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #eef1f8;
        }

        .pricing-card .price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 42px;
          font-weight: 700;
          margin: 16px 0 4px;
          color: #eef1f8;
        }

        .pricing-card .period {
          color: #5b6377;
          font-size: 14px;
        }

        .pricing-card .features {
          list-style: none;
          padding: 0;
          margin: 28px 0 32px;
        }

        .pricing-card .features li {
          padding: 10px 0;
          color: #8a92aa;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.03);
          font-size: 14px;
        }

        .pricing-card .features li::before {
          content: '✓';
          color: #2fd3d0;
          font-weight: bold;
          font-size: 16px;
        }

        .pricing-card .cta-btn {
          display: block;
          text-align: center;
          padding: 14px;
          background: transparent;
          color: #eef1f8;
          border: 1px solid #232b3d;
          border-radius: 8px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .pricing-card .cta-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #8b6bf6;
        }

        .pricing-card.popular .cta-btn {
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          border: none;
          color: white;
          box-shadow: 0 4px 20px rgba(139, 107, 246, 0.3);
        }

        .pricing-card.popular .cta-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(139, 107, 246, 0.4);
        }

        @media (max-width: 768px) {
          .pricing-card.popular {
            transform: scale(1);
          }
          .pricing-card.popular:hover {
            transform: scale(1) translateY(-8px);
          }
        }
      `}</style>

      <div className="page-header">
        <h1>Simple, Transparent Pricing</h1>
        <p>Choose the plan that fits your needs. All plans include hybrid search and reranking.</p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={i}>
            {plan.popular && <div className="popular-badge">Most Popular</div>}
            <div className="name">{plan.name}</div>
            <div className="price">{plan.price}</div>
            <div className="period">{plan.period}</div>
            <ul className="features">
              {plan.features.map((feature, j) => (
                <li key={j}>{feature}</li>
              ))}
            </ul>
            <Link to="/console" className="cta-btn">
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing