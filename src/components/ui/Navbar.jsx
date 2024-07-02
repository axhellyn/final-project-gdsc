import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export default function navbar() {
  return (
    <div className="w-full px-16 py-4">
      <div className="w-full flex justify-between items-end">
        <div>
          <a href="/" className="text-2xl font-bold cursor-pointer">Donut.</a>
        </div>
        <ul className="flex gap-6">
          <li><a href="/" className="cursor-pointer">Home</a></li>
          <li><a href="/" className="cursor-pointer">Products</a></li>
          <li><a href="/" className="cursor-pointer">Contact Us</a></li>
        </ul>
        <div className="flex gap-6">
          <div>
            <FiShoppingCart className="h-6 w-6 cursor-pointer"/>
          </div>
          <div>
            <CgProfile className="h-6 w-6 cursor-pointer"/>
          </div>
        </div>
      </div>
    </div>
  );
}
