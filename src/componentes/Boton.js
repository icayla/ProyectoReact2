
/*Boton principal*/
const Boton = (props) => {
  return (
   
  
    <button onClick={()=> props.onAdd(props.product)} className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"> Comprar </button>
    
  )
}

export default Boton
