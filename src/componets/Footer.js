import React from 'react'

const Footer = () => {
  return (
    <div className='bg-neutral-900 text-center justify-center text-white'>
        <div className='container px-6 pt-6'>
          <div className='text-1xl font-bold '>Nuestras redes sociales</div>
            <div className='mb-6 flex justify-center'>
                <a href='#'
                type='button'
                className=' m-1 rounded-full border-2 border-white items-center justify-center'>
                     <img src='https://cdn-icons-png.flaticon.com/512/3670/3670124.png' className='h-5 w-5' ></img>
                </a>
                <a href='#'
                type='button'
                className=' m-1 rounded-full border-2 border-white items-center justify-center'>
                     <img src='https://cdn-icons-png.flaticon.com/128/3955/3955024.png' className='h-5 w-5' ></img>
                </a>
                <a href='#'
                type='button'
                className=' m-1 rounded-full border-2 border-white items-center justify-center'>
                     <img src='https://cdn-icons-png.flaticon.com/128/4096/4096132.png' className='h-5 w-5' ></img>
                </a>
                
                <a href="#"
                type='button'
                className=' m-1 rounded-full border-2 border-white items-center justify-center'>
                     <img src= 'https://cdn-icons-png.flaticon.com/128/2913/2913990.png' className='h-5 w-5' ></img>
                </a>
                 
                          </div>
                          <div>
                              <a className='flex items-center justify-center text-1xl font-bold'>
                                   <img src="https://cdn-icons-png.flaticon.com/128/1534/1534938.png" className= "h-5 w-5 "></img>
                                   Equipo Glasses Shop </a>
                          </div>
                               </div>  
        
</div>
  )
}

export default Footer