import { createSlice } from "@reduxjs/toolkit";

const initialState = {
totalPrice: 0,
items: []
}

export const cartSlice = createSlice({
  name:'cart',
  initialState,
  reducers:{
    addItem(state, action){
      const findItem = state.items.find((item) => (item.id === action.payload.id) &&
      (item.type === action.payload.type) &&
      (item.size === action.payload.size));

      if(findItem){
        findItem.count++;
      }else{
        state.items.push({...action.payload, count:1});
      }
      state.totalPrice = state.totalPrice + action.payload.price;
    },
    decrementItem(state, action){
      const indexItemToRemove = state.items.findIndex((item) => (item.id === action.payload.id) &&
      (item.type === action.payload.type) &&
      (item.size === action.payload.size));

      const itemToRemove = state.items[indexItemToRemove];

      if(itemToRemove.count === 1){
        state.totalPrice = state.totalPrice - itemToRemove.price;
        state.items.splice(indexItemToRemove, 1);
      }else{
        itemToRemove.count--;
        state.totalPrice = state.totalPrice - itemToRemove.price;
      }
    },
    removeItem(state, action){
      const indexItemToRemove = state.items.findIndex((item) => (item.id === action.payload.id) &&
      (item.type === action.payload.type) &&
      (item.size === action.payload.size));
      const itemToRemove = state.items[indexItemToRemove];
      state.totalPrice = state.totalPrice - (itemToRemove.count*itemToRemove.price)
      state.items.splice(indexItemToRemove, 1);
    },
    clearItems(state){
      state.items = [];
      state.totalPrice = 0;
    }
  }
});

export const {addItem, decrementItem, removeItem, clearItems} = cartSlice.actions;

export default cartSlice.reducer;
