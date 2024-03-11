import React, { useState } from "react";
import "../css/QAOfficerManageCourses.css"; // Import the CSS file
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

class QAOfficerManageCourses extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    users: [],
    url: "http://localhost/lerniverse/backend/deleteQualitycourse.php?q=",
    approv_url: "http://localhost/lerniverse/backend/approvequalitycourse.php?q=",
    reject_url: "http://localhost/lerniverse/backend/rejectqualitycourse.php?q=",
  };

  showPopup = () => {
    document.getElementById("popup").style.display = "block";
  };
  hidepop = () => {
    document.getElementById("popup").style.display = "none";
  };

  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/fetchqualityCourse.php")
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="qa-officer-manage-courses">
          <h2>Manage/Review Courses</h2>

          {/* Button to show the Add Course form */}
          <button className="add-button" onClick={this.showPopup}>
            Add Course
          </button>

          {/* Table to display courses */}
          <div className="table1">
          <table className="courses-table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((result) => {
                return (
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.course_name}</td>
                    <td>{result.cour_desc}</td>
                    <td>
                      {result.status == 0
                        ? "Pending"
                        : result.status == 1
                        ? "Approve"
                        : "Reject"}
                    </td>

                    <td>
                      <a href={this.state.approv_url + result.id}>
                        <button className="approve-button">Approve</button>
                      </a>
                      <a href={this.state.reject_url + result.id}>
                        <button className="reject-button">Reject</button>
                      </a>
                      <a href={this.state.url + result.id}>
                        <button className="delete-button">Delete</button>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            </table>
            </div>

          {/* Add Course Form Popup */}

          <div
            className="add-course-popup"
            id="popup"
            style={{ display: "none" }}
          >
            <h3>Add Course</h3>
            <form
              style={{ background: "rgb(176 214 255)" }}
              action="http://localhost/lerniverse/backend/qualityCourseAdd.php"
            >
              <div className="form-group">
                <label htmlFor="name">Course Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description"></textarea>
              </div>
              <button type="submit" className="add-button">
                Add Course
              </button>
              <button type="button" onClick={this.hidepop}>
                Cancel
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default QAOfficerManageCourses;
