import React from 'react';


const Carrito = (props) => {
  const cartItems = props.items.map((lista) => (
    <li key={lista.id}>
      {lista.name} - ${lista.price}
      <button onClick={() => props.onRemove(lista)}>Remove</button>
    </li>
  ));

  return (
    <div>
      <h2>Cart</h2>
      <ul>{cartItems}</ul>
      <p>Total: ${props.total}</p>
    </div>
  );
};

export default Carrito;