
import React, { useState } from 'react';
import ButtonPanel from './Buttonpanel';


const Dashboard = () => {
  const [message, setMessage] = useState("Waiting for action...");

  const handleChildEvent = (msg) => {
    setMessage(msg);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <ButtonPanel onNotifyParent={handleChildEvent} />
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
