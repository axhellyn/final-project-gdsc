import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [userName, setUserName] = useState(null);
  const [uid, setUid] = useState(null);
  const [user, setUser] = useState(null);

  function getCurrentUser() {
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const querySnapshot = await getDoc(doc(db, "users", user.uid));
          console.log(querySnapshot.data().firstName);
          setUserName(querySnapshot.data().firstName);
        } else {
          setUserName(null);
        }
      });
    }, []);
  }

  function getUserUid() {
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUid(user.uid);
        } else {
          setUid(null);
        }
      });
    }, []);
  }

  function getUser() {
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }, []);
  }

  getCurrentUser();
  getUserUid();
  getUser();

  const value = { user, uid, userName };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
