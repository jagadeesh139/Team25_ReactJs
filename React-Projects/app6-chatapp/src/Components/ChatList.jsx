import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  deleteMessage,
  markAsRead,
  markAsUnread,
} from '../features/ChatSlice';

const MessageList = ({ onEdit }) => {
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();

  return (
    <div className="message-list">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className={`message ${msg.status === 'unread' ? 'unread' : ''}`}
        >
          <p><strong>{msg.sender}</strong> ➡️ {msg.receiver}</p>
          <p>{msg.message}</p>
          <small>{msg.timestamp}</small>
          <div className="buttons">
            <button onClick={() => onEdit(msg)}>✏️</button>
            <button onClick={() => dispatch(deleteMessage(msg.id))}>🗑️</button>
            {msg.status === 'unread' ? (
              <button onClick={() => dispatch(markAsRead(msg.id))}>✔️ Read</button>
            ) : (
              <button onClick={() => dispatch(markAsUnread(msg.id))}>❗Unread</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;