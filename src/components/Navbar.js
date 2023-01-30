import React from "react";
import { useSelector } from "react-redux";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  const state = useSelector((state) => state.HandelCart);

  return (
    <>
      <Nav>
        <Bars />
        <NavMenu className="text-white bold">
          <NavLink to="/" activeStyle className="text-white bold">
            <i className="fa fa-home"></i> Home
          </NavLink>
          <NavLink to="/allproducts" activeStyle className="text-white bold">
            <i className="fa fa-shopping-basket"></i> product
          </NavLink>

          <NavLink to="/cart" activeStyle className="text-white bold">
            <i className="fa fa-shopping-cart me-1"></i>Cart ({state.length})
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
