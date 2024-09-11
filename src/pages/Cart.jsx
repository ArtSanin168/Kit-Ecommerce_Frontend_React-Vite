import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/cartTotal';

const Cart = () => {
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
    const [cartData, setCartData] = useState([]);

    useEffect(() => {
        const tempData = [];
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    });
                }
            }
        }
        setCartData(tempData);
    }, [cartItems]);

    return (
        <div className='border-t pt-14 '>

            <div className='flex justify-center items-center text-3xl mb-3'>
                <Title text1="YOUR" text2="ITEMS" />
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-10'>
                <div>
                    {cartData.map((item, index) => {
                        const productData = products.find((product) => product._id === item._id);

                        return (
                            <div className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 ml-2 bg-white shadow-lg rounded-lg' key={index}>
                                <div className='flex items-start gap-6'>
                                    <img className='w-16 sm:w-20 ml-4' src={productData.image[0]} alt="" />
                                    <div>
                                        <p className='text-sm sm:text-lg font-medium'>{productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p className='text-lg font-medium text-red-600'>{currency}{productData.price}</p>
                                            <p className='px-2 sm:px-3 sm:py-1 bg-gray-200'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                <input
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        if (value === '' || value === 0 || value > 20) {
                                            e.target.value = Math.min(value, 20);
                                            return;
                                        }
                                        updateQuantity(item._id, item.size, value);
                                    }}
                                    className="border max-w-16 sm:max-w-20 px-1 sm:px-2 py-1"
                                    type="number"
                                    min={1}
                                    max={20}
                                    defaultValue={item.quantity}
                                />
                                <img
                                    onClick={() => updateQuantity(item._id, item.size, 0)}
                                    className='w-4 mr-4 sm:w-5 cursor-pointer'
                                    src={assets.bin_icon}
                                    alt=""
                                />
                            </div>
                        );
                    })}
                </div>

                <div className='flex flex-col justify-between '>
                    <CartTotal />
                    <div className='text-center'>
                        <button onClick={() => navigate('/place-order')} className='bg-blue-500 text-base active:bg-blue-700 text-white py-3 px-8 my-8 shadow-lg rounded-lg'>Proceed to Checkout</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Cart;
