import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clockIn, clockOut } from '../redux/timeTrackerSlice';

const TimeTrackerForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    employeeName: '',
    date: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClockIn = (e) => {
    e.preventDefault();
    dispatch(clockIn(form));
    setForm({ ...form, startTime: '' });
  };

  const handleClockOut = (e) => {
    e.preventDefault();
    dispatch(clockOut(form));
    setForm({ ...form, endTime: '' });
  };

  return (
    <form className="p-4 border rounded mb-4">
      <input
        name="employeeName"
        placeholder="Employee Name"
        value={form.employeeName}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="date"
        type="date"
        value={form.date}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <input
        name="startTime"
        type="time"
        value={form.startTime}
        onChange={handleChange}
        className="block w-full mb-2 border p-2"
      />
      <button
        type="button"
        onClick={handleClockIn}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Clock In
      </button>
      <input
        name="endTime"
        type="time"
        value={form.endTime}
        onChange={handleChange}
        className="block w-full mb-2 border p-2"
      />
      <button
        type="button"
        onClick={handleClockOut}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Clock Out
      </button>
    </form>
  );
};

export default TimeTrackerForm;