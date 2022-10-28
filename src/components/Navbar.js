import { Link } from "react-router-dom";
import "./Navbar.css";
import {useSelector} from 'react-redux';

function Navbar(){


  const state = useSelector((state)=>state.HandelCart) 

  
    return(
      < div className="row d-flex" id="roww">
      <nav className="navbar navbar-expand-lg  bg-success p-1" id=" navbar">
  <div className="container-fluid">
  <div>
    <Link  className="navbar-brand fw-bolder " to={"/"} id='brand'>Shop&Fly...</Link >
  </div>
    <div className=" navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto ">
        <form className="d-flex " role="search" >
        <input className="form-control text-danger"  type="search" placeholder="Search What are u looking for..." aria-label="Search" id="searchbox"/>
        <button className="btn btn-warning text-success" type="submit"><i className="fa fa-search " aria-hidden="true"></i></button>
      </form>
      </ul>
      <div className="button">
      <Link className="btn  ms-2 text-warning fw-bolder"  to={"/"}>
          <i className="fa fa-home me-1"></i> Home</Link>
          <Link className="btn  ms-2 text-warning fw-bolder" to={"/allproduct"}>
          <i className="fa fa-shopping-basket"></i> product</Link>
          <Link className="btn  ms-2 text-warning fw-bolder" to={"/Login"}>
          <i className="fa fa-sign-in me-1"></i> Login</Link>
          <Link className="btn  ms-2 text-warning fw-bolder" to={"/cart"}>
          <i className="fa fa-shopping-cart me-1" ></i>Cart ({state.length})</Link>
      </div>
    </div>
  </div>
</nav>
   </div>
    )
}

export default Navbar;