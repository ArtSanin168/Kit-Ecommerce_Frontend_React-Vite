import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    const handleClick = () => {
        // Scroll to the top of the page smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Link 
            className='text-gray-700 cursor-pointer h-full flex flex-col' 
            to={`/product/${id}`} 
            onClick={handleClick}
        >
            <div className='overflow-hidden flex-grow'>
                <img src={image[0]} alt={name} className='hover:scale-110 transition ease-in-out object-cover h-full w-full rounded-lg' />
            </div>
            <div className='pt-3 pb-1 text-sm flex-shrink-0'>
                <p>{name}</p>
                <p className='font-semibold text-lg text-red-500'>{currency}{price}</p>
            </div>
        </Link>
    );
};

export default ProductItem

