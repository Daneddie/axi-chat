import React, { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatContext';

const MessageInput = () => {
  const { sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState('');

  useEffect(() => {
    let typingTimer;
    if (input) {
      handleTyping(true);
      typingTimer = setTimeout(() => handleTyping(false), 1000);
    } else {
      handleTyping(false);
    }
    return () => clearTimeout(typingTimer);
  }, [input, handleTyping]);
  
  const handleSend = () => {
    if (input.trim()) {
        sendMessage({ type: 'text', content: input });
        setInput('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default MessageInput;