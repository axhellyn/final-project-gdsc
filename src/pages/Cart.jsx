import React, { useContext, useEffect, useState } from "react";
import CartList from "../components/CartList";
import { ShopContext } from "../context/ShopContext";
import { FaRegSadTear } from "react-icons/fa";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase/firebaseConfig";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { AuthContext } from "../context/AuthContext";

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  // const { uid } = useContext(AuthContext);
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const q = collection(db, `cart${uid}`);
  //       const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //         const newProduct = [];
  //         querySnapshot.forEach((doc) => {
  //           newProduct.push({ ...doc.data(), id: doc.id });
  //           console.log("ok!");
  //         });
  //         setCartItems(newProduct);

  //       });

  //       try {
  //         const querySnapshot = await getDocs(q);
  //         const newProducts = querySnapshot.docs.map((doc) => ({
  //           ...doc.data(),
  //           id: doc.id,
  //         }));
  //         setCartItems(newProducts);

  //         console.log("o");
  //       } catch (error) {
  //         console.log(error.message);
  //       }
  //     }
  //   });
  // }, []);

  // console.log(cartItems);

  return (
    <div className="min-h-screen px-8 py-10 md:px-16 md:py-4">
      <div>
        <div className="text-2xl md:text-3xl xl:text-4xl font-bold">
          <div className="flex gap-2">
            <h1>My</h1>
            <h1 className="text-darkPink">Cart</h1>
          </div>
        </div>
        <div className="flex flex-col">
          {cartItems.length > 0 ? (
            <CartList />
          ) : (
            <div className="w-full h-[70vh] flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <FaRegSadTear className="w-20 h-20" />
                <h1 className="text-5xl font-semibold">Oops!</h1>
                <h3 className="text-gray">Your Cart Is Empty...</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
