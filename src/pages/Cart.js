import { useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Container, Row, Col, Button } from "react-bootstrap";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emptycart from "../Images/emptycart.png";

const Cart = () => {
  const state = useSelector((state) => state.HandelCart);
  const dispatch = useDispatch();

  const increaseItem = (item) => {
    dispatch(addCart(item));
  };

  const decreaseItem = (item) => {
    dispatch(delCart(item));
  };

  const cartItems = (product) => {
    return (
      <>
        <Container>
          <Row>
            <Col className="mt-3">
              <img
                src={product.image}
                alt="product-img"
                height="200px"
                width="200px"
              />
            </Col>
            <Col>
              <h3>{product.title}</h3>
              <p className="lead fw-bolder">
                {product.qty} X $ {product.price} = ${" "}
                {product.qty * product.price}
              </p>
              <p>{product.description}</p>

              <button
                className="rounded-pill btn-success me-1"
                onClick={() => increaseItem(product)}
              >
                <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
              <button
                className="rounded-pill btn-danger"
                onClick={() => decreaseItem(product)}
              >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
            </Col>
          </Row>
        </Container>
      </>
    );
  };
  const emptyCart = () => {
    return (
      <>
        <Container>
          <Row>
            <Col className="text-center">
              <h3>Your Cart is Empty Right Now....!</h3>
              <img src={emptycart} alt="" width="70%" height="70%" />

              <Link to="/allproducts">
                <div>
                  <Button variant="danger opacity-75">Go to Products</Button>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </>
    );
  };

  const button = () => {
    return (
      <>
        <p className="pt-3">
          <Link to={"/chekout"} className="btn btn-info">
            Proceed to checkout ({state.length} item)
          </Link>
        </p>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <Container className="py-5">
        <div className="pt-5">
          {state.length !== 0 && state.map(cartItems)}
          {state.length === 0 && emptyCart()}
          {state.length !== 0 && button()}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Cart;
