import React from "react";
import "../css/Home.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Chat from "./Chat";
import Header from "./Header";
const Home = () => {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <p style={{ textAlign: "left" }}>
            Our Masters in Computer Science program is committed to giving
            students a top-notch education in the subject. We prepare our
            students to succeed in the dynamic field of technology with a
            demanding curriculum, skilled instructors, and cutting-edge tools.
          </p>
          <div className="home-row">
            <div className="home-column">
              <h1>Context</h1>

              <p style={{ textAlign: "left" }}>
                Online courses and resources are available through Learniverse.
                Access to assignments, grades, conversations, and course
                materials is provided for students. Teachers may connect with
                students, upload information, and make announcements. The
                platform allows for the integration of outside tools to increase
                functionality. Learniverse settings and support are tailored to
                the demands of UTA.
              </p>

              <h1>What We Offer</h1>

              <p style={{ textAlign: "left" }}>
                We provide a wide range of services and possibilities for our
                students at our college, including: Good Education and Career
                Advice Additional Academic Activities Contemporary Facilities We
                are committed to assisting students in achieving their academic
                and professional objectives.
              </p>
            </div>
            <div className="home-column">
              <img
                src="https://cdn.web.uta.edu/-/media/project/website/news/releases/2021/08/uta-tower-web.ashx?revision=105a0011-3684-47d2-93ce-7534af0e8681"
                alt=""
                className="home-image"
              />
            </div>
          </div>
        </div>
        <div className="home-buttons">
          <div>
            <Link to="/contact">
              <button type="button" className="home-button">
                Contact
              </button>
            </Link>

            <Link to="/services">
              <button type="button" className="home-button">
                Services
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
