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

export interface PizzaState {
  items: PizzaInStore[],
  status: 'loading' | 'success' | 'error'
}
