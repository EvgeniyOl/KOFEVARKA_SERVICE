import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItems(state, action) {
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
    minusItem(state, action) {
      const findItems = state.items.find((obj) => obj.id === action.payload);
      findItems.count--;
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.cardPrice * obj.count - sum;
      }, 0);
    },
    removeItems(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});
export const basketSelector = (state) => state.basketReducer;
export const { addItems, removeItems, clearItems, plusItem, minusItem } =
  basketSlice.actions;
export default basketSlice.reducer;
