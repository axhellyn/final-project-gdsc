import Product from "./ui/Product";
import { products } from "../utils/data";

export default function ProductList({onVisible}) {

    return (
    <div>
      <div className="flex flex-wrap items-center justify-center mt-10">
          {products.slice(0, onVisible).map((e) => (
            <Product
              key={e.id}
              imgCard={e.imgUrl}
              variant={e.variant}
              price={e.price}
            />
          ))}
      </div>
    </div>
    );
}
