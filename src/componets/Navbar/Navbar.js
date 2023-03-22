import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import TotalItems from "../CartContent/TotalItems";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(dataContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link to={"/"}>
          <h1 className="navbar-logo">Glasses Shop</h1>
        </Link>
      
                <Link className="nav-link" to="#">¿Quienes somos?</Link>
           
   
                <Link className="nav-link" to="#">Productos</Link>
           
                <Link className="nav-link" to="#">¿Como comprar?</Link>
  
             
                <Link className="nav-link" to="#">Contacto</Link>
          
               <Link className="seeCarrito" to={"/cart"}>
          🛒
          {cart.length > 0 ? <TotalItems /> : null}
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

