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

function App() {
  const contactUsSection = useRef(null);
  const aboutUsSection = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-poppins bg-gradient-to-br from-white via-softPink via-65%% to-white">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage onClick={scrollToSection} ref={aboutUsSection}/>} />
            <Route path="/Product" element={<ProductPage />} />
            <Route path="/ContactUs" element={<ContactUsPage onClick={scrollToSection} ref={contactUsSection}/>} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Donut" element={<DetailedProduct/>}>
              <Route path=":productId"/>
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
