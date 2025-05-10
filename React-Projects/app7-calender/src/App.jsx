import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';

const App = () => {
  const [editData, setEditData] = useState(null);

  return (
    <Provider store={store}>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">📅 Calendar Appointments</h1>
        <AppointmentForm editData={editData} setEditData={setEditData} />
        <AppointmentList setEditData={setEditData} />
      </div>
    </Provider>
  );
};

export default App;