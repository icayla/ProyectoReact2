import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import Navbar from "../Navbar/Navbar";

const TotalItems = () => {
  const { cart } = useContext(dataContext);

  const itemsQuanty = cart.reduce((acc, el) => acc + el.quanty, 0);
  return <span className='cart-items-total'>{itemsQuanty}</span>;
  
  
};

export default TotalItems;
