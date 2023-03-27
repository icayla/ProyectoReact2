import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import TotalItems from "../CartContent/TotalItems";



const Navbar = () => {
  const { cart } = useContext(dataContext);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
    <Link to={"/"}>
          <h4 className="text-1xl font-bold px-6 py-2 mx-4 bg-red-500 text-white">Glasses Shop</h4>
        </Link>

    </div>
    <div className="block lg:hidden">
      <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div className="text-md lg:flex-grow">
      <Link className="text-white font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to="#">¿Quienes somos?</Link>
      <Link className="text-white font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to="#">¿Donde comprar?</Link>
      <Link className="text-white font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to="#">Nuestra Mision</Link>
      <Link className="text-white font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to="#">Nuestra Vision</Link>
      <Link className="text-white font-bold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8" to="#">Nuestros Valores</Link>

      </div>
      <div>
      <Link className= "w-full block flex-grow lg:flex lg:items-center lg:w-auto sm:w-auto"to={"/cart"}>
      {cart.length > 0 ? <TotalItems /> : null}
      <img src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" className="w-10 h-25"></img>
   
                       </Link>

     
      </div>
    </div>
  </nav>
  );
};

export default Navbar;

