import React, { useContext } from "react";
import CartItem from "./ui/CartItem";
import { products } from "../utils/data";
import { ShopContext } from "../context/ShopContext";
import Button from "./ui/Button";

export default function CartList() {
  const { cartItems, getPriceTotal, rupiahFormat } = useContext(ShopContext);

  return (
    <div>
      <div className="py-4">
        {products.map((product) =>
          cartItems[product.id] > 0 ? (
            <CartItem key={product.id} product={product} />
          ) : (
            ""
          )
        )}
      </div>

      <div className="py-10 flex flex-col gap-4">
        <div className="flex gap-2">
          <span className="font-bold">Total:</span>
          <p>{rupiahFormat(getPriceTotal())}</p>
        </div>
        <div className="flex items-center justify-center">
          <Button textButton="Checkout" />
        </div>
      </div>
    </div>
  );
}
