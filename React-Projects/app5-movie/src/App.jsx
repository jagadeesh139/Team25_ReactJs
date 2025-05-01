import React, { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import './styles.css';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    <div className="app">
      <h1>🎬 Movie Database</h1>
      <MovieSearch />
      <MovieForm editData={editData} clearEdit={() => setEditData(null)} />
      <MovieList onEdit={(data) => setEditData(data)} />
    </div>
  );
};

export default App;