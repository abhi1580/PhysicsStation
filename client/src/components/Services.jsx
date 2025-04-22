import React from 'react';
import '../components/Services.css'; 
import service1 from '../assets/service1.jpg';
import service2 from '../assets/service2.jpg';
import service3 from '../assets/service3.jpg';
import service4 from '../assets/service4.jpg';
import service5 from '../assets/service5.jpg';
import service6 from '../assets/service6.jpg';

const Services = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mb-5">
  <div className="col-md-12 text-center mb-4 services-section">
  <h1 className="section-title">
  Our <span className="highlight">Services</span>
</h1>

    <p className="section-subtitle">
      We offer a wide range of physics-related services to help you excel in your studies and research.
    </p>
  </div>

  <div className="row align-items-center mb-5">
    <div className="col-md-6 order-md-1">
      <img src={service1} className="img-fluid rounded fixed-img" alt="Service 1" />
    </div>
    <div className="col-md-6 order-md-2">
      <h3 className='serice-name'>Tutoring</h3>
      <p className='service-para'>At our tutoring center, we are dedicated to helping students reach their full academic potential through personalized and results-driven guidance. Whether it's school subjects, competitive exam preparation, or concept clarification, our experienced tutors provide one-on-one and group sessions tailored to each student's unique learning style. With a strong focus on building confidence and improving performance, we ensure that every student receives the support they need to excel in their studies and achieve their goals.</p>
    </div>
  </div>

  <div className="row align-items-center mb-5">
    <div className="col-md-6 order-md-2">
      <img src={service2} className="img-fluid rounded fixed-img" alt="Service 2" />
    </div>
    <div className="col-md-6 order-md-1">
      <h3 className='serice-name'>Online Registration</h3>
      <p className='service-para'>Getting started with our tutoring programs is quick and easy with our hassle-free online registration process. Simply fill out the registration form, choose your preferred subjects or courses, and select your convenient schedule—all from the comfort of your home. Once registered, our team will get in touch to guide you through the next steps. Join us today and take the first step towards academic excellence!</p>
    </div>
  </div>

  <div className="row align-items-center mb-5">
    <div className="col-md-6 order-md-1">
      <img src={service3} className="img-fluid rounded fixed-img" alt="Service 3" />
    </div>
    <div className="col-md-6 order-md-2">
      <h3 className='serice-name'>Workshops</h3>
      <p className='service-para'>Our workshops are designed to go beyond traditional classroom teaching, offering students a chance to explore subjects through hands-on activities, real-life applications, and expert guidance. These focused sessions help sharpen problem-solving skills, boost confidence, and ignite curiosity in learners of all levels. Whether it's exam strategies, science experiments, or skill-based learning, our workshops provide an engaging environment where knowledge comes alive.</p>
    </div>
  </div>
  <div className="row align-items-center mb-5">
    <div className="col-md-6 order-md-2">
      <img src={service4} className="img-fluid rounded fixed-img" alt="Service 4" />
    </div>
    <div className="col-md-6 order-md-1">
      <h3 className='serice-name'>Study Materials</h3>
      <p className='service-para'>We provide well-structured and easy-to-understand study materials that align with the latest curriculum and exam patterns. Each resource is thoughtfully prepared by subject experts to help students grasp key concepts, practice effectively, and revise with confidence. From detailed notes and formula sheets to practice papers and revision guides, our materials are designed to support every step of the learning journey—both in class and at home.</p>
    </div>
  </div>
  <div className="row align-items-center mb-5">
    <div className="col-md-6 order-md-1">
      <img src={service5} className="img-fluid rounded fixed-img" alt="Service 5" />
    </div>
    <div className="col-md-6 order-md-2">
      <h3 className='serice-name'>Exam Preparation</h3>
      <p className='service-para'>Our exam preparation programs are specially designed to help students perform their best in school exams, board exams, and competitive tests. We provide a strategic mix of concept revision, practice tests, time-management techniques, and personalized doubt-solving sessions. With expert guidance and regular performance tracking, we ensure students gain the confidence and clarity they need to tackle exams with ease and achieve outstanding results.</p>
    </div>
  </div>
  <div className="row align-items-center mb-5">
    <div className="col-md-6 order-md-2">
      <img src={service6} className="img-fluid rounded fixed-img" alt="Service 6" />
    </div>
    <div className="col-md-6 order-md-1">
      <h3 className='serice-name'>Online Attendance</h3>
      <p className='service-para'>Our smart online attendance system ensures complete transparency and accountability for both students and parents. With real-time tracking and instant updates, you can easily monitor attendance records through your dashboard. This system helps maintain consistency, encourages regular participation, and allows parents to stay informed about their child's classroom presence—anytime, anywhere.</p>
    </div>
  </div>
</div>
</div>

  );
};

export default Services;
