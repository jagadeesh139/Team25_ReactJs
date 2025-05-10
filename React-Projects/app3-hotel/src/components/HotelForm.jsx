import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation, updateReservation } from '../redux/reservationSlice';

const ReservationForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    guestName: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    status: 'Booked',
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
      dispatch(updateReservation({ id: editData.id, updates: form }));
      setEditData(null);
    } else {
      dispatch(addReservation(form));
    }
    setForm({ guestName: '', roomType: '', checkInDate: '', checkOutDate: '', status: 'Booked' });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input name="guestName" placeholder="Guest Name" value={form.guestName} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <select name="roomType" value={form.roomType} onChange={handleChange} required className="block w-full mb-2 border p-2">
        <option value="">Select Room Type</option>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Suite">Suite</option>
      </select>
      <input name="checkInDate" type="date" value={form.checkInDate} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="checkOutDate" type="date" value={form.checkOutDate} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <select name="status" value={form.status} onChange={handleChange} required className="block w-full mb-2 border p-2">
        <option value="Booked">Booked</option>
        <option value="Checked In">Checked In</option>
        <option value="Checked Out">Checked Out</option>
        <option value="Cancelled">Cancelled</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editData ? 'Update' : 'Add'} Reservation
      </button>
    </form>
  );
};

export default ReservationForm;