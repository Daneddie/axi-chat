import React from 'react';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';

const ChatContainer = () => {
  return (
    <div className="chat-container">
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default ChatContainer;