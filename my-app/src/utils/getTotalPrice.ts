import { PizzaCart } from "../redux/cart/types";

export const getTotalPrice = (items:PizzaCart[]) => {
  const totalPrice = items.reduce((prev:number, item:PizzaCart) => {
    return prev + (item.count * item.price);
  }, 0);
  return totalPrice;
}
