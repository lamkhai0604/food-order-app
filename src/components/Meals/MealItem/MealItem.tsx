import { useContext } from "react";
import CartContext, { IProductItem } from "store/CartContext";
import MealItemForm from "./MealItemForm";
import "./MealItem.css";

interface IMealItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

const MealItem = (props: IMealItemProps) => {
  const cartCtx = useContext(CartContext);

  const handleAddToCart = (amount: number) => {
    let item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    } as IProductItem;
    cartCtx.addItem && cartCtx.addItem(item);
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{"$" + props.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          onAddToCart={(amount: number) => handleAddToCart(amount)}
        />
      </div>
    </li>
  );
};

export default MealItem;
