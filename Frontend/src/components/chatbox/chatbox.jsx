import React, { useState } from 'react';
import './chatbox.css'; 
// Unga assets folder-la irunthu video-va import panrom

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: 'Hello! Welcome to NSCET. How can I help you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() !== '') {
      const userMessage = inputText;
      setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
      setInputText('');
      
      setMessages(prev => [...prev, { sender: 'ai', text: 'Typing...' }]);

      try {
        const response = await fetch('http://localhost:5000/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });

        const data = await response.json();

        setMessages(prev => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove 'Typing...'
          return [...newMessages, { sender: 'ai', text: data.reply }];
        });

      } catch (error) {
        console.error("Chat error:", error);
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages.pop(); // Remove 'Typing...'
          return [...newMessages, { sender: 'ai', text: 'Sorry, server error. Try again!' }];
        });
      }
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="header-title">
              <span className="ai-icon">🤖</span> NSCET AI Assistant
            </div>
            <button className="close-btn" onClick={toggleChat}>&times;</button>
          </div>
          
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message-bubble ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          
          <div className="chat-footer">
            <input 
              type="text" 
              placeholder="Type your question here..." 
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button className="send-btn" onClick={handleSendMessage}>➤</button>
          </div>
        </div>
      )}

      {/* Floating Robot Video Button */}
      <button className="robot-trigger-btn" onClick={toggleChat}>
        {!isOpen && (
          <div className="lets-talk-bubble">Let's talk!</div>
        )}
        {/* Image-ku bathila Video use panrom */}
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