import React from "react";
import "../../css/CourseContent.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const CCCourseContent = () => {
  return (
    <>
      <Navbar />
      <div className="wdm-container">
        <h4>Course Description</h4>
        <p>
          Welcome to the website, your gateway to mastering Cloud Data
          Management. Our courses are designed to equip you with the knowledge
          and skills necessary to harness the power of cloud-based data
          solutions. Learn from our expert instructors and stay ahead in the
          world of cloud data management.
        </p>

        <h4>Course Details</h4>
        <div className="details">
          <h6>Module 1: Introduction to Cloud Data Management</h6>
          <ul>
            <li>Understanding Cloud-Based Data Solutions</li>
            <li>Benefits and Challenges of Cloud Data Management</li>
            <li>Cloud Service Providers and Offerings</li>
          </ul>

          <h6>Module 2: Cloud Data Storage</h6>
          <ul>
            <li>Cloud Storage Services (e.g., AWS S3, Azure Blob Storage)</li>
            <li>Scalability and Data Redundancy</li>
            <li>Data Security in the Cloud</li>
          </ul>

          <h6>Module 3: Data Integration in the Cloud</h6>
          <ul>
            <li>ETL in Cloud Environments</li>
            <li>Cloud Data Warehouses</li>
            <li>Real-time Data Streaming</li>
          </ul>

          <h6>Module 4: Data Analytics in the Cloud</h6>
          <ul>
            <li>Big Data Processing in the Cloud</li>
            <li>Serverless Data Analytics</li>
            <li>Cloud-based Machine Learning</li>
          </ul>

          <h6>Module 5: Data Governance and Compliance in the Cloud</h6>
          <ul>
            <li>Cloud Data Governance Best Practices</li>
            <li>Compliance and Data Privacy (e.g., GDPR, HIPAA)</li>
            <li>Managing Access Control and Auditing</li>
          </ul>

          <h6>Module 6: Cloud Data Migration Strategies</h6>
          <ul>
            <li>Lift and Shift vs. Re-architecture</li>
            <li>Data Transfer Tools and Services</li>
            <li>Risk Assessment and Planning</li>
          </ul>

          <h6>Module 7: Cloud Data Security</h6>
          <ul>
            <li>Identity and Access Management (IAM)</li>
            <li>Encryption and Key Management</li>
            <li>Security Best Practices</li>
          </ul>

          <h6>Module 8: Cloud Data Monitoring and Optimization</h6>
          <ul>
            <li>Monitoring Cloud Data Performance</li>
            <li>Cost Management and Optimization</li>
            <li>Scaling and Resource Allocation</li>
          </ul>

          <h6>Module 9: Cloud Data Case Studies and Projects</h6>
          <ul>
            <li>Real-world Cloud Data Management Examples</li>
            <li>Hands-on Cloud Data Projects</li>
          </ul>

          <h6>Module 10: Future Trends in Cloud Data Management</h6>
          <ul>
            <li>Serverless Computing</li>
            <li>Multi-Cloud Strategies</li>
            <li>DataOps and DevOps in the Cloud</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CCCourseContent;
