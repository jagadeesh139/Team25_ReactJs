import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  locations: [],
  weatherData: [],
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addLocation: (state, action) => {
      state.locations.push({ id: uuidv4(), ...action.payload });
    },
    removeLocation: (state, action) => {
      state.locations = state.locations.filter((loc) => loc.id !== action.payload);
    },
    updateWeatherData: (state, action) => {
      const { id, weatherInfo } = action.payload;
      const index = state.weatherData.findIndex((data) => data.id === id);
      if (index !== -1) {
        state.weatherData[index] = { ...state.weatherData[index], ...weatherInfo };
      }
    },
  },
});

export const { addLocation, removeLocation, updateWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;