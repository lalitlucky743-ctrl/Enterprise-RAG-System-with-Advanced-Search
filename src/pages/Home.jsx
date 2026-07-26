import React, { useEffect } from 'react'
import Hero from '../components/home/Hero'
import Trusted from '../components/home/Trusted'
import Stats from '../components/home/Stats'
import Story from '../components/home/Story'
import Features from '../components/home/Features'
import useScrollAnimation from '../hooks/useScrollAnimation'
import ThreeScene from '../components/ThreeScene'

const Home = () => {
  useScrollAnimation()

  useEffect(() => {
    if (window.__threeState) {
      window.__threeState.morph = 0
      window.__threeState.dive = 0
      window.__threeState.fade = 1
    }

    const hudLeft = document.getElementById('hud-left')
    const hudRight = document.getElementById('hud-right')
    if (hudLeft) hudLeft.classList.add('visible')
    if (hudRight) hudRight.classList.add('visible')

    const glow = document.getElementById('cursor-glow')
    if (glow) glow.style.opacity = '1'

    return () => {}
  }, [])

  return (
    <>
      <ThreeScene />
      
      <div className="hud" id="hud-left">
        <span className="dot"></span>
        <span className="status-text" id="hud-status">Scattered — awaiting ingest</span>
      </div>
      <div className="hud" id="hud-right">
        Nodes online<br />
        <span className="big" id="hud-count">0</span>
      </div>
      
      <Hero />
      <Trusted />
      <Stats />
      <Story />
      <Features />
    </>
  )
}

export default Home