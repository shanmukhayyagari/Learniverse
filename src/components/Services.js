import React from "react";
import "../css/Services.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="service-container">
        <div className="service-about">
          <h1 className="service-title">Services</h1>
          <h5 className="service-subtitle">Students</h5>
          <p className="service-list" style={{ textAlign: "left" }}>
            To help UTA students, faculty, staff, and researchers succeed
            academically, Learniverse provides a wide range of services and
            products. A high-level overview of our services is provided, along
            with a look at some of our featured offerings.
          </p>
          <h5 className="service-subtitle">
            Instructors and Quality Assurance Officer
          </h5>
          <p className="service-list" style={{ textAlign: "left" }}>
            Our platform includes practical training seminars, professional
            advice for effective course design, 24/7 technical support, a large
            resource library, and a special forum for peer evaluation to improve
            teaching methods. These services are all available to teachers. Our
            streamlined audit tools, thorough analytics dashboard to assess
            course metrics, up-to-date workshops on global educational
            standards, collaborative space with like-minded QA professionals,
            and strong support system with thorough documentation all benefit
            Quality Assurance Officers.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
