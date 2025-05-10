import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCharacter } from '../redux/characterSlice';

const CharacterList = ({ setEditData }) => {
  const { characters } = useSelector((state) => state.character);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const filtered = characters.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <input placeholder="Search by name" value={search} onChange={(e) => setSearch(e.target.value)} className="border p-2 mb-4 w-full" />

      {filtered.map((c) => (
        <div key={c.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{c.name} (Level {c.level})</h3>
          <p>HP: {c.healthPoints}, Mana: {c.manaPoints}</p>
          <p>Strength: {c.strength}, Agility: {c.agility}</p>
          <div className="mt-2">
            <button onClick={() => setEditData(c)} className="bg-yellow-400 px-3 py-1 rounded mr-2">Edit</button>
            <button onClick={() => dispatch(deleteCharacter(c.id))} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;