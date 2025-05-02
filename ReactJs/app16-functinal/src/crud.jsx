import React, { useState } from 'react';

const CrudApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  // Add or Update Task
  const handleAddOrUpdate = () => {
    if (input.trim() === '') return;

    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = input;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, input]);
    }

    setInput('');
  };

  // Edit Task
  const handleEdit = (index) => {
    setInput(tasks[index]);
    setEditIndex(index);
  };

  // Delete Task
  const handleDelete = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
    setEditIndex(null);
    setInput('');
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>React CRUD TODO App</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={handleAddOrUpdate}>
        {editIndex !== null ? 'Update' : 'Add'}
      </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleEdit(index)} style={{ marginLeft: 10 }}>
              Edit
            </button>
            <button onClick={() => handleDelete(index)} style={{ marginLeft: 5 }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudApp;
