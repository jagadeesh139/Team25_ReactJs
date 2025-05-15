
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  appointments: [],
  eventCategories: ['Meeting', 'Birthday', 'Holiday', 'Conference'],
  holidays: ['2025-12-25', '2025-01-01'],
};

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: { 
    addAppointment: (state, action) => {
      state.appointments.push({ id: uuidv4(), ...action.payload });
    },
    updateAppointment: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.appointments.findIndex((a) => a.id === id);
      if (index !== -1) {
        state.appointments[index] = { ...state.appointments[index], ...updates };
      }
    },
    deleteAppointment: (state, action) => {
      state.appointments = state.appointments.filter((a) => a.id !== action.payload);
    },
  },
});

export const { addAppointment, updateAppointment, deleteAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;
