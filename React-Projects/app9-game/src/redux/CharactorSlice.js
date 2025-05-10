import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  characters: [],
};

const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    addCharacter: (state, action) => {
      state.characters.push({ id: uuidv4(), ...action.payload });
    },
    updateCharacter: (state, action) => {
      const { id, updates } = action.payload;
      const index = state.characters.findIndex((c) => c.id === id);
      if (index !== -1) {
        state.characters[index] = { ...state.characters[index], ...updates };
      }
    },
    deleteCharacter: (state, action) => {
      state.characters = state.characters.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addCharacter, updateCharacter, deleteCharacter } = characterSlice.actions;
export default characterSlice.reducer;