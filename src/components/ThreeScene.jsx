import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeScene = () => {
  const containerRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Clear any existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild)
    }

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0, 15)

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    })
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Lighting - Enhanced
    scene.add(new THREE.AmbientLight(0x1c2438, 1.15))
    const lightDense = new THREE.PointLight(0x8b6bf6, 2.2, 22)
    lightDense.position.set(-6, 3, 6)
    scene.add(lightDense)
    const lightSparse = new THREE.PointLight(0x2fd3d0, 2.0, 22)
    lightSparse.position.set(6, -2, 5)
    scene.add(lightSparse)
    const lightAmber = new THREE.PointLight(0xf2b65c, 1.0, 15)
    lightAmber.position.set(0, 5, 0)
    scene.add(lightAmber)

    // Group
    const group = new THREE.Group()
    scene.add(group)

    const lightCore = new THREE.PointLight(0xf2b65c, 0, 10)
    lightCore.position.set(0, 0, 0)
    group.add(lightCore)

    // Create document textures
    const createDocTexture = (accent) => {
      const c = document.createElement('canvas')
      c.width = 256
      c.height = 328
      const ctx = c.getContext('2d')
      
      ctx.fillStyle = '#121828'
      ctx.beginPath()
      ctx.moveTo(18, 4)
      ctx.arcTo(252, 4, 252, 324, 14)
      ctx.arcTo(252, 324, 4, 324, 14)
      ctx.arcTo(4, 324, 4, 4, 14)
      ctx.arcTo(4, 4, 252, 4, 14)
      ctx.closePath()
      ctx.fill()
      
      ctx.strokeStyle = accent
      ctx.lineWidth = 3
      ctx.globalAlpha = 0.85
      ctx.beginPath()
      ctx.moveTo(18, 4)
      ctx.arcTo(252, 4, 252, 324, 14)
      ctx.arcTo(252, 324, 4, 324, 14)
      ctx.arcTo(4, 324, 4, 4, 14)
      ctx.arcTo(4, 4, 252, 4, 14)
      ctx.closePath()
      ctx.stroke()
      ctx.globalAlpha = 1
      
      ctx.fillStyle = accent
      ctx.globalAlpha = 0.9
      ctx.beginPath()
      ctx.moveTo(18, 4)
      ctx.arcTo(252, 4, 252, 50, 14)
      ctx.arcTo(252, 50, 4, 50, 14)
      ctx.arcTo(4, 50, 4, 4, 14)
      ctx.arcTo(4, 4, 252, 4, 14)
      ctx.closePath()
      ctx.fill()
      ctx.fillRect(4, 34, 248, 16)
      ctx.globalAlpha = 1
      
      ctx.fillStyle = 'rgba(255,255,255,0.85)'
      ctx.font = '600 20px monospace'
      ctx.fillText('DOC', 22, 34)
      
      ctx.fillStyle = 'rgba(255,255,255,0.16)'
      const widths = [190, 160, 205, 140, 175, 120, 195, 150]
      let lineY = 84
      for (let i = 0; i < widths.length; i++) {
        ctx.fillRect(22, lineY, widths[i], 9)
        lineY += 24
      }
      
      ctx.fillStyle = 'rgba(0,0,0,0.35)'
      ctx.beginPath()
      ctx.moveTo(252 - 34, 4)
      ctx.lineTo(252, 4)
      ctx.lineTo(252, 4 + 34)
      ctx.closePath()
      ctx.fill()
      
      ctx.fillStyle = accent
      ctx.beginPath()
      ctx.arc(224, 300, 7, 0, Math.PI * 2)
      ctx.fill()
      
      const tex = new THREE.CanvasTexture(c)
      tex.anisotropy = 4
      return tex
    }

    const ACCENTS = ['#8b6bf6', '#2fd3d0', '#f2b65c']
    const texByAccent = ACCENTS.map(createDocTexture)
    const DOC_COUNT = 24  // More documents for better effect
    const docs = []
    const docGeo = new THREE.PlaneGeometry(1.05, 1.35)

    for (let i = 0; i < DOC_COUNT; i++) {
      const accentIdx = i < 8 ? 0 : (i < 16 ? 1 : 2)
      const mat = new THREE.MeshStandardMaterial({
        map: texByAccent[accentIdx],
        transparent: true,
        roughness: 0.55,
        metalness: 0.15,
        emissive: new THREE.Color(ACCENTS[accentIdx]),
        emissiveIntensity: 0.18,
        side: THREE.DoubleSide
      })
      const mesh = new THREE.Mesh(docGeo, mat)
      const chaos = new THREE.Vector3(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 16 - 2
      )
      const ringAngle = (i / DOC_COUNT) * Math.PI * 2
      const ringRadius = 2.8 + (accentIdx === 2 ? 0.6 : 0) + Math.random() * 0.3
      const tilt = (Math.random() - 0.5) * 1.2
      const orbit = new THREE.Vector3(
        Math.cos(ringAngle) * ringRadius,
        Math.sin(ringAngle * 1.3) * 0.8 + tilt,
        Math.sin(ringAngle) * ringRadius
      )
      mesh.position.copy(chaos)
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI)
      group.add(mesh)
      docs.push({
        mesh,
        chaos,
        orbit,
        angle: ringAngle,
        radius: ringRadius,
        speed: 0.1 + Math.random() * 0.08,
        accent: new THREE.Color(ACCENTS[accentIdx]),
        spin: (Math.random() - 0.5) * 0.5,
        floatSpeed: 0.3 + Math.random() * 0.2
      })
    }

    // Core - Enhanced
    const coreSolid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.2, 1),
      new THREE.MeshStandardMaterial({
        color: 0x1a2036,
        emissive: 0xf2b65c,
        emissiveIntensity: 0.05,
        roughness: 0.2,
        metalness: 0.7,
        transparent: true,
        opacity: 0.85
      })
    )
    group.add(coreSolid)

    const coreWire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.4, 1),
      new THREE.MeshBasicMaterial({
        color: 0xf2b65c,
        wireframe: true,
        transparent: true,
        opacity: 0.5
      })
    )
    group.add(coreWire)

    // Inner glow ring
    const ringGeo = new THREE.TorusGeometry(1.8, 0.02, 16, 100)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8b6bf6,
      transparent: true,
      opacity: 0.3
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2
    group.add(ring)

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.02, 16, 100),
      new THREE.MeshBasicMaterial({
        color: 0x2fd3d0,
        transparent: true,
        opacity: 0.2
      })
    )
    ring2.rotation.z = Math.PI / 3
    ring2.rotation.x = Math.PI / 3
    group.add(ring2)

    // Glow sprite - Enhanced
    const makeGlowTexture = () => {
      const c = document.createElement('canvas')
      c.width = c.height = 256
      const ctx = c.getContext('2d')
      const g = ctx.createRadialGradient(128, 128, 0, 128, 128, 128)
      g.addColorStop(0, 'rgba(255,255,255,0.9)')
      g.addColorStop(0.2, 'rgba(242,182,92,0.6)')
      g.addColorStop(0.5, 'rgba(139,107,246,0.3)')
      g.addColorStop(1, 'rgba(242,182,92,0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, 256, 256)
      return new THREE.CanvasTexture(c)
    }
    const glowMat = new THREE.SpriteMaterial({
      map: makeGlowTexture(),
      color: 0xf2b65c,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    })
    const glowSprite = new THREE.Sprite(glowMat)
    glowSprite.scale.set(8, 8, 1)
    group.add(glowSprite)

    // Beams
    const beamPositions = new Float32Array(DOC_COUNT * 6)
    const beamGeo = new THREE.BufferGeometry()
    beamGeo.setAttribute('position', new THREE.BufferAttribute(beamPositions, 3))
    const beamColors = new Float32Array(DOC_COUNT * 6)
    beamGeo.setAttribute('color', new THREE.BufferAttribute(beamColors, 3))
    const beamMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0
    })
    const beams = new THREE.LineSegments(beamGeo, beamMat)
    group.add(beams)

    // State for scroll animations
    const state = { morph: 0, dive: 0, fade: 1 }
    window.__threeState = state

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // Mouse move effect - subtle parallax
    let mouseX = 0
    let mouseY = 0
    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5
      mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5
    }
    window.addEventListener('mousemove', onMouseMove)

    // Animation
    const render = { morph: 0, dive: 0, fade: 1 }
    const clock = new THREE.Clock()
    let elapsed = 0

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate)
      const dt = Math.min(clock.getDelta(), 0.05)
      const ease = Math.min(1, dt * 3.2)

      render.morph += (state.morph - render.morph) * ease
      render.dive += (state.dive - render.dive) * ease
      render.fade += (state.fade - render.fade) * ease

      elapsed += dt
      const m = render.morph

      // Update documents with enhanced effects
      for (let i = 0; i < docs.length; i++) {
        const d = docs[i]
        const floatX = Math.sin(elapsed * d.floatSpeed + i * 1.7) * 0.2 * (1 - m)
        const floatY = Math.cos(elapsed * d.floatSpeed * 0.7 + i * 2.3) * 0.2 * (1 - m)
        const floatZ = Math.sin(elapsed * d.floatSpeed * 0.5 + i * 1.1) * 0.15 * (1 - m)

        const angle = d.angle + elapsed * d.speed * m
        const orbitPos = new THREE.Vector3(
          Math.cos(angle) * d.radius,
          d.orbit.y,
          Math.sin(angle) * d.radius
        )

        // Smooth interpolation from chaos to orbit
        const t = Math.min(1, m * 1.2)
        d.mesh.position.x = d.chaos.x + floatX + (orbitPos.x - d.chaos.x) * t
        d.mesh.position.y = d.chaos.y + floatY + (orbitPos.y - d.chaos.y) * t
        d.mesh.position.z = d.chaos.z + floatZ + (orbitPos.z - d.chaos.z) * t

        // Look at center with smooth rotation
        d.mesh.lookAt(0, 0, 0)
        d.mesh.rotation.z += d.spin * dt * (0.3 + m * 0.7)

        // Scale - documents get smaller as they orbit
        const s = 1 - m * 0.25
        d.mesh.scale.set(s, s, s)
        d.mesh.material.emissiveIntensity = 0.18 + m * 0.7

        // Beam connections
        const bi = i * 6
        beamPositions[bi] = 0
        beamPositions[bi + 1] = 0
        beamPositions[bi + 2] = 0
        beamPositions[bi + 3] = d.mesh.position.x
        beamPositions[bi + 4] = d.mesh.position.y
        beamPositions[bi + 5] = d.mesh.position.z
        beamColors[bi] = d.accent.r
        beamColors[bi + 1] = d.accent.g
        beamColors[bi + 2] = d.accent.b
        beamColors[bi + 3] = d.accent.r
        beamColors[bi + 4] = d.accent.g
        beamColors[bi + 5] = d.accent.b
      }
      beamGeo.attributes.position.needsUpdate = true
      beamGeo.attributes.color.needsUpdate = true
      beamMat.opacity = 0.5 * m * render.fade

      // Core - enhanced animation
      const coreScale = 0.3 + m * 1.1
      coreSolid.scale.setScalar(coreScale)
      coreWire.scale.setScalar(coreScale * 1.15)
      coreSolid.material.emissiveIntensity = 0.05 + m * 0.5
      coreWire.rotation.y += dt * 0.3
      coreWire.rotation.x += dt * 0.15

      // Rings rotation
      ring.rotation.z += dt * 0.1
      ring2.rotation.y += dt * 0.15

      // Glow
      glowSprite.scale.setScalar(6 + m * 4)
      glowMat.opacity = (0.2 + m * 0.6) * render.fade
      lightCore.intensity = m * 4

      // Camera - dive effect with mouse parallax
      const targetZ = 15 - render.dive * 10.5
      const targetY = render.dive * 0.8 + mouseY * 0.5
      camera.position.z += (targetZ - camera.position.z) * 0.05
      camera.position.y += (targetY - camera.position.y) * 0.05
      camera.lookAt(0, 0, 0)

      // Group rotation with mouse influence
      group.rotation.y += dt * (0.04 + render.dive * 0.05) + mouseX * 0.003
      group.rotation.x += (mouseY * 0.002 - group.rotation.x) * 0.01

      // Opacity
      const allOpacity = render.fade
      for (let i = 0; i < docs.length; i++) {
        docs[i].mesh.material.opacity = allOpacity
      }
      coreSolid.material.opacity = 0.85 * allOpacity
      coreWire.material.opacity = 0.5 * allOpacity
      ring.material.opacity = 0.3 * allOpacity
      ring2.material.opacity = 0.2 * allOpacity

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement)
      }
      renderer.dispose()
      delete window.__threeState
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none',
        background: 'transparent'
      }} 
    />
  )
}


export default ThreeScene