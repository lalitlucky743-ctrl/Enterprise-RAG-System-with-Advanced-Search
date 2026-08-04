import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Platform from './pages/Platform';
import Console from './pages/Console';
import Pricing from './pages/Pricing';
import Documentation from './pages/Documentation';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Preloader from './components/Preloader';
import { AuthProvider, useAuth } from './context/AuthContext';
import Payment from './pages/Payment';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { token, loading } = useAuth();
  
  if (loading) return <div>Loading...</div>;
  if (!token) return <Navigate to="/login" replace />;
  
  return children;
};

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 450);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <AuthProvider>
      <Preloader loading={loading} />
      
      {isHome && (
        <>
          <div className="vignette"></div>
          <div id="cursor-glow"></div>
        </>
      )}
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/console" element={
            <ProtectedRoute>
              <Console />
            </ProtectedRoute>
          } />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;