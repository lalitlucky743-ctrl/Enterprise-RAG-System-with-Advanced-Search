import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className="markdown-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          table: ({ children }) => (
            <div className="table-wrapper">
              <table>{children}</table>
            </div>
          ),
          code: ({ inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className="code-block">
                <div className="code-header">
                  <span className="code-language">{match?.[1] || 'text'}</span>
                  <button onClick={() => navigator.clipboard.writeText(String(children))}>
                    📋 Copy
                  </button>
                </div>
                <pre className="code-content">
                  <code className={className} {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="inline-code" {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>

      <style>{`
        .markdown-content {
          line-height: 1.8;
        }
        .markdown-content h1, .markdown-content h2, .markdown-content h3 {
          margin: 16px 0 8px;
          font-family: 'Space Grotesk', sans-serif;
        }
        .markdown-content p {
          margin: 8px 0;
        }
        .markdown-content ul, .markdown-content ol {
          padding-left: 24px;
          margin: 8px 0;
        }
        .markdown-content blockquote {
          border-left: 3px solid #8b6bf6;
          padding-left: 16px;
          margin: 12px 0;
          color: #8a92aa;
        }
        .table-wrapper {
          overflow-x: auto;
          margin: 12px 0;
          border-radius: 8px;
          border: 1px solid #232b3d;
        }
        .table-wrapper table {
          width: 100%;
          border-collapse: collapse;
        }
        .table-wrapper th, .table-wrapper td {
          padding: 10px 16px;
          border-bottom: 1px solid #232b3d;
          text-align: left;
        }
        .table-wrapper th {
          background: rgba(139, 107, 246, 0.1);
          color: #eef1f8;
          font-weight: 600;
        }
        .code-block {
          margin: 12px 0;
          border-radius: 8px;
          background: #0a0e1a;
          border: 1px solid #232b3d;
          overflow: hidden;
        }
        .code-header {
          display: flex;
          justify-content: space-between;
          padding: 8px 16px;
          background: rgba(255,255,255,0.03);
          border-bottom: 1px solid #232b3d;
          font-size: 12px;
        }
        .code-language {
          color: #5b6377;
          text-transform: uppercase;
          font-weight: 600;
        }
        .code-header button {
          background: none;
          border: none;
          color: #8a92aa;
          cursor: pointer;
        }
        .code-header button:hover {
          color: #eef1f8;
        }
        .code-content {
          padding: 16px;
          margin: 0;
          overflow-x: auto;
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          line-height: 1.6;
        }
        .inline-code {
          padding: 2px 6px;
          border-radius: 4px;
          background: rgba(139, 107, 246, 0.15);
          color: #8b6bf6;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.9em;
        }
      `}</style>
    </div>
  );
};

export default MarkdownRenderer;