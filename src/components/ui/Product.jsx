import React from 'react'
import SecondaryButton from './SecondaryButton'

export default function Product({imgCard, variant, price}) {
  return (
    <div className='min-h-fit min-w-fit bg-white bg-opacity-0 shadow-xl rounded-3xl mx-4 my-2'>
        <div className='flex flex-col px-8 py-4'>
            <div className='w-full flex justify-center h-40'>
                <img  className='w-40' src={imgCard} alt="donut" />
            </div>

            <h3 className='font-medium text-lg'>{variant}</h3>
            <span className='text-gray text-base'>{price}</span>

            <div className='flex justify-center mt-4'>
               <SecondaryButton textButton="Add to Cart"/> 
            </div>
        </div>
    </div>
  )
}
