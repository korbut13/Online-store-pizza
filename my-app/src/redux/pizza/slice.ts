import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';

import { Pizza, PizzaState } from "./types";


export const fetchPizzas  = createAsyncThunk(
  'pizza/fetchPizzaStatus',
  async (url:string) => {
    const {data} = await axios.get<Pizza[]>(url);
    return data;
  }
);

const initialState:PizzaState = {
  items:[],
  status: 'loading'
}

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers:{
    setItems(state, action:PayloadAction<Pizza[]>){
      const pizzas = action.payload.map((pizza) => {
        return {...pizza, count:0}
      })
      state.items = pizzas;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending,(state) => {
      state.status = 'loading';
      state.items = [];
    });
    builder.addCase(fetchPizzas.fulfilled,(state, action:PayloadAction<Pizza[]>) => {
      const pizzas = action.payload.map((pizza) => {
        return {...pizza, count:0}
      })
      state.items = pizzas;
      state.status = 'success'
    });
    builder.addCase(fetchPizzas.rejected,(state) => {
      state.status = 'error';
      state.items = [];
    });
  }
});


export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;
