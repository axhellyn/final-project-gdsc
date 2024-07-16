import React from 'react'
import Product from './ui/Product'
import { products } from '../utils/data'

export default function ProductCategory({category, style}) {
  return (
    <section className="h-fit">
        <div className={`flex items-center ${style}`}>
            {products.map((product)=>{
                if(product.category === category){
                    return <Product key={product.id} product={product}/>
                }
            })}
        </div>
      </section>
  )
}
