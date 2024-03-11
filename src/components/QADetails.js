import React, { useState } from "react";
import "../css/QADetails.css"; // Import the CSS file
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
class QADetails extends React.Component {
  constructor(props)
  {
    super(props)
  }
  state={
    data: [],
    edit:[],
    url:"http://localhost/lerniverse/backend/delete_quality_admin.php?q="
    
  }

  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/fetch_quality.php")
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      });
     
  }

  edit = (id) => {
    console.log(id);
    axios
      .get("http://localhost/lerniverse/backend/get_qa.php?q="+id)
      .then((res) => {
        this.setState({ edit: res.data });
        console.log(this.state.edit);
      });
  }

 render(){
  return (
    <>
      <Navbar />
      <div className="qa-details">
        <h2>QA Officers</h2>
        <div className="table1">
        <table className="qa-table">
          <thead>
            <tr>
              <th>QA Officer Name</th>
              <th>QA Officer ID</th>
              <th>Email ID</th>
              <th>Courses Assigned</th>
              <th>Class Analytics: Pass %</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {this.state.data.map((qaOfficer) => {
                return (
                  <tr key={qaOfficer.id}>
                  <td>{qaOfficer.qname}</td>
                  <td>{qaOfficer.qid}</td>
                  <td>{qaOfficer.email}</td>
                  <td>{qaOfficer.qass}</td>
                  <td>{qaOfficer.pass}</td>
                  <td>
                    <button
                        className="edit-button"
                        onClick={()=>{this.edit(qaOfficer.id)}}
                    
                    >
                      Edit
                    </button>
                    <a href={this.state.url+qaOfficer.id}>
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
        {this.state.edit==""?<>
          <h2>Add QA Officer</h2>
        <form
          style={{ background: "rgb(176 214 255)" }}
          className="add-student-form" action="http://localhost/lerniverse/backend/add_quality.php"
        >
          <div className="form-group">
            <label htmlFor="name">QA Officer  Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">QA Officer ID:</label>
            <input
              type="text"
              id="studentId"
              name="qaOfficerId"
              
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
            <label htmlFor="courses">Courses Assigned:</label>
            <input
              type="text"
              id="courses"
              name="coursesAssigned"
              
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
        <h2>Edit QA Officer</h2>
        <form
          style={{ background: "rgb(176 214 255)" }}
          className="add-student-form" action="http://localhost/lerniverse/backend/update_qa.php"
        >
             {this.state.edit.map((student) => {
                return (<>
          <div className="form-group">
            <label htmlFor="name">QA Officer Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={student.qname}
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentId">QA Officer ID:</label>
            <input
              type="text"
              id="studentId"
              name="qaOfficerId"
              defaultValue={student.qid}
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
            <label htmlFor="courses">Courses Assigned:</label>
            <input
              type="text"
              id="courses"
                      name="coursesAssigned"
                      defaultValue={student.qass}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="passPercentage">Class Analytics: Pass %:</label>
            <input
              type="text"
              id="passPercentage"
                      name="passPercentage"
                      defaultValue={student.pass}
            
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
        {/* Form for adding/editing a QA officer */}
        {/* <h2>Add/Edit QA Officer</h2>
        <form action="http://localhost/lerniverse/backend/add_quality.php"
          style={{ background: "rgb(176 214 255)" }}
          className="add-qa-officer-form"
        >
          <div className="form-group">
            <label htmlFor="name">QA Officer Name:</label>
            <input
              type="text"
              id="name"
              name="name"
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="qaOfficerId">QA Officer ID:</label>
            <input
              type="text"
              id="qaOfficerId"
              name="qaOfficerId"
             
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
            <label htmlFor="coursesAssigned">Courses Assigned:</label>
            <input
              type="text"
              id="coursesAssigned"
              name="coursesAssigned"
             
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
            className="add-qa-officer-button"
           
          >
            Add
          </button>
        </form> */}
      </div>
      <Footer />
    </>
  );
};
}
export default QADetails;
