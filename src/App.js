import "./App.css";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Boton from "./componentes/Boton";
import ListaTarjetas from "./componentes/ListaTarjetas";
import Seccion from "./componentes/Seccion";
import { lista } from "./utilidades/Index";
import NavBar from "./components/NavBar.jsx";
import React, { useState } from "react";
/*import Search from "./componentes/Search";*/
/*import SearchResults from "./componentes/SearchResults";*/
import { BrowserRouter } from "react-router-dom";
import CarouselComponent from "./componentes/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
/*import Carrito from "./componentes/Carrito";*/
/*import ProductosDestacados from "./componentes/ProductosDestacados";*/
import Header from "./componentes/Header";
import CardsInfo from "./componentes/CardsInfo";
import Footer from "./componentes/Footer";
import Fondo from "./componentes/Fondo";
import cart from "./shopCart/src/cartComponets/CartContent/CartContent"


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const storeData = [
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
    // ...
  ];
  //*************************************************************** */

  /*const handleSearch = (searchTerm) => {
    const results = storeData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };*/

  return (
    <BrowserRouter>
      <div className="w-full bg-amber-100">
        <Header />
        <div className="container">
          <NavBar />
          <div className="jumbotron">
            <CarouselComponent />
          </div>
          <div className="containe">
            <Fondo />
          </div>
          <div className="containe bg-amber-100">
           <CardsInfo />
          </div>
          <h2 className="card-title text-center align-middle">
                 Productos destacados
            </h2>
         </div>
        <Seccion lista={lista} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
