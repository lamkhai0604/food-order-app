import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";

import CartContext, { IProductItem } from "store/CartContext";

import "./HeaderCardBtn.css";

interface IHeaderCardBtnProps {
  onClick: () => void;
}

const HeaderCardBtn = (props: IHeaderCardBtnProps) => {
  const cartCtx = useContext(CartContext);
  const [btnHighLight, setBtnHighLight] = useState(false);
  const { items } = cartCtx;

  const numOfCartItems = cartCtx.items.reduce(
    (curNum: number, item: IProductItem) => {
      return curNum + item?.amount;
    },
    0
  );

  useEffect(() => {
    if (items.length === 0) return;

    setBtnHighLight(true);

    let timer = setTimeout(() => setBtnHighLight(false), 300)

    return () => clearTimeout(timer)
  }, [items]);

  return (
    <button
      className={`button ${btnHighLight ? "bump" : ""}`}
      onClick={props.onClick}
    >
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCardBtn;
