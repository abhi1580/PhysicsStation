import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css'; 
import AuthLayout from './components/AuthLayout';
import SignUp from './components/SignUp';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<AuthLayout />} >
                <Route path="signup" element={<SignUp />} />
                <Route path="login" element={<Login />} />

              </Route>
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
