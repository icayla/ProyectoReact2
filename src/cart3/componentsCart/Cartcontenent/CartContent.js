import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import CartTotal from "../Cartcontenent/CartTotal"


import "./CartContent.css";
import Navbar from "../../../components/NavBar";

const CartContent = () => {
  const { cart } = useContext(dataContext);

  return (
    <>
    <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>Your cart is empty</h2>
      )}
    </>
  );
};

export default CartContent;
