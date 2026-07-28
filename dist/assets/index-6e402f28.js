import{r as c,a as Ae,u as ve,L as x,b as we,R as Le,c as I,N as Me,d as Ie,B as Te}from"./react-vendor-b2ab826c.js";import{S as _e,P as Be,W as De,A as Ge,a as q,G as Oe,b as Fe,M as pe,C as he,D as Ye,c as Y,V as ee,I as me,d as te,T as ue,e as $e,f as He,g as qe,B as Ue,h as xe,L as Je,i as We,j as ge,k as Ve}from"./three-vendor-0847643b.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const h of i.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&o(h)}).observe(document,{childList:!0,subtree:!0});function a(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=a(n);fetch(n.href,i)}})();var je={exports:{}},U={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xe=c,Ke=Symbol.for("react.element"),Qe=Symbol.for("react.fragment"),Ze=Object.prototype.hasOwnProperty,et=Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tt={key:!0,ref:!0,__self:!0,__source:!0};function ke(r,t,a){var o,n={},i=null,h=null;a!==void 0&&(i=""+a),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(h=t.ref);for(o in t)Ze.call(t,o)&&!tt.hasOwnProperty(o)&&(n[o]=t[o]);if(r&&r.defaultProps)for(o in t=r.defaultProps,t)n[o]===void 0&&(n[o]=t[o]);return{$$typeof:Ke,type:r,key:i,ref:h,props:n,_owner:et.current}}U.Fragment=Qe;U.jsx=ke;U.jsxs=ke;je.exports=U;var e=je.exports,ae={},fe=Ae;ae.createRoot=fe.createRoot,ae.hydrateRoot=fe.hydrateRoot;const rt=()=>{const[r,t]=c.useState(!1),[a,o]=c.useState(!1),n=ve();c.useEffect(()=>{const h=()=>{t(window.scrollY>40)};return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const i=h=>n.pathname===h;return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .topnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px clamp(20px, 4vw, 56px);
          background: ${n.pathname==="/"?"linear-gradient(rgba(5, 7, 13, 0.7), transparent)":"rgba(8, 10, 18, 0.95)"};
          border-bottom: 1px solid ${r?"#232b3d":"transparent"};
          transition: background 0.35s ease, border-color 0.35s ease, padding 0.35s ease;
        }
        .topnav.scrolled {
          background: rgba(8, 10, 18, 0.95);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #232b3d;
          padding-top: 13px;
          padding-bottom: 13px;
        }
        .brandmark {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          letter-spacing: 0.01em;
        }
        .brandmark .glyph {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          display: inline-block;
        }
        .navlinks {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .navlinks a {
          padding: 8px 14px;
          border-radius: 4px;
          font-size: 13px;
          color: ${i("/")?"#eef1f8":"#8a92aa"};
          opacity: ${i("/")?"1":"0.9"};
          transition: color 0.2s, background 0.2s;
          text-decoration: none;
        }
        .navlinks a:hover {
          color: #eef1f8;
          background: rgba(255, 255, 255, 0.04);
        }
        .navlinks a.active {
          color: #eef1f8;
          background: rgba(139, 107, 246, 0.12);
        }
        .navlinks .nav-sep {
          width: 1px;
          height: 18px;
          background: #232b3d;
          margin: 0 6px;
        }
        .navlinks .cta-nav {
          border: 1px solid #232b3d;
          padding: 8px 16px;
          border-radius: 3px;
          color: #eef1f8;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          letter-spacing: 0.04em;
          transition: border-color 0.2s, background 0.2s;
        }
        .navlinks .cta-nav:hover {
          border-color: #2fd3d0;
          background: rgba(47, 211, 208, 0.08);
        }
        .burger {
          display: none;
          flex-direction: column;
          gap: 5px;
          width: 22px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 6px;
        }
        .burger span {
          height: 1.5px;
          width: 100%;
          background: #eef1f8;
          display: block;
          transition: transform 0.25s, opacity 0.25s;
        }
        .burger.open span:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .burger.open span:nth-child(2) {
          opacity: 0;
        }
        .burger.open span:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          z-index: 49;
          width: min(300px, 80vw);
          height: 100vh;
          background: rgba(10, 13, 22, 0.97);
          backdrop-filter: blur(16px);
          border-left: 1px solid #232b3d;
          padding: 100px 30px 40px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-menu.open {
          transform: translateX(0);
        }
        .mobile-menu a {
          padding: 14px 4px;
          font-size: 16px;
          color: ${i("/")?"#eef1f8":"#8a92aa"};
          border-bottom: 1px solid #232b3d;
          font-family: 'Space Grotesk', sans-serif;
          text-decoration: none;
        }
        .mobile-menu a:hover {
          color: #eef1f8;
        }
        .mobile-menu a.cta-mobile {
          margin-top: 14px;
          border: 1px solid #232b3d;
          border-radius: 4px;
          text-align: center;
          color: #eef1f8;
          padding: 16px;
        }
        @media (max-width: 760px) {
          .navlinks {
            display: none;
          }
          .burger {
            display: flex;
          }
        }
      `}),e.jsxs("header",{className:`topnav ${r?"scrolled":""}`,children:[e.jsxs(x,{to:"/",className:"brandmark",children:[e.jsx("span",{className:"glyph"}),"ENTERPRISED"]}),e.jsxs("nav",{className:"navlinks",children:[e.jsx(x,{to:"/",className:i("/")?"active":"",children:"Home"}),e.jsx(x,{to:"/platform",className:i("/platform")?"active":"",children:"Platform"}),e.jsx(x,{to:"/console",className:i("/console")?"active":"",children:"Console"}),e.jsx(x,{to:"/pricing",className:i("/pricing")?"active":"",children:"Pricing"}),e.jsx(x,{to:"/docs",className:i("/docs")?"active":"",children:"Docs"}),e.jsx(x,{to:"/about",className:i("/about")?"active":"",children:"About"}),e.jsx("span",{className:"nav-sep"}),e.jsx(x,{to:"/console",className:"cta-nav",children:"Launch Console"})]}),e.jsxs("button",{className:`burger ${a?"open":""}`,onClick:()=>o(!a),"aria-label":"Menu",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})]}),e.jsxs("div",{className:`mobile-menu ${a?"open":""}`,children:[e.jsx(x,{to:"/",onClick:()=>o(!1),children:"Home"}),e.jsx(x,{to:"/platform",onClick:()=>o(!1),children:"Platform"}),e.jsx(x,{to:"/console",onClick:()=>o(!1),children:"Console"}),e.jsx(x,{to:"/pricing",onClick:()=>o(!1),children:"Pricing"}),e.jsx(x,{to:"/docs",onClick:()=>o(!1),children:"Documentation"}),e.jsx(x,{to:"/about",onClick:()=>o(!1),children:"About"}),e.jsx(x,{to:"/console",className:"cta-mobile",onClick:()=>o(!1),children:"Launch Console"})]})]})},at=()=>e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        footer.site-footer {
          position: relative;
          z-index: 2;
          border-top: 1px solid rgba(35, 43, 61, 0.3);
          background: rgba(6, 8, 14, 0.8);
          backdrop-filter: blur(20px);
          padding: 80px 24px 30px;
        }

        .footer-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }

        .footer-brand .brandmark {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 16px;
          letter-spacing: 0.01em;
          margin-bottom: 16px;
        }

        .footer-brand .brandmark .glyph {
          width: 24px;
          height: 24px;
          border-radius: 6px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          display: inline-block;
        }

        .footer-brand p {
          color: #8a92aa;
          font-size: 14px;
          line-height: 1.7;
          max-width: 320px;
          margin-bottom: 24px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8a92aa;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .footer-social a:hover {
          background: rgba(139, 107, 246, 0.15);
          border-color: #8b6bf6;
          color: #eef1f8;
          transform: translateY(-2px);
        }

        .footer-col h5 {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #5b6377;
          margin-bottom: 20px;
        }

        .footer-col a {
          display: block;
          color: #8a92aa;
          font-size: 14px;
          margin-bottom: 12px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-col a:hover {
          color: #eef1f8;
          transform: translateX(4px);
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 50px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(35, 43, 61, 0.3);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 14px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: #5b6377;
          letter-spacing: 0.04em;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsxs("footer",{className:"site-footer",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsxs("div",{className:"brandmark",children:[e.jsx("span",{className:"glyph"}),"ENTERPRISED"]}),e.jsx("p",{children:"Enterprise-grade hybrid retrieval. Every document, one searchable core."}),e.jsxs("div",{className:"footer-social",children:[e.jsx("a",{href:"#","aria-label":"GitHub",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})})}),e.jsx("a",{href:"#","aria-label":"LinkedIn",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),e.jsx("a",{href:"#","aria-label":"Twitter",children:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:e.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})})})]})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h5",{children:"Product"}),e.jsx(x,{to:"/platform",children:"Platform"}),e.jsx(x,{to:"/console",children:"Console"}),e.jsx(x,{to:"/pricing",children:"Pricing"}),e.jsx(x,{to:"#",children:"Changelog"})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h5",{children:"Resources"}),e.jsx(x,{to:"/docs",children:"Documentation"}),e.jsx(x,{to:"#",children:"API Reference"}),e.jsx(x,{to:"#",children:"Status"}),e.jsx(x,{to:"#",children:"GitHub"})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h5",{children:"Company"}),e.jsx(x,{to:"/about",children:"About"}),e.jsx(x,{to:"#",children:"Careers"}),e.jsx(x,{to:"#",children:"Blog"}),e.jsx(x,{to:"#",children:"Contact"})]}),e.jsxs("div",{className:"footer-col",children:[e.jsx("h5",{children:"Legal"}),e.jsx(x,{to:"#",children:"Privacy Policy"}),e.jsx(x,{to:"#",children:"Terms of Service"}),e.jsx(x,{to:"#",children:"Security"}),e.jsx(x,{to:"#",children:"Cookie Policy"})]})]}),e.jsxs("div",{className:"footer-bottom",children:[e.jsx("span",{children:"© 2026 ENTERPRISED — Hybrid Retrieval System · Global Edition"}),e.jsx("span",{children:"SOC 2 TYPE II · GDPR READY · ISO 27001"})]})]})]}),ot=({children:r})=>e.jsxs(e.Fragment,{children:[e.jsx(rt,{}),e.jsx("main",{id:"scroll-content",children:r}),e.jsx(at,{})]}),nt=()=>{const r=c.useRef(null);return c.useEffect(()=>{const t=a=>{const o=document.getElementById("cursor-glow");o&&(o.style.opacity="1",o.style.transform=`translate(${a.clientX}px, ${a.clientY}px) translate(-50%, -50%)`)};return window.addEventListener("mousemove",t),()=>window.removeEventListener("mousemove",t)},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        #hero {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 24px;
          position: relative;
          overflow: hidden;
        }

        /* Gradient mesh background overlay */
        #hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(139, 107, 246, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(47, 211, 208, 0.08) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 100%, rgba(242, 182, 92, 0.05) 0%, transparent 40%);
          pointer-events: none;
          z-index: 0;
        }

        .hero-inner {
          max-width: 940px;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(139, 107, 246, 0.12);
          border: 1px solid rgba(139, 107, 246, 0.2);
          border-radius: 100px;
          padding: 6px 16px 6px 6px;
          font-size: 12px;
          color: #8b6bf6;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .hero-badge .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #2fd3d0;
          display: inline-block;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }

        #hero .eyebrow {
          justify-content: center;
          margin-bottom: 22px;
        }

        #hero .eyebrow::after {
          content: '';
          width: 18px;
          height: 1px;
          background: #2fd3d0;
        }

        h1.hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: clamp(40px, 7vw, 88px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }

        h1.hero-title .accent {
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        h1.hero-title .highlight {
          position: relative;
          display: inline-block;
        }

        h1.hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          border-radius: 2px;
          opacity: 0.4;
        }

        .hero-sub {
          margin: 0 auto 32px;
          font-size: 18px;
          color: #8a92aa;
          max-width: 540px;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          border: none;
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(139, 107, 246, 0.3);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139, 107, 246, 0.4);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: rgba(255, 255, 255, 0.05);
          color: #eef1f8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .hero-trust .item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #5b6377;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.05em;
        }

        .hero-trust .item .icon {
          font-size: 16px;
        }

        .hero-trust .item .label {
          color: #8a92aa;
        }

        .hero-locales {
          margin-top: 24px;
          display: flex;
          gap: 22px;
          justify-content: center;
          flex-wrap: wrap;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: #5b6377;
          text-transform: uppercase;
        }

        .scroll-cue {
          position: absolute;
          bottom: 44px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          color: #5b6377;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 1;
        }

        .scroll-cue .bar {
          width: 1px;
          height: 34px;
          background: linear-gradient(#2fd3d0, transparent);
          animation: pulseDown 1.8s ease-in-out infinite;
        }

        @keyframes pulseDown {
          0% { opacity: 0.15; transform: scaleY(0.4); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); transform-origin: top; }
          100% { opacity: 0.15; transform: scaleY(0.4); transform-origin: top; }
        }

        @media (max-width: 640px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .hero-trust {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}),e.jsxs("section",{id:"hero",ref:r,children:[e.jsxs("div",{className:"hero-inner",children:[e.jsxs("div",{className:"hero-badge",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{children:"AI-Powered Enterprise Search"})]}),e.jsxs("h1",{className:"hero-title",children:["Ask Your",e.jsx("br",{}),e.jsx("span",{className:"highlight",children:"Company Knowledge"}),e.jsx("br",{}),e.jsx("span",{className:"accent",children:"Anything"})]}),e.jsx("p",{className:"hero-sub",children:"Search millions of documents instantly with hybrid AI retrieval. Get precise answers from your PDFs, emails, and internal data in seconds."}),e.jsxs("div",{className:"hero-buttons",children:[e.jsxs(x,{to:"/console",className:"btn-primary",children:[e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})}),"Launch Console"]}),e.jsxs(x,{to:"/pricing",className:"btn-secondary",children:["Get Started",e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})]}),e.jsxs("div",{className:"hero-trust",children:[e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"icon",children:"⭐"}),e.jsx("span",{className:"label",children:"Trusted by 500+ teams"})]}),e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"icon",children:"⚡"}),e.jsx("span",{className:"label",children:"99.9% uptime"})]}),e.jsxs("div",{className:"item",children:[e.jsx("span",{className:"icon",children:"🔒"}),e.jsx("span",{className:"label",children:"SOC2 Ready"})]})]}),e.jsx("div",{className:"hero-locales",children:"EN · DE · JA · HI · PT-BR · AR"})]}),e.jsxs("div",{className:"scroll-cue",children:[e.jsx("span",{className:"bar"}),"SCROLL"]})]})]})},st=()=>{const r=["NORTHWIND","VERTEX CAPITAL","HELIOS LABS","ARCLIGHT","MERIDIAN & CO","OBELISK","KOVA SYSTEMS","PALISADE"];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        #trusted {
          padding: 70px 0;
          position: relative;
        }
        .trusted-label {
          text-align: center;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #5b6377;
          margin-bottom: 30px;
        }
        .marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent);
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 64px;
          animation: scrollX 32s linear infinite;
        }
        @keyframes scrollX {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track span {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 600;
          font-size: 19px;
          letter-spacing: 0.03em;
          color: #8a92aa;
          opacity: 0.55;
          white-space: nowrap;
        }
      `}),e.jsxs("section",{id:"trusted",children:[e.jsx("p",{className:"trusted-label",children:"Trusted by retrieval teams at"}),e.jsx("div",{className:"marquee",children:e.jsx("div",{className:"marquee-track",children:[...r,...r].map((t,a)=>e.jsx("span",{children:t},a))})})]})]})},it=()=>{const[r,t]=c.useState([0,0,0,0]),a=c.useRef(null),o=c.useRef(!1),n=[{value:128644,suffix:"+",decimals:0,prefix:""},{value:99.97,suffix:"%",decimals:2,prefix:""},{value:42,suffix:"",decimals:0,prefix:""},{value:180,suffix:"ms",decimals:0,prefix:"<"}];c.useEffect(()=>{const y=new IntersectionObserver(b=>{b.forEach(l=>{l.isIntersecting&&!o.current&&(o.current=!0,i())})},{threshold:.4});return a.current&&y.observe(a.current),()=>y.disconnect()},[]);const i=()=>{const b=performance.now(),l=w=>{const k=Math.min(1,(w-b)/1400),m=1-Math.pow(1-k,3),u=n.map((f,p)=>f.value*m);t(u),k<1?requestAnimationFrame(l):t(n.map(f=>f.value))};requestAnimationFrame(l)},h=(y,b)=>y.toFixed(b).replace(/\B(?=(\d{3})+(?!\d))/g,",");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsx("section",{id:"stats",ref:a,children:e.jsx("div",{className:"stats-grid",children:n.map((y,b)=>e.jsxs("div",{className:"stat-cell",children:[e.jsxs("div",{className:"num",children:[y.prefix,h(r[b],y.decimals),y.suffix]}),e.jsx("div",{className:"lbl",children:["Nodes indexed","Uptime SLA","Languages supported","P95 query latency"][b]})]},b))})})]})},ct=()=>{const r=c.useRef(null),t=c.useRef(null),a=c.useRef(null);return c.useEffect(()=>{},[]),e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        #story {
          height: 340vh;
          position: relative;
        }
        .story-pin {
          height: 100vh;
          position: sticky;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .story-card {
          position: absolute;
          width: min(420px, 86vw);
          padding: 30px 30px 32px;
          background: rgba(15, 20, 32, 0.72);
          border: 1px solid #232b3d;
          border-radius: 2px;
          backdrop-filter: blur(14px);
          opacity: 0;
          transform: translateY(28px);
        }
        .story-card .tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        .story-card h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 27px;
          font-weight: 600;
          margin: 12px 0 14px;
          letter-spacing: -0.01em;
        }
        .story-card p {
          color: #8a92aa;
          font-size: 14.5px;
          line-height: 1.65;
        }
        .story-card .metric-row {
          display: flex;
          gap: 18px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid #232b3d;
        }
        .story-card .metric {
          font-family: 'JetBrains Mono', monospace;
        }
        .story-card .metric .num {
          font-size: 19px;
          font-weight: 600;
        }
        .story-card .metric .lbl {
          font-size: 10.5px;
          color: #5b6377;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        #card-hybrid {
          left: 8%;
          top: 50%;
          transform: translate(0, -50%) translateY(28px);
        }
        #card-rerank {
          right: 8%;
          top: 50%;
          transform: translate(0, -50%) translateY(28px);
        }
        #card-hybrid .tag { color: #8b6bf6; }
        #card-hybrid .num { color: #8b6bf6; }
        #card-rerank .tag { color: #f2b65c; }
        #card-rerank .num { color: #f2b65c; }
        .story-caption {
          position: absolute;
          top: 44px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          opacity: 0;
        }
        .story-caption h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 600;
        }
        .story-caption p {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11.5px;
          color: #5b6377;
          letter-spacing: 0.1em;
          margin-top: 8px;
          text-transform: uppercase;
        }
        @media (max-width: 860px) {
          #card-hybrid, #card-rerank {
            left: 50%;
            right: auto;
            top: auto;
            transform: translate(-50%, 0);
          }
          #card-hybrid { top: 22%; }
          #card-rerank { top: 62%; }
        }
      `}),e.jsx("section",{id:"story",children:e.jsxs("div",{className:"story-pin",children:[e.jsxs("div",{className:"story-caption",id:"story-caption",ref:a,children:[e.jsx("h3",{children:"Scattered documents orbit into a single Data Core"}),e.jsx("p",{children:"Unstructured PDFs — self-organizing on ingest"})]}),e.jsxs("div",{className:"story-card",id:"card-hybrid",ref:r,children:[e.jsx("div",{className:"tag",children:"01 · Hybrid Search"}),e.jsx("h2",{children:"Two ways of finding the truth, run in parallel"}),e.jsx("p",{children:"Dense vectors capture meaning. Sparse BM25 catches exact terms and codenames dense embeddings miss. Both fire on every query, then fuse with Reciprocal Rank Fusion."}),e.jsxs("div",{className:"metric-row",children:[e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:"0.83"}),e.jsx("div",{className:"lbl",children:"Dense score"})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:"0.71"}),e.jsx("div",{className:"lbl",children:"Sparse score"})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:"RRF"}),e.jsx("div",{className:"lbl",children:"Fusion method"})]})]})]}),e.jsxs("div",{className:"story-card",id:"card-rerank",ref:t,children:[e.jsx("div",{className:"tag",children:"02 · Reranking"}),e.jsx("h2",{children:"Then the core reorders everything"}),e.jsx("p",{children:"The top 20 fused candidates pass through a cross-encoder reranker — BGE or Cohere — which re-scores each for true relevance before the best 5 ever reach the model."}),e.jsxs("div",{className:"metric-row",children:[e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:"20 → 5"}),e.jsx("div",{className:"lbl",children:"Candidates kept"})]}),e.jsxs("div",{className:"metric",children:[e.jsx("div",{className:"num",children:"+38%"}),e.jsx("div",{className:"lbl",children:"Precision gain"})]})]})]})]})})]})},lt=()=>{const r=c.useRef([]);c.useEffect(()=>{const a=new IntersectionObserver(o=>{o.forEach(n=>{n.isIntersecting&&(n.target.style.opacity="1",n.target.style.transform="translateY(0)",n.target.style.filter="blur(0)")})},{threshold:.1});return r.current.forEach(o=>{o&&a.observe(o)}),()=>a.disconnect()},[]);const t=[{color:"#8b6bf6",title:"Multi-format ingestion",desc:"PDFs, Word, HTML, Confluence and Slack exports — parsed, chunked, and embedded automatically on upload."},{color:"#2fd3d0",title:"Enterprise security",desc:"SSO/SAML, row-level access control, and a full audit trail on every query and retrieval event."},{color:"#f2b65c",title:"Any-region deployment",desc:"VPC, on-prem, or hybrid cloud. Your documents and embeddings never leave your own perimeter."},{color:"#5b8cff",title:"Full observability",desc:"Trace every hop — dense score, sparse score, rerank score, and token cost — for every single query."}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        #features {
          padding: 80px 24px 60px;
          position: relative;
        }

        .features-head {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 56px;
        }

        .features-head .eyebrow {
          justify-content: center;
        }

        .features-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(28px, 3.8vw, 42px);
          font-weight: 600;
          margin-top: 16px;
          letter-spacing: -0.01em;
        }

        .features-head p {
          color: #8a92aa;
          margin-top: 14px;
          font-size: 16px;
          line-height: 1.7;
        }

        .features-grid {
          max-width: 1080px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .feature-card {
          background: rgba(20, 26, 41, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(35, 43, 61, 0.5);
          border-radius: 12px;
          padding: 28px 24px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          opacity: 0;
          transform: translateY(30px);
          filter: blur(4px);
          position: relative;
          overflow: hidden;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 107, 246, 0.05), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        .feature-card:hover {
          border-color: rgba(139, 107, 246, 0.3);
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .feature-card .swatch {
          width: 12px;
          height: 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
        }

        .feature-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }

        .feature-card p {
          color: #8a92aa;
          font-size: 13.5px;
          line-height: 1.7;
          position: relative;
          z-index: 1;
        }

        .feature-card .glow {
          position: absolute;
          top: -50%;
          right: -50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .feature-card:hover .glow {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .features-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 520px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsxs("section",{id:"features",children:[e.jsxs("div",{className:"features-head",children:[e.jsx("div",{className:"eyebrow",style:{justifyContent:"center"},children:"Platform"}),e.jsx("h2",{children:"Built for the enterprise stack"}),e.jsx("p",{children:"Everything around the core — ingestion, security, deployment, and visibility — comes standard, not bolted on."})]}),e.jsx("div",{className:"features-grid",children:t.map((a,o)=>e.jsxs("div",{className:"feature-card",ref:n=>r.current[o]=n,style:{transitionDelay:`${o*.1}s`},children:[e.jsx("div",{className:"glow",style:{background:`radial-gradient(circle, ${a.color}33, transparent)`}}),e.jsx("div",{className:"swatch",style:{background:a.color}}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.desc})]},o))})]})]})},dt="modulepreload",pt=function(r){return"/"+r},be={},re=function(t,a,o){if(!a||a.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(a.map(i=>{if(i=pt(i),i in be)return;be[i]=!0;const h=i.endsWith(".css"),y=h?'[rel="stylesheet"]':"";if(!!o)for(let w=n.length-1;w>=0;w--){const k=n[w];if(k.href===i&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${y}`))return;const l=document.createElement("link");if(l.rel=h?"stylesheet":dt,h||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),h)return new Promise((w,k)=>{l.addEventListener("load",w),l.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=i,window.dispatchEvent(h),!h.defaultPrevented)throw i})},ht=()=>{c.useEffect(()=>((async()=>{try{const t=(await re(()=>import("./gsap-vendor-7b167cc0.js"),[])).default,a=(await re(()=>import("./ScrollTrigger-7d0ec5a0.js"),[])).default;t.registerPlugin(a);const o=m=>Math.max(0,Math.min(1,m)),n=(m,u,f,p,j)=>{if(u===f)return m<u?p:j;const L=(m-u)/(f-u),R=Math.max(0,Math.min(1,L));return p+(j-p)*R},i=(m,u)=>{if(!m)return;m.style.opacity=u;const p=window.innerWidth<=860?"translate(-50%, 0)":"translate(0,-50%)",j=(1-u)*26;m.style.transform=p+" translateY("+j+"px)"};t.to(".hero-inner, .scroll-cue",{opacity:0,y:-40,ease:"none",scrollTrigger:{trigger:"#story",start:"top bottom",end:"top top",scrub:!0}});const h=document.getElementById("card-hybrid"),y=document.getElementById("card-rerank"),b=document.getElementById("story-caption"),l=document.getElementById("hud-status"),w=document.getElementById("hud-count");a.create({trigger:"#story",start:"top top",end:"bottom bottom",scrub:.6,onUpdate:function(m){const u=m.progress,f=window.__threeState;if(f&&(f.morph=o(n(u,0,.42,0,1)),f.dive=o(n(u,.15,1,0,1)),f.fade=o(1-n(u,.85,1,0,.3))),b){const p=o(n(u,.02,.14,0,1))*(1-o(n(u,.28,.4,0,1)));b.style.opacity=p}if(h){const p=o(n(u,.32,.5,0,1))*(1-o(n(u,.62,.74,0,1)));i(h,p)}if(y){const p=o(n(u,.5,.68,0,1))*(1-o(n(u,.82,.94,0,1)));i(y,p)}if(w){const p=Math.round(n(u,0,1,0,128644));w.textContent=p.toLocaleString()}if(l){const p=u<.15?"Scattered — awaiting ingest":u<.42?"Embedding — building the core":u<.85?"Synced — hybrid index live":"Reranked — top matches locked";l.textContent=p}}});const k=document.getElementById("dash-wrap");k&&t.to(k,{opacity:1,y:0,scale:1,ease:"none",scrollTrigger:{trigger:"#dashboard",start:"top 85%",end:"top 20%",scrub:!0}}),a.create({trigger:"#dashboard",start:"top bottom",end:"top 15%",scrub:!0,onUpdate:function(m){const u=window.__threeState;u&&(u.fade=o(1-m.progress*.7));const f=document.getElementById("hud-left"),p=document.getElementById("hud-right");if(f&&p){const j=m.progress<.6;f.classList.toggle("visible",j),p.classList.toggle("visible",j)}}}),a.create({trigger:"#hero",start:"top top",end:"bottom top",scrub:!0,onUpdate:function(m){const u=document.getElementById("hud-left"),f=document.getElementById("hud-right");if(u&&f){const p=m.progress>.05;u.classList.toggle("visible",p),f.classList.toggle("visible",p)}}}),window.addEventListener("resize",()=>{a.refresh()}),console.log("GSAP Scroll animations initialized successfully!")}catch(t){console.error("GSAP initialization error:",t)}})(),()=>{try{re(()=>import("./ScrollTrigger-7d0ec5a0.js"),[]).then(({default:t})=>{t.getAll().forEach(a=>a.kill())})}catch{}}),[])},mt=()=>{const r=c.useRef(null),t=c.useRef(null);return c.useEffect(()=>{const a=r.current;if(!a)return;for(;a.firstChild;)a.removeChild(a.firstChild);const o=new _e,n=new Be(52,window.innerWidth/window.innerHeight,.1,100);n.position.set(0,0,15);const i=new De({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.setClearColor(0,0),a.appendChild(i.domElement),o.add(new Ge(1844280,1.15));const h=new q(9137142,2.2,22);h.position.set(-6,3,6),o.add(h);const y=new q(3134416,2,22);y.position.set(6,-2,5),o.add(y);const b=new q(15906396,1,15);b.position.set(0,5,0),o.add(b);const l=new Oe;o.add(l);const w=new q(15906396,0,10);w.position.set(0,0,0),l.add(w);const k=v=>{const S=document.createElement("canvas");S.width=256,S.height=328;const s=S.getContext("2d");s.fillStyle="#121828",s.beginPath(),s.moveTo(18,4),s.arcTo(252,4,252,324,14),s.arcTo(252,324,4,324,14),s.arcTo(4,324,4,4,14),s.arcTo(4,4,252,4,14),s.closePath(),s.fill(),s.strokeStyle=v,s.lineWidth=3,s.globalAlpha=.85,s.beginPath(),s.moveTo(18,4),s.arcTo(252,4,252,324,14),s.arcTo(252,324,4,324,14),s.arcTo(4,324,4,4,14),s.arcTo(4,4,252,4,14),s.closePath(),s.stroke(),s.globalAlpha=1,s.fillStyle=v,s.globalAlpha=.9,s.beginPath(),s.moveTo(18,4),s.arcTo(252,4,252,50,14),s.arcTo(252,50,4,50,14),s.arcTo(4,50,4,4,14),s.arcTo(4,4,252,4,14),s.closePath(),s.fill(),s.fillRect(4,34,248,16),s.globalAlpha=1,s.fillStyle="rgba(255,255,255,0.85)",s.font="600 20px monospace",s.fillText("DOC",22,34),s.fillStyle="rgba(255,255,255,0.16)";const A=[190,160,205,140,175,120,195,150];let D=84;for(let E=0;E<A.length;E++)s.fillRect(22,D,A[E],9),D+=24;s.fillStyle="rgba(0,0,0,0.35)",s.beginPath(),s.moveTo(252-34,4),s.lineTo(252,4),s.lineTo(252,4+34),s.closePath(),s.fill(),s.fillStyle=v,s.beginPath(),s.arc(224,300,7,0,Math.PI*2),s.fill();const M=new ge(S);return M.anisotropy=4,M},m=["#8b6bf6","#2fd3d0","#f2b65c"],u=m.map(k),f=24,p=[],j=new Fe(1.05,1.35);for(let v=0;v<f;v++){const S=v<8?0:v<16?1:2,s=new pe({map:u[S],transparent:!0,roughness:.55,metalness:.15,emissive:new he(m[S]),emissiveIntensity:.18,side:Ye}),A=new Y(j,s),D=new ee((Math.random()-.5)*18,(Math.random()-.5)*12,(Math.random()-.5)*16-2),M=v/f*Math.PI*2,E=2.8+(S===2?.6:0)+Math.random()*.3,z=(Math.random()-.5)*1.2,g=new ee(Math.cos(M)*E,Math.sin(M*1.3)*.8+z,Math.sin(M)*E);A.position.copy(D),A.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),l.add(A),p.push({mesh:A,chaos:D,orbit:g,angle:M,radius:E,speed:.1+Math.random()*.08,accent:new he(m[S]),spin:(Math.random()-.5)*.5,floatSpeed:.3+Math.random()*.2})}const L=new Y(new me(1.2,1),new pe({color:1712182,emissive:15906396,emissiveIntensity:.05,roughness:.2,metalness:.7,transparent:!0,opacity:.85}));l.add(L);const R=new Y(new me(1.4,1),new te({color:15906396,wireframe:!0,transparent:!0,opacity:.5}));l.add(R);const W=new ue(1.8,.02,16,100),d=new te({color:9137142,transparent:!0,opacity:.3}),C=new Y(W,d);C.rotation.x=Math.PI/2,l.add(C);const G=new Y(new ue(2.2,.02,16,100),new te({color:3134416,transparent:!0,opacity:.2}));G.rotation.z=Math.PI/3,G.rotation.x=Math.PI/3,l.add(G);const Ne=()=>{const v=document.createElement("canvas");v.width=v.height=256;const S=v.getContext("2d"),s=S.createRadialGradient(128,128,0,128,128,128);return s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.2,"rgba(242,182,92,0.6)"),s.addColorStop(.5,"rgba(139,107,246,0.3)"),s.addColorStop(1,"rgba(242,182,92,0)"),S.fillStyle=s,S.fillRect(0,0,256,256),new ge(v)},oe=new $e({map:Ne(),color:15906396,transparent:!0,opacity:.5,depthWrite:!1,blending:He}),V=new qe(oe);V.scale.set(8,8,1),l.add(V);const _=new Float32Array(f*6),O=new Ue;O.setAttribute("position",new xe(_,3));const B=new Float32Array(f*6);O.setAttribute("color",new xe(B,3));const ne=new Je({vertexColors:!0,transparent:!0,opacity:0}),Ee=new We(O,ne);l.add(Ee);const H={morph:0,dive:0,fade:1};window.__threeState=H;const se=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",se);let ie=0,X=0;const ce=v=>{ie=(v.clientX/window.innerWidth-.5)*.5,X=(v.clientY/window.innerHeight-.5)*.5};window.addEventListener("mousemove",ce);const N={morph:0,dive:0,fade:1},ze=new Ve;let F=0;const le=()=>{t.current=requestAnimationFrame(le);const v=Math.min(ze.getDelta(),.05),S=Math.min(1,v*3.2);N.morph+=(H.morph-N.morph)*S,N.dive+=(H.dive-N.dive)*S,N.fade+=(H.fade-N.fade)*S,F+=v;const s=N.morph;for(let z=0;z<p.length;z++){const g=p[z],Ce=Math.sin(F*g.floatSpeed+z*1.7)*.2*(1-s),Pe=Math.cos(F*g.floatSpeed*.7+z*2.3)*.2*(1-s),Re=Math.sin(F*g.floatSpeed*.5+z*1.1)*.15*(1-s),de=g.angle+F*g.speed*s,K=new ee(Math.cos(de)*g.radius,g.orbit.y,Math.sin(de)*g.radius),Q=Math.min(1,s*1.2);g.mesh.position.x=g.chaos.x+Ce+(K.x-g.chaos.x)*Q,g.mesh.position.y=g.chaos.y+Pe+(K.y-g.chaos.y)*Q,g.mesh.position.z=g.chaos.z+Re+(K.z-g.chaos.z)*Q,g.mesh.lookAt(0,0,0),g.mesh.rotation.z+=g.spin*v*(.3+s*.7);const Z=1-s*.25;g.mesh.scale.set(Z,Z,Z),g.mesh.material.emissiveIntensity=.18+s*.7;const P=z*6;_[P]=0,_[P+1]=0,_[P+2]=0,_[P+3]=g.mesh.position.x,_[P+4]=g.mesh.position.y,_[P+5]=g.mesh.position.z,B[P]=g.accent.r,B[P+1]=g.accent.g,B[P+2]=g.accent.b,B[P+3]=g.accent.r,B[P+4]=g.accent.g,B[P+5]=g.accent.b}O.attributes.position.needsUpdate=!0,O.attributes.color.needsUpdate=!0,ne.opacity=.5*s*N.fade;const A=.3+s*1.1;L.scale.setScalar(A),R.scale.setScalar(A*1.15),L.material.emissiveIntensity=.05+s*.5,R.rotation.y+=v*.3,R.rotation.x+=v*.15,C.rotation.z+=v*.1,G.rotation.y+=v*.15,V.scale.setScalar(6+s*4),oe.opacity=(.2+s*.6)*N.fade,w.intensity=s*4;const D=15-N.dive*10.5,M=N.dive*.8+X*.5;n.position.z+=(D-n.position.z)*.05,n.position.y+=(M-n.position.y)*.05,n.lookAt(0,0,0),l.rotation.y+=v*(.04+N.dive*.05)+ie*.003,l.rotation.x+=(X*.002-l.rotation.x)*.01;const E=N.fade;for(let z=0;z<p.length;z++)p[z].mesh.material.opacity=E;L.material.opacity=.85*E,R.material.opacity=.5*E,C.material.opacity=.3*E,G.material.opacity=.2*E,i.render(o,n)};return le(),()=>{window.removeEventListener("resize",se),window.removeEventListener("mousemove",ce),t.current&&cancelAnimationFrame(t.current),a&&i.domElement&&a.removeChild(i.domElement),i.dispose(),delete window.__threeState}},[]),e.jsx("div",{ref:r,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0,pointerEvents:"none",background:"transparent"}})},ut=()=>(ht(),c.useEffect(()=>{window.__threeState&&(window.__threeState.morph=0,window.__threeState.dive=0,window.__threeState.fade=1);const r=document.getElementById("hud-left"),t=document.getElementById("hud-right");r&&r.classList.add("visible"),t&&t.classList.add("visible");const a=document.getElementById("cursor-glow");return a&&(a.style.opacity="1"),()=>{}},[]),e.jsxs(e.Fragment,{children:[e.jsx(mt,{}),e.jsxs("div",{className:"hud",id:"hud-left",children:[e.jsx("span",{className:"dot"}),e.jsx("span",{className:"status-text",id:"hud-status",children:"Scattered — awaiting ingest"})]}),e.jsxs("div",{className:"hud",id:"hud-right",children:["Nodes online",e.jsx("br",{}),e.jsx("span",{className:"big",id:"hud-count",children:"0"})]}),e.jsx(nt,{}),e.jsx(st,{}),e.jsx(it,{}),e.jsx(ct,{}),e.jsx(lt,{})]})),xt=()=>(c.useEffect(()=>{const r=document.getElementById("hud-left"),t=document.getElementById("hud-right");r&&r.classList.remove("visible"),t&&t.classList.remove("visible"),window.__threeState&&(window.__threeState.morph=.5,window.__threeState.dive=.3,window.__threeState.fade=.6);const a=document.getElementById("cursor-glow");a&&(a.style.opacity="0")},[]),e.jsxs("div",{className:"page-container",children:[e.jsx("style",{children:`
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
          margin-bottom: 60px;
        }
        .page-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .page-header p {
          color: #8a92aa;
          font-size: 18px;
          max-width: 600px;
          line-height: 1.6;
        }
        .platform-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin-bottom: 60px;
        }
        .platform-card {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 32px;
          transition: transform 0.3s, border-color 0.3s;
        }
        .platform-card:hover {
          transform: translateY(-4px);
          border-color: #8b6bf6;
        }
        .platform-card .icon {
          font-size: 32px;
          margin-bottom: 16px;
        }
        .platform-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 12px;
          color: #eef1f8;
        }
        .platform-card p {
          color: #8a92aa;
          line-height: 1.6;
        }
        .platform-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 40px;
        }
        .platform-features li {
          list-style: none;
          padding: 8px 0;
          color: #8a92aa;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .platform-features li::before {
          content: '✓';
          color: #2fd3d0;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .platform-features {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Enterprise RAG Platform"}),e.jsx("p",{children:"Everything you need to build production-ready retrieval systems with hybrid search and reranking."})]}),e.jsxs("div",{className:"platform-grid",children:[e.jsxs("div",{className:"platform-card",children:[e.jsx("div",{className:"icon",children:"📄"}),e.jsx("h3",{children:"Multi-format Ingestion"}),e.jsx("p",{children:"PDFs, Word documents, HTML, Confluence exports, and Slack messages — automatically parsed and embedded."})]}),e.jsxs("div",{className:"platform-card",children:[e.jsx("div",{className:"icon",children:"🔒"}),e.jsx("h3",{children:"Enterprise Security"}),e.jsx("p",{children:"SSO/SAML, row-level access control, audit trails, and encryption at rest for all your documents."})]}),e.jsxs("div",{className:"platform-card",children:[e.jsx("div",{className:"icon",children:"🌍"}),e.jsx("h3",{children:"Any-region Deployment"}),e.jsx("p",{children:"VPC, on-premise, or hybrid cloud. Your data never leaves your infrastructure."})]}),e.jsxs("div",{className:"platform-card",children:[e.jsx("div",{className:"icon",children:"📊"}),e.jsx("h3",{children:"Full Observability"}),e.jsx("p",{children:"Trace every retrieval step — dense scores, sparse scores, rerank scores, and token costs."})]})]}),e.jsxs("div",{className:"platform-features",children:[e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"'Space Grotesk', sans-serif",marginBottom:16,color:"#eef1f8"},children:"Hybrid Search"}),e.jsx("li",{children:"Dense vector embeddings for semantic understanding"}),e.jsx("li",{children:"Sparse BM25 for exact term matching"}),e.jsx("li",{children:"Reciprocal Rank Fusion for combining results"}),e.jsx("li",{children:"Cross-encoder reranking for precision"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{fontFamily:"'Space Grotesk', sans-serif",marginBottom:16,color:"#eef1f8"},children:"Developer Tools"}),e.jsx("li",{children:"REST API with full Swagger documentation"}),e.jsx("li",{children:"Python and JavaScript SDKs"}),e.jsx("li",{children:"Webhook support for real-time updates"}),e.jsx("li",{children:"Playground console for testing queries"})]})]})]})),Se=c.createContext(),gt=({children:r})=>{const[t,a]=c.useState(null),[o,n]=c.useState(localStorage.getItem("token")),[i,h]=c.useState(!0);c.useEffect(()=>{if(o){const l=localStorage.getItem("user");l&&a(JSON.parse(l))}h(!1)},[o]);const y=(l,w)=>{a(l),n(w),localStorage.setItem("token",w),localStorage.setItem("user",JSON.stringify(l))},b=()=>{a(null),n(null),localStorage.removeItem("token"),localStorage.removeItem("user")};return e.jsx(Se.Provider,{value:{user:t,token:o,login:y,logout:b,loading:i},children:r})},J=()=>c.useContext(Se),T="https://enterprise-rag-system-with-advanced.onrender.com/api",$={register:async r=>(await fetch(`${T}/auth/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json(),login:async r=>(await fetch(`${T}/auth/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).json(),getProfile:async r=>(await fetch(`${T}/auth/profile`,{headers:{Authorization:`Bearer ${r}`}})).json(),search:async(r,t)=>(await fetch(`${T}/search`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({query:r})})).json(),suggest:async(r,t)=>(await fetch(`${T}/search/suggest?q=${encodeURIComponent(r)}`,{headers:{Authorization:`Bearer ${t}`}})).json(),getDocuments:async r=>(await fetch(`${T}/documents`,{headers:{Authorization:`Bearer ${r}`}})).json(),uploadDocument:async(r,t)=>(await fetch(`${T}/documents/upload`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(r)})).json(),deleteDocument:async(r,t)=>(await fetch(`${T}/documents/${r}`,{method:"DELETE",headers:{Authorization:`Bearer ${t}`}})).json()},ft=()=>{const[r,t]=c.useState(""),[a,o]=c.useState(""),[n,i]=c.useState(!1),[h,y]=c.useState([]),[b,l]=c.useState([]),[w,k]=c.useState([]),[m,u]=c.useState({title:"",content:""}),[f,p]=c.useState(!1),{token:j}=J();c.useEffect(()=>{j&&L()},[j]);const L=async()=>{try{const d=await $.getDocuments(j);console.log("Documents:",d),d.success&&l(d.documents||[])}catch(d){console.error("Error loading documents:",d)}},R=async()=>{if(r.trim()){i(!0),o(""),k([]);try{const d=await $.search(r,j);console.log("Search result:",d),d.success?(d.answer?o(d.answer):d.results&&d.results.length>0?o(d.results[0].content||"No content found"):o("No results found. Please upload some documents first! 📚"),d.results&&d.results.length>0&&k(d.results),y(C=>[r,...C].slice(0,5))):o("Error: "+(d.error||"Something went wrong"))}catch(d){console.error("Search error:",d),o("Error: "+d.message)}i(!1)}},W=async()=>{if(!m.title||!m.content){alert("Please enter both title and content");return}p(!0);try{const d=await $.uploadDocument(m,j);console.log("Upload result:",d),d.success?(alert("✅ Document uploaded successfully!"),u({title:"",content:""}),L()):alert("❌ Upload failed: "+(d.error||"Unknown error"))}catch(d){alert("❌ Upload failed: "+d.message)}p(!1)};return e.jsxs("div",{className:"page-container",children:[e.jsx("style",{children:`
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
          margin-bottom: 40px;
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
          line-height: 1.6;
        }

        .console-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
        }

        .console-sidebar {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 12px;
          padding: 24px;
          height: fit-content;
        }
        .console-sidebar h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #5b6377;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 16px;
          margin-top: 20px;
        }
        .console-sidebar h4:first-child {
          margin-top: 0;
        }
        .history-item {
          padding: 10px 12px;
          border-radius: 6px;
          color: #8a92aa;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
          margin-bottom: 6px;
        }
        .history-item:hover {
          background: rgba(139, 107, 246, 0.08);
          border-color: rgba(139, 107, 246, 0.2);
          color: #eef1f8;
        }
        .doc-count {
          font-size: 12px;
          color: #5b6377;
          margin-top: 8px;
        }
        .doc-list {
          max-height: 200px;
          overflow-y: auto;
        }
        .doc-item {
          padding: 8px 12px;
          color: #8a92aa;
          font-size: 12px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .doc-item .title {
          color: #eef1f8;
          font-weight: 500;
        }

        .console-main {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 12px;
          padding: 32px;
        }
        .query-input {
          width: 100%;
          padding: 16px;
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid #232b3d;
          border-radius: 8px;
          color: #eef1f8;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          margin-bottom: 16px;
          resize: vertical;
          transition: border-color 0.3s ease;
        }
        .query-input:focus {
          outline: none;
          border-color: #8b6bf6;
        }

        .answer-box {
          background: rgba(20, 26, 41, 0.8);
          border: 1px solid rgba(139, 107, 246, 0.2);
          border-radius: 8px;
          padding: 20px;
          margin-top: 24px;
          min-height: 80px;
        }
        .answer-box .label {
          font-size: 11px;
          text-transform: uppercase;
          color: #8b6bf6;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
          margin-bottom: 8px;
        }
        .answer-box .content {
          color: #eef1f8;
          line-height: 1.8;
          font-size: 15px;
        }

        .sources-box {
          margin-top: 12px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 6px;
        }
        .sources-box .source-item {
          color: #8a92aa;
          font-size: 12px;
          padding: 4px 0;
        }
        .sources-box .source-item .title {
          color: #2fd3d0;
        }

        .upload-section {
          background: rgba(20, 26, 41, 0.6);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 20px;
          margin-top: 20px;
        }
        .upload-section h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #eef1f8;
          margin-bottom: 12px;
        }
        .upload-section input,
        .upload-section textarea {
          width: 100%;
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid #232b3d;
          border-radius: 6px;
          color: #eef1f8;
          font-size: 13px;
          margin-bottom: 10px;
          font-family: 'Inter', sans-serif;
        }
        .upload-section input:focus,
        .upload-section textarea:focus {
          outline: none;
          border-color: #8b6bf6;
        }
        .upload-section .btn-upload {
          padding: 10px 24px;
          background: linear-gradient(135deg, #2fd3d0, #1a9e9c);
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .upload-section .btn-upload:hover {
          transform: translateY(-2px);
        }
        .upload-section .btn-upload:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn {
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139, 107, 246, 0.4);
        }
        .btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 900px) {
          .console-layout {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"AI Search Console"}),e.jsx("p",{children:"Upload documents and search them"})]}),e.jsxs("div",{className:"console-layout",children:[e.jsxs("div",{className:"console-sidebar",children:[e.jsx("h4",{children:"Search History"}),h.length===0?e.jsx("p",{style:{color:"#5b6377",fontSize:"13px"},children:"No searches yet"}):h.map((d,C)=>e.jsx("div",{className:"history-item",onClick:()=>t(d),children:d},C)),e.jsx("h4",{children:"📄 Your Documents"}),e.jsx("div",{className:"doc-list",children:b.length===0?e.jsx("p",{style:{color:"#5b6377",fontSize:"13px"},children:"No documents uploaded"}):b.map((d,C)=>e.jsx("div",{className:"doc-item",children:e.jsx("div",{className:"title",children:d.title})},C))}),e.jsxs("div",{className:"doc-count",children:["Total: ",b.length," documents"]})]}),e.jsxs("div",{className:"console-main",children:[e.jsx("textarea",{className:"query-input",rows:"3",value:r,onChange:d=>t(d.target.value),placeholder:"Ask anything about your documents...",onKeyDown:d=>d.key==="Enter"&&!d.shiftKey&&R()}),e.jsx("button",{className:"btn",onClick:R,disabled:n||!r.trim(),children:n?"Searching...":"🔍 Search"}),a&&e.jsxs("div",{className:"answer-box",children:[e.jsx("div",{className:"label",children:"📝 Answer"}),e.jsx("div",{className:"content",children:a}),w.length>0&&e.jsxs("div",{className:"sources-box",children:[e.jsx("div",{style:{color:"#5b6377",fontSize:"11px",marginBottom:"6px"},children:"📚 Sources:"}),w.map((d,C)=>e.jsx("div",{className:"source-item",children:e.jsx("span",{className:"title",children:d.title})},C))]})]}),e.jsxs("div",{className:"upload-section",children:[e.jsx("h4",{children:"📤 Add Document"}),e.jsx("input",{type:"text",placeholder:"Document Title",value:m.title,onChange:d=>u({...m,title:d.target.value})}),e.jsx("textarea",{placeholder:"Document Content",value:m.content,onChange:d=>u({...m,content:d.target.value}),rows:"3"}),e.jsx("button",{className:"btn-upload",onClick:W,disabled:f||!m.title||!m.content,children:f?"Uploading...":"📤 Upload"})]})]})]})]})},bt=()=>{c.useEffect(()=>{const t=document.getElementById("hud-left"),a=document.getElementById("hud-right");t&&t.classList.remove("visible"),a&&a.classList.remove("visible"),window.__threeState&&(window.__threeState.morph=.5,window.__threeState.dive=.3,window.__threeState.fade=.6)},[]);const r=[{name:"Starter",price:"$99",period:"/month",features:["Up to 10,000 documents","Hybrid search","Basic reranking","REST API","Email support"],cta:"Get Started",popular:!1},{name:"Professional",price:"$499",period:"/month",features:["Up to 100,000 documents","Advanced hybrid search","Cross-encoder reranking","Full API + SDKs","Priority support","SSO/SAML","Audit logs"],cta:"Start Free Trial",popular:!0},{name:"Enterprise",price:"Custom",period:"",features:["Unlimited documents","Custom models","On-premise deployment","24/7 dedicated support","SLA guarantee","Custom integrations","Training & onboarding"],cta:"Contact Sales",popular:!1}];return e.jsxs("div",{className:"page-container",children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Simple, Transparent Pricing"}),e.jsx("p",{children:"Choose the plan that fits your needs. All plans include hybrid search and reranking."})]}),e.jsx("div",{className:"pricing-grid",children:r.map((t,a)=>e.jsxs("div",{className:`pricing-card ${t.popular?"popular":""}`,children:[t.popular&&e.jsx("div",{className:"popular-badge",children:"Most Popular"}),e.jsx("div",{className:"name",children:t.name}),e.jsx("div",{className:"price",children:t.price}),e.jsx("div",{className:"period",children:t.period}),e.jsx("ul",{className:"features",children:t.features.map((o,n)=>e.jsx("li",{children:o},n))}),e.jsx(x,{to:"/console",className:"cta-btn",children:t.cta})]},a))})]})},yt=()=>(c.useEffect(()=>{const r=document.getElementById("hud-left"),t=document.getElementById("hud-right");r&&r.classList.remove("visible"),t&&t.classList.remove("visible"),window.__threeState&&(window.__threeState.morph=.3,window.__threeState.dive=.2,window.__threeState.fade=.5)},[]),e.jsxs("div",{className:"page-container",children:[e.jsx("style",{children:`
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
          margin-bottom: 40px;
        }
        .page-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .page-header p {
          color: #8a92aa;
          font-size: 18px;
          max-width: 600px;
          line-height: 1.6;
        }
        .docs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .docs-card {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 24px;
          transition: border-color 0.3s;
        }
        .docs-card:hover {
          border-color: #8b6bf6;
        }
        .docs-card h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 18px;
          margin-bottom: 8px;
          color: #eef1f8;
        }
        .docs-card p {
          color: #8a92aa;
          line-height: 1.6;
          margin-bottom: 12px;
        }
        .docs-card .link {
          color: #8b6bf6;
          text-decoration: none;
          font-weight: 500;
        }
        .docs-card .link:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .docs-grid {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"Documentation"}),e.jsx("p",{children:"Everything you need to build with Enterprised — from getting started to advanced features."})]}),e.jsxs("div",{className:"docs-grid",children:[e.jsxs("div",{className:"docs-card",children:[e.jsx("h3",{children:"🚀 Getting Started"}),e.jsx("p",{children:"Set up your first retrieval system in 5 minutes with our quickstart guide."}),e.jsx("a",{href:"#",className:"link",children:"Read Guide →"})]}),e.jsxs("div",{className:"docs-card",children:[e.jsx("h3",{children:"📚 API Reference"}),e.jsx("p",{children:"Complete REST API documentation with examples in Python, JavaScript, and cURL."}),e.jsx("a",{href:"#",className:"link",children:"View API →"})]}),e.jsxs("div",{className:"docs-card",children:[e.jsx("h3",{children:"🔧 SDKs & Libraries"}),e.jsx("p",{children:"Official Python and JavaScript SDKs for seamless integration with your stack."}),e.jsx("a",{href:"#",className:"link",children:"See SDKs →"})]}),e.jsxs("div",{className:"docs-card",children:[e.jsx("h3",{children:"📖 Tutorials"}),e.jsx("p",{children:"Step-by-step tutorials for building search, Q&A, and document processing pipelines."}),e.jsx("a",{href:"#",className:"link",children:"Start Tutorials →"})]}),e.jsxs("div",{className:"docs-card",children:[e.jsx("h3",{children:"🏗️ Architecture"}),e.jsx("p",{children:"Deep dive into hybrid search, reranking, and the indexing pipeline."}),e.jsx("a",{href:"#",className:"link",children:"Learn Architecture →"})]}),e.jsxs("div",{className:"docs-card",children:[e.jsx("h3",{children:"❓ FAQ"}),e.jsx("p",{children:"Common questions about deployment, security, pricing, and more."}),e.jsx("a",{href:"#",className:"link",children:"View FAQ →"})]})]})]})),vt=()=>(c.useEffect(()=>{const r=document.getElementById("hud-left"),t=document.getElementById("hud-right");r&&r.classList.remove("visible"),t&&t.classList.remove("visible"),window.__threeState&&(window.__threeState.morph=.3,window.__threeState.dive=.2,window.__threeState.fade=.5)},[]),e.jsxs("div",{className:"page-container",children:[e.jsx("style",{children:`
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
          margin-bottom: 40px;
        }
        .page-header h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .page-header p {
          color: #8a92aa;
          font-size: 18px;
          max-width: 600px;
          line-height: 1.6;
        }
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .about-text h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 24px;
          margin-bottom: 16px;
          margin-top: 24px;
          color: #eef1f8;
        }
        .about-text h2:first-child {
          margin-top: 0;
        }
        .about-text p {
          color: #8a92aa;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .stats-side {
          background: rgba(15, 20, 32, 0.85);
          backdrop-filter: blur(10px);
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 32px;
          height: fit-content;
        }
        .stats-side .stat-item {
          padding: 16px 0;
          border-bottom: 1px solid #232b3d;
        }
        .stats-side .stat-item:last-child {
          border-bottom: none;
        }
        .stats-side .stat-item .number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 32px;
          font-weight: 700;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .stats-side .stat-item .label {
          color: #5b6377;
          font-size: 14px;
          margin-top: 4px;
        }
        .stats-side .stat-item .desc {
          color: #8a92aa;
          font-size: 13px;
          margin-top: 8px;
          line-height: 1.5;
        }
        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }
        }
      `}),e.jsxs("div",{className:"page-header",children:[e.jsx("h1",{children:"About Enterprised"}),e.jsx("p",{children:"Building the future of enterprise document retrieval with hybrid search and AI."})]}),e.jsxs("div",{className:"about-content",children:[e.jsxs("div",{className:"about-text",children:[e.jsx("h2",{children:"Our Mission"}),e.jsx("p",{children:"Enterprised is on a mission to make every document in your organization instantly searchable and actionable. We believe that knowledge shouldn't be locked away in silos — it should be accessible, contextual, and secure."}),e.jsx("h2",{children:"Why We Built This"}),e.jsx("p",{children:"Traditional search fails at understanding context. Keyword matching misses meaning, and pure vector search loses precision. We combined the best of both worlds with hybrid search and reranking, creating a system that understands your documents like a human researcher."}),e.jsx("h2",{children:"Our Technology"}),e.jsx("p",{children:"Built on modern embedding models, BM25, and cross-encoder reranking, Enterprised processes millions of documents with sub-100ms latency. Deploy anywhere — cloud, on-premise, or hybrid — with enterprise-grade security and observability."})]}),e.jsxs("div",{className:"stats-side",children:[e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"number",children:"128K+"}),e.jsx("div",{className:"label",children:"Documents Indexed"}),e.jsx("div",{className:"desc",children:"Across enterprise deployments worldwide"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"number",children:"99.97%"}),e.jsx("div",{className:"label",children:"Uptime SLA"}),e.jsx("div",{className:"desc",children:"Guaranteed reliability for mission-critical systems"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"number",children:"42"}),e.jsx("div",{className:"label",children:"Languages Supported"}),e.jsx("div",{className:"desc",children:"From English to Arabic, Japanese to Portuguese"})]}),e.jsxs("div",{className:"stat-item",children:[e.jsx("div",{className:"number",children:"180ms"}),e.jsx("div",{className:"label",children:"P95 Query Latency"}),e.jsx("div",{className:"desc",children:"Lightning-fast retrieval at any scale"})]})]})]})]})),wt=()=>{const[r,t]=c.useState(""),[a,o]=c.useState(""),[n,i]=c.useState(""),[h,y]=c.useState(!1),b=we(),{login:l}=J(),w=async k=>{k.preventDefault(),y(!0),i("");try{const m=await $.login({email:r,password:a});m.success?(l(m.user,m.token),b("/console")):i(m.error||"Login failed")}catch(m){i("Connection error: "+m.message)}y(!1)};return e.jsxs("div",{className:"auth-page",children:[e.jsxs("div",{className:"auth-container",children:[e.jsx("h2",{children:"Welcome Back"}),e.jsx("p",{children:"Login to your Enterprise RAG account"}),n&&e.jsx("div",{className:"auth-error",children:n}),e.jsxs("form",{onSubmit:w,children:[e.jsx("input",{type:"email",placeholder:"Email",value:r,onChange:k=>t(k.target.value),required:!0}),e.jsx("input",{type:"password",placeholder:"Password",value:a,onChange:k=>o(k.target.value),required:!0}),e.jsx("button",{type:"submit",disabled:h,children:h?"Logging in...":"Login"})]}),e.jsxs("p",{className:"auth-link",children:["Don't have an account? ",e.jsx(x,{to:"/register",children:"Register"})]})]}),e.jsx("style",{children:`
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
      `})]})},ye=()=>{const[r,t]=c.useState(""),[a,o]=c.useState(""),[n,i]=c.useState(""),[h,y]=c.useState(""),[b,l]=c.useState(""),[w,k]=c.useState(!1),m=we(),{login:u}=J(),f=async p=>{if(p.preventDefault(),n!==h){l("Passwords do not match");return}if(n.length<6){l("Password must be at least 6 characters");return}k(!0),l("");try{const j=await $.register({name:r,email:a,password:n});console.log("Register response:",j),j.success?(u(j.user,j.token),m("/console")):l(j.error||"Registration failed")}catch(j){console.error("Register error:",j),l("Connection error: "+j.message)}k(!1)};return e.jsxs("div",{className:"auth-page",children:[e.jsxs("div",{className:"auth-container",children:[e.jsx("h2",{children:"Create Account"}),e.jsx("p",{children:"Start using Enterprise RAG today"}),b&&e.jsx("div",{className:"auth-error",children:b}),e.jsxs("form",{onSubmit:f,children:[e.jsx("input",{type:"text",placeholder:"Full Name",value:r,onChange:p=>t(p.target.value),required:!0}),e.jsx("input",{type:"email",placeholder:"Email",value:a,onChange:p=>o(p.target.value),required:!0}),e.jsx("input",{type:"password",placeholder:"Password (min 6 characters)",value:n,onChange:p=>i(p.target.value),required:!0,minLength:"6"}),e.jsx("input",{type:"password",placeholder:"Confirm Password",value:h,onChange:p=>y(p.target.value),required:!0}),e.jsx("button",{type:"submit",disabled:w,children:w?"Creating Account...":"Register"})]}),e.jsxs("p",{className:"auth-link",children:["Already have an account? ",e.jsx(x,{to:"/login",children:"Login"})]})]}),e.jsx("style",{children:`
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
          transition: border-color 0.3s;
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
          transform: none;
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
      `})]})},jt=({loading:r})=>e.jsxs("div",{id:"preloader",className:r?"":"hide",children:[e.jsx("style",{children:`
        #preloader {
          position: fixed;
          inset: 0;
          z-index: 100;
          background: #05070d;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          transition: opacity 0.7s ease, visibility 0.7s ease;
        }
        #preloader.hide {
          opacity: 0;
          visibility: hidden;
        }
        .pre-mark {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, #8b6bf6, #2fd3d0);
          animation: preSpin 1.4s ease-in-out infinite;
        }
        @keyframes preSpin {
          0%, 100% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(0.82); }
        }
        .pre-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.16em;
          color: #5b6377;
          text-transform: uppercase;
        }
      `}),e.jsx("div",{className:"pre-mark"}),e.jsx("div",{className:"pre-label",children:"Booting Enterprised"})]}),kt=({children:r})=>{const{token:t,loading:a}=J();return a?e.jsx("div",{children:"Loading..."}):t?r:e.jsx(Me,{to:"/login",replace:!0})};function St(){const[r,t]=c.useState(!0),a=ve();c.useEffect(()=>{setTimeout(()=>t(!1),450)},[]);const o=a.pathname==="/";return e.jsxs(gt,{children:[e.jsx(jt,{loading:r}),o&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"vignette"}),e.jsx("div",{id:"cursor-glow"})]}),e.jsx(ot,{children:e.jsxs(Le,{children:[e.jsx(I,{path:"/",element:e.jsx(ut,{})}),e.jsx(I,{path:"/platform",element:e.jsx(xt,{})}),e.jsx(I,{path:"/pricing",element:e.jsx(bt,{})}),e.jsx(I,{path:"/docs",element:e.jsx(yt,{})}),e.jsx(I,{path:"/about",element:e.jsx(vt,{})}),e.jsx(I,{path:"/login",element:e.jsx(wt,{})}),e.jsx(I,{path:"/register",element:e.jsx(ye,{})}),e.jsx(I,{path:"/register",element:e.jsx(ye,{})}),e.jsx(I,{path:"/console",element:e.jsx(kt,{children:e.jsx(ft,{})})})]})})]})}ae.createRoot(document.getElementById("root")).render(e.jsx(Ie.StrictMode,{children:e.jsx(Te,{children:e.jsx(St,{})})}));
