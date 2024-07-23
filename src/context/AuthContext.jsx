import PropTypes from "prop-types";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [userName, setUserName] = useState(null);
  const [fullName, setFullName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [uid, setUid] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const querySnapshot = await getDoc(doc(db, "users", user.uid));
        setUserName(querySnapshot.data().firstName);
        setUserEmail(querySnapshot.data().email);
        setFullName(querySnapshot.data().fullName);
        setUser(user);
        setUid(user.uid);
      } else {
        setUserName(null);
        setUser(null);
        setUid(null);
      }
    });
  }, []);

  const value = { user, uid, userName, fullName, userEmail };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
