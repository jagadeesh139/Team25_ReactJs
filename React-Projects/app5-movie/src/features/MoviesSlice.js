import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [
    {
      id: 1,
      title: 'The Shawshank Redemption',
      director: 'Frank Darabont',
      releaseYear: 1994,
      genre: 'Drama',
      rating: 9.3,
      actors: ['Tim Robbins', 'Morgan Freeman'],
    },
    {
      id: 2,
      title: 'Inception',
      director: 'Christopher Nolan',
      releaseYear: 2010,
      genre: 'Sci-Fi',
      rating: 8.8,
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt'],
    },
    {
      id: 3,
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      releaseYear: 1972,
      genre: 'Crime',
      rating: 9.2,
      actors: ['Marlon Brando', 'Al Pacino'],
    },
    {
      id: 4,
      title: 'The Dark Knight',
      director: 'Christopher Nolan',
      releaseYear: 2008,
      genre: 'Action',
      rating: 9.0,
      actors: ['Christian Bale', 'Heath Ledger'],
    },
    {
      id: 5,
      title: 'Forrest Gump',
      director: 'Robert Zemeckis',
      releaseYear: 1994,
      genre: 'Romance',
      rating: 8.8,
      actors: ['Tom Hanks', 'Robin Wright'],
    },
  ],
  searchGenre: '',
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push({ ...action.payload, id: Date.now() });
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
    updateMovie: (state, action) => {
      const index = state.movies.findIndex(m => m.id === action.payload.id);
      if (index !== -1) state.movies[index] = action.payload;
    },
    setSearchGenre: (state, action) => {
      state.searchGenre = action.payload;
    },
  },
});

export const { addMovie, removeMovie, updateMovie, setSearchGenre } = moviesSlice.actions;
export default moviesSlice.reducer;