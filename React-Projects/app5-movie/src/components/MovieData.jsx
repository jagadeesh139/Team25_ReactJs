
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeMovie } from '../features/movies/moviesSlice';

const MovieData = ({ onEdit }) => {
  const { movies, searchGenre } = useSelector(state => state.movies);
  const dispatch = useDispatch();

  const filteredMovies = searchGenre
    ? movies.filter(movie => movie.genre.toLowerCase().includes(searchGenre.toLowerCase()))
    : movies;

    
  return (
    <div className="movie-list">
      <h2>Movie List</h2>
      {filteredMovies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        filteredMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <h3>{movie.title} ({movie.releaseYear})</h3>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Actors:</strong> {movie.actors.join(', ')}</p>
            <button onClick={() => onEdit(movie)}>Edit</button>
            <button onClick={() => dispatch(removeMovie(movie.id))}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieData;
