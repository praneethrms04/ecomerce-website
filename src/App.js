import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login"
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Productdetail from "./pages/Productdetail";
import Cart from "./pages/Cart";
import Productsall from "./pages/Productsall";
import CheckOut from "./pages/CheckOut";



function App() {
  return (
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Login" element={<Login/>}/>
      <Route path="/detail/:id" element={<Productdetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/allproduct"  element={<Productsall/>}/>
      <Route path="/chekout" element={<CheckOut/>}/>
    </Routes>
  );
}

export default App;