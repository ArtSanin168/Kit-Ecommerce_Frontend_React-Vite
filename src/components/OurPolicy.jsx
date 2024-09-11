import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
<div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-20 sm:text-sm md:text-base text-gray-700'>
    <div className='flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md w-64 h-64'>
        <img src={assets.exchange_icon} className='w-12 mb-5' alt="Easy Exchange & Return" />
        <p className='font-semibold'>Easy Exchange & Return</p>
        <p className='text-gray-500'>We offer hassle-free exchanges and returns.</p>
    </div>

    <div className='flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md w-64 h-64'>
        <img src={assets.quality_icon} className='w-12 mb-5' alt="7 Days Quality Guarantee" />
        <p className='font-semibold'>7 Days Quality Guarantee</p>
        <p className='text-gray-500'>We provide 7 days quality guarantee.</p>
    </div>

    <div className='flex flex-col items-center border border-gray-300 p-6 rounded-lg shadow-md w-64 h-64'>
        <img src={assets.support_img} className='w-12 mb-5' alt="24/7 Support" />
        <p className='font-semibold'>24/7 Support</p>
        <p className='text-gray-500'>We provide 24/7 support.</p>
    </div>
</div>


  )
}
 
export default OurPolicy