import React from 'react';
import { useSelector } from 'react-redux';

const TimeTrackerList = () => {
  const { employeeRecords } = useSelector((state) => state.timeTracker);

  return (
    <div>
      {employeeRecords.map((record) => (
        <div key={record.id} className="border p-3 rounded mb-2">
          <h3 className="font-bold">{record.name}</h3>
          <p>Date: {record.date}</p>
          <p>Start Time: {record.startTime}</p>
          <p>End Time: {record.endTime}</p>
          <p>Total Hours: {record.totalHours}</p>
        </div>
      ))}
    </div>
  );
};

export default TimeTrackerList;