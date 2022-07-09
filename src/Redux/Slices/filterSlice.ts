import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Sort = {
  name: string;
  sortProperty: string;
};

export interface FilterSliceState {
  categoriesType: number;
  sortType: Sort;
}

const initialState: FilterSliceState = {
  categoriesType: 0,
  sortType: {
    name: 'По цене',
    sortProperty: 'cardPrice',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoriesType(state, action: PayloadAction<number>) {
      state.categoriesType = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sortType = action.payload;
    },
  },
});
export const { setCategoriesType, setSort } = filterSlice.actions;
export default filterSlice.reducer;
