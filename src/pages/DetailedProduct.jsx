import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import { products } from '../utils/data';
import donut2 from '../assets/candyDonut.png'
import DetailedProductItem from '../components/ui/DetailedProductItem';

export default function DetailedProduct() {
    const { productId } = useParams();
    const product = products.find((product)=> product.id == productId);

  return (
    <div>
        <DetailedProductItem product={product}/>
    </div>
  )
}
