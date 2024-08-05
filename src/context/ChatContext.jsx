import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTying] = useState([]);

  const sendMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleTyping =  (typing) => {
    setIsTyping(typing);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};