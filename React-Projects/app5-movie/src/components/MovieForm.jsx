import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMovie, updateMovie } from '../features/movies/moviesSlice';

const MovieForm = ({ editData, clearEdit }) => {
  const [form, setForm] = useState({
    title: '',
    director: '',
    releaseYear: '',
    genre: '',
    rating: '',
    actors: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (editData) {
      setForm({ ...editData, actors: editData.actors.join(', ') });
    }
  }, [editData]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const movie = {
      ...form,
      releaseYear: Number(form.releaseYear),
      rating: Number(form.rating),
      actors: form.actors.split(',').map(a => a.trim()),
    };

    if (editData) {
      dispatch(updateMovie({ ...movie, id: editData.id }));
      clearEdit();
    } else {
      dispatch(addMovie(movie));
    }

    setForm({
      title: '',
      director: '',
      releaseYear: '',
      genre: '',
      rating: '',
      actors: '',
    });
  };

  return (
    <div className="form-container">
      <h2>{editData ? 'Edit Movie' : 'Add Movie'}</h2>
      {['title', 'director', 'releaseYear', 'genre', 'rating', 'actors'].map(field => (
        <input
          key={field}
          name={field}
          value={form[field]}
          onChange={handleChange}
          placeholder={field}
        />
      ))}
      <button onClick={handleSubmit}>{editData ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default MovieForm;