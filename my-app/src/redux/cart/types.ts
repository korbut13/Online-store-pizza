export type PizzaCart = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: string;
  size: number;
  count: number;
}

export interface CartState {
  totalPrice: number,
  items: PizzaCart[],
}
