import React, { useState} from 'react';

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

 const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSearch(searchTerm);
  };


  return (
   <form onSubmit={handleSubmit}>
   <div className="row">
   <div className="form-group col-md-4">
   <input type="text" className="form-control my-2 my-sm-0" placeholder="Buscar lentes..." value={searchTerm} onChange={handleSearch}/>
   </div>
   <div className="form-group col-md-4">
   <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
   </div>
   </div>
 </form>

 );
};

export default Search;
