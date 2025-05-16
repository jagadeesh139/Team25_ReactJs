import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Helper function to calculate hours
const calculateHours = (startTime, endTime) => {
  const start = new Date(`1970-01-01T${startTime}:00`);
  const end = new Date(`1970-01-01T${endTime}:00`);
  return (end - start) / (1000 * 60 * 60); // Convert milliseconds to hours
};

const initialState = {
  employeeRecords: [],
};

const timeTrackerSlice = createSlice({
  name: 'timeTracker',
  initialState,
  reducers: {
    clockIn: (state, action) => {
      const { employeeName, date, startTime } = action.payload;
      const record = state.employeeRecords.find(
        (record) => record.name === employeeName && record.date === date
      );
      if (!record) {
        state.employeeRecords.push({
          id: uuidv4(),
          name: employeeName,
          date,
          startTime,
          endTime: '',
          totalHours: 0,
        });
      }
    },
    clockOut: (state, action) => {
      const { employeeName, date, endTime } = action.payload;
      const record = state.employeeRecords.find(
        (record) => record.name === employeeName && record.date === date
      );
      if (record) {
        record.endTime = endTime;
        record.totalHours = calculateHours(record.startTime, record.endTime);
      }
    },
  },
});

export const { clockIn, clockOut } = timeTrackerSlice.actions;
export default timeTrackerSlice.reducer;