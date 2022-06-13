import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Slices/filterSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
  },
});
