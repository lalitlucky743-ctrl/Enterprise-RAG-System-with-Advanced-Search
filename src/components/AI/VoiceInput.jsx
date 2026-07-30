import React, { useState, useEffect } from 'react';

const VoiceInput = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    // Check if browser supports SpeechRecognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.lang = 'en-US';
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = true;

      recognitionInstance.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }
        const fullTranscript = finalTranscript || interimTranscript;
        setTranscript(fullTranscript);
        if (finalTranscript) {
          onTranscript?.(finalTranscript);
          setIsListening(false);
        }
      };

      recognitionInstance.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognition) {
      alert('Speech recognition not supported in this browser. Please use Chrome or Edge.');
      return;
    }

    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      setTranscript('');
      recognition.start();
      setIsListening(true);
    }
  };

  return (
    <div className="voice-input">
      <button
        className={`voice-btn ${isListening ? 'listening' : ''}`}
        onClick={toggleListening}
        title={isListening ? 'Stop listening' : 'Start voice input'}
      >
        {isListening ? '🔴' : '🎤'}
      </button>
      {transcript && (
        <span className="voice-transcript">"{transcript}"</span>
      )}
      <style>{`
        .voice-input {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .voice-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #232b3d;
          background: rgba(255,255,255,0.03);
          color: #8a92aa;
          font-size: 18px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .voice-btn:hover {
          border-color: #8b6bf6;
          color: #eef1f8;
        }
        .voice-btn.listening {
          border-color: #ff6b6b;
          background: rgba(255, 0, 0, 0.1);
          animation: pulse 1s infinite;
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 0, 0, 0.4); }
          50% { box-shadow: 0 0 0 8px rgba(255, 0, 0, 0); }
        }
        .voice-transcript {
          color: #8a92aa;
          font-size: 13px;
          font-style: italic;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default VoiceInput;