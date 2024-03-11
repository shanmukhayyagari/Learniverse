import React from "react";
import "../css/About.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        {" "}
        {/* Use the prefixed class name */}
        <h1 className="about-title">About Learniverse</h1>{" "}
        {/* Use the prefixed class name */}
        <p className="about-content" style={{ textAlign: "left" }}>
          An online learning management system, or LMS, is called Learniverse.
          Learning institutions, educators, and students utilize it to access
          and administer the online course materials and to interact with one
          another regarding skill improvement and academic success. The
          customizable course development and management tools, user and course
          analytics, and corporate communication capabilities all come with
          Learniverse.
        </p>
        <h2 className="about-title">Our Mission</h2>
        <p className="about-content" style={{ textAlign: "left" }}>
          Our mission is to provide world-class instruction and a transformative
          learning experience to budding computer scientists. We are committed
          to providing a challenging and cutting-edge curriculum that fosters
          creativity and intellectual curiosity. Our goal is to give each
          student individualized advice and assistance so they may realize their
          maximum potential via ongoing performance monitoring and assessment.
          We are dedicated to creating a supportive, welcoming, and
          forward-thinking environment where academics, students, and business
          partners collaborate to push the boundaries of computer science
          knowledge.
        </p>
        <h2 className="about-title">Our Vision</h2>
        <p className="about-content" style={{ textAlign: "left" }}>
          Our vision is to redefine the parameters of academic accomplishment
          within the MSC Program by setting the standard for excellence in
          computer science teaching and performance assessment. In the future,
          we see our graduates as pioneers and leaders in the dynamic field of
          computer science, equipped with the knowledge, abilities, and
          self-assurance necessary to create the digital age. We strive to
          continuously improve our curriculum through stringent performance
          monitoring and assessment, ensuring that every student realizes their
          full potential and eventually making a lasting contribution to the
          global digital scene.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
