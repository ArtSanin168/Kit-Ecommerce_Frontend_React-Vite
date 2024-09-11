import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className='text-center'>
        <p className='text-2xl font-semibold text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-500'>Subscribe to our newsletter and get 20% off your first order.

        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex item:center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none text-gray-800' required/>
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox