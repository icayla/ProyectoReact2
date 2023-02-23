import React from 'react'
import Boton from './Boton'
import ListaTarjetas from './ListaTarjetas'
import Carrito from './Carrito'



/* productos utilizando tailwind css*/

const ProductosDestacados = (props) => {
  return (
    
    <div className='grid grid-cols-1 flex-col lg:flex-row mx-10 '>  
  
  
  <figure className='productos  rounded-2x1 bg-gradient-to-r from-slate-200 via-gray-300 to-stone-400 p-1 shadow-xl'>
   <div className="flex-none w-full h-30">
   <a href='#' className='block group'>
   <img src= {props.objeto.urlimg} title= "lentes" className='h-25 w-35 object-cover rounded-x1' ></img>
   </a> </div>
  
         <figcaption>
          <h3 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">{props.objeto.nombre}</h3>
          <p className="w-full flex-none mt-2 order-1 text3xl font-bold text-violet-600">{props.objeto.precio}</p>
          <div className="w-full flex-none mt-2 order-1 text-2x1 font-bold text-green-700">
            En stock
          </div>
          
         </figcaption>
         <Boton/>
          
         
          </figure>
          </div>
  
  
    )
    
  }


export default ProductosDestacados