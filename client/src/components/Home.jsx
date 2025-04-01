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
import { Link } from "react-router-dom";

const Home = () => {

  const services = [
    {
      icon: faChalkboardTeacher,
      title: "Tutoring",
      description:
        "Personalized tutoring sessions to help you understand concepts.",
    },
    {
      icon: faUserTie,
      title: "Online Registration",
      description:
        "Register online for our courses and start learning physics from today.",
    },
    {
      icon: faMicroscope,
      title: "Workshops",
      description:
        "Participate in interactive workshops to deepen your understanding.",
    },
    {
      icon: faBook,
      title: "Study Materials",
      description:
        "Get access to a wide range of study materials and resources.",
    },
    {
      icon: faFilePen,
      title: "Exam Preparation",
      description:
        "Weekly exams to test your knowledge and track your progress.",
    },
    {
      icon: faCalendarDays,
      title: "Online Attendance",
      description:
        "Track your attendance online with our easy-to-use system.",
    },
  ];

  const preparationCourses = [
    {
      icon: faStethoscope,
      title: "NEET Preparation",
      description:
        "Comprehensive coaching for NEET aspirants to help them achieve their medical career goals.",
    },
    {
      icon: faGraduationCap,
      title: "GATE Preparation",
      description:
        "Expert guidance and resources for GATE exam preparation to excel in engineering fields.",
    },
    {
      icon: faBookOpenReader,
      title: "JEE Preparation",
      description:
        "Specialized coaching for JEE aspirants to help them crack the exam and secure admission in top engineering colleges.",
    },
  ];

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
          <Link to="/admission" className="btn btn-secondary mt-2 registerbtn">
            Register Now
          </Link>
        </div>

        <div className="container mt-5">
      <h2 className="serviceheading mt-5">Our Services</h2>
      <p className="servicepara">
        We offer specialized physics tuition for 11th and 12th standard students to help them excel in their studies.
      </p>
      <div className="row">
        {services.map((service, index) => (
          <div key={index} className="col-md-4 mb-4 mt-5">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={service.icon}  className="mb-3" />
                <h5 className="card-title">{service.title}</h5>
                <p className="card-text cardtext">{service.description}</p>
              </div>
              <div className="text-center mt-1 p-3">
                <Link to="/services" className="btn btn-primary">Learn More </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    

    <div className="container mt-5 preparation-section">
      <h2 className="serviceheading">Preparation</h2>
      <p className="servicepara">
        We also offer preparation courses for various competitive exams
      </p>
      <div className="row">
        {preparationCourses.map((course, index) => (
          <div key={index} className="col-md-4 mb-4 mt-5">
            <div className="card text-center">
              <div className="card-body">
                <FontAwesomeIcon icon={course.icon}  className="mb-3" />
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text cardtext">{course.description}</p>
              </div>
              <div className="text-center mt-1 p-3">
              <Link to="/services" className="btn btn-primary">Learn More</Link>
              </div>
            </div>
          </div>
        ))}
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


      <div className="container mt-5 student-reviews">
      <h2 className="serviceheading">Student Reviews</h2>
      <p className="servicepara">
        Hear what our students have to say about their experience at Physics Station.
      </p>
      <div className="row">
        <div className="col-md-4 mb-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "Physics Station has completely changed the way I understand physics. The tutors are amazing!"
            </p>
            <footer className="blockquote-footer mt-2">- Ananya Sharma</footer>
          </blockquote>
        </div>
        <div className="col-md-4 mb-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "The workshops and study materials are top-notch. I feel much more confident now."
            </p>
            <footer className="blockquote-footer mt-2">- Rahul Mehta</footer>
          </blockquote>
        </div>
        <div className="col-md-4 mb-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "Thanks to Physics Station, I scored excellent marks in my exams. Highly recommended!"
            </p>
            <footer className="blockquote-footer mt-2">- Priya Singh</footer>
          </blockquote>
        </div>
        <div className="col-md-4 mb-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "The personalized tutoring sessions helped me grasp difficult concepts with ease."
            </p>
            <footer className="blockquote-footer mt-2">- Karan Verma</footer>
          </blockquote>
        </div>
        <div className="col-md-4 mb-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "The NEET preparation course was incredibly helpful. I couldn't have done it without their support."
            </p>
            <footer className="blockquote-footer mt-2">- Sneha Gupta</footer>
          </blockquote>
        </div>
        <div className="col-md-4 mb-4">
          <blockquote className="blockquote">
            <p className="mb-0">
              "Physics Station's resources and guidance made learning enjoyable and effective."
            </p>
            <footer className="blockquote-footer mt-2">- Arjun Patel</footer>
          </blockquote>
        </div>
      </div>
    </div>

    <div className="container mt-5 text-center">
      <h2 className="serviceheading">Submit Your Review</h2>
      <p className="servicepara">
        Share your experience with Physics Station. Your feedback is valuable to us!
      </p>
      <form>
        <div className="mb-3 col-md-6 ">
          <label htmlFor="studentName" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="studentName"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="studentReview" className="form-label">
            Your Review
          </label>
          <textarea
            className="form-control"
            id="studentReview"
            rows="3"
            placeholder="Write your review here"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>
    </div>

      </div>
    </div>
  );
};
export default Home;
