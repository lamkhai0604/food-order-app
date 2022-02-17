import React from "react";

export interface IProductItem {
  id: string;
  name: string;
  amount: number;
  price: number;
}

export interface InitialState {
  items: IProductItem[];
  totalAmount: number;
  addItem?: (item: IProductItem) => void;
  removeItem?: (id: string) => void;
}

export const initialState: InitialState = {
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
};

const CartContext = React.createContext(initialState);

export default CartContext;
