import React, { useState, useRef, useEffect } from 'react';
import './chatbox.css'; 

const DEFAULT_SUGGESTIONS = [
  'College Name', 
  'TNEA Counselling Code', 
  'UG Courses', 
  'Departments', 
  'Fee Structure', 
  'Hostel Facilities'
];

const getSuggestionIcon = (text) => {
  if (!text) return '💡';
  if (/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(text.trim())) {
    return '';
  }

  const t = text.toLowerCase();
  if (t.includes('college name') || t.includes('about nscet') || t === 'college name') return '🏛️';
  if (t.includes('tnea') || t.includes('counselling') || t.includes('code')) return '📄';
  if (t.includes('ug') || t.includes('undergraduate')) return '🎓';
  if (t.includes('pg') || t.includes('postgraduate')) return '🎓';
  if (t.includes('department') || t.includes('dept') || t === 'departments') return '🏢';
  if (t.includes('fee') || t.includes('cost') || t.includes('structure')) return '💳';
  if (t.includes('hostel') || t.includes('stay') || t.includes('facility') || t.includes('facilities')) {
    if (t.includes('hostel')) return '🛏️';
    if (t.includes('transport') || t.includes('bus')) return '🚌';
    return '🏫';
  }
  if (t.includes('location') || t.includes('address') || t.includes('place') || t.includes('map')) return '📍';
  if (t.includes('transport') || t.includes('bus')) return '🚌';
  if (t.includes('placement') || t.includes('job') || t.includes('career')) return '💼';
  if (t.includes('admission') || t.includes('apply')) return '📝';
  if (t.includes('scholarship')) return '🎓';
  if (t.includes('contact') || t.includes('phone') || t.includes('mail')) return '📞';
  return '💡';
};

