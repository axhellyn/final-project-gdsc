import React, { createContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

export const ShopContext = createContext(null);

export default function ShopContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  //get products
  const getProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray = [];
    querySnapshot.forEach((doc) => {
      const product = doc.data();
      product.id = doc.id;

      productsArray.push({ ...product });

      if (productsArray.length === querySnapshot.docs.length) {
        setProducts(productsArray);
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        products,
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
