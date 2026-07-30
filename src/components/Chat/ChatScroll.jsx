import React, { useRef, useEffect, useState } from 'react';

const ChatScroll = ({ children }) => {
  const containerRef = useRef(null);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);

  const scrollToBottom = () => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    containerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setShowScrollDown(scrollHeight - scrollTop - clientHeight > 100);
    setShowScrollUp(scrollTop > 100);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div ref={containerRef} style={{ height: '100%', overflowY: 'auto', padding: '0 4px' }}>
        {children}
      </div>
      
      {showScrollUp && (
        <button onClick={scrollToTop} className="scroll-btn scroll-up" title="Scroll to top">
          ⬆
        </button>
      )}
      
      {showScrollDown && (
        <button onClick={scrollToBottom} className="scroll-btn scroll-down" title="Scroll to bottom">
          ⬇
        </button>
      )}

      <style>{`
        .scroll-btn {
          position: absolute;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(139, 107, 246, 0.2);
          border: 1px solid rgba(139, 107, 246, 0.3);
          color: #eef1f8;
          font-size: 18px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.3s;
          z-index: 10;
        }
        .scroll-btn:hover {
          background: rgba(139, 107, 246, 0.4);
          transform: scale(1.1);
        }
        .scroll-up {
          bottom: 80px;
        }
        .scroll-down {
          bottom: 20px;
        }
      `}</style>
    </div>
  );
};

export default ChatScroll;