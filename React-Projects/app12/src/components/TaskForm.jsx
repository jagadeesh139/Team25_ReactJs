import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const TaskForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    description: '',
    dueDate: '',
    priority: 'low',
    status: 'pending',
    category: 'Work'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(form));
    setForm({
      name: '',
      description: '',
      dueDate: '',
      priority: 'low',
      status: 'pending',
      category: 'Work',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        name="name"
        placeholder="Task Name"
        value={form.name}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <textarea
        name="description"
        placeholder="Task Description"
        value={form.description}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="dueDate"
        type="date"
        value={form.dueDate}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <select name="priority" value={form.priority} onChange={handleChange} className="block w-full mb-2 border p-2">
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <select name="category" value={form.category} onChange={handleChange} className="block w-full mb-2 border p-2">
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Urgent">Urgent</option>
        <option value="Other">Other</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;