import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TimeTrackerForm from './components/TimeTrackerForm';
import TimeTrackerList from './components/TimeTrackerList';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">⏰ Employee Time Tracker</h1>
        <TimeTrackerForm editData={editData} setEditData={setEditData} />
        <TimeTrackerList />
      </div>
    </Provider>
  );
};

export default App;