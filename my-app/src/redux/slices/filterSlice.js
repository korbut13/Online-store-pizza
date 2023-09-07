import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  categoryId: 0,
  sortId:0,
  currentPage: 1,
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action){
      state.categoryId = action.payload;
    },
    setSortId(state, action){
      state.sortId = action.payload;
    },
    setCurrentPage(state, action){
      state.currentPage = action.payload;
    },
    setSearchValue(state, action){
      state.searchValue = action.payload;
    },
    setFilters(state, action){
      state.currentPage = action.payload.currentPage;
      state.categoryId = +action.payload.categoryId;
      state.sortId = action.payload.sortId;
    }
  }
});

export const selectFilter = (state) => state.filterSlice;

export const { setCategoryId, setSortId, setCurrentPage, setFilters, setSearchValue} = filterSlice.actions

export default filterSlice.reducer
