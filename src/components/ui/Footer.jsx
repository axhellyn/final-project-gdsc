import React from "react";
import SecondaryButton from "./SecondaryButton";
import { FaInstagram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="min-h-fit md:h-[50vh] bg-gradient-to-b from-pink to-purple mt-10 to-80%">
      <div className="h-full px-8 py-10 md:p-16 flex flex-wrap md:flex-row gap-8 justify-between items-center">
        <h1 className="text-4xl font-bold text-white cursor-default">Donutopia.</h1>
        <ul>
          <li>
            <Link className="text-white hover:text-softPink" to="/">
              Home
            </Link>
          </li>
          <li>
            <a className="text-white hover:text-softPink" href="">
              Products
            </a>
          </li>
          <li>
            <Link className="text-white hover:text-softPink" to="/ContactUs">
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-4 items-center">
          <FaWhatsapp className="h-6 w-6 text-white hover:text-softPink cursor-pointer" />
          <FaInstagram className="h-6 w-6 text-white hover:text-softPink cursor-pointer" />
          <FiMail className="h-6 w-6 text-white hover:text-softPink cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex justify-center border-t-2 border-white bg-purple p-4">
        <p className="text-white">&copy; 2024 Donutopia.</p>
      </div>
    </div>
  );
}
