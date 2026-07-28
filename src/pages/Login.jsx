import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const result = await api.login({ email, password });
      if (result.success) {
        login(result.user, result.token);
        navigate('/console');
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      setError('Connection error: ' + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Welcome Back</h2>
        <p>Login to your Enterprise RAG account</p>
        
        {error && <div className="auth-error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p className="auth-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>

      <style>{`
        .auth-page {
          padding-top: 120px;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #05070d;
        }
        .auth-container {
          max-width: 400px;
          width: 100%;
          padding: 40px;
          background: rgba(15, 20, 32, 0.85);
          border: 1px solid #232b3d;
          border-radius: 12px;
          backdrop-filter: blur(10px);
        }
        .auth-container h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          margin-bottom: 8px;
          color: #eef1f8;
        }
        .auth-container p {
          color: #8a92aa;
          margin-bottom: 24px;
        }
        .auth-container input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid #232b3d;
          border-radius: 8px;
          color: #eef1f8;
          font-size: 14px;
          margin-bottom: 16px;
        }
        .auth-container input:focus {
          outline: none;
          border-color: #8b6bf6;
        }
        .auth-container button {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .auth-container button:hover {
          transform: translateY(-2px);
        }
        .auth-container button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .auth-error {
          padding: 12px;
          background: rgba(255, 0, 0, 0.1);
          border: 1px solid rgba(255, 0, 0, 0.2);
          border-radius: 8px;
          color: #ff6b6b;
          margin-bottom: 16px;
          font-size: 14px;
        }
        .auth-link {
          margin-top: 20px;
          text-align: center;
          color: #8a92aa;
        }
        .auth-link a {
          color: #8b6bf6;
          text-decoration: none;
        }
        .auth-link a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;