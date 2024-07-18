import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  const [uid, setUid] = useState(null);

  function getCurrentUser() {
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const querySnapshot = await getDoc(doc(db, "users", user.uid));
          console.log(querySnapshot.data().firstName);
          setUser(querySnapshot.data().firstName);
        } else {
          setUser(null);
        }
      });
    }, []);
  }

  function getUserUid() {
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUid(user.uid);
        }
      });
    }, []);
  }

  getCurrentUser();
  getUserUid();

  const value = { user, uid };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
