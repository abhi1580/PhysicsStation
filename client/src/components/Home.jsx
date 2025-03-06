import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faBook,
  faUserTie,
  faMicroscope,
  faFilePen,
  faCalendarDays,
  faStethoscope,
  faGraduationCap,
  faBookOpenReader,
} from "@fortawesome/free-solid-svg-icons";

import "./Home.css";

const Home = () => {

  const [standard, setStandard] = useState("");
  const [subject, setSubject] = useState("");

  const chapters = [
    { id: 1, number: "01", name: "Algebra", link: "#" },
    { id: 2, number: "02", name: "Geometry", link: "#" },
    { id: 3, number: "03", name: "Math", link: "#" },
    { id: 3, number: "03", name: "Science", link: "#" },
  ];

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="col-12 banner">
          <h1 className="mt-5 mainheading">Welcome to Physics Station</h1>
          <p className="mainheading2">
            Your one-stop destination for all things physics.
          </p>
          <button className="btn btn-secondary mt-2 registerbtn">
            Register Now
          </button>
        </div>

        <div className="container mt-5 ">
          <h2 className="serviceheading mt-5">Our Services</h2>
          <p className="servicepara">
            We offer specialized physics tuition for 11th and 12th standard
            students to help them excel in their studies.
          </p>
          <div className="row">
            <div className="col-md-4 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faChalkboardTeacher} />
                  <h5 className="card-title">Tutoring</h5>
                  <p className="card-text cardtext">
                    Personalized tutoring sessions to help you understand
                    complex physics concepts.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faUserTie} />
                  <h5 className="card-title">Online Registration</h5>
                  <p className="card-text cardtext">
                    Register online for our courses and start learning physics
                    from today.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faMicroscope} />
                  <h5 className="card-title">Workshops</h5>
                  <p className="card-text cardtext">
                    Participate in interactive workshops to deepen your
                    understanding.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faBook} />
                  <h5 className="card-title">Study Materials</h5>
                  <p className="card-text cardtext">
                    Get access to a wide range of study materials and resources.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faFilePen} />
                  <h5 className="card-title">Exam Preparation</h5>
                  <p className="card-text cardtext">
                    Weekly exams to test your knowledge and track your progress.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faCalendarDays} />
                  <h5 className="card-title">Online Attendace</h5>
                  <p className="card-text cardtext">
                    Track your attendance online with our easy-to-use system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 preparation-section">
          <h2 className="serviceheading">Preparation</h2>
          <p className="servicepara">
            We also offer preparation courses for various competitive exams
          </p>
          <div className="row">
            <div className="col-md-4 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faStethoscope} />
                  <h5 className="card-title">NEET Preparation</h5>
                  <p className="card-text cardtext">
                    Comprehensive coaching for NEET aspirants to help them
                    achieve their medical career goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faGraduationCap} />
                  <h5 className="card-title">GATE Preparation</h5>
                  <p className="card-text cardtext">
                    Expert guidance and resources for GATE exam preparation to
                    excel in engineering fields.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-4 mt-5">
              <div className="card">
                <div className="card-body">
                  <FontAwesomeIcon icon={faBookOpenReader} />
                  <h5 className="card-title">JEE Preparation</h5>
                  <p className="card-text cardtext">
                    Specialized coaching for JEE aspirants to help them crack
                    the exam and secure admission in top engineering colleges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5 pt-5">
          <div className="row">
          <div className="col-md-6">
          <h2 className="serviceheading">Other Services</h2>
          <p className="servicepara">
            We also provide additional services to support your learning journey.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2 cardtext">
               One-on-one mentoring sessions to address individual learning needs.
            </li>
            <li className="mb-2 cardtext">
              Access to an extensive library of reference books and journals.
            </li>
            <li className="mb-2 cardtext">
               Career counseling and guidance to help you choose the right path.
            </li>
            <li className="mb-2 cardtext">
               Hands-on lab sessions to enhance practical understanding.
            </li>
            <li className="mb-2 cardtext">
               Regular feedback and performance analysis to track progress.
            </li>
          </ul>
        </div>
        <div className="col-md-6 ">
          <h2 className="serviceheading">Junior Classes</h2>
          <p className="servicepara">
            We offer specialized physics classes for 7th, 8th, 9th, and 10th standard students to build a strong foundation.
          </p>
          <ul className="list-unstyled">
            <li className="mb-2 cardtext">
              Interactive classes to make learning physics fun and engaging.
            </li>
            <li className="mb-2 cardtext">
              Regular quizzes and assignments to reinforce concepts.
            </li>
            <li className="mb-2 cardtext">
              Access to curated study materials and resources.
            </li>
            <li className="mb-2 cardtext">
              Doubt-clearing sessions to ensure thorough understanding.
            </li>
            <li className="mb-2 cardtext">
              Continuous assessment to monitor progress and provide feedback.
            </li>
          </ul>
        </div>
        </div>
        </div>

        
      <div className="container mt-5 study-resources">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center res-head-style serviceheading">Study Resources</h1>
          </div>

          <div className="col-md-6 mt-3">
            <select
              id="standard"
              className="form-select btn btn-lg"
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
            >
              <option value="">Select Standard</option>
              {[...Array(5)].map((_, i) => (
                <option key={i} value={`Standard ${i + 6}`}>{`Standard ${i + 6}`}</option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mt-3">
            <select
              id="subject"
              className="form-select btn btn-lg"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select Subject</option>
              {["Mathematics", "Science", "History", "Geography", "English"].map(
                (subj, index) => (
                  <option key={index} value={subj}>
                    {subj}
                  </option>
                )
              )}
            </select>
          </div>

          <div className="col-md-12 mt-3 mb-3">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Chapter No.</th>
                  <th>Chapter Name</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {chapters.map((chapter) => (
                  <tr key={chapter.id}>
                    <td>{chapter.number}</td>
                    <td>{chapter.name}</td>
                    <td>
                      <a href={chapter.link} className="download-link">Download PDF</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    

      </div>
    </div>
  );
};
export default Home;
