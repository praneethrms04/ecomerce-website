import ecom from "../Images/ecom7.png";

import { Link } from "react-router-dom";

import "./homeintro.css";
// import Products from "../pages/Products";
const HomeIntro = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={ecom} alt="intro-img" />
      </div>
      <div className="content">
        <p className="fs-2">Every Purchase will be made with Pleasure</p>
        <div>
          <Link to="/category" className="btn btn-success text-dark m-2">
            Start Shopping Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
