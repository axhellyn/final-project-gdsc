import { useContext } from 'react'
import { useParams } from 'react-router-dom';
import DetailedProductItem from '../components/ui/DetailedProductItem';
import { ShopContext } from '../context/ShopContext';

export default function DetailedProduct() {
    const { products } = useContext(ShopContext);

    const { productId } = useParams();

  return (
    <div>
      {
        products.map(product => {
          if(product.id == productId){
            return <DetailedProductItem key={product.id} product={product}/>
          }
        })
      }
    </div>
  )
}
