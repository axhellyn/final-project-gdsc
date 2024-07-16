import React, { useContext } from 'react'
import SecondaryButton from './SecondaryButton'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom';

export default function Product({product}) {
  const {addToCart, cartItems, rupiahFormat} = useContext(ShopContext);

  return (
    <div className='min-h-fit min-w-fit bg-white bg-opacity-0 shadow-xl rounded-3xl mx-4 my-2'>
        <div className='flex flex-col px-8 py-4'>
            <div className='w-full flex justify-center h-40'>
              <Link to={`/Donut/${product.id}`}>
                <img  className='w-40' src={product.imgUrl} alt="donut img" />
              </Link>
            </div>

            <h3 className='font-medium text-lg'>{product.variant}</h3>
            <span className='text-gray text-base'>{rupiahFormat(product.price)}</span>

            <div className='flex justify-center mt-4'>
               <SecondaryButton textButton={`Add to Cart ${cartItems[product.id]>0 ? `(${cartItems[product.id]})`:""}`} onClick={() => addToCart(product.id)}/> 
            </div>
        </div>
    </div>
  )
}
