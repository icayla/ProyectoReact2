import React from 'react'
import Boton from './Boton'
import ListaTarjetas from './ListaTarjetas'
import Carrito from './Carrito'





const ProductosDestacados = (props) => {
  return (
    <div className='grid grid-cols-1 flex-col lg:flex-row mx-10 '>  
  <figure className='productos  rounded-2x1 bg-gradient-to-r from-slate-200 via-gray-300 to-stone-400 p-1 shadow-xl'>
   <a href='#' className='block group'>
   <img src= {props.objeto.urlimg} title= "lentes" className='h-25 object-cover rounded-x1' ></img>
   </a>
   
  
         <figcaption>
          <h3 className='flex-auto text-lg font-semibold text-slate-800'>{props.objeto.nombre}</h3>
          <p className="text-lg font-semibold text-black-500">{props.objeto.precio}</p>
          <div className='w-full flex-none mt-2 order-1 text-2x font-bold text-green-600'> En stock</div>
        
         </figcaption>

         
         <Boton/>
        
         
          </figure>
          </div>
  
  
    )
    
  }


export default ProductosDestacados