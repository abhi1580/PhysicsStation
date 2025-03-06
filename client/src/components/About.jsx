import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullseye,faEyeLowVision,faLightbulb,faUserTie} from "@fortawesome/free-solid-svg-icons";
import "../components/About.css";


const About = () => {
  return (
    <div className="container-fluid  text-center ">
      <div className="row">
        <div className="col-md-12 mb-4 about-banner">
          <h2 className="about-heading mt-5">About Us</h2>
          <p className="about-para">
            Physics Station is a leading physics coaching institute that offers
            specialized tutoring and preparation courses for various competitive
            exams. Our team of experienced faculty members is dedicated to
            providing quality education and helping students achieve their
            academic goals.
          </p>
        </div>
        <div className="col-md-6 mt-5 text-start p-5">
          <h3 className="m-heading"><FontAwesomeIcon icon={faBullseye} /> Our Misssion</h3>
          <p className="m-para">
            Our mission is to provide high-quality physics education and
            resources to students and enthusiasts of all levels. We believe that
            understanding physics is key to understanding the world around us.
          </p>
        </div>
        <div className="col-md-6 mt-5 text-start p-5">
          <h3 className="m-heading"><FontAwesomeIcon icon={faEyeLowVision} /> Our Vision</h3>
          <p className="m-para">
            We envision a world where everyone has the opportunity to explore
            and appreciate the wonders of physics. We strive to create a
            community of learners who are passionate about discovering the
            principles that govern our universe.
          </p>
        </div>

        <div className="col-md-6 mb-4 p-4 text-start mt-5 p-5">
      <h3 className="h4  mb-3 m-heading"> <FontAwesomeIcon icon={faLightbulb} /> Future Plans</h3>
      <p className=" mb-3 m-para">
        We are constantly evolving and expanding our offerings to better serve our students. Here are some of our future plans:
      </p>
      <ul className="list-unstyled ">
        <li className="mb-2 ">
         <p className="list-para"> <strong className="">Advanced Courses:</strong></p> <p className="list-intro"> Introducing advanced physics courses for undergraduate and postgraduate students.</p>
        </li>
        <li className="mb-2">
          <p className="list-para"><strong>Research Opportunities:</strong></p><p className="list-intro"> Providing opportunities for students to participate in physics research projects. </p>
        </li>
        <li className="mb-2">
        <p className="list-para"><strong>Workshops and Seminars:</strong></p><p className="list-intro"> Organizing workshops and seminars with renowned physicists and educators.</p>
        </li>
        <li className="mb-2">
        <p className="list-para"><strong>Online Learning Platform:</strong></p><p className="list-intro"> Developing a comprehensive online learning platform with interactive lessons and assessments.</p>
        </li>
      </ul>
    </div>

    <div className="col-md-6 mb-4 p-4 text-start mt-5 p-5">
      <h3 className="h4  align-items-center mb-3 m-heading"><FontAwesomeIcon icon={faUserTie} /> Professor
      </h3>
      <p className=" mb-3 m-para">
        Meet our experienced and dedicated physics professor who is here to guide you through your learning journey.
      </p>
      <ul className="list-unstyled">
        <li className="mb-2">
          <p className="prof-name"><strong>Dr. Ankulage Abhishek</strong> <i><b>(Ph.D. in Physics)</b></i> From IIT Bombay</p>
        </li>
      </ul>
    </div>

      </div>
    </div>
  );
};

export default About;
