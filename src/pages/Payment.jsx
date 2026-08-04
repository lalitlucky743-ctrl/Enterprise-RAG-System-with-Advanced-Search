import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_xxxxxxxxxxxxxxxxxxxxxxxx');

const Payment = () => {
  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState('');

  const plans = [
    { id: 'starter', name: 'Starter', price: 99, features: ['10,000 documents', 'Hybrid search', 'Basic reranking'] },
    { id: 'pro', name: 'Professional', price: 499, features: ['100,000 documents', 'Advanced hybrid search', 'Cross-encoder reranking', 'SSO/SAML'] },
    { id: 'enterprise', name: 'Enterprise', price: 999, features: ['Unlimited documents', 'Custom models', 'On-premise deployment', '24/7 support'] }
  ];

  const handlePayment = async (plan) => {
    setSelectedPlan(plan);
    setLoading(true);
    setPaymentStatus('');

    try {
      // 1. Create payment intent on backend
      const result = await api.createPaymentIntent(plan.price * 100, token);
      
      if (!result.success) {
        throw new Error(result.error || 'Payment failed');
      }

      // 2. Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: result.sessionId
      });

      if (error) {
        throw new Error(error.message);
      }

      setPaymentStatus('✅ Payment successful!');
    } catch (error) {
      console.error('Payment error:', error);
      setPaymentStatus('❌ Payment failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-header">
          <h1>💳 Choose Your Plan</h1>
          <p>Upgrade to unlock premium features</p>
        </div>

        <div className="payment-grid">
          {plans.map((plan) => (
            <div key={plan.id} className={`payment-card ${plan.id === 'pro' ? 'popular' : ''}`}>
              {plan.id === 'pro' && <div className="popular-badge">⭐ Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">${plan.price}<span>/month</span></div>
              <ul className="features">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button
                className={`pay-btn ${loading && selectedPlan?.id === plan.id ? 'loading' : ''}`}
                onClick={() => handlePayment(plan)}
                disabled={loading}
              >
                {loading && selectedPlan?.id === plan.id ? 'Processing...' : `Subscribe to ${plan.name}`}
              </button>
            </div>
          ))}
        </div>

        {paymentStatus && (
          <div className={`payment-status ${paymentStatus.includes('successful') ? 'success' : 'error'}`}>
            {paymentStatus}
          </div>
        )}

        <div className="payment-footer">
          <p>🔒 Secure payment via Stripe. No credit card details stored.</p>
        </div>
      </div>

      <style>{`
        .payment-page {
          padding-top: 100px;
          min-height: 100vh;
          background: #05070d;
        }
        .payment-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 60px;
        }
        .payment-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .payment-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 36px;
          color: #eef1f8;
          margin-bottom: 8px;
        }
        .payment-header p {
          color: #8a92aa;
          font-size: 16px;
        }
        .payment-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .payment-card {
          background: rgba(15, 20, 32, 0.85);
          border: 1px solid #232b3d;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          transition: all 0.3s;
          position: relative;
        }
        .payment-card:hover {
          transform: translateY(-4px);
          border-color: #8b6bf6;
        }
        .payment-card.popular {
          border-color: #8b6bf6;
          transform: scale(1.02);
        }
        .popular-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #8b6bf6;
          color: white;
          padding: 4px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
        }
        .payment-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          color: #eef1f8;
          margin-bottom: 12px;
        }
        .price {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #eef1f8;
          margin-bottom: 20px;
        }
        .price span {
          font-size: 16px;
          color: #5b6377;
          font-weight: 400;
        }
        .features {
          list-style: none;
          padding: 0;
          margin: 0 0 24px;
          text-align: left;
        }
        .features li {
          padding: 8px 0;
          color: #8a92aa;
          font-size: 14px;
        }
        .pay-btn {
          width: 100%;
          padding: 14px;
          border: 1px solid #232b3d;
          border-radius: 8px;
          background: rgba(255,255,255,0.03);
          color: #eef1f8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .pay-btn:hover {
          background: rgba(139,107,246,0.1);
          border-color: #8b6bf6;
        }
        .pay-btn.loading {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .payment-card.popular .pay-btn {
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          border: none;
          color: white;
        }
        .payment-card.popular .pay-btn:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 20px rgba(139,107,246,0.3);
        }
        .payment-status {
          margin-top: 24px;
          padding: 16px;
          border-radius: 8px;
          text-align: center;
        }
        .payment-status.success {
          background: rgba(47,211,208,0.1);
          color: #2fd3d0;
          border: 1px solid rgba(47,211,208,0.2);
        }
        .payment-status.error {
          background: rgba(255,0,0,0.1);
          color: #ff6b6b;
          border: 1px solid rgba(255,0,0,0.2);
        }
        .payment-footer {
          margin-top: 40px;
          text-align: center;
          color: #5b6377;
          font-size: 13px;
        }
        @media (max-width: 900px) {
          .payment-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 600px) {
          .payment-grid {
            grid-template-columns: 1fr;
          }
          .payment-card.popular {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Payment;