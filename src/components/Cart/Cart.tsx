import Modal from "components/UI/Modal/Modal";
import { useContext } from "react";
import CartContext, { IProductItem } from "store/CartContext";
import "./Cart.css";
import CartItem from "./CartItem/CartItem";

interface ICartProps {
  onClose: () => void;
}

const Cart = (props: ICartProps) => {
  const cartCtx = useContext(CartContext);

  const doAddItemToCart = (item: IProductItem) => {
    if (item) cartCtx.addItem && cartCtx.addItem({...item, amount: 1});
  };

  const doRemoveItemToCart = (id: string) => {
    cartCtx.removeItem && cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className="cart-items">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onAdd={doAddItemToCart.bind(null, item)}
            onRemove={doRemoveItemToCart.bind(null, item.id)}
          />
        ))}
      </ul>
      <div className="total">
        <span>Total Amount</span>
        <span>{`$${cartCtx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
