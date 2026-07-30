import React, { useState, useRef } from 'react';

const MultiPDFUpload = ({ onUploadComplete }) => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    
    setUploading(true);
    setProgress(0);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title', file.name);

      try {
        // For demo, we send document content
        const content = await file.text();
        await fetch('http://localhost:5000/api/documents/upload', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: file.name,
            content: content.substring(0, 5000),
            fileType: 'pdf'
          })
        });
      } catch (error) {
        console.error('Upload failed for:', file.name, error);
      }

      setProgress((i + 1) / files.length * 100);
    }

    setUploading(false);
    setFiles([]);
    if (onUploadComplete) onUploadComplete();
  };

  return (
    <div className="multi-upload">
      <div className="upload-dropzone" onClick={() => fileInputRef.current?.click()}>
        <span>📁</span>
        <p>Click or drag PDF files here</p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
      </div>

      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, i) => (
            <div key={i} className="file-item">
              <span>📄 {file.name}</span>
              <button onClick={() => removeFile(i)}>✕</button>
            </div>
          ))}
        </div>
      )}

      {files.length > 0 && (
        <button className="upload-btn" onClick={handleUpload} disabled={uploading}>
          {uploading ? `Uploading... ${Math.round(progress)}%` : `📤 Upload ${files.length} Files`}
        </button>
      )}

      {uploading && (
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
      )}

      <style>{`
        .multi-upload {
          margin: 12px 0;
          padding: 16px;
          background: rgba(0,0,0,0.2);
          border-radius: 8px;
        }
        .upload-dropzone {
          padding: 24px;
          border: 2px dashed #232b3d;
          border-radius: 8px;
          text-align: center;
          cursor: pointer;
          transition: border-color 0.3s;
        }
        .upload-dropzone:hover {
          border-color: #8b6bf6;
        }
        .upload-dropzone span {
          font-size: 32px;
          display: block;
        }
        .upload-dropzone p {
          color: #8a92aa;
          margin: 8px 0 0;
        }
        .file-list {
          margin: 12px 0;
          max-height: 150px;
          overflow-y: auto;
        }
        .file-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: rgba(255,255,255,0.03);
          border-radius: 4px;
          margin-bottom: 4px;
          color: #8a92aa;
          font-size: 13px;
        }
        .file-item button {
          background: none;
          border: none;
          color: #ff6b6b;
          cursor: pointer;
        }
        .upload-btn {
          padding: 10px 20px;
          background: linear-gradient(135deg, #8b6bf6, #6b4fd4);
          border: none;
          border-radius: 6px;
          color: white;
          font-weight: 600;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s;
        }
        .upload-btn:hover {
          transform: translateY(-2px);
        }
        .upload-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .progress-bar {
          margin-top: 12px;
          height: 4px;
          background: #232b3d;
          border-radius: 2px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #8b6bf6, #2fd3d0);
          transition: width 0.5s ease;
        }
      `}</style>
    </div>
  );
};

export default MultiPDFUpload;