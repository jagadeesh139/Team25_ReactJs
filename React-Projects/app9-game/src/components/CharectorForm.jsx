
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCharacter, updateCharacter } from '../redux/characterSlice';

const CharacterForm = ({ editData, setEditData }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: '',
    level: 1,
    healthPoints: 100,
    manaPoints: 50,
    strength: 10,
    agility: 10,
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
      dispatch(updateCharacter({ id: editData.id, updates: form }));
      setEditData(null);
    } else {
      dispatch(addCharacter(form));
    }
    setForm({ name: '', level: 1, healthPoints: 100, manaPoints: 50, strength: 10, agility: 10 });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded mb-4">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="block w-full mb-2 border p-2" />
      <input name="level" type="number" placeholder="Level" value={form.level} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <input name="healthPoints" type="number" placeholder="HP" value={form.healthPoints} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <input name="manaPoints" type="number" placeholder="Mana" value={form.manaPoints} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <input name="strength" type="number" placeholder="Strength" value={form.strength} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <input name="agility" type="number" placeholder="Agility" value={form.agility} onChange={handleChange} className="block w-full mb-2 border p-2" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {editData ? 'Update' : 'Add'} Character
      </button>
    </form>
  );
};

export default CharacterForm;
