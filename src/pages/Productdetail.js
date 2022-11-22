import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Row, Col, Container,Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Productdetail = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    };
    getProducts();
  }, [id]);

  return (
    <>
    <Navbar />
      <Row className="py-5">
        <Col md={{ offset: 1 }} className="pt-4">
          <Container className="mt-5">
            <img
              src={product.image}
              alt={product.title}
              height="350px"
              width="350px"
            />
            <p className="mt-4 ms-5"> {product.title} </p>
          </Container>
        </Col>
        <Col md={7}>
          <h3 className="mt-5 text-uppercase">{product.category}</h3>
          <h4 className="pt-4">
            Rating : {product.rating && product.rating.rate} / 5
          </h4>
          <p className="pt-4">{product.description}</p>
          <h3 className="pt-3">Price: $ {product.price} /-</h3>
          <div className="pt-4">
            <Button
              variant ="info"
              onClick={() => addProduct(product)}
            >
              <i className="fa fa-cart-plus  me-1" aria-hidden="true"></i>
              ADD TO CART
            </Button>
            <Link to={"/chekout"}>
              <div className="btn btn-warning ms-2 px-4">
                <i className="fa fa-hand-peace-o me-1" aria-hidden="true"></i>
                BUY NOW
              </div>
            </Link>
          </div>
        </Col>
      </Row>
      <Footer />
  
    </>
  );
};

export default Productdetail;
