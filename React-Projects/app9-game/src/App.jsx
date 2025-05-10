import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🎮 Game Character Manager</h1>
        <CharacterForm editData={editData} setEditData={setEditData} />
        <CharacterList setEditData={setEditData} />
      </div>
    </Provider>
  );
};

export default App;