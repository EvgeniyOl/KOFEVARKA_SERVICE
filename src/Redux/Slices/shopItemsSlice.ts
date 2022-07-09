import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Sort } from './filterSlice';

type FetchShopItemsArgs = {
  category: string;
  currentPage: number;
  sortType: Sort;
};

export const fetchShopItems = createAsyncThunk(
  'shopItems/fetchShopItemsStatus',
  async (params: FetchShopItemsArgs) => {
    const { category, currentPage, sortType } = params;
    const res = await axios.get<ShopItems[]>(
      `https://62a167b3cc8c0118ef4ade8d.mockapi.io/items?page=${currentPage}&limit=8&${category}&sortBy=${sortType.sortProperty}&order=desc`,
    );
    return res.data;
  },
);

type ShopItems = {
  id: string;
  img: string;
  cardTittle: string;
  cardName: string;
  sizes: number[];
  cardText: string;
  cardPrice: number;
  count: number;
};

interface ShopItemsSliceState {
  items: ShopItems[];
  status: 'loading' | 'success' | 'error';
}

const initialState: ShopItemsSliceState = {
  items: [],
  status: 'loading', // loading | success | error
};

export const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ShopItems[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopItems.pending, (state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchShopItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchShopItems.rejected, (state) => {
      state.status = 'error';
      state.items = [];
    });
  },
  // extraReducers: {
  //   [fetchShopItems.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchShopItems.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchShopItems.rejected]: (state, action) => {
  //     state.status = 'error';
  //     state.items = [];
  //   },
  // },
});
export const { setItems } = shopItemsSlice.actions;
export default shopItemsSlice.reducer;
