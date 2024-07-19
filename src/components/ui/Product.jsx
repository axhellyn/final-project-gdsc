import React, { useContext } from "react";
import SecondaryButton from "./SecondaryButton";
import { ShopContext } from "../../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Product({ product }) {
  const navigate = useNavigate();

  const { cartProductInc, addToCart, cartItems, rupiahFormat } =
    useContext(ShopContext);
  const { uid } = useContext(AuthContext);

  function handleAddProduct(product) {
    if (uid !== null) {
        addToCart(product);
    } else {
      alert("Please Login first!");
      navigate("/Login");
    }
  }

  return (
    <div className="min-h-fit min-w-fit bg-white bg-opacity-0 shadow-xl rounded-3xl mx-4 my-2">
      <div className="flex flex-col px-8 py-4">
        <div className="w-full flex justify-center h-40">
          <Link to={`/Donut/${product.id}`}>
            <img className="w-40" src={product.imgUrl} alt="donut img" />
          </Link>
        </div>

        <h3 className="font-medium text-lg">{product.variant}</h3>
        <span className="text-gray text-base">
          {rupiahFormat(product.price)}
        </span>

        <div className="flex justify-center mt-4">
          {/* <SecondaryButton textButton={`Add to Cart ${cartItems[product.id]>0 ? `(${cartItems[product.id]})`:""}`} onClick={() => addToCart(product.id)}/>  */}
          <SecondaryButton
            textButton={`Add to Cart`}
            onClick={() => handleAddProduct(product)}
          />
        </div>
      </div>
    </div>
  );
}
