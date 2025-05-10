import React from 'react';

const MessageSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search messages..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search"
    />
  );
};

export default MessageSearch;