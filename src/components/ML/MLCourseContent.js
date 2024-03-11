import React from "react";
import "../../css/CourseContent.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

const MLCourseContent = () => {
  return (
    <>
      <Navbar />
      <div className="wdm-container">
        <h4>Course Description</h4>
        <p>
          Welcome to our Machine Learning course, designed to empower you with
          the knowledge and skills needed to excel in the field of machine
          learning. Our expert instructors will guide you through the
          foundations, algorithms, and applications of machine learning,
          ensuring you're well-prepared for real-world challenges.
        </p>

        <h4>Course Details</h4>
        <div className="details">
          <h6>Module 1: Introduction to Machine Learning</h6>
          <ul>
            <li>What is Machine Learning?</li>
            <li>Supervised vs. Unsupervised Learning</li>
            <li>Machine Learning Workflow</li>
          </ul>

          <h6>Module 2: Data Preprocessing</h6>
          <ul>
            <li>Data Cleaning and Transformation</li>
            <li>Feature Engineering</li>
            <li>Data Scaling and Normalization</li>
          </ul>

          <h6>Module 3: Supervised Learning</h6>
          <ul>
            <li>Linear Regression</li>
            <li>Logistic Regression</li>
            <li>Decision Trees and Random Forests</li>
          </ul>

          <h6>Module 4: Unsupervised Learning</h6>
          <ul>
            <li>K-Means Clustering</li>
            <li>Principal Component Analysis (PCA)</li>
            <li>Hierarchical Clustering</li>
          </ul>

          <h6>Module 5: Deep Learning</h6>
          <ul>
            <li>Neural Networks</li>
            <li>Convolutional Neural Networks (CNNs)</li>
            <li>Recurrent Neural Networks (RNNs)</li>
          </ul>

          <h6>Module 6: Machine Learning Projects</h6>
          <ul>
            <li>Hands-on Machine Learning Projects</li>
            <li>Real-world Data Analysis and Model Building</li>
          </ul>

          <h6>Module 7: Model Evaluation and Deployment</h6>
          <ul>
            <li>Cross-Validation and Hyperparameter Tuning</li>
            <li>Model Deployment Strategies</li>
            <li>Monitoring and Updating Models</li>
          </ul>

          <h6>Module 8: Ethics and Bias in Machine Learning</h6>
          <ul>
            <li>Ethical Considerations in ML</li>
            <li>Fairness and Bias in ML Models</li>
            <li>Responsible AI Practices</li>
          </ul>

          <h6>Module 9: Advanced Machine Learning Topics</h6>
          <ul>
            <li>Natural Language Processing (NLP)</li>
            <li>Reinforcement Learning</li>
            <li>Machine Learning in Production</li>
          </ul>

          <h6>Module 10: Future Trends in Machine Learning</h6>
          <ul>
            <li>AI and ML Trends</li>
            <li>Machine Learning in Industry</li>
            <li>AI Ethics and Regulation</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MLCourseContent;
