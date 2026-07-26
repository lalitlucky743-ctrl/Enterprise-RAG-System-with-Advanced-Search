import React, { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Console from './pages/Console'
import Pricing from './pages/Pricing'
import Documentation from './pages/Documentation'
import About from './pages/About'
import Preloader from './components/Preloader'
import ThreeScene from './components/ThreeScene'  // ← Import ThreeScene

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setTimeout(() => setLoading(false), 450)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <>
      <Preloader loading={loading} />
      
      {/* 3D Scene - Sabhi pages par */}
      <ThreeScene />
      
      {/* Vignette and glow - Sabhi pages par */}
      <div className="vignette"></div>
      <div id="cursor-glow"></div>
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/console" element={<Console />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App