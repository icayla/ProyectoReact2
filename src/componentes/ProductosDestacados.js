import React from 'react'
import Boton from './Boton'
import lentes from "../asset/img/lentes.png"
import image from "../asset/img/image.png"
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
          <h3 className='text-2x1 font-medium'>{props.objeto.nombre}</h3>
          <p className="text-sm p-2 text-center tex-black-500">{props.objeto.precio}</p>
        
         </figcaption>

         
         <Boton/>
        
         
          </figure>
          </div>
  
  
    )
    
  }


export default ProductosDestacados