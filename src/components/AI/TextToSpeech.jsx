import React, { useState } from 'react';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    if (!text) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    utterance.pitch = 1;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <button
      className={`tts-btn ${isSpeaking ? 'speaking' : ''}`}
      onClick={handleSpeak}
      title={isSpeaking ? 'Stop speaking' : 'Read aloud'}
    >
      {isSpeaking ? '⏹️' : '🔊'}
      <style>{`
        .tts-btn {
          padding: 6px 12px;
          border: 1px solid #232b3d;
          border-radius: 6px;
          background: rgba(255,255,255,0.03);
          color: #8a92aa;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
        }
        .tts-btn:hover {
          border-color: #2fd3d0;
          color: #eef1f8;
        }
        .tts-btn.speaking {
          border-color: #ff6b6b;
          background: rgba(255, 0, 0, 0.1);
        }
      `}</style>
    </button>
  );
};

export default TextToSpeech;