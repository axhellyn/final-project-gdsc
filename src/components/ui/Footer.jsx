import React from "react";
import SecondaryButton from "./SecondaryButton";
import { FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="min-h-fit md:h-[50vh] bg-gradient-to-b from-pink to-purple mt-10 to-80%">
      <div className="h-full px-8 py-10 md:p-16 flex flex-wrap md:flex-row gap-8 justify-between items-center">
        <h1 className="text-4xl font-bold text-white cursor-default">Donut.</h1>
        <ul>
          <li>
            <a className="text-white hover:text-softPink" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-white hover:text-softPink" href="">
              About Us
            </a>
          </li>
          <li>
            <a className="text-white hover:text-softPink" href="">
              Products
            </a>
          </li>
          <li>
            <a className="text-white hover:text-softPink" href="">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <FaWhatsapp className="h-6 w-6 text-white hover:text-softPink cursor-pointer" />
          <FaInstagram className="h-6 w-6 text-white hover:text-softPink cursor-pointer" />
          <FiMail className="h-6 w-6 text-white hover:text-softPink cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex justify-center border-t-2 border-white bg-purple p-4">
        <p className="text-white">&copy; 2024 Donut.</p>
      </div>
    </div>
  );
}
