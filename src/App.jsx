import "./index.css";
import HomePage from './pages/HomePage'
import { createBrowserRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/ui/Navbar'
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="font-poppins bg-gradient-to-br from-white via-softPink via-65%% to-white">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
