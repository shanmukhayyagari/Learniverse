import React, { useState } from "react";
import "../css/StudentDetails.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
class StudentDetails extends React.Component {
  constructor(props)
  {
    super(props)
  }
  state = {
    id: "",
    edit:[],
    users: [],
    data:[]
    , url: "http://localhost/lerniverse/backend/deleteStudent.php?q=",
  editUrl:"http://localhost/lerniverse/backend/edit_Student.php?q="
  }

  
  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/fetchStudent.php")
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
      
     
  }
  
   edit = (id)=>{
    axios
      .get("http://localhost/lerniverse/backend/edit_Student.php?q="+id)
      .then((res) => {
        this.setState({ edit: res.data });
        console.log(this.state.edit);
      });
  }
 render()
 {

  return (
    <>
      <Navbar />
      <div className="student-details">
        <h2>Students</h2>
        <div className="table1">
        <table className="student-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student ID</th>
              <th>Email ID</th>
              <th>Courses Enrolled</th>
              <th>Class Analytics: Pass %</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.users.map((student) => {
                return (
              <tr key={student.sid}>
                <td>{student.sname}</td>
                <td>{student.stud_id}</td>
                <td>{student.email}</td>
                <td>{student.course}</td>
                <td>{student.percentage}</td>
                <td>
                  {/* <a href={this.state.editUrl+student.sid}> */}
                  <button 
                    className="edit-button"
                    onClick={()=>{this.edit(student.sid)}}
                  >
                    Edit
                  </button>
                  {/* </a>     */}
                 <a href={this.state.url+student.sid}>
                  <button
                    className="delete-button"
                        
                        
                  >
                    Delete
                  </button>
                </a>
                </td>
              </tr>
            )})}	
          </tbody>
          </table>
          </div>

        {/* Form for adding/editing a student */}
        {this.state.edit==""?<>
          <h2>Add Student</h2>
        <form
          style={{ background: "rgb(176 214 255)" }}
          className="add-student-form" action="http://localhost/lerniverse/backend/add_student_add.php"
        >
          <div className="form-group">
            <label htmlFor="name">Student Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input
              type="text"
              id="email"
              name="email"
             
            />
          </div>
          <div className="form-group">
            <label htmlFor="courses">Courses Enrolled:</label>
            <input
              type="text"
              id="courses"
              name="courses"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="passPercentage">Class Analytics: Pass %:</label>
            <input
              type="text"
              id="passPercentage"
              name="passPercentage"
            
            />
          </div>
          <button
            type="submit"
            className="add-student-button"
           
          >
           Add
          </button>
        </form>
        </>:<>
        <h2>Edit Student</h2>
        <form
          style={{ background: "rgb(176 214 255)" }}
          className="add-student-form" action="http://localhost/lerniverse/backend/update_student_add.php"
        >
             {this.state.edit.map((student) => {
                return (<>
          <div className="form-group">
            <label htmlFor="name">Student Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={student.sname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Student ID:</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              defaultValue={student.stud_id}
            />
                  </div>
                  <input type="hidden" name="id" value={student.sid} />
          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input
              type="text"
              id="email"
                      name="email"
                      defaultValue={student.email}
             
            />
          </div>
          <div className="form-group">
            <label htmlFor="courses">Courses Enrolled:</label>
            <input
              type="text"
              id="courses"
                      name="courses"
                      defaultValue={student.course}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="passPercentage">Class Analytics: Pass %:</label>
            <input
              type="text"
              id="passPercentage"
                      name="passPercentage"
                      defaultValue={student.percentage}
            
            />
          </div>
          <button
            type="submit"
            className="add-student-button"
           
          >
           update
          </button>
          </>)})}
        </form></>}
      
      </div>
      <Footer />
    </>
  );
};
}
export default StudentDetails;
