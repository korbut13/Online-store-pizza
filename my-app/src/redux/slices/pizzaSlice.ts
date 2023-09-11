import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from 'axios';
import { RootState } from "../store";

export type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

export type PizzaInStore = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  count:number;
}

interface PizzaState {
  items: PizzaInStore[],
  status: 'loading' | 'success' | 'error'
}

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

export const selectPizza = (state:RootState) => state.pizzaSlice;
export const {setItems} = pizzaSlice.actions;

export default pizzaSlice.reducer;
