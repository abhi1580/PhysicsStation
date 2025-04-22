import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-100">
      <footer className="text-white text-center text-lg-start" style={{ backgroundColor: "#fec107" }}>
        <div className="container p-4">
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">About Physics Station</h5>
              <p>
                Physics Station offers comprehensive classes and resources for students and enthusiasts
                to explore the wonders of physics. Join us to dive deep into the world of particles, forces,
                and the universe.
              </p>
              <p>
                Our mission is to make physics accessible and enjoyable for everyone, with expert instructors
                and engaging content.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4 pb-1">Address</h5>
              
              <ul className="list-unstyled">
                <li className="mb-3">Ambajogai Road, Opp. Pahunchar Hotel, Physics Station Classes, Latur</li>
                <li className="mb-3"><i className="fas fa-envelope me-2"></i>physicsstation@gmail.com</li>
                <li className="mb-3"><i className="fas fa-phone me-2"></i>+91 8087992028</li>
                <li className="mb-3"><i className="fas fa-print me-2"></i>+91 7498289182</li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-4">Opening hours</h5>
              <table className="table text-center text-white">
                <tbody>
                  <tr><td>Mon - Thu:</td><td>8am - 9pm</td></tr>
                  <tr><td>Fri - Sat:</td><td>8am - 1am</td></tr>
                  <tr><td>Sunday:</td><td>9am - 10pm</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2025 Copyright:
          <a className="text-white" href="https://physicsstation.com/">PhysicsStation.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
