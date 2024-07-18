import Product from "./ui/Product";
import { ShopContext } from "../context/ShopContext";
import { useContext } from "react";

export default function ProductList({onVisible}) {
    const { products } = useContext(ShopContext);

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
