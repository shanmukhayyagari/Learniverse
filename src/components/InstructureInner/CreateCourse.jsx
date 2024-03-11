import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "../../../src/css/CreateCourse.css";


export default function CreateCourse() {
 
  return (
    <>
    <Navbar />
    <div className="main" style={{ display: "flex", justifyContent: "center" }}>
      <div className="sub-main" >
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <h3>Create {"course"}</h3>
        </div>
          <form
            id="form"
          action="http://localhost/lerniverse/backend/create-course.php"
          method="POST"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "400px",
            height: "450px",
            border: "2px solid gray",
            borderRadius: "20px",
            justifyContent: "space-around",
            padding: "20px 10px",
            background: 'rgb(176 214 255)',
          }}
         
        >
          <label htmlFor="">Instructor Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            style={{ padding: "10px 20px" }}
            name="name"
          />
          <label htmlFor="">Course Name</label>
          <input
            type="text"
            placeholder="Enter Course Name here"
            style={{ padding: "10px 20px" }}
            required
            name="courseName"
            />
            <label htmlFor="">Course Code</label>
          <input
            type="text"
            placeholder="Enter Course Name here"
            style={{ padding: "10px 20px" }}
            required
            name="courseCode"
          />
          <label htmlFor="">course content</label>
          <textarea
            type="message"
            placeholder="Enter course content"
            style={{ padding: "10px 20px" }}
            required
            name="courseContent"
          />

          {/* <input
            type="file"
         
            name="image"
           
            style={{ border: "2px solid gray", background: "white" }}
            required
          /> */}
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
