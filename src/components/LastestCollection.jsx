import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LastestCollection = () => {
    const { products } = useContext(ShopContext);
    const [lastestProducts, setLastestProducts] = useState([]);

    useEffect(() => {
        setLastestProducts(products.slice(0, 10));
    }, [products]);

    return (
        <div className='my-8'>
            <div className='text-center py-8 text-3xl'>
                <Title text1="LASTEST" text2="COLLECION" />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Our latest arrivals are here to elevate your wardrobe. Dive in and find your new favorites today!
                </p>
            </div>

            {/* Rendering Products */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {lastestProducts.map((item, index) => (
                    <div key={index} className="h-full flex flex-col">
                        <ProductItem id={item._id} image={item.image} name={item.name} price={item.price} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LastestCollection
