import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './Slices/filterSlice';
import basketReducer from './Slices/basketSlice';
import shopItemsReducer from './Slices/shopItemsSlice';

export const store = configureStore({
  reducer: {
    filterReducer,
    basketReducer,
    shopItemsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
