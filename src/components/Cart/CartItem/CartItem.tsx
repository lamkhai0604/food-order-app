import { IProductItem } from "store/CartContext";
import "./CartItem.css";

interface ICartItemProps {
  item: IProductItem;
  onAdd?: (item: IProductItem) => void;
  onRemove?: (id: string) => void;
}

const CartItem = (props: ICartItemProps) => {
  return (
    <li className="cart-item">
      <div>
        <h2>{props.item.name}</h2>
        <div className="summary">
          <span className="price">{`$${props.item.price.toFixed(2)}`}</span>
          <span className="amount">x {props.item.amount}</span>
        </div>
      </div>
      <div className="actions">
        <button onClick={props.onRemove && props.onRemove.bind(null, props.item.id)}>−</button>
        <button onClick={props.onAdd && props.onAdd.bind(null, props.item)}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
