import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "components/Meals/Meals";
import Cart from "components/Cart/Cart";
import CartProvider from "store/CartProvider";

function App() {
  const [toggleModal, setToggleModal] = useState(false);

  const handelOpenToggleModal = () => setToggleModal(true);

  const handelCloseToggleModal = () => setToggleModal(false);

  return (
    <CartProvider>
      {toggleModal && <Cart onClose={handelCloseToggleModal} />}

      <Header handelOpenToggleModal={handelOpenToggleModal} />

      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
