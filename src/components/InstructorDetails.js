import React, { useState } from "react";
import "../css/InstructorDetails.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

class InstructorDetails extends React.Component {
  constructor(props)
  {
    super(props)
  }
  state = {
    
    data: [],  
    edit:[],
    id:'',
    url: "http://localhost/lerniverse/backend/delete_ins.php?q="
  }
  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/fetch_inst.php")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
  }
  edit = (id) => {
    console.log(id);
    axios
      .get("http://localhost/lerniverse/backend/edit_instructor.php?q="+id)
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
      <div className="instructor-details">
        <h2>Instructors</h2>
        <div className="table1">
        <table className="instructor-table">
          <thead>
            <tr>
              <th>Instructor Name</th>
              <th>Instructor ID</th>
              <th>Email ID</th>
              <th>Courses Teach</th>
              <th>Class Analytics: Pass %</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((instructor) => {
                return (
          <tr key={instructor.id}>
                <td>{instructor.ins_name}</td>
                <td>{instructor.ins_id}</td>
                <td>{instructor.email}</td>
                <td>{instructor.course}</td>
                <td>{instructor.perc}</td>
                <td>
                  <button
                    className="edit-button"
                    onClick={()=>{this.edit(instructor.id)}}
                  >
                    Edit
                  </button>
                  <a href={this.state.url+instructor.id}>
                  <button
                    className="delete-button"
                   
                  >
                    Delete
                  </button>
                  </a>
                </td>
              </tr>
                  );
                })}
          </tbody>
          </table>
          </div>
        {/* "http://localhost/lerniverse/backend/add_instructor.php" */}
        {/* "http://localhost/lerniverse/backend/update_instructor.php" */}
        {/* Form for adding/editing an instructor */}
        {this.state.edit==""?<>
          <h2>Add Student</h2>
        <form
          style={{ background: "rgb(176 214 255)" }}
          className="add-student-form" action="http://localhost/lerniverse/backend/add_instructor.php"
        >
          <div className="form-group">
            <label htmlFor="name">Instructor Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Instructor ID:</label>
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
            <label htmlFor="courses">Courses Teaching:</label>
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
        <h2>Edit Instructor</h2>
        <form
          style={{ background: "rgb(176 214 255)" }}
          className="add-student-form" action="http://localhost/lerniverse/backend/update_instructor.php"
        >
             {this.state.edit.map((student) => {
                return (<>
          <div className="form-group">
            <label htmlFor="name">Instructor Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={student.ins_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">Instructor ID:</label>
            <input
              type="text"
              id="studentId"
              name="instructorId"
              defaultValue={student.ins_id}
            />
                  </div>
                  <input type="hidden" name="id" value={student.id} />
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
            <label htmlFor="courses">Courses Teaching:</label>
            <input
              type="text"
              id="courses"
                      name="coursesTeach"
                      defaultValue={student.course}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="passPercentage">Class Analytics: Pass %:</label>
            <input
              type="text"
              id="passPercentage"
                      name="passPercentage"
                      defaultValue={student.perc}
            
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
        {/* {this.state.edit == "" ? <>
          <h2>Add Instructor</h2>
          <form action="http://localhost/lerniverse/backend/add_instructor.php"
            style={{ background: "rgb(176 214 255)" }}
            className="add-instructor-form"
          >
            <div className="form-group">
              <label htmlFor="name">Instructor Name:</label>
              <input
                type="text"
                id="name"
                name="name"
             
              />
            </div>
            <div className="form-group">
              <label htmlFor="instructorId">Instructor ID:</label>
              <input
                type="text"
                id="instructorId"
                name="instructorId"
             
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
              <label htmlFor="coursesTeach">Courses Teach:</label>
              <input
                type="text"
                id="coursesTeach"
                name="coursesTeach"
              
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
              className="add-instructor-button"
           
            >
              Add
            </button>
          </form>
        </> : <>
          <h2>Edit Instructor</h2>
          <form action="http://localhost/lerniverse/backend/update_instructor.php"
            style={{ background: "rgb(176 214 255)" }}
            className="add-instructor-form"
            >
               {this.state.edit.map((student) => {
                return (<>
            <div className="form-group">
              <label htmlFor="name">Instructor Name:</label>
              <input
                type="text"
                id="name"
                      name="name"
                      value={student.ins_name}
              />
                  </div>
                  <input type="hidden" name="id" value={student.id} />
            <div className="form-group">
              <label htmlFor="instructorId">Instructor ID:</label>
              <input
                type="text"
                id="instructorId"
                name="instructorId"
                value={student.ins_id}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email ID:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={student.email}
              />
            </div>
            <div className="form-group">
              <label htmlFor="coursesTeach">Courses Teach:</label>
              <input
                type="text"
                id="coursesTeach"
                name="coursesTeach"
                value={student.course}
              />
            </div>
            <div className="form-group">
              <label htmlFor="passPercentage">Class Analytics: Pass %:</label>
              <input
                type="text"
                id="passPercentage"
                name="passPercentage"
                value={student.perc}
              />
            </div>
            <button
              type="submit"
              className="add-instructor-button"
           
            >
              Update
                  </button>
                  </>)})}
          </form></>} */}
      </div>
      <Footer />
    </>
  );
};
}
export default InstructorDetails;
