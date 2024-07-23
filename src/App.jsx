import { useRef } from "react";
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
import AddProduct from "./pages/AddProduct";
import AuthContextProvider from "./context/AuthContext";

function App() {
  const contactUsSection = useRef(null);
  const aboutUsSection = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="font-poppins bg-gradient-to-br from-white via-softPink via-65%% to-white">
      <AuthContextProvider>
        <ShopContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage onClick={scrollToSection} ref={aboutUsSection} />
                }
              />
              <Route path="/product" element={<ProductPage />} />
              <Route
                path="/contact-us"
                element={
                  <ContactUsPage
                    onClick={scrollToSection}
                    ref={contactUsSection}
                  />
                }
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signUp" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/donut">
                <Route path=":productId" element={<DetailedProduct />} />
              </Route>
              <Route path="/add-product" element={<AddProduct />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ShopContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
