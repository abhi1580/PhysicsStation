import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import"../components/Contact.css";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const faqs = [
    { question: "What courses do you offer?", answer: "We offer specialized physics tuition..." },
    { question: "How can I register for a course?", answer: "You can register for our courses online..." },
    { question: "What is the fee structure?", answer: "Our fee structure varies..." },
    { question: "Do you offer online classes?", answer: "Yes, we offer both online and offline classes..." },
    { question: "What study materials do you provide?", answer: "We provide a variety of study materials..." },
    { question: "Can I get a demo class before enrolling?", answer: "Yes, we offer demo classes..." },
    { question: "What is the duration of each course?", answer: "The duration of each course varies..." },
    { question: "Do you provide any scholarships?", answer: "Yes, we offer scholarships to deserving students..." },
    { question: "How can I contact you for more information?", answer: "You can contact us through our website..." },
  ];

  return (
    <div className="container-fluid ">
      
      <div className="row">
        <div className="col-12 text-center mb-4 contact-banner">
          <h2 className=" contact-main-heading">Contact <span className="highlight-2">Us</span></h2>
          <p className="contact-main-para">Feel free to reach out to us via phone, email, or the contact form below. We strive to respond as quickly as possible and look forward to connecting with you! </p>
        </div>
        

        <div className="col-md-6 mb-4 p-5">
          <h3 className="mb-4 m-heading">Send Us Your Query</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-submit1 mt-2 ">Submit</button>
          </form>
        </div>

        

        
        <div className="col-md-6 mb-4 p-5">
          <h3 className="mb-4 m-heading">Contact Information</h3>
          <h4 className="m-para"><FontAwesomeIcon icon={faLocationDot} /> Address</h4>
          <p>Ambajogai Road, Opp. Pahunchar Hotel, Physics Station, Latur (413512).</p>
          <h4 className="m-para"><FontAwesomeIcon icon={faEnvelope} /> Email</h4>
          <p>physicsstation@gmail.com</p>
          <h4 className="m-para"><FontAwesomeIcon icon={faPhone} /> Phone</h4>
          <p>+91 7498289182</p>
        </div>
      </div>


      <div className="container mt-5">
      <h3 className="text-center mb-4 m-heading">Our Location</h3>
      <div className="map-container" style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden" }}>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.3982784369496!2d76.56850227596956!3d18.420217172230515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83788bf95f5b%3A0xa8b13ce5c3e5dd8e!2sPahunchar%20Pure%20Veg%20Restaurant!5e0!3m2!1sen!2sin!4v1741179382228!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ position: "absolute", top: 0, left: 0, border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>

<div className="container mt-5 mb-5 ">
      <div className="row">
        <div className="col-12">
          <h4 className="mb-3 m-heading">Frequently Asked Questions</h4>
          <Accordion defaultActiveKey="0">
            {faqs.map((faq, index) => (
              <Accordion.Item eventKey={String(index)} key={index}>
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
