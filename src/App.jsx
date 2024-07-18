import { useEffect, useRef, useState } from "react";
import "./index.css";
import HomePage from "./pages/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Cart from "./pages/Cart";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/ui/Footer";
import DetailedProduct from "./pages/DetailedProduct";
import ContactUsPage from "./pages/ContactUsPage";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import { auth, db } from "./firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import AddProduct from "./pages/AddProduct";

function App() {
  const contactUsSection = useRef(null);
  const aboutUsSection = useRef(null);

  function getCurrentUser() {
    const [user, setUser] = useState(null);
    useEffect(() => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const querySnapshot = await getDocs(collection(db, "users"));
          querySnapshot.forEach((doc) => {
            setUser(doc.data().firstName);
          });
        } else {
          setUser(null);
        }
      });
    }, []);

    return user;
  }

  const user = getCurrentUser();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins bg-gradient-to-br from-white via-softPink via-65%% to-white">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar user={user}/>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage onClick={scrollToSection} ref={aboutUsSection} />
              }
            />
            <Route path="/Product" element={<ProductPage />} />
            <Route
              path="/ContactUs"
              element={
                <ContactUsPage
                  onClick={scrollToSection}
                  ref={contactUsSection}
                />
              }
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SignUp" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Donut" element={<DetailedProduct />}>
              <Route path=":productId" />
            </Route>
            <Route path="/AddProduct" element={<AddProduct />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
