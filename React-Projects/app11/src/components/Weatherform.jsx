
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addLocation } from '../redux/weatherSlice';

const WeatherForm = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addLocation({ name: location }));
    setLocation('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input
        placeholder="Enter location"
        value={location}
        onChange={handleChange}
        required
        className="block w-full mb-2 border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Location
      </button>
    </form>
  );
};

export default WeatherForm;
