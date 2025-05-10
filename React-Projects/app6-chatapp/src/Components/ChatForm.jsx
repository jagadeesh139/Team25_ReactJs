import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendMessage, editMessage } from '../features/ChatSlice';

const MessageForm = ({ selectedMessage, clearSelection }) => {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedMessage) {
      setSender(selectedMessage.sender);
      setReceiver(selectedMessage.receiver);
      setMessage(selectedMessage.message);
    }
  }, [selectedMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sender || !receiver || !message) return;

    if (selectedMessage) {
      dispatch(editMessage({ id: selectedMessage.id, newText: message }));
      clearSelection();
    } else {
      dispatch(sendMessage(sender, receiver, message));
    }

    setSender('');
    setReceiver('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Sender"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
      />
      <input
        type="text"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
      />
      <textarea
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">{selectedMessage ? 'Update' : 'Send'}</button>
      {selectedMessage && (
        <button type="button" onClick={clearSelection} className="cancel">
          Cancel Edit
        </button>
      )}
    </form>
  );
};

export default MessageForm;