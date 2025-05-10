import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancelReservation } from '../redux/reservationSlice';

const ReservationList = ({ setEditData }) => {
  const { reservations } = useSelector((state) => state.reservation);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const filteredReservations = reservations.filter((res) =>
    res.guestName.toLowerCase().includes(search.toLowerCase()) ||
    res.roomType.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex mb-4 gap-2">
        <input placeholder="Search by guest or room" value={search} onChange={(e) => setSearch(e.target.value)} className="border p-2 flex-1" />
      </div>

      {filteredReservations.map((res) => (
        <div key={res.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{res.guestName}</h3>
          <p>Room Type: {res.roomType}</p>
          <p>Check-in: {res.checkInDate}</p>
          <p>Check-out: {res.checkOutDate}</p>
          <p>Status: {res.status}</p>
          <div className="mt-2">
            <button onClick={() => setEditData(res)} className="bg-yellow-400 px-3 py-1 rounded mr-2">Edit</button>
            <button onClick={() => dispatch(cancelReservation(res.id))} className="bg-red-500 text-white px-3 py-1 rounded">Cancel</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;