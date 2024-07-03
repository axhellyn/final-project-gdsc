import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";

export default function navbar() {
  const [isClicked, setIsClicked] = useState(false);

  function onToggleNavbar(){
    setIsClicked(!isClicked);
  }

  return (
    <header className="px-8 md:px-16 py-4 sticky top-0 z-20">
      <nav className="w-full flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold cursor-pointer">
            Donut.
          </a>
        </div>
        <ul className={`${isClicked? "top-16":"-top-64"} flex flex-col md:flex-row md:static gap-4 md:gap-16 absolute left-0 w-full md:w-auto  py-4 md:py-0`}>
          <li>
            <a href="/" className="relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[0%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300 md:hover:after:w-[100%]">
              Home
            </a>
          </li>
          <li>
            <a href="/" className="relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[0%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300 md:hover:after:w-[100%]">
              Products
            </a>
          </li>
          <li>
            <a href="/" className="relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[0%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300 md:hover:after:w-[100%]">
              Contact Us
            </a>
          </li>
        </ul>
        <div className={`${isClicked? "top-48":"-top-64"} w-full md:w-auto flex gap-6 md:static absolute left-0 px-8 md:px-0 py-4 md:py-0`}>
          <div>
            <FiShoppingCart className="h-6 w-6 cursor-pointer" />
          </div>
          <div>
            <CgProfile className="h-6 w-6 cursor-pointer" />
          </div>
        </div>

        <div className="flex md:hidden "> 
          <button onClick={onToggleNavbar}>{isClicked?<VscClose className="h-6 w-6"/>:<RxHamburgerMenu className="h-6 w-6"/>}</button>
        </div>
      </nav>
    </header>
  );
}
