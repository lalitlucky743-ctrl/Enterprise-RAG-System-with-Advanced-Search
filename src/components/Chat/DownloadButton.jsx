import React, { useState } from 'react';

const DownloadButton = ({ content, title = 'answer' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const downloadAsTXT = () => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setIsOpen(false);
  };

  const downloadAsPDF = async () => {
    // You can use html2pdf or pdf-lib for better PDF generation
    // For now, we'll use simple print-to-pdf
    const win = window.open('', '_blank');
    win.document.write(`
      <html><head><title>${title}</title>
      <style>body { font-family: Arial; padding: 40px; max-width: 800px; margin: auto; line-height: 1.6; }</style>
      </head><body>
      <h1>${title}</h1>
      <pre>${content}</pre>
      </body></html>
    `);
    win.document.close();
    setTimeout(() => {
      win.print();
    }, 500);
    setIsOpen(false);
  };

  return (
    <div className="download-wrapper">
      <button onClick={() => setIsOpen(!isOpen)} className="download-btn">
        📥 Download
      </button>
      {isOpen && (
        <div className="download-dropdown">
          <button onClick={downloadAsTXT}>📄 Download as TXT</button>
          <button onClick={downloadAsPDF}>📕 Download as PDF</button>
        </div>
      )}
      <style>{`
        .download-wrapper {
          position: relative;
          display: inline-block;
        }
        .download-btn {
          padding: 6px 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #232b3d;
          border-radius: 6px;
          color: #8a92aa;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .download-btn:hover {
          border-color: #8b6bf6;
          color: #eef1f8;
        }
        .download-dropdown {
          position: absolute;
          top: 110%;
          right: 0;
          background: #0f1420;
          border: 1px solid #232b3d;
          border-radius: 8px;
          padding: 6px;
          min-width: 180px;
          z-index: 10;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }
        .download-dropdown button {
          display: block;
          width: 100%;
          padding: 10px 16px;
          background: none;
          border: none;
          border-radius: 4px;
          color: #8a92aa;
          font-size: 13px;
          cursor: pointer;
          text-align: left;
          transition: all 0.2s;
        }
        .download-dropdown button:hover {
          background: rgba(139, 107, 246, 0.1);
          color: #eef1f8;
        }
      `}</style>
    </div>
  );
};

export default DownloadButton;