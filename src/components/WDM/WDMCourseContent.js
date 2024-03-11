import React from "react";
import "../../css/CourseContent.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const WDMCourseContent = () => {
  return (
    <>
      <Navbar />
      <div className="wdm-container">
        <h4>Course Description</h4>
        <p>
          Welcome to the website, your one-stop destination for all your data
          science course needs. We offer a comprehensive range of courses to
          help you excel in the field of data science. Our dedicated team of
          specialized instructors ensures that you receive high-quality
          education, up-to-date information, and valuable insights throughout
          your learning journey.
        </p>

        <h4>Course Details</h4>
        <div className="details">
          <h6>Module 1: Introduction to Web Data Management</h6>
          <ul>
            <li>Understanding the Importance of Data Management on the Web</li>
            <li>
              Overview of Data Types (Structured, Semi-Structured, Unstructured)
            </li>
            <li>Challenges in Web Data Management</li>
          </ul>

          <h6>Module 2: Data Collection and Acquisition</h6>
          <ul>
            <li>Web Scraping Techniques and Ethics</li>
            <li>Data APIs and Their Usage</li>
            <li>Data Ingestion and Transformation</li>
          </ul>

          <h6>Module 3: Data Storage</h6>
          <ul>
            <li>Relational Databases vs. NoSQL Databases</li>
            <li>Storing Data in the Cloud</li>
            <li>Data Security and Compliance</li>
          </ul>

          <h6>Module 4: Data Integration</h6>
          <ul>
            <li>ETL (Extract, Transform, Load) Processes</li>
            <li>Data Warehouses and Data Lakes</li>
            <li>Real-time Data Integration</li>
          </ul>

          <h6>Module 5: Data Quality and Cleansing</h6>
          <ul>
            <li>Data Quality Assessment</li>
            <li>Data Cleansing Techniques</li>
            <li>Data Validation and Verification</li>
          </ul>

          <h6>Module 6: Data Analysis and Visualization</h6>
          <ul>
            <li>Data Analytics Tools and Frameworks</li>
            <li>Data Visualization Techniques</li>
            <li>Dashboards and Reporting</li>
          </ul>

          <h6>Module 7: Data Governance and Compliance</h6>
          <ul>
            <li>Data Governance Best Practices</li>
            <li>GDPR and Other Data Protection Regulations</li>
            <li>Ethical Considerations in Data Management</li>
          </ul>

          <h6>Module 8: Scalability and Performance</h6>
          <ul>
            <li>Scaling Data Infrastructure</li>
            <li>Performance Optimization Techniques</li>
            <li>Monitoring and Troubleshooting</li>
          </ul>

          <h6>Module 9: Case Studies and Projects</h6>
          <ul>
            <li>Real-world Examples of Web Data Management</li>
            <li>Hands-on Projects and Assignments</li>
          </ul>

          <h6>Module 10: Future Trends in Web Data Management</h6>
          <ul>
            <li>AI and Machine Learning in Data Management</li>
            <li>IoT Data Management</li>
            <li>Blockchain and Data Security</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WDMCourseContent;
