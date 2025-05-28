import React from 'react';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
};

export default TodoList;