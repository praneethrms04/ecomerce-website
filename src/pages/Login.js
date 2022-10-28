import { useState } from "react";
import "../style/login.css";
import Navbar from "../components/Navbar";

function Login() {
  const [showSignup, setShowSignup] = useState(true);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div id="loginPage">
      <div id="loginPage">
        <Navbar />
        <div className="card bg-dark text-white border-0">
          <img
            className="card-img"
            src="https://img.freepik.com/free-photo/model-being-covered-by-shopping-bags-copy-space_23-2148674119.jpg?w=2000"
            alt="Home page background"
            height={"772 px"}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <div className="container py-5">
                <div className="row">
                  <div>
                    {!showSignup ? (
                      <div className="login-wrapper">
                        <form>
                          <div className="container" id="containerss">
                            <h2>SIGNUP</h2>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="20"
                              fill="currentColor"
                              className="bi bi-person-bounding-box"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg>{" "}
                            <input
                              id="inputt"
                              type="text"
                              placeholder="Enter your name"
                            />
                            <br />
                            <br />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="20"
                              fill="currentColor"
                              className="bi bi-envelope"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>{" "}
                            <input
                              id="inputt"
                              type="email"
                              placeholder="Enter your email"
                            />
                            <br />
                            <br />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="20"
                              fill="currentColor"
                              className="bi bi-person-lines-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                            </svg>{" "}
                            <input
                              id="inputt"
                              type="text"
                              placeholder="Create password (6-12)"
                            />
                            <br />
                            <br />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="20"
                              fill="currentColor"
                              className="bi bi-shield-lock"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                            </svg>{" "}
                            <input
                              id="inputt"
                              type="text"
                              placeholder="Confirm password"
                            />
                            <br />
                            <br />
                            <button id="button">Signup</button>
                            <div
                              className="text-center text-danger mt-4 fw-bolder"
                              onClick={toggleSignup}
                            >
                              {" "}
                              Already have an account? Login
                            </div>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <div className="login-wrapper">
                        <form>
                          <div className="container" id="containerss">
                            <h2>LOGIN</h2>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="20"
                              fill="currentColor"
                              className="bi bi-person-bounding-box"
                              viewBox="0 0 16 16"
                            >
                              <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg>{" "}
                            <input
                              id="inputt"
                              type="text"
                              placeholder="Enter your user Name/id"
                            />
                            <br />
                            <br />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="25"
                              height="20"
                              fill="currentColor"
                              className="bi bi-shield-lock"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z" />
                              <path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z" />
                            </svg>{" "}
                            <input
                              id="inputt"
                              type="password"
                              placeholder="Enter your password"
                            />
                            <br />
                            <br />
                            <button id="button">Login</button>
                            <div
                              className="text-center text-danger mt-4 fw-bolder"
                              onClick={toggleSignup}
                            >
                              Don't have an account? Signup
                            </div>
                          </div>
                        </form>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
