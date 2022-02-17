import { Fragment } from "react";
import mealsImg from "assets/meals.jpg";
import HeaderCardBtn from "./HeaderCardBtn"
import "./Header.css";

interface IHeaderProps {
  handelOpenToggleModal: () => void;
}

const Header = (props: IHeaderProps) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCardBtn onClick={props.handelOpenToggleModal} />
      </header>
      <div className="main-image">
        <img src={ mealsImg } alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
