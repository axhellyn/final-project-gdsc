import "./index.css";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Cart from "./pages/Cart";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-white via-softPink via-65%% to-white">
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
}

export default App;
