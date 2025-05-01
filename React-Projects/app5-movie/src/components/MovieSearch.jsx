
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchGenre } from '../features/movies/moviesSlice';

const MovieSearch = () => {
  const dispatch = useDispatch();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by genre..."
        onChange={(e) => dispatch(setSearchGenre(e.target.value))}
      />
    </div>
  );
};

export default MovieSearch;
