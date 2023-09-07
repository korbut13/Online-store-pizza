import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzaStatus',
  async (url) => {
    const {data} = await axios.get(url);
    return data
  }
);

const initialState = {
  items:[],
  status: 'loading'
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers:{
    setItems(state, action){
      state.items = action.payload;
    }
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state, action) => {
      state.status = 'error';
      state.items = [];
    }
  }
});

export const selectPizza = (state) => state.pizzaSlice;
export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;
