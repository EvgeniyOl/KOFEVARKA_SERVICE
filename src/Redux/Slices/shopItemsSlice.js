import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShopItems = createAsyncThunk(
  'shopItems/fetchShopItemsStatus',
  async (params) => {
    const { search, category, currentPage, sortType } = params;
    const res = await axios.get(
      `https://62a167b3cc8c0118ef4ade8d.mockapi.io/items?page=${currentPage}&limit=4&${category}${search}&sortBy=${sortType.sortProperty}&order=desc`
    );
    return res.data;
  }
);

const initialState = {
  items: [],
  status: 'loading', // loading | success | error
};

export const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchShopItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchShopItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchShopItems.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    },
  },
});
export const { setItems } = shopItemsSlice.actions;
export default shopItemsSlice.reducer;
