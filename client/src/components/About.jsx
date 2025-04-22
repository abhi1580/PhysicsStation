import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faEyeLowVision,
  faLightbulb,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "../components/About.css";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-4">
        <div className="col-md-12 text-center mb-4 about-section">
          <h2 className="about-main-head">About <span className="highlite-main-head"> Us</span></h2>
          <p className="about-main-para">
            Physics Station is a leading physics coaching institute that offers
            specialized tutoring and preparation courses for various competitive
            exams.
          </p>
        </div>
        <div className="col-md-6  text-start p-5">
          <h3 className="m-heading">
            <FontAwesomeIcon icon={faBullseye} /> Our Mission
          </h3>
          <p className="m-para">
            Our mission is to provide high-quality physics education and
            resources to students and enthusiasts of all levels. We believe that
            understanding physics is key to understanding the world around us.
          </p>
        </div>
        <div className="col-md-6  text-start p-5">
          <h3 className="m-heading">
            <FontAwesomeIcon icon={faEyeLowVision} /> Our Vision
          </h3>
          <p className="m-para">
            We envision a world where everyone has the opportunity to explore
            and appreciate the wonders of physics. We strive to create a
            community of learners who are passionate about discovering the
            principles that govern our universe.
          </p>
        </div>

        <div className="col-md-6 mb-4  text-start p-5">
          <h3 className="h4  mb-3 m-heading">
            {" "}
            <FontAwesomeIcon icon={faLightbulb} /> Future Plans
          </h3>
          <p className=" mb-3 m-para">
            We are constantly evolving and expanding our offerings to better
            serve our students. Here are some of our future plans:
          </p>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Advanced Courses:</strong>
            </p>
            <p className="list-intro">
              Introducing advanced physics courses for undergraduate and
              postgraduate students.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Research Opportunities:</strong>
            </p>
            <p className="list-intro">
              Providing opportunities for students to participate in physics
              research projects.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Workshops and Seminars:</strong>
            </p>
            <p className="list-intro">
              Organizing workshops and seminars with renowned physicists and
              educators.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Online Learning Platform:</strong>
            </p>
            <p className="list-intro">
              Developing a comprehensive online learning platform with
              interactive lessons and assessments.
            </p>
          </div>
        </div>

        {/* <div className="col-md-6 mb-4  text-start  p-5">
          <h3 className="h4  align-items-center mb-3 m-heading">
            <FontAwesomeIcon icon={faUserTie} /> Professor
          </h3>
          <p className=" mb-3 m-para">
            Meet our experienced and dedicated physics professor who is here to
            guide you through your learning journey.
          </p>
          <div className="mb-2">
            <p className="prof-name">
              <strong>• Dr. Ankulage Abhishek</strong>{" "}
              <i>
                <b>(Ph.D. in Physics)</b>
              </i>{" "}
              From IIT Bombay
            </p>
          </div>
        </div> */}

<div className="col-md-6 text-start p-5">
          <h3 className="h4 mb-3 m-heading">
            <FontAwesomeIcon icon={faUserTie} /> Our Team
          </h3>
          <p className="mb-3 m-para">
            Meet the dedicated team behind Physics Station, committed to
            providing the best learning experience for our students.
          </p>
          <div className="mb-2">
            <p className="team-member">
              <strong>• Dr. Ankulage Abhishek</strong>{" "}
              <i>(Founder & Head of Physics)</i>
            </p>
            <p className="team-role">Ph.D. in Physics from IIT Bombay</p>
          </div>
          
          <div className="mb-2">
            <p className="team-member">
              <strong>• Mr. Ravi Nelwade</strong>{" "}
              <i>(Student Support Specialist)</i>
            </p>
            <p className="team-role">B.A.</p>
          </div>
        </div>

        <div className="col-md-6  text-start p-5">
  <h3 className="h4 mb-3 m-heading">
    <FontAwesomeIcon icon={faBullseye} /> Rules and Regulations
  </h3>
  <p className="mb-3 m-para">
    To ensure a productive and respectful learning environment, we have established the following rules:
  </p>

  
  <div className="mb-3">
    <p><strong>• Attendance:</strong> Students must attend all classes regularly and on time.</p>
    <p><strong>• Respect:</strong> Show courtesy to faculty, staff, and peers.</p>
    <p><strong>• Academic Integrity:</strong> Avoid cheating or plagiarism in any form.</p>
    <p><strong>• Classroom Etiquette:</strong> Phones must be on silent; no disruptive behavior.</p>
    <p><strong>• Feedback:</strong> Constructive feedback is welcomed to help us improve.</p>
  </div>


  <div className="mb-3">
    <p><strong>• Admission Form:</strong></p>
    <ul className="list-style">
      <li>Read the form carefully before filling it.</li>
      <li>Fill in English using capital letters and blue/black ink.</li>
      <li>Must be filled in presence of a guardian.</li>
    </ul>
  </div>

  
  <div className="mb-3">
    <p><strong>• Course Duration:</strong> Classes continue until February 28th of the current academic session.</p>
  </div>

  
  <div className="mb-3">
    <p><strong>• Additional Rules:</strong></p>
    <ul className="list-style">
      <li>Submit a photocopy of the previous marksheet at admission.</li>
      <li>Admission is subject to approval and can be revoked by PS.</li>
      <li>60% fees must be paid in advance; fees are non-refundable and non-transferable.</li>
      <li>Discipline issues may lead to expulsion without refund.</li>
      <li>Continuous absenteeism without notice may lead to cancellation.</li>
      <li>ID card must be carried daily and shown on demand.</li>
      <li>PS may use names/photos of achievers in promotions.</li>
      <li>PS may send SMS or email updates about batches or academics.</li>
      <li>₹1000 charge for duplicate receipts or ID cards (in exceptional cases).</li>
      <li>PS is not responsible for incidents outside its premises.</li>
      <li>Students must follow all PS rules and maintain discipline.</li>
      <li>Non-payment of fees after 7 days of due date results in denied class access.</li>
    </ul>
  </div>
</div>


        
      </div>
    </div>
  );
};

export default About;
