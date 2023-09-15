import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { FilterState } from './types';


const initialState:FilterState = {
  searchValue: '',
  categoryId: 0,
  sortId:0,
  currentPage: 1,
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action:PayloadAction<number>){
      state.categoryId = action.payload;
    },
    setSortId(state, action:PayloadAction<number>){
      state.sortId = action.payload;
    },
    setCurrentPage(state, action:PayloadAction<number>){
      state.currentPage = action.payload;
    },
    setSearchValue(state, action:PayloadAction<string>){
      state.searchValue = action.payload;
    },
    setFilters(state, action:PayloadAction<FilterState>){
      state.currentPage = action.payload.currentPage;
      state.categoryId = +action.payload.categoryId;
      state.sortId = action.payload.sortId;
    }
  }
});

export const { setCategoryId, setSortId, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer
