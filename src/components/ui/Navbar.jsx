import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";

export default function navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolledNavbar, setScrolledNavbar] = useState(false);

  function onToggleNavbar(){
    setIsClicked(!isClicked);
  }

  function onChangeNavbar(){
    if(window.scrollY > 0){
      setScrolledNavbar(true);
    }else{
      setScrolledNavbar(false);
    }
  }

  window.addEventListener('scroll', onChangeNavbar);

  return (
    <header className={`${scrolledNavbar? "shadow-md":"shadow-none"} ${isClicked? "shadow-none":"shadow-md"} px-8 md:px-16 py-4 sticky top-0 z-20 bg-white bg-opacity-10 backdrop-blur-sm`}>
      <nav className="w-full flex justify-between items-center">
        <div>
          <a href="/" className="text-2xl font-bold cursor-pointer">
            Donut.
          </a>
        </div>
        <ul className={`${isClicked? "top-16":"-top-64"} absolute flex flex-col md:flex-row md:static gap-4 md:gap-16 left-0 w-full md:w-auto py-4 md:py-0 bg-white md:bg-opacity-0 bg-opacity-10 backdrop-blur-sm md:backdrop-blur-none`}>
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
        <div className={`${isClicked? "top-[200px]":"-top-64"} w-full md:w-auto flex gap-6 md:static absolute left-0 px-8 md:px-0 py-4 md:py-0 bg-white bg-opacity-10 md:bg-opacity-0 backdrop-blur-sm md:backdrop-blur-none shadow-md  md:shadow-none`}>
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
