import { configureStore } from '@reduxjs/toolkit';
import LanguageReducer from './LanguageSlice';

export const store = configureStore({
    reducer: {
        languageLearning: LanguageReducer,
    },
});