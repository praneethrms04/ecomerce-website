import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";



export default function Productsall () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const getProducts = async () => {
            setLoading(true);
          await fetch("https://fakestoreapi.com/products")
              .then((response) => response.json())
              .then((data) => setProducts(data));
            setLoading(false);
          };
          getProducts();
    },[])

    const Loading=()=>{
        return(
          <>
      <div className="col-md-3">
         <h2>Loading...</h2>
     </div>
         </>
        )
    }


    const ShowProducts = () => {
        return (
          <>
            {products.map((product) => {
              return (
                <>
                  <div className="col-md-3 mb-4 ">
                    <div className="card h-100 text-center p-4" key={product.id}>
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                        height="250 px"
                      />
                      <div className="card-body">
                        <h5 className="card-title mb-0">
                          {product.title.substring(0, 12)}
                        </h5>
                        <p className="card-text fw-bolder lead">${product.price}</p>
                        <Link
                          to={`/detail/${product.id}`}
                          className="btn btn-warning"
                        >
                          Buy Now
                        </Link>
                      </div>
                    </div>
                  </div>
               
                </>
              );
            })}
          </>
        );
      };

  return (
    <>
    <Navbar/>
    <div className=" container my-5 py-5" id="main">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center text-upercase text-secondary">
            "ALL LATEST PRODUCT ARE HERE"
          </h1>
         
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
    <Footer/>

  </>
)
}