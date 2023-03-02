import './App.css';
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import Boton from "./componentes/Boton";
import ListaTarjetas from "./componentes/ListaTarjetas";
import ProductosDestacados from "./componentes/ProductosDestacados";
import Seccion from "./componentes/Seccion"; 
import { lista } from './utilidades/Index';
import NavBar from './components/NavBar.jsx';
import React, { useState } from "react";
import Search from "./componentes/Search";
import SearchResults from "./componentes/SearchResults";
import { BrowserRouter } from 'react-router-dom';
import CarouselComponent from './componentes/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const storeData = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' },
    // ...
  ];
  const handleSearch = searchTerm => {
    const results = storeData.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <> 
    <BrowserRouter>
    <div className="w-full bg-amber-100">
      <div className="container">
      <NavBar />
      <div className="jumbotron">
      <CarouselComponent />
       </div>
      <div className="containe">
        <Search onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </div>
      <h1 className="w-full bg-amber-100 text-2xl font-bold p-2 text-center p-3"> Productos Destacados</h1>
      </div>
      <Seccion lista={lista} />
    </div>
    </BrowserRouter>
    <Footer/>
    <Fondo />
    </>
  );
}

export default App;

