import React, { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "./AuthContext";

export const ShopContext = createContext(null);

export default function ShopContextProvider({children}) {
  let Product;
  const { uid } = useContext(AuthContext);

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //get products from firebase
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

  //add product to cart
  const addToCart = async (product) => {
    let Product;
    Product = product;
    Product["qty"] = 1;
    Product["totalItemPrice"] = product.price * Product["qty"];

    await setDoc(doc(db, `cart${uid}`, product.id), Product);
  };

  //get cart product from firebase
  useEffect(() => {
      const getCartProducts = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const q = query(collection(db, `cart${uid}`));
          const unsub = onSnapshot(q, (querySnapshot) => {  
            const newProduct = [];
            querySnapshot.forEach((doc) => { 
              newProduct.push({ ...doc.data(), id: doc.id });
            });
            setCartItems(newProduct);  

          })
          console.log('success!');
          return () => unsub;  
        } else {
          setCartItems([]);
        }
      });
      // getCartProducts();
    };
    getCartProducts();
    }, [uid]);

  const cartProductInc = (product) => {
    Product = product;
    Product.qty = product.qty + 1;
    Product.totalItemPrice = Product.qty * product.price;

    const productRef = doc(db, `cart${uid}`, product.id);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await updateDoc(productRef, Product);
      }
    });
  };

  const cartProductDelete = (product) => {
    const productRef = doc(db, `cart${uid}`, product.id);

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        await deleteDoc(productRef).then(()=>{
        })
      }
    });
  };

  const cartProductDec = (product) => {
    if (product.qty > 1) {
      Product = product;
      Product.qty = product.qty - 1;
      Product.totalItemPrice = Product.qty * product.price;

      const productRef = doc(db, `cart${uid}`, product.id);

      onAuthStateChanged(auth, async (user) => {
        if (user) {
          await updateDoc(productRef, Product);
        }
      });
    } else {
      cartProductDelete(product);
    }
  };

  const getTotalProducts = () => {
    const qty = cartItems.map((item) => {
      return item.qty;
    })

    const reducerQty = (accumulator, currentValue) => accumulator+currentValue;

    const totalQty = qty.reduce( reducerQty, 0);

    return totalQty;
  }

  const getTotalPrice = () => {
    const price = cartItems.map((item) => {
      return item.totalItemPrice;
    })

    const reducerPrice = (accumulator, currentValue) => accumulator+currentValue;

    const totalPrice = price.reduce(reducerPrice, 0);

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

  // getCartProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const totalQty = getTotalProducts();
  const totalPrice = getTotalPrice();

  const value = {
    products,
    cartItems,
    addToCart,
    rupiahFormat,
    cartProductInc,
    cartProductDec,
    cartProductDelete,
    totalQty,
    totalPrice
  }

  return (
    <ShopContext.Provider
      value={value}
    >
      {children}
    </ShopContext.Provider>
  );
}
