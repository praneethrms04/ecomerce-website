import ecom from "../Images/images.png";

import { Link } from "react-router-dom";

const HomeIntro = () => {
  return (
    <div className="row" style={{ height: "505px" }}>
      <div className="col d-flex justify-content-end mt-5">
        <img className="intro-img" src={ecom} alt="intro-img" width="500px" />
      </div>
      <div className="col d-flex justify-content-center align-items-center pt-5">
        <p className="fs-4 pt-5 justify-content-center align-items-center ms-5">
          Every Purchase will be made with Pleasure...
          <Link to="/category" className="btn btn-dark text-white m-2">
            Start Shopping Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HomeIntro;
