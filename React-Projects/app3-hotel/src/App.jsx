
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">🏨 Hotel Reservation System</h1>
        <ReservationForm editData={editData} setEditData={setEditData} />
        <ReservationList setEditData={setEditData} />
      </div>
    </Provider>
    
  );
};

export default App;
