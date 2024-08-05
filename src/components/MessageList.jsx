import React, { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';
import chatData from '../data/chatData';
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';

const MessageList = () => {
  const { messages } = useContext(ChatContext);
  const endOfMessagesRef = useRef(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
   
    setSelectedEmoji(emojiObject);
    setShowEmojiPicker(false);
  };


  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="message-list">
        {messages.map((msg, index) => (
        <div key={index} className="message">
          {msg.type === 'text' ? msg.content : <img src={msg.content} alt="attachment" />}
        </div>
      ))}
      {chatData.map((msg) => (
        <div key={index} className="message">
          {msg.type === 'text' ? (
            <p className="text-message">{msg.content}</p>
          ) : (
            <img src={msg.content} alt="attachment" className="image-message" />
          )}
        </div>
      ))}
      {messages.map((msg) => (
        <div key={msg.id} className="message">
          <p>{msg.content} {msg.reaction && <span>{msg.reaction}</span>}</p>
          <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
          {showEmojiPicker && <EmojiPicker onEmojiClick={onEmojiClick} />}
        </div>
      ))}
      {users.map(user => (
  <div key={user.id}>
    {user.name} {user.online ? '🟢' : '🔴'}
  </div>
))}
      
      {isTyping && <p className="typing-indicator">Typing...</p>}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

export default MessageList;