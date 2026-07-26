import { useEffect } from 'react'

const useScrollAnimation = () => {
  useEffect(() => {
    // Import GSAP dynamically
    const initGSAP = async () => {
      try {
        const gsap = (await import('gsap')).default
        const ScrollTrigger = (await import('gsap/ScrollTrigger')).default
        gsap.registerPlugin(ScrollTrigger)

        // Helper functions
        const clamp01 = (v) => Math.max(0, Math.min(1, v))
        const mapRange = (v, a, b, c, d) => {
          if (a === b) return v < a ? c : d
          const t = (v - a) / (b - a)
          const clamped = Math.max(0, Math.min(1, t))
          return c + (d - c) * clamped
        }

        const setCard = (el, t) => {
          if (!el) return
          el.style.opacity = t
          const isMobile = window.innerWidth <= 860
          const baseTransform = isMobile ? 'translate(-50%, 0)' : 'translate(0,-50%)'
          const offset = (1 - t) * 26
          el.style.transform = baseTransform + ' translateY(' + offset + 'px)'
        }

        // Hero section animation - fade out on scroll
        gsap.to('.hero-inner, .scroll-cue', {
          opacity: 0,
          y: -40,
          ease: 'none',
          scrollTrigger: {
            trigger: '#story',
            start: 'top bottom',
            end: 'top top',
            scrub: true
          }
        })

        // Story section scroll animation - 3D scene morphs
        const cardHybrid = document.getElementById('card-hybrid')
        const cardRerank = document.getElementById('card-rerank')
        const caption = document.getElementById('story-caption')
        const hudStatus = document.getElementById('hud-status')
        const hudCount = document.getElementById('hud-count')

        // Main story scroll trigger
        ScrollTrigger.create({
          trigger: '#story',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.6,
          onUpdate: function(self) {
            const p = self.progress
            
            // Update Three.js state for 3D morph effect
            const threeState = window.__threeState
            if (threeState) {
              // Documents orbit and form into core
              threeState.morph = clamp01(mapRange(p, 0.0, 0.42, 0, 1))
              // Camera dives into the scene
              threeState.dive = clamp01(mapRange(p, 0.15, 1.0, 0, 1))
              // Fade control
              threeState.fade = clamp01(1 - mapRange(p, 0.85, 1.0, 0, 0.3))
            }

            // Caption animation - fade in then out
            if (caption) {
              const captionOpacity = clamp01(mapRange(p, 0.02, 0.14, 0, 1)) * 
                (1 - clamp01(mapRange(p, 0.28, 0.4, 0, 1)))
              caption.style.opacity = captionOpacity
            }

            // Hybrid card - appears from left
            if (cardHybrid) {
              const hybridT = clamp01(mapRange(p, 0.32, 0.5, 0, 1)) * 
                (1 - clamp01(mapRange(p, 0.62, 0.74, 0, 1)))
              setCard(cardHybrid, hybridT)
            }

            // Rerank card - appears from right
            if (cardRerank) {
              const rerankT = clamp01(mapRange(p, 0.5, 0.68, 0, 1)) * 
                (1 - clamp01(mapRange(p, 0.82, 0.94, 0, 1)))
              setCard(cardRerank, rerankT)
            }

            // HUD updates - node count and status
            if (hudCount) {
              const count = Math.round(mapRange(p, 0, 1, 0, 128644))
              hudCount.textContent = count.toLocaleString()
            }

            if (hudStatus) {
              const status = p < 0.15 ? 'Scattered — awaiting ingest'
                : p < 0.42 ? 'Embedding — building the core'
                : p < 0.85 ? 'Synced — hybrid index live'
                : 'Reranked — top matches locked'
              hudStatus.textContent = status
            }
          }
        })

        // Dashboard reveal animation
        const dashWrap = document.getElementById('dash-wrap')
        if (dashWrap) {
          gsap.to(dashWrap, {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '#dashboard',
              start: 'top 85%',
              end: 'top 20%',
              scrub: true
            }
          })
        }

        // Dashboard section - fade 3D scene
        ScrollTrigger.create({
          trigger: '#dashboard',
          start: 'top bottom',
          end: 'top 15%',
          scrub: true,
          onUpdate: function(self) {
            const threeState = window.__threeState
            if (threeState) {
              threeState.fade = clamp01(1 - self.progress * 0.7)
            }
            
            // HUD visibility
            const hudLeft = document.getElementById('hud-left')
            const hudRight = document.getElementById('hud-right')
            if (hudLeft && hudRight) {
              const isVisible = self.progress < 0.6
              hudLeft.classList.toggle('visible', isVisible)
              hudRight.classList.toggle('visible', isVisible)
            }
          }
        })

        // HUD visibility on hero scroll
        ScrollTrigger.create({
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          onUpdate: function(self) {
            const hudLeft = document.getElementById('hud-left')
            const hudRight = document.getElementById('hud-right')
            if (hudLeft && hudRight) {
              const show = self.progress > 0.05
              hudLeft.classList.toggle('visible', show)
              hudRight.classList.toggle('visible', show)
            }
          }
        })

        // Refresh ScrollTrigger on window resize
        window.addEventListener('resize', () => {
          ScrollTrigger.refresh()
        })

        console.log('GSAP Scroll animations initialized successfully!')

      } catch (error) {
        console.error('GSAP initialization error:', error)
      }
    }

    initGSAP()

    return () => {
      // Cleanup
      try {
        import('gsap/ScrollTrigger').then(({ default: ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        })
      } catch (e) {
        // Ignore cleanup errors
      }
    }
  }, [])
}

export default useScrollAnimation