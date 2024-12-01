import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchParams } from '../../types';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    searchTerm: 'Pokemon',
    year: '',
    type: '',
    currentPage: 1,
  } as SearchParams,
  reducers: {
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    updateSearchParams(state, action: PayloadAction<SearchParams>) {
      state.searchTerm = action.payload.searchTerm;
      state.year = action.payload.year;
      state.type = action.payload.type;
      state.currentPage = action.payload.currentPage;
    },
  },
});

export const { changeCurrentPage, updateSearchParams } = formSlice.actions;
export const formReducer = formSlice.reducer;
