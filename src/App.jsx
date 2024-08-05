import React from 'react';
import { ChatProvider } from './context/ChatContext';
import ChatContainer from './components/ChatContainer';

const App = () => {
  return (
    <ChatProvider>
      <ChatContainer />
    </ChatProvider>
  );
};

export default App;