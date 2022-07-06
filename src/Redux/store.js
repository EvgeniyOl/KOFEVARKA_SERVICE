import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Slices/filterSlice';
import basketReducer from './Slices/basketSlice.js';
import shopItemsReducer from './Slices/shopItemsSlice.js';

export const store = configureStore({
  reducer: {
    filterReducer,
    basketReducer,
    shopItemsReducer,
  },
});
