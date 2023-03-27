import React from 'react'

const Fondo = () => {
  return (
    <section className='bg-amber-100 h-full grid grid-cols-1 lg:grid-cols-8'>
        <div className='md: col-span-5 flex items-center justify-center p-8'>
        <div>
            <h1 className='text-4xl font-bold'>Bienvenidos a <span className='text-red-600 p-3 border-4'>Glasses SHOP</span></h1>
            <p className='p-6 text-gray-600 text-lg'>Somos una tienda online dedicada excluvisamente a la venta de lentes, donde vas a encontrar articulos de buena calidad y una atención de primer nivel.</p>
          <div>
            <button className='bg-violet-600 text-white font-bold py-2 px-6 rounded-xl text-1xl'>Contactanos</button>
          </div>
        </div>
        </div>
        <div className='w-full md: col-span-3'>
        <img src ="https://www.generaloptica.es/media/wysiwyg/cristales-graduados_1.jpg" className='w-full' title="Glasses SHOP"></img>
 
            </div>
    </section>
  )
}

export default Fondo
