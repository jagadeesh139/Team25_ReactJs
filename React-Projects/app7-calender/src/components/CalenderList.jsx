
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAppointment } from '../redux/appointmentSlice';

const AppointmentList = ({ setEditData }) => {
  const { appointments } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const today = new Date().toISOString().split('T')[0];

  const filteredAppointments = appointments.filter((a) => {
    const matchSearch = a.eventName.toLowerCase().includes(search.toLowerCase()) || a.location.toLowerCase().includes(search.toLowerCase());
    if (filter === 'upcoming') return a.date >= today && matchSearch;
    if (filter === 'missed') return a.date < today && matchSearch;
    return matchSearch;
  });

  return (
    <div>
      <div className="flex mb-4 gap-2">
        <input placeholder="Search by event or location" value={search} onChange={(e) => setSearch(e.target.value)} className="border p-2 flex-1" />
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="border p-2">
          <option value="all">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="missed">Missed</option>
        </select>
      </div>

      {filteredAppointments.map((a) => (
        <div key={a.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{a.eventName}</h3>
          <p>{a.date} at {a.time}</p>
          <p>Location: {a.location}</p>
          <p>Participants: {a.participants}</p>
          <p>Description: {a.description}</p>
          <div className="mt-2">
            <button onClick={() => setEditData(a)} className="bg-yellow-400 px-3 py-1 rounded mr-2">Edit</button>
            <button onClick={() => dispatch(deleteAppointment(a.id))} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentList;
