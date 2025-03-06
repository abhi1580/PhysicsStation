import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import './SignUp.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        phoneNumber: "",
        birthDate: "",
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
      };
  return (
    <div className="container-fluid login-container">
     <div className="row">
       <div className="col-md-6 offset-md-3">
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <h4 className='text-center p-2 signup-heading'>Sign Up</h4>
        
        <div className="form-group">
          <input type="text" className="form-control item" id="username" placeholder="Full Name" value={formData.username} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" className="form-control item" id="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        
        <div className="form-group">
          <input type="text" className="form-control item" id="email" placeholder="Email Id" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="password" className="form-control item" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
        </div>
        
        

        <div className="form-group d-flex justify-content-between align-items-center mt-4">
  <div>
    <input type="checkbox" id="rememberMe" className="me-1" />
    <label className='rem'>Remember Me</label>
  </div>
  <div>
    <Link to="/auth/login" className="loginlink">Already have an account? Login </Link>
  </div>
</div>
        
<div className="form-group text-center">
          <button type="submit" className="btn btn-block create-account ">CREATE ACCOUNT</button>
        </div>

      </form>
      
    </div>
    </div>
    </div>
    </div>
  )
}

export default SignUp
