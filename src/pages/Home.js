import Navbar from "../components/Navbar";
import Products from "./Products";
import Footer from "../components/Footer";

function Home() {
 
  return (
    <>
      <Navbar />
      <div className="card bg-dark text-white">
        <img
          className="card-img"
          src="https://img.freepik.com/free-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000"
          alt="Home page background"
          height={"780 px"}
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h1 className="card-title display-5 fw-bolder  ">
              SUMMER SEASON ARRIVALS
            </h1>
            <h3 className="card-text">CHEKOUT ALL NEW ITEM'S</h3>
            <h5 className="card-text">
              “Whoever said that money can't buy happiness simply didn't know
              where to go shopping.”
            </h5>
          </div>
        </div>
      </div>
      <Products />
      <br />
      <Footer/>
    </>
  );
}
export default Home;