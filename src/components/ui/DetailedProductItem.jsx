import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import SecondaryButton from "./SecondaryButton";
import { FaTruckFast } from "react-icons/fa6";

export default function DetailedProductItem({ product }) {
  const { rupiahFormat, addToCart } =
    useContext(ShopContext);

  return (
    <div className="min-h-screen px-8 py-10 md:px-16 md:py-4">
      <div className="flex flex-col md:flex-row gap-8 md:py-10">
        <div className="md:w-1/2 rounded-sm md:border-r-4 border-purple">
          <img src={product.imgUrl} alt="donut img" />
        </div>

        <div className="md:w-1/2 md:py-8 px-4 flex flex-col gap-4 ">
          <p className="text-3xl md:text-4xl font-bold">{product.variant}</p>
          <p className="text-gray text-sm">{product.detail}</p>
          <p>{product.description}</p>

          <div className="flex items-center gap-2 border-y-2 border-gray border-opacity-50 p-2">
            <FaTruckFast className="w-6 text-darkPurple"/>
            <p>Free shipping</p>
          </div>
          <p></p>

          <span className="text text-2xl font-semibold text-darkPurple">
            {rupiahFormat(product.price)}
          </span>

          <div className="flex justify-center mt-4">
            <SecondaryButton
              textButton="Add to Cart"
              onClick={() => addToCart(product.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
