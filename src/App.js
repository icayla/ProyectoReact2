import React, { useState } from "react";
import NavBar from "./componentes/NavBar";
import Search from "./componentes/Search";
import SearchResults from "./componentes/SearchResults";
import { BrowserRouter } from 'react-router-dom';


const App = () => {
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
    <BrowserRouter>
    <div className="container">
      <NavBar />
      <div className="jumbotron">
        <p className="lead text-center">Buscador de productos</p>
        <Search onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </div>
    </div>
    </BrowserRouter>
  );
};
export default App;