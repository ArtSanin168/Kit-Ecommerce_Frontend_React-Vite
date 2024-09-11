import React, { useState, useContext } from 'react'
import Title from '../components/Title'
import ProvinceSelect from '../components/ProvinceSelect'
import CartTotal from '../components/cartTotal'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80hv] border-t md:ml-20 md:mx-20'>
      {/*-------- Left Side -------- */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          
          <div className='flex gap-3'>
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-blue-500" type="text" placeholder="First Name" />

            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-blue-500' type="text" placeholder="Last Name" />
          </div>
          
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-blue-500' type="email" placeholder="Phone Number" />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full focus:outline-blue-500' type="text" placeholder="Address" />
         
          <div className='flex gap-3'>
            <select className='border border-gray-300 rounded py-1.5 px-3.5 w-full'>
              <option value="disabled">Cambodia</option>
            </select>
            <div className=" w-full"><ProvinceSelect /></div>
          </div>
        </div>

        {/* -------- Right Side -------- */}
        <div className='mt-8'>

          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>

          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={'PAYMENT'} text2={'METHOD'} />
            {/*--------- Payment --------- */}
            <div className='flex flex-col gap-3 lg:flex-row '>
              <div onClick={() => setMethod('aba')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 min-h-3.5 border rounded-full ${method === 'aba' ? 'bg-green-400' : ''}`}></p>
                <img className='h-8 mx-4' src="https://nhocambodia.org/secure_donation/asset/ic_ABA-PAY_3x.png" alt="" />
              </div>
              <div onClick={() => setMethod('bakong')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 min-h-3.5 border rounded-full ${method === 'bakong' ? 'bg-green-400' : ''}`}></p>
                <img className='h-8 mx-4' src="https://uat-rkf.codingate.dev/wp-content/uploads/2022/06/KHQR-available-here-logo-with-bg.jpg" alt="" />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 min-h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <img className='h-8 mx-4' src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" alt="" />
              </div>  
            </div>
              <div className='text-center'>
                <button onClick={() => navigate('/order')} className='bg-blue-500 text-base active:bg-blue-700 text-white py-3 px-16 my-8 shadow-lg rounded-lg '>Place Order</button>
              </div>
          </div>

        </div>


    </div>

  )
}

export default PlaceOrder