import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Button, Container } from "react-bootstrap";


const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  useEffect(() => {
    const getProducts = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    };
    getProducts();
  }, []);
  const updateProduct = (cat) => {
    const updateList = products.filter((x) => x.category === cat);
    // console.log(updateList)
    setFilter(updateList);
  };
  return (
    <>
      <Row className="pt-5">
        <div className="col-12 m-5 pt-3">
          <h2 className="display-6 fw-bolder text-center text-upercase text-success">
            CHOOSE PRODUCT CATEGORY
          </h2>
        </div>
      </Row>
      <Row
        xs={1}
        md={4}
        className="g-3 d-flex justify-content-center align-items-center mb-5 pb-5"
      >
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProduct("men's clothing")}
            className="bg-secondary rounded-pill text-white"
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title className="pe-auto">Men's Clothing</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProduct("women's clothing")}
            className="bg-secondary text-white rounded-pill"
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title>Women's Clothing</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProduct("electronics")}
            className="bg-secondary text-white rounded-pill"
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title>Electronics</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: 15 + "rem", height: 8 + "rem" }}
            id="category"
            onClick={() => updateProduct("jewelery")}
            className="bg-secondary text-white rounded-pill"
          >
            <Card.Body className="d-flex justify-content-center align-items-center">
              <Card.Title>Jewellary</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} md={4} className="g-3 me-3">
        {filter.map((product) => {
          return (
            <Container className="mt-5 mb-5">
              <Col className="p-3 mt-3 ms-4">
                <Card
                  style={{ width: "18rem" }}
                  className="widget border-secondary text-center p-4"
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
      
    </>
  );
};

export default Products;
