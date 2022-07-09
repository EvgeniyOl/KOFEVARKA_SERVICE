import { RootState } from './../store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BasketItem = {
  id: string;
  img: string;
  cardTittle: string;
  cardName: string;
  size: number[];
  cardPrice: number;
  count: number;
};

interface BasketSliceState {
  totalPrice: number;
  items: BasketItem[];
}
const initialState: BasketSliceState = {
  totalPrice: 0,
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<BasketItem>) {
      const findItems = state.items.find((obj) => obj.id === action.payload.id); // найти объект
      if (findItems) {
        findItems.count++; //если объект уже есть в корзине, увеличить счетчик на 1
      } else {
        state.items.push({
          ...action.payload, // если объекта еще нет в корзине добавить его и установить счетчик 1
          count: 1,
        });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.cardPrice * obj.count + sum;
      }, 0);
    },
    minusItem(state, action: PayloadAction<string>) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      if (findItems) {
        findItems.count--;
      }
    },
    removeItems(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const basketSelector = (state: RootState) => state.basketReducer;
export const { addItems, removeItems, clearItems, minusItem } =
  basketSlice.actions;
export default basketSlice.reducer;
