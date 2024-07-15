import Product from "./ui/Product";
import { products } from "../utils/data";

export default function ProductList({onVisible}) {
    


    return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
          {products.slice(0, onVisible).map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
      </div>
    </div>
    );
}
