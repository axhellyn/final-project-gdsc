import React, { useContext, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import { Link, Outlet, NavLink, useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
import { AuthContext } from "../../context/AuthContext";

export default function navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolledNavbar, setScrolledNavbar] = useState(false);
  const { totalQty } = useContext(ShopContext);
  const { userName } = useContext(AuthContext);

  function toggleNavbar() {
    setIsClicked(!isClicked);
  }

  function changeNavbar() {
    if (window.scrollY > 0) {
      setScrolledNavbar(true);
    } else {
      setScrolledNavbar(false);
    }
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  window.addEventListener("scroll", changeNavbar);

  return (
    <header
      className={`${scrolledNavbar ? "shadow-md" : "shadow-none"} ${
        isClicked ? "shadow-none" : "shadow-md"
      } px-8 md:px-16 py-4 sticky top-0 z-20 bg-white bg-opacity-100 md:bg-opacity-10 backdrop-blur-sm`}
    >
      <nav className="w-full flex justify-between items-center">
        <div className="flex md:static items-center gap-5 md:gap-0">
          <div className="flex md:hidden">
            <button onClick={toggleNavbar}>
              {isClicked ? (
                <VscClose className="h-6 w-6" />
              ) : (
                <RxHamburgerMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div>
            <a href="/" className="text-xl md:text-2xl font-bold cursor-pointer">
              Donutopia.
            </a>
          </div>
        </div>

        <ul
          className={`${
            isClicked ? "top-14" : "-top-64"
          } absolute flex flex-col md:flex-row md:static gap-4 md:gap-16 left-0 w-full md:w-auto py-4 md:py-0 bg-white md:bg-opacity-0 bg-opacity-100`}
        >
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[100%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300"
                  : "relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[0%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300 md:hover:after:w-[100%]"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/Product"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[100%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300"
                  : "relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[0%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300 md:hover:after:w-[100%]"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={scrollToTop}
              to="/ContactUs"
              className={({ isActive, isPending }) =>
                isPending
                  ? ""
                  : isActive
                  ? "relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[100%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300"
                  : "relative cursor-pointer px-8 md:px-0 md:py-2 md:after:content-[''] md:after:bg-darkPurple md:after:h-1 md:after:w-[0%] md:after:absolute md:after:left-0 md:after:bottom-0 md:after:rounded-lg md:after:duration-300 md:hover:after:w-[100%]"
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
        <div className={`flex items-center gap-4 md:gap-6 md:static`}>
          {!userName && (
            <Link to="/Login" onClick={scrollToTop}>
              <CgProfile className="h-6 w-6 cursor-pointer" />
            </Link>
          )}
          {userName && (
            <Link to="/Profile" className="flex gap-2">
              <CgProfile className="h-6 w-6 cursor-pointer" />
              <div className="hidden md:block">{userName}</div>
            </Link>
          )}
          <Link onClick={scrollToTop} to="/Cart">
            <FiShoppingCart className="h-6 w-6 cursor-pointer" />
            <div className="relative">
              <div
                className={`${
                  totalQty > 0 ? "block" : "hidden"
                } w-4 h-4 absolute bottom-3 md:-bottom-1 md:-left-1 z-50 rounded-full bg-darkPurple text-white text-xs text-center`}
              >
                <span>{totalQty}</span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
