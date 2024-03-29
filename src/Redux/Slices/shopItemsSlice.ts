import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';
import { Sort } from './filterSlice';

type FetchShopItemsArgs = {
  category: string;
  currentPage: number;
  sortType: Sort;
};

const FETCH_DATA = process.env.REACT_APP_ITEMS_DATA;
export const fetchShopItems = createAsyncThunk(
  'shopItems/fetchShopItemsStatus',
  async (params: FetchShopItemsArgs) => {
    const { category, currentPage, sortType } = params;
    const res = await axios.get<ShopItems[]>(
      `${FETCH_DATA}/items?page=${currentPage}&${category}&sortBy=${sortType.sortProperty}&order=desc`,
    );
    return res.data;
  },
);

export type ShopItems = {
  id: string;
  img: string;
  cardTittle: string;
  cardName: string;
  size: number;
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
    setItems(
      state: { items: ShopItems[] },
      action: PayloadAction<ShopItems[]>,
    ) {
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
});
export const shopItemsSelector = (state: RootState) => state.shopItemsReducer;
export const { setItems } = shopItemsSlice.actions;
export default shopItemsSlice.reducer;
