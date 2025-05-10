import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  reservations: [],
  roomCategories: ['Single', 'Double', 'Suite'],
};

const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action) => {
      state.reservations.push({ id: uuidv4(), ...action.payload });
    },
    cancelReservation: (state, action) => {
      state.reservations = state.reservations.filter((res) => res.id !== action.payload);
    },
    updateReservation: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.reservations.findIndex((res) => res.id === id);
      if (index !== -1) {
        state.reservations[index] = { ...state.reservations[index], ...updates };
      }
    },
  },
});

export const { addReservation, cancelReservation, updateReservation } = reservationSlice.actions;
export default reservationSlice.reducer;