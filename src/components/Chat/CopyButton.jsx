import React, { useState } from 'react';

const CopyButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
    }
  };

  return (
    <button onClick={handleCopy} className="copy-btn" title="Copy answer">
      {copied ? '✅ Copied!' : '📋 Copy'}
      <style>{`
        .copy-btn {
          padding: 6px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #232b3d;
          border-radius: 6px;
          color: #8a92aa;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .copy-btn:hover {
          border-color: #8b6bf6;
          color: #eef1f8;
        }
      `}</style>
    </button>
  );
};

export default CopyButton;