const renderMessageText = (text) => {
  if (!text) return null;

  const regex = /(https?:\/\/[^\s,]+|www\.[^\s,]+|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|nscet\.(?:org|edu\.in|ac\.in)(?:\/[^\s,]*)?)/gi;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    let rawMatch = match[0];
    let trailingPunctuation = '';
    while (/[.,!?)]$/.test(rawMatch)) {
      trailingPunctuation = rawMatch.slice(-1) + trailingPunctuation;
      rawMatch = rawMatch.slice(0, -1);
    }

    if (rawMatch.includes('@') && !rawMatch.startsWith('http')) {
      parts.push(
        <a
          key={match.index}
          href={`mailto:${rawMatch}`}
          className="chat-link email-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {rawMatch}
        </a>
      );
    } else if (rawMatch.length > 0) {
      let href = rawMatch;
      if (!href.startsWith('http://') && !href.startsWith('https://')) {
        href = `https://${href}`;
      }
      parts.push(
        <a
          key={match.index}
          href={href}
          className="chat-link web-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {rawMatch}
        </a>
      );
    }

    if (trailingPunctuation) {
      parts.push(trailingPunctuation);
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'ai', 
      text: 'Hello! Welcome to NSCET AI Assistant. How can I help you today?'
    }
  ]);
  const [currentSuggestions, setCurrentSuggestions] = useState(DEFAULT_SUGGESTIONS);
  const [inputText, setInputText] = useState('');
  const [isBotBusy, setIsBotBusy] = useState(false);
  const chatBodyRef = useRef(null);
  const typingIntervalRef = useRef(null);

  const clearTypingAnimation = () => {
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
      typingIntervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTypingAnimation();
    };
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen, currentSuggestions]);

  const toggleChat = () => {
    clearTypingAnimation();
    setIsBotBusy(false);
    if (isOpen) {
      setMessages([
        { 
          sender: 'ai', 
          text: 'Hello! Welcome to NSCET AI Assistant. How can I help you today?'
        }
      ]);
      setCurrentSuggestions(DEFAULT_SUGGESTIONS);
      setInputText('');
    }
    setIsOpen(!isOpen);
  };

  const sendQuery = async (queryText) => {
    if (!queryText || queryText.trim() === '' || isBotBusy) return;

    const userMessage = queryText.trim();
    clearTypingAnimation();
    setIsBotBusy(true);

    // 1. Add User Message
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setInputText('');
    
    // 2. Add 3 Animated Typing Dots Indicator
    setMessages(prev => [...prev, { sender: 'ai', text: 'Typing...', isTyping: true }]);

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      let replyText = data.reply || "Sorry, I couldn't retrieve an answer right now.";
      let newSuggestions = data.suggestions && data.suggestions.length > 0
        ? data.suggestions
        : DEFAULT_SUGGESTIONS;

      // Fallback regex parsing to extract suggestions & strip any Suggested Questions text block from replyText
      const sugMatch = replyText.match(/(?:💡\s*)?(?:\*\*)?(?:###\s*)?Suggested Questions:?(?:\*\*)?[\s\S]*/i);
      if (sugMatch) {
        const fullSugBlock = sugMatch[0];
        const sugIdx = sugMatch.index;

        const sugLines = fullSugBlock
          .replace(/(?:💡\s*)?(?:\*\*)?(?:###\s*)?Suggested Questions:?(?:\*\*)?/i, '')
          .split('\n')
          .map(line => line.replace(/^[•\-\*\d\.]+\s*/, '').trim())
          .filter(Boolean);

        if (sugLines.length > 0) newSuggestions = sugLines;
        replyText = replyText.substring(0, sugIdx).trim();
      }

      // 3. Remove 3 Dots and initialize ChatGPT Typewriter Stream
      setMessages(prev => {
        const filtered = prev.filter(m => !m.isTyping);
        return [...filtered, { sender: 'ai', text: '', isStreaming: true }];
      });

      let charIndex = 0;
      const speed = replyText.length > 300 ? 18 : 28; // comfortable, natural typing speed

      typingIntervalRef.current = setInterval(() => {
        charIndex += 1;
        if (charIndex >= replyText.length) {
          charIndex = replyText.length;
          clearTypingAnimation();
          
          setMessages(prev => {
            const updated = [...prev];
            const lastIndex = updated.length - 1;
            if (lastIndex >= 0 && updated[lastIndex].sender === 'ai') {
              updated[lastIndex] = { sender: 'ai', text: replyText };
            }
            return updated;
          });
          setCurrentSuggestions(newSuggestions);
          setIsBotBusy(false);
        } else {
          const currentChunk = replyText.slice(0, charIndex);
          setMessages(prev => {
            const updated = [...prev];
            const lastIndex = updated.length - 1;
            if (lastIndex >= 0 && updated[lastIndex].sender === 'ai') {
              updated[lastIndex] = { sender: 'ai', text: currentChunk, isStreaming: true };
            }
            return updated;
          });
        }
      }, speed);

    } catch (error) {
      console.error("Chat error:", error);
      clearTypingAnimation();
      setMessages(prev => {
        const filtered = prev.filter(m => !m.isTyping && !m.isStreaming);
        return [...filtered, { 
          sender: 'ai', 
          text: 'Sorry, server error. Please try again!'
        }];
      });
      setCurrentSuggestions(DEFAULT_SUGGESTIONS);
      setIsBotBusy(false);
    }
  };

  const handleSendMessage = () => {
    sendQuery(inputText);
  };

  // Always use 2 columns for optimal card width and 100% text readability
  const displaySuggestions = currentSuggestions.slice(0, 6);
  const gridColsClass = 'cols-2';

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-info">
              <div className="header-avatar fly-avatar">
                <video src="/robot.mp4" autoPlay loop muted playsInline className="header-robot-video" />
                <span className="online-badge"></span>
              </div>
              <div className="header-text-details">
                <div className="header-title-main">NSCET AI</div>
                <div className="header-subtitle-text">Your smart college assistant</div>
              </div>
            </div>
            <button className="close-btn" onClick={toggleChat} aria-label="Close Chat">✕</button>
          </div>
          
          <div className="chat-body" ref={chatBodyRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.sender} ${msg.isTyping ? 'typing-bubble' : ''}`}>
                {msg.isTyping ? (
                  <div className="typing-dots">
                    <span></span><span></span><span></span>
                  </div>
                ) : (
                  <>
                    {renderMessageText(msg.text)}
                    {msg.isStreaming && <span className="streaming-cursor">|</span>}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Quick Suggestion Pills Bar directly above Chat Footer */}
          {displaySuggestions.length > 0 && (
            <div className="suggestions-wrapper">
              <div className="suggestions-header">
                <span className="sparkle-icon">💡</span> Suggested Questions
              </div>
              <div className={`suggestions-grid ${gridColsClass}`}>
                {displaySuggestions.map((sug, i) => {
                  const icon = getSuggestionIcon(sug);
                  return (
                    <div key={i} className="suggestion-pill-wrapper">
                      <button 
                        className="suggestion-pill"
                        onClick={() => sendQuery(sug)}
                        disabled={isBotBusy}
                        title={sug}
                      >
                        {icon && <span className="pill-icon">{icon}</span>}
                        <span className="pill-text">{sug}</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          <div className="chat-footer">
            <div className="input-box-wrapper">
              <input 
                type="text" 
                placeholder="Ask NSCET AI a question..." 
                value={inputText}
                disabled={isBotBusy}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <button 
                className="send-btn" 
                onClick={handleSendMessage} 
                disabled={isBotBusy}
                aria-label="Send Message"
              >
                <svg className="send-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
            <div className="footer-tagline">NSCET Official AI Assistant • Powered by TMHNU</div>
          </div>
        </div>
      )}

      {/* Floating Robot Video Button */}
      <button 
        className={`robot-trigger-btn ${isOpen ? 'trigger-hidden' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle Chat"
      >
        {!isOpen && (
          <div className="lets-talk-bubble">ProBot Here!</div>
        )}
        <video 
          className="robot-model" 
          src="/robot.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
        />
      </button>
    </div>
  );
};

export default ChatBot;