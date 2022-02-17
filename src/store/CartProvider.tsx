import { ReactNode, useReducer } from "react";
import CartContext, {
  initialState,
  InitialState,
  IProductItem,
} from "./CartContext";

interface ICartProviderProps {
  children: ReactNode;
}

const cartReducer = (state = initialState, action: any) => {
  if (action.type === "ADD") {
    let updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    let existingCartItemIndex = state.items.findIndex(
      (i) => i.id === action.item.id
    );

    let existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  
  if (action.type === "REMOVE") {
    let existingCartItemIndex = state.items.findIndex(
      (i) => i.id === action.id
    );
    let existingItem = state.items[existingCartItemIndex];
    let updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
    } else {
      let updateItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }
  }
  return state;
};

const CartProvider = (props: ICartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const doAddItemToCart = (item: IProductItem) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const doRemoveItemToCart = (id: string) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: doAddItemToCart,
    removeItem: doRemoveItemToCart,
  } as InitialState;

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
