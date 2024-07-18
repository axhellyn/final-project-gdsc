import React, { useContext } from 'react'
import Product from './ui/Product'
import { ShopContext } from '../context/ShopContext'

export default function ProductCategory({category, style}) {
  const { products } = useContext(ShopContext);

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
