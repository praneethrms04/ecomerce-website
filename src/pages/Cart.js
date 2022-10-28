import React from "react";
import {  useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import "../style/cart.css"
import { addCart, delCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


const  Cart=()=> {
  const state =useSelector((state)=>state.HandelCart)
  const dispatch = useDispatch()
  
  const increaseItem=(item)=>{
    dispatch(addCart(item))
  };

  const decreaseItem=(item)=>{
    dispatch(delCart(item))
  };

  const cartItems=(product)=>{
    return(
      <>
      
      <div className="container">
        <div className="row mt-4 ">
          <div className="col-md-6 pl=4 " >
            <img src={product.image} alt=".." 
              height="150px" width="130px"
            />
          </div>
          <div className="col-md-6 pr=4">
            <h3>{product.title}</h3>
            <p className="lead fw-bolder">
              {product.qty} X ${product.price}= ${product.qty * product.price}
            </p>
            <button className="rounded-pill btn-success me-1" onClick={()=>increaseItem(product)}><i className="fa fa-plus" aria-hidden="true"></i></button>
            <button className="rounded-pill btn-danger" onClick={()=>decreaseItem(product)}><i className="fa fa-minus" aria-hidden="true"></i></button>
          </div>
        </div>
          <hr/>
      </div>
    </>
    )

  }

  const emptyCart=()=>{
    return(
      <>
        <div className="container">
        <div className="col-12 mt-5">
            <h1 className="display-6 fw-bolder text-center text-upercase text-secondary">
             YOUR CART IS EMPTY RIGHT NOW  <i className="fa fa-cart-arrow-down" aria-hidden="true"></i>
            </h1>
            <hr />
          </div>
        </div>
      </>
    )
  }

  const button=()=>{
    return(
      <>
        <div className="container">
        <div className="col-12 mt-5">
            <h1 className="display-6 fw-bolder text-center text-upercase text-secondary">
             <Link to={"/chekout"} className="btn btn-warning">Proceed to checkout ({state.length} item)</Link>
            </h1>
          </div>
        </div>
      </>
    )
  }
  
  return (
    
    <>
    <Navbar />
      {state.length !== 0 && state.map(cartItems)}
      {state.length ===0 && emptyCart()}
      {state.length !== 0 && button()}
      {/* <Footer/> */}
    </>
  );
}

export default Cart;