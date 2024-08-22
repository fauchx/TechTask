import React from 'react'

export default function IngresarClima() {
  return (
    <form className='max-w-xl mx-auto p-10 bg-cyan-200/10 rounded-sm'>
      <div className='grid md:grid-cols-3 md:gap-6'>
        <div className='relative z-0 w-full mb-5 group'>
        <input type='text' name='city' id='city' className='block py-2.5 px-0 w-full text-md
         text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none' required/>
         <label for='city' className='absolute text-md text-gray-500  duration-300 transform -translate-y-6  top-3 
         -z-10 origin-[0] '>City</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
        <input type='number' name='Degree' id='Degree' className='block py-2.5 px-0 w-full text-md
         text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none' required/>
         <label for='city' className='absolute text-md text-gray-500  duration-300 transform -translate-y-6  top-3 
         -z-10 origin-[0] '>Degree</label>
        </div>
        <div className='relative z-0 w-full mb-5 group'>
        <input type='text' name='Condition' id='Condition' className='block py-2.5 px-0 w-full text-md
         text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none' required/>
         <label for='city' className='absolute text-md text-gray-500  duration-300 transform -translate-y-6  top-3 
         -z-10 origin-[0] '>Condition</label>
        </div>
        <button type='submit' className='px-5 py-2.5 m-2 text-balance bg-cyan-400 border-solid border-black rounded-lg  me-2 mb-2
            hover:bg-cyan-500 hover:text-white font-medium'>
          Submit weather
        </button>
      </div>
    </form>
  )
}
