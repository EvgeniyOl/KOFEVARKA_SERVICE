import { RootState } from '../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBasketLS } from '../../utils/getBasketLocalStorage';
import { calcTotalPrice } from '../../utils/calcTotalPrice';

export type BasketItem = {
  id: string;
  img: string;
  cardTittle: string;
  cardName: string;
  size: number;
  cardPrice: number;
  count: number;
};

export interface BasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}

const { items, totalPrice } = getBasketLS();
const initialState: BasketSliceState = {
  totalPrice,
  items,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    saveItemsLS(state: BasketSliceState) {
      const json = JSON.stringify(state.items);
      localStorage.setItem('basketItems', json);
    },
    addItems(state: BasketSliceState, action: PayloadAction<BasketItem>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id); // найти объект
      if (findItems) {
        findItems.count += 1; //если объект уже есть в корзине, увеличить счетчик на 1
      } else {
        state.items.push({
          ...action.payload, // если объекта еще нет в корзине добавить его и установить счетчик 1
          count: 1,
        });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    minusItem(state: BasketSliceState, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems) {
        findItems.count--;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItems(state: BasketSliceState, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearItems(state: BasketSliceState) {
      state.items = [];
      state.totalPrice = 0;
      window.localStorage.clear();
    },
  },
});
export const basketSelector = (state: RootState) => state.basketReducer;
export const { addItems, removeItems, clearItems, minusItem, saveItemsLS } =
  basketSlice.actions;
export default basketSlice.reducer;
