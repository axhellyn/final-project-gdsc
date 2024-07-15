import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";

export default function CartItem({ product }) {
  const { cartItems, addToCart, removeFromCart, removeAllItems, rupiahFormat } =
    useContext(ShopContext);

  return (
    <div className="py-2 md:py-6 border-b-2 border-black border-opacity-10 bg-white bg-opacity-20 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="w-1/2 md:w-1/5 flex items-center h-40">
          <img className="w-40" src={product.imgUrl} alt="donut img" />
        </div>

        <div className="w-1/2 md:w-4/5 flex flex-col gap-2 md:gap-0 md:flex-row justify-between items-start md:items-center">
          <div className="md:w-1/5">
            <h3 className="font-medium text-lg">{product.variant}</h3>
          </div>

          <div className="md:w-1/5 text-center">
            <span className="text-base">{rupiahFormat(product.price)}</span>
          </div>

          <div className="md:w-1/5 flex justify-center item-center">
            <div className="flex border-black border-2 rounded-3xl py-[2px] px-2 md:py-1 md:px-3">
              <div
                className="flex items-center justify-center"
                onClick={() => removeFromCart(product.id)}
              >
                <TiMinus className="h-2 w-2 md:h-3 md:w-3 cursor-pointer" />
              </div>
              <span className="w-8 md:w-10 h-fit text-center py-0 text-sm md:text-base">
                {cartItems[product.id]}
              </span>
              <div
                className="flex items-center justify-center"
                onClick={() => addToCart(product.id)}
              >
                <FaPlus className="h-2 w-2 md:h-3 md:w-3 cursor-pointer" />
              </div>
            </div>
          </div>

          <div
            onClick={() => removeAllItems(product.id)}
            className="hidden md:w-1/5 md:flex items-center justify-center opacity-30"
          >
            <IoClose className="h-8 w-8 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
