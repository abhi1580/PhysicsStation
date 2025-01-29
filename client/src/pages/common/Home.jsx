import React from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/commonLayout/footer";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold">Master Physics with Experts</h2>
          <p className="mt-4 text-lg">
            Join our interactive and engaging classes to excel in physics.
          </p>
          <Link
            to="/enroll"
            className="mt-6 inline-block px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
          >
            Enroll Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h3 className="text-3xl font-semibold text-center">Why Choose Us?</h3>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-bold">Expert Tutors</h4>
            <p className="text-gray-600 mt-2">
              Learn from experienced and qualified physics teachers.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-bold">Interactive Learning</h4>
            <p className="text-gray-600 mt-2">
              Engaging lectures with real-life examples and experiments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h4 className="text-xl font-bold">Doubt Clearing Sessions</h4>
            <p className="text-gray-600 mt-2">
              Get your doubts resolved instantly by our expert faculty.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-200 py-16 text-center">
        <h3 className="text-3xl font-semibold">Get in Touch</h3>
        <p className="text-gray-600 mt-2">
          Have questions? Contact us for more details.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Home;
