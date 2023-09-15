import { PizzaCart } from "../redux/cart/types";
import { getTotalPrice } from "./getTotalPrice";

export const getItemsFromLS = () => {
  const data = localStorage.getItem('items');
  if(data){
    const items = JSON.parse(data) as PizzaCart[];
    const totalPrice =  getTotalPrice(items);
    return {
      items,
      totalPrice
    }
  }else return {
    items:[],
    totalPrice:0
  };
}
