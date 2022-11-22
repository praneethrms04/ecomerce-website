import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Productsall() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Navbar />
      <Row className="pt-5">
        <Col className="pt-5">
          <h1 className="fw-bolder text-center text-upercase text-dark">
            ALL LATEST PRODUCT ARE HERE
          </h1>
        </Col>
      </Row>
      <Row xs={1} md={4} className="ms-1 g-4">
        {products.map((product) => {
          return (
            <Container className="mt-5 pb-5">
              <Col className="p-3 mt-3 g-2">
                <Card
                  style={{ width: "18rem" }}
                  className="widget border-secondary text-center p-4 g-3"
                  key={product.id}
                  id="widget"
                >
                  <Card.Img
                    variant="top"
                    src={product.image}
                    alt={product.title}
                    height="250 px"
                  />
                  <Card.Body>
                    <Card.Title>{product.title.substring(0, 12)}</Card.Title>
                    <Card.Text>
                      Price :<b> $ {product.price}</b>
                    </Card.Text>
                    <Link to={`/detail/${product.id}`}>
                      <Button variant="warning">Buy Now</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Container>
          );
        })}
      </Row>
      <Footer />
    </>
  );
}
