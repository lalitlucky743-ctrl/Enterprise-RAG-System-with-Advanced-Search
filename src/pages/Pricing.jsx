import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Pricing = () => {
  const { user, token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: 'Starter',
      price: 99,
      period: '/month',
      features: ['Up to 10,000 documents', 'Hybrid search', 'Basic reranking', 'REST API', 'Email support'],
      cta: 'Get Started',
      popular: false,
      razorpayId: 'plan_xxxxx' // Your Razorpay plan ID
    },
    {
      name: 'Professional',
      price: 499,
      period: '/month',
      features: ['Up to 100,000 documents', 'Advanced hybrid search', 'Cross-encoder reranking', 'Full API + SDKs', 'Priority support', 'SSO/SAML', 'Audit logs'],
      cta: 'Start Free Trial',
      popular: true,
      razorpayId: 'plan_xxxxx'
    },
    {
      name: 'Enterprise',
      price: 999,
      period: '/month',
      features: ['Unlimited documents', 'Custom models', 'On-premise deployment', '24/7 dedicated support', 'SLA guarantee', 'Custom integrations', 'Training & onboarding'],
      cta: 'Contact Sales',
      popular: false,
      razorpayId: 'plan_xxxxx'
    }
  ];

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (plan) => {
    if (!user) {
      alert('Please login first to subscribe!');
      window.location.href = '/login';
      return;
    }

    setSelectedPlan(plan);
    setLoading(true);

    try {
      // Load Razorpay script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        alert('Failed to load Razorpay. Please try again.');
        setLoading(false);
        return;
      }

      // Create order on backend
      const response = await fetch('http://localhost:5000/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          amount: plan.price * 100, // in paise
          currency: 'INR',
          plan: plan.name
        })
      });

      const orderData = await response.json();

      if (!orderData.success) {
        throw new Error(orderData.error || 'Payment failed');
      }

      // Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Your Razorpay Key ID
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'ENTERPRISED',
        description: `Subscription: ${plan.name} Plan`,
        order_id: orderData.orderId,
        handler: function(response) {
          alert(`✅ Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
          // Verify payment on backend
          verifyPayment(response, plan);
        },
        prefill: {
          name: user.name || 'Customer',
          email: user.email || 'customer@email.com',
          contact: '9999999999'
        },
        notes: {
          plan: plan.name,
          userId: user.id
        },
        theme: {
          color: '#8b6bf6'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (response, plan) => {
    try {
      const verifyRes = await fetch('http://localhost:5000/api/payment/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_order_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
          plan: plan.name
        })
      });

      const data = await verifyRes.json();
      if (data.success) {
        alert('🎉 Subscription activated successfully!');
      } else {
        alert('⚠️ Payment verification failed. Please contact support.');
      }
    } catch (error) {
      console.error('Verification error:', error);
    }
  };

  return (
    <div className="pricing-page">
      <style>{`
        .pricing-page {
          padding-top: 100px;
          min-height: 100vh;
          background: #05070d;
        }
        .pricing-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 60px;
        }
        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .pricing-header h1 {
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
        .pricing-header p {
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
          box-shadow: 0 0 40px rgba(139,107,246,0.15);
        }
        .pricing-card.popular:hover {
          transform: scale(1.05) translateY(-8px);
          box-shadow: 0 0 60px rgba(139,107,246,0.25);
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
          box-shadow: 0 4px 20px rgba(139,107,246,0.3);
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
          border-bottom: 1px solid rgba(255,255,255,0.03);
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
          cursor: pointer;
          width: 100%;
        }
        .pricing-card .cta-btn:hover {
          background: rgba(255,255,255,0.05);
          border-color: #8b6bf6;
        }
        .pricing-card .cta-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .pricing-card.popular .cta-btn {
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          border: none;
          color: white;
          box-shadow: 0 4px 20px rgba(139,107,246,0.3);
        }
        .pricing-card.popular .cta-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 8px 30px rgba(139,107,246,0.4);
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

      <div className="pricing-container">
        <div className="pricing-header">
          <h1>Simple, Transparent Pricing</h1>
          <p>Choose the plan that fits your needs. All plans include hybrid search and reranking.</p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={i}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="name">{plan.name}</div>
              <div className="price">₹{plan.price}</div>
              <div className="period">{plan.period}</div>
              <ul className="features">
                {plan.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <button
                className="cta-btn"
                onClick={() => handlePayment(plan)}
                disabled={loading && selectedPlan?.name === plan.name}
              >
                {loading && selectedPlan?.name === plan.name ? 'Processing...' : plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;