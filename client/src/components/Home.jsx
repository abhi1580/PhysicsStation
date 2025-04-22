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
import students from "../assets/students.jpg";
import { Card, Col, Row } from "react-bootstrap";

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
      description: "Track your attendance online with our easy-to-use system.",
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

  const infoData = [
    { title: "Students", value: 50 },
    { title: "Teachers", value: 5 },
    { title: "Batches", value: 8 },
    { title: "Subjects", value: 15 },
  ];

  const reviews = [
    {
      id: 1,
      name: "John Doe",
      text: "This is the best coaching class I have attended! The teaching quality is amazing.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "The resources and study materials provided are top-notch. Highly recommend!",
      rating: 3,
    },
    {
      id: 3,
      name: "Sara Lee",
      text: "A wonderful experience, the support from teachers is excellent, and I improved a lot.",
      rating: 4,
    },
  ];

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div className="hero-section text-center">
          <h1 className="hero-title mt-5">
            Welcome to <span className="highlight-text">Physics Station</span>
          </h1>
          <p className="hero-subtitle">
            Join our expert-led coaching program and level up your understanding
            of physics.
          </p>
          <Link to="/admission" className="btn btn-secondary mt-3 hero-btn">
            Register Now
          </Link>
        </div>

        <div className="container mt-5">
          <h2 className="serviceheading mt-5">Services</h2>
          <p className="servicepara mb-4">
            At Physics Station, we offer a range of services to enhance your
            learning experience.
          </p>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-md-4 p-0 m-0">
                <div className={`card text-center h-100 card-bg-${index % 6}`}>
                  <div className="card-body">
                    <FontAwesomeIcon
                      icon={service.icon}
                      className="mb-3 service-icon"
                    />
                    <h5 className="card-title">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </div>
                  <div className="text-center mt-1 p-3">
                    <Link
                      to="/services"
                      className="btn custom-learnmore-btn btn-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="container mt-5 preparation-section">
          <h2 className="prepheading text-center">Preparation</h2>
          <p className="preppara mb-4 text-center">
            At Physics Station, we offer specialized preparation courses to help
            you excel in your exams. Our expert instructors provide personalized
            guidance and resources tailored to your needs.
          </p>
          <div className="row">
            {preparationCourses.map((course, index) => (
              <div key={index} className="col-md-4 mb-4 mt-3">
                <div className="card h-100 shadow-sm border-0">
                  <div className="card-body text-center">
                    <FontAwesomeIcon
                      icon={course.icon}
                      className="mb-3 course-icon"
                    />
                    <h5 className="card-title fw-semibold">{course.title}</h5>
                    <p className="card-text1">{course.description}</p>
                  </div>
                  <div className="text-center mb-3">
                    <Link
                      to="/services"
                      className="btn btn-outline-warning btn-sm prep-btn"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="class-info-container">
          {infoData.map((item, index) => (
            <div className="info-box" key={index}>
              <div className="info-title">{item.title}</div>
              <div className="info-value">{item.value}+</div>
            </div>
          ))}
        </div>

        <div className="container mt-5 mb-5 pt-4 elegant-services">
          <div className="row">
            <h2 className=" mb-3">Junior Classes</h2>
            <p className="">
              We offer specialized physics classes for 7th, 8th, 9th, and 10th
              standard students to build a strong foundation.
            </p>
            <div className="col-md-6 mb-4 image-container">
              <img
                src={students}
                alt="Physics Classes"
                className="service-image"
              />
            </div>
            <div className="col-md-6 mb-4">
              <div className="service-box p-4">
                <ul className="list-unstyled text-start mt-3">
                  <li className="mb-2 cardtext1">
                    Access to curated study materials and resources.
                  </li>
                  <li className="mb-2 cardtext1">
                    Doubt-clearing sessions to ensure thorough understanding.
                  </li>
                  <li className="mb-2 cardtext1">
                    Continuous assessment to monitor progress and provide
                    feedback.
                  </li>
                  <li className="mb-2 cardtext1">
                    Personalized attention to cater to individual learning
                  </li>
                  <li className="mb-2 cardtext1">
                    Flexible timings to accommodate students' schedules.
                  </li>
                  <li className="mb-2 cardtext1">
                    Interactive learning environment with experienced faculty.
                  </li>
                  <li className="mb-2 cardtext1">
                    Regular parent-teacher meetings to discuss student progress.
                  </li>
                  <li className="mb-2 cardtext1">
                    Mock tests to prepare for competitive exams.
                  </li>
                  <li className="mb-2 cardtext1">
                    Group discussions and peer learning opportunities.
                  </li>
                  <li className="mb-2 cardtext1">
                    Access to online resources and recorded lectures for
                    revision.
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row image-gallery">
          <h2 className="gallery-heading mb-4">Gallery</h2>
          <p className="gallery-subheading mb-4">
            Explore our vibrant gallery showcasing the essence of Physics
            Station.{" "}
          </p>
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="gallery-img"
              alt="Boat on Calm Water"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
              className="gallery-img"
              alt="Wintry Mountain Landscape"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
              className="gallery-img"
              alt="Mountains in the Clouds"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
              className="gallery-img"
              alt="Boat on Calm Water"
            />
          </div>

          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
              className="gallery-img"
              alt="Waves at Sea"
            />

            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
              className="gallery-img"
              alt="Yosemite National Park"
            />
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-center mb-4 review-head">What Our Students Say</h2>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Prev</button>
            <Row>
              {reviews.map((review) => (
                <Col sm={12} md={6} lg={4} key={review.id} className="mb-4">
                  <div className="p-4">
                    <h5>{review.name}</h5>
                    <p>{review.text}</p>
                    <div className="d-flex justify-content-start">
                      {Array.from({ length: review.rating }).map((_, index) => (
                        <span key={index} className="text-warning">
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
            <button className="btn btn-warning">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
