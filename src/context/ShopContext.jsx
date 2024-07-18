import React, { createContext, useEffect, useState } from "react";
import { products } from '../utils/data';

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());  

  function getDefaultCart() {
    let cart = {};
    for (let i = 1; i < products.length + 1; i++) {
      cart[i] = 0;
    }

    return cart;
  }

  function addToCart(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }

  function removeFromCart(id) {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }

  function removeAllItems(id) {
    setCartItems((prev) => ({ ...prev, [id]: (prev[id] = 0) }));
  }

  function getTotalItems() {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }

    return totalItems;
  }

  function getPriceTotal() {
    let totalPrice = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let productPrice = products.find((product) => product.id == item).price;
        totalPrice += productPrice * cartItems[item];
      }
    }

    return totalPrice;
  }

  function rupiahFormat(price) {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
    return formatter.format(price);
  }

  return (
    <ShopContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        getTotalItems,
        removeAllItems,
        getPriceTotal,
        rupiahFormat,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
}
