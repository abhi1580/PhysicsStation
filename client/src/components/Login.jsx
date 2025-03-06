import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css"; // Using the same style structure as SignUp.css

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="container-fluid login-container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="registration-form">
            <form onSubmit={handleSubmit}>
              <h4 className="text-center p-2 signup-heading">Login</h4>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control item"
                  id="email"
                  placeholder="Email Id"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control item"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group d-flex justify-content-between align-items-center mt-4">
                <div>
                  <input type="checkbox" id="rememberMe" className="me-1" />
                  <label className="rem">Remember Me</label>
                </div>
                <div>
                  <Link to="/auth/signup" className="loginlink">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>

              <div className="form-group text-center mt-3">
                <button type="submit" className="btn btn-block create-account">
                  LOGIN
                </button>
              </div>
            </form>

            <div className="social-media">
              <h5>Login with social media</h5>
              <div className="social-icons d-flex gap-3 justify-content-center">
                <Link to="/auth/facebook">
                  <FontAwesomeIcon icon={faFacebook} className="text-primary fs-4" />
                </Link>
                <Link to="/auth/google">
                  <FontAwesomeIcon icon={faGoogle} className="text-danger fs-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
