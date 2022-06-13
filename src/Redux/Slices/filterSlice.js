import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoriesType: 0,
  sortType: {
    price: 'по цене',
    popular: 'по популярности',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoriesType(state, action) {
      state.categoriesType = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
  },
});
export const { setCategoriesType, setSort } = filterSlice.actions;
export default filterSlice.reducer;
