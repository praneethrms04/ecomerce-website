import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Productdetail = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
      setLoading(false);
    };
    getProducts();
  }, [id]);

  const Loading = () => {
    return (
      <>
        <Skeleton />
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>

        <div className="col-md-6 p-4">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5"> {product.title} </h1>
          <h4 className="p-2">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </h4>
          <h3>
            Special Price: <i className="fa fa-usd" aria-hidden="true"></i>{" "}
            {product.price} /-
          </h3>
          <p className="lead p-2">{product.description}</p>
          <i className="fa fa-map-marker"></i>{" "}
          <input type="text" placeholder="Enter Delivery Pincode"></input>
          <button className="btn-outline-success">Chek</button>
          <div className="button mt-4">
            <button
              className="btn btn-warning px-4"
              onClick={() => addProduct(product)}
            >
              <i className="fa fa-cart-plus  me-1" aria-hidden="true"></i>
              ADD TO CART{" "}
            </button>
            <Link to={"/chekout"}>
              <div className="btn btn-warning ms-2 px-4">
                <i className="fa fa-hand-peace-o me-1" aria-hidden="true"></i>
                BUY NOW
              </div>
            </Link>
          </div>
        </div>
        <br />
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container ">
        <div className="row p-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
      <Footer />
    </>
  );
};

export default Productdetail;
