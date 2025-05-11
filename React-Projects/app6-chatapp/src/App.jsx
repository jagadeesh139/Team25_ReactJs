import React, { useState } from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import MessageSearch from './components/MessageSearch';
import { useSelector } from 'react-redux';
import './style.css';

const App = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const messages = useSelector((state) => state.chat.messages);

  const filteredMessages = messages.filter((msg) =>
    msg.message.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  return (
    <div className="app">
      <h1>💬 Chat App</h1>
      <MessageSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MessageForm
        selectedMessage={selectedMessage}
        clearSelection={() => setSelectedMessage(null)}
      />
      <MessageList onEdit={setSelectedMessage} messages={filteredMessages} />
    </div>
  );
};

export default App;