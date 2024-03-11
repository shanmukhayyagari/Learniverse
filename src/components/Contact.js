import React, { useState } from "react";
import "../css/Contact.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here

    // After a successful submission, set isSubmitted to true
    setIsSubmitted(true);

    // Display the success message
    // alert('We will reach out to you. Thank you for contacting!');

    // Clear the form data
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the form data based on the input field's name
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Navbar />
      <div className="contact-container">
        {" "}
        {/* Use the prefixed class name */}
        <h1 className="contact-title">Contact Us</h1>{" "}
        {/* Use the prefixed class name */}
        <p className="contact-content">
          You can reach out to us through the following methods:
        </p>
        <ul className="contact-content">
          <li>
            Email:{" "}
            <a href="mailto:contact@learniverse.com">contact@learniverse.com</a>
          </li>
          <li>
            Phone: <a href="tel:344-755-111">344-755-111</a>
          </li>
          <li>Address: 701 S Nedderman Dr, Arlington, TX 76019</li>
        </ul>
        <p className="contact-content">
          Feel free to send us a message using the form below:
        </p>
        <form
          className="contact-form"
          style={{ background: "rgb(176 214 255)" }}
          action="http://localhost/lerniverse/backend/contact.php"
          method="POST"
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        {isSubmitted && (
          <p className="contact-content">
            We will reach out to you. Thank you for contacting!
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Contact;
