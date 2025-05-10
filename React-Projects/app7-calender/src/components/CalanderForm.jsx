
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAppointment, updateAppointment } from '../redux/appointmentSlice';

const AppointmentForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    eventName: '',
    date: '',
    time: '',
    location: '',
    description: '',
    participants: '',
  });

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      dispatch(updateAppointment({ id: editData.id, updates: form }));
      setEditData(null);
    } else {
      dispatch(addAppointment(form));
    }
    setForm({ eventName: '', date: '', time: '', location: '', description: '', participants: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input name="eventName" placeholder="Event Name" value={form.eventName} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="date" type="date" value={form.date} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="time" type="time" value={form.time} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <input name="participants" placeholder="Participants" value={form.participants} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editData ? 'Update' : 'Add'} Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
