import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../../src/css/CreateExam.css";


export default function CreateExam() {
 
  return (
    <>
    <Navbar/>
    <div className="main" style={{ display: "flex", justifyContent: "center" }}>
      <div className="sub-main" style={{ padding: "3%" }}>
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <h3>Create {"Exam"}</h3>
        </div>
        <form
          action="http://localhost/lerniverse/backend/create-exam.php"
            method="POST"
            id="form"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            height: "700px",
            border: "2px solid gray",
            borderRadius: "20px",
            justifyContent: "space-around",
            padding: "20px 10px",
            background: 'rgb(176 214 255)',
          }}
          
        >
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            style={{ padding: "10px 20px" }}
            name="name"
          />

          <label htmlFor="">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            style={{ padding: "10px 20px" }}
            required
            name="subject"
          />

          <label htmlFor="">Description</label>

          <textarea
            type="message"
            placeholder="Enter Description"
            style={{ padding: "10px 20px" }}
            required
            name="description"
          />

<label htmlFor="">Question No 1</label>
          <input
            type="text"
            placeholder="Question 1"
            style={{ padding: "10px 20px" }}
            required
            name="q1"
            />
            <label htmlFor="">Question 2</label>
          <input
            type="text"
            placeholder="Question 2"
            style={{ padding: "10px 20px" }}
            required
            name="q2"
          /><label htmlFor="">Question 3</label>
          <input
            type="text"
            placeholder="Question 3"
            style={{ padding: "10px 20px" }}
            required
            name="q3"
          /><label htmlFor="">Question 4</label>
          <input
            type="text"
            placeholder="Question 4"
            style={{ padding: "10px 20px" }}
            required
            name="q4"
          />
          <input
            type="submit"
            name="submit"
           
            style={{
              padding: "10px 20px",
              background: "rgb(0,123,255)",
              color: "white",
              border: "2px solid teal",
            }}
            required
          />
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}
