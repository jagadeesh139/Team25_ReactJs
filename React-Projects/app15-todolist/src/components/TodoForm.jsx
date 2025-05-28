import React, { useState } from 'react';

const TodoForm = ({ onAddTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter a new todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;