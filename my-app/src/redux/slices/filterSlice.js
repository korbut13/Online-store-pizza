import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
    setFilters(state, action){
      state.currentPage = action.payload.currentPage;
      state.categoryId = +action.payload.categoryId;
      state.sortId = action.payload.sortId;
    }
  }
})

export const { setCategoryId, setSortId, setCurrentPage, setFilters} = filterSlice.actions

export default filterSlice.reducer
