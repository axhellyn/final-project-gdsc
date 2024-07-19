import React, { useContext } from "react";
import CartItem from "./ui/CartItem";
import { ShopContext } from "../context/ShopContext";
import Button from "./ui/Button";

export default function CartList() {
  const { totalPrice, totalQty, cartItems, rupiahFormat, } = useContext(ShopContext);

  return (
    <div>
      <div className="py-4">
        {cartItems.map((product) =>
            <CartItem key={product.id} product={product} />
        )}
      </div>

      <div className="py-10 flex flex-col gap-4">
        <div className="flex gap-2">
          <span>Total item:</span>
          <p>{totalQty}</p>
        </div>
        <div className="flex gap-2 font-bold">
          <span>Total Price:</span>
          <p>{rupiahFormat(totalPrice)}</p>
        </div>
        <div className="flex items-center justify-center">
          <Button textButton="Checkout" />
        </div>
      </div>
    </div>
  );
}
