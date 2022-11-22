import { useState } from "react";
import { Container,Form,Row } from "react-bootstrap";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
 

function Login() {
  const [showSignup, setShowSignup] = useState(true);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    
    <>
    <Navbar />
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <div
          className={
            !showSignup
              ? " card card-signin m-4 p-4 shadow-lg rounded-4"
              : "card card-signup m-4 p-4 shadow-lg rounded-4"
          }
        >
          <Row className="m-2 ">
              <h4 className="text-center ">
                {showSignup ? "Sign up" : "Login"}
              </h4>
              <Form>
                <div className="input-group m-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Id"
                 
                    autoFocus
                    required
                  />
                </div>
                <input
                  type="password"
                  className="form-control m-1"
                  placeholder="Password"
                
                  required
                />
                {showSignup && (
                  <>
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="User Name"
            
                        required
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                   
                  </>
                )}
                <div className="input-group my-2">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value={showSignup ? "Sign Up" : "Log In"}
                  />
                </div>
                <div
                  className="signup-btn text-center text-info"
                  onClick={toggleSignup}
                >
                  {showSignup
                    ? "Already have an Account ? Login"
                    : "Don't have an Account? Signup"}
                </div>
              </Form>
          </Row>
        </div>
      </Container>
      <Footer />
    
    </>
  );
}

export default Login;
