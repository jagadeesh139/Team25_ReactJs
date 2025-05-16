import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  vocabulary: [],
  language: 'English',
  progress: 0,
  dailyGoal: 10,
  achievements: [],
  learningHistory: [],
};

const languageSlice = createSlice({
  name: 'languageLearning',
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.vocabulary.push({ id: uuidv4(), ...action.payload });
    },
    removeWord: (state, action) => {
      state.vocabulary = state.vocabulary.filter(
        (word) => word.id !== action.payload
      );
    },
    testKnowledge: (state, action) => {
      // Simulate a simple test logic to track progress
      const { correctAnswers } = action.payload;
      state.progress = (correctAnswers / state.dailyGoal) * 100;
      if (state.progress === 100) {
        state.achievements.push('Completed daily goal');
      }
    },
  },
});

export const { addWord, removeWord, testKnowledge } = languageSlice.actions;
export default languageSlice.reducer;