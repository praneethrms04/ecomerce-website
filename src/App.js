import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Productdetail from "./pages/Productdetail";
import Cart from "./pages/Cart";
import Productsall from "./pages/Productsall";
import CheckOut from "./pages/CheckOut";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Productdetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allproducts" element={<Productsall />} />
        <Route path="/chekout" element={<CheckOut />} />
        <Route path="/category" element={<Products />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
