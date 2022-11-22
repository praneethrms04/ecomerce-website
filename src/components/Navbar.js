import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
 const state = useSelector((state) => state.HandelCart);

  return (
    <>
      <div className="header header-bg">
        <Link to="/" className="text-decoration-none">
          <h2 className="text-dark"><i>Shopping</i> </h2>
        </Link>
        <ul className="nav-menu">
          <Link to="/" className="btn-outline-warning">
            <i className="fa fa-home"></i> Home
          </Link>
          <Link to="/allproducts">
            <i className="fa fa-shopping-basket"></i> product
          </Link>
          <Link to="/Login">
            <i className="fa fa-sign-in me-1"></i> Login
          </Link>
          <Link to="/cart">
            <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
