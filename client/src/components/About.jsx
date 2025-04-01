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
          <h3 className="m-heading">
            <FontAwesomeIcon icon={faBullseye} /> Our Mission
          </h3>
          <p className="m-para">
            Our mission is to provide high-quality physics education and
            resources to students and enthusiasts of all levels. We believe that
            understanding physics is key to understanding the world around us.
          </p>
        </div>
        <div className="col-md-6 mt-5 text-start p-5">
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

        <div className="col-md-6 mb-4 p-4 text-start mt-5 p-5">
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

        <div className="col-md-6 mb-4 p-4 text-start mt-5 p-5">
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
        </div>

        <div className="col-md-6 mt-5 text-start p-5">
          <h3 className="h4 mb-3 m-heading">
            <FontAwesomeIcon icon={faBullseye} /> Rules and Regulations
          </h3>
          <p className="mb-3 m-para">
            To ensure a productive and respectful learning environment, we have
            established the following rules and regulations:
          </p>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Attendance:</strong>
            </p>
            <p className="list-intro">
              Students are expected to attend all classes regularly and on time.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Respect:</strong>
            </p>
            <p className="list-intro">
              Treat faculty, staff, and fellow students with respect and
              courtesy.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Academic Integrity:</strong>
            </p>
            <p className="list-intro">
              Maintain honesty in all academic work and avoid any form of
              cheating or plagiarism.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Classroom Etiquette:</strong>
            </p>
            <p className="list-intro">
              Keep mobile phones on silent mode and avoid any disruptive
              behavior during classes.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Feedback:</strong>
            </p>
            <p className="list-intro">
              Provide constructive feedback to help us improve our services and
              offerings.
            </p>
          </div>
          <div className="mb-2">
            <p className="list-para">
              <strong>• Admission Form:</strong>
            </p>
            <p className="list-intro">
              1. The admission form should be carefully read before it is filled
              out.
            </p>
            <p className="list-intro">
              2. The admission form should be filled out in English.
            </p>
            <p className="list-intro">
              3. The admission form should be filled out in capital letters.
            </p>
            <p className="list-intro">
              4. The admission form should be filled out in black or blue ink.
            </p>
            <p className="list-intro">
              5. The admission form should be filled out in the presence of a
              parent or guardian.
            </p>
          </div>

          <div className="mb-2">
            <p className="list-para">
              <strong>• Course Duration:</strong>
            </p>
            <p className="list-intro">
              {" "}
              This course will be continue till February 28th of the current
              academic session.
            </p>
          </div>

          <div className="mb-2">
            <p className="list-para">
              <strong>• Other:</strong>
            </p>
            <p className="list-intro">
              1. Do submit a photocopy of the previous class marksheet at the
              time of admission.
            </p>
            <p className="list-intro">
              2. The right of admission is reserved with the PS. It is the right
              of the PS to give or cancel admission to the student for any
              reason.
            </p>
            <p className="list-intro">
              3. 60% Fees must be paid in advance, and once the fee is paid, it
              is not refundable in any case as once the fee is paid.
            </p>
            <p className="list-intro">
              4. The fee paid is not transferable to any other course, subject,
              or batch
            </p>
            <p className="list-intro">
              5. The PS reserves its right to expel from the class any student
              who will be found not maintaining discipline, or is indecent or
              improper in his/her behaviour. The decision given by the PS in
              this regardwill be final and will be binding on the student or
              guardian. No fees will be refundable in this case.
            </p>
            <p className="list-intro">
              6. Continuous absenteeism without prior intimation may lead to the cancellation of admission.
              No fees will be refunded in such a case.
            </p>
            <p className="list-intro">  
            7. Please bring your identity card every day and produce it on demand.
            </p>
            <p className="list-intro">  
            8. The PS can use the name and photograph of the students who achieve special positions in
            the Examinations.
            </p>
            <p className="list-intro">  
            9. The student who has got admission in the PS has to undertake and give right to the PS
use his/her name and photograph of the student who achieves a special position in the
examination without taking permission of the student/parent.
            </p>
            <p className="list-intro">  
            10. The PS can send an emalil or SMS to the students to provide batch and other academic
            related information.
            </p>
            <p className="list-intro">  
            11. Under extraordinary circumstances, at the discretion of management, Rs. 1000/- wil
            charged for the issue of duplicate receipts or identity cards.
            </p>
            <p className="list-intro">  
            12. The PS shall not be responsible for or held liable for any event, accident, or criminal act of
            the student out of the premises and campus of the PS.
            </p>
            <p className="list-intro">  
            13. The student has to undertake that he will follow the discipline rules and regulations of the
PS and also abide by the instructions and orders to maintain peace and discipline
of the PS.
            </p>
            <p className="list-intro">  
            14. If any student doesn't pay the installment of fee on due date, he/she will not be allowed to
attend the classes after giving the grace of 7 days. Therefore , it is the responsibility of the
parents to ensure that they pay the fee on due date.
            </p>
          </div>
        </div>

        <div className="col-md-6 mt-5 text-start p-5">
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
            <p className="team-role">B.A. in Pussylogy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
