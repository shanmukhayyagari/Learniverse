import React, { useState } from "react";
import "../css/QAOfficerMonitorReports.css"; // Import the CSS file
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
class QAOfficerMonitorReports extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    users: [],
    url: "http://localhost/lerniverse/backend/deletequality_student_report.php?q=",
  };
  showPopup = () => {
    document.getElementById("popup").style.display = "block";
  };
  hidepop = () => {
    document.getElementById("popup").style.display = "none";
  };

  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/fetchqualitystudent_report.php")
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }
  render() {
    return (
      <>
        <Navbar />
        <div className="qa-officer-monitor-reports">
          <h2>Monitor Student Reports</h2>

          {/* Button to show the Add Student Report form */}
          <button className="add-button" onClick={this.showPopup}>
            Add Student Report
          </button>

          <div className="table1">
          {/* Table to display student reports */}
          <table className="reports-table">
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Course</th>
                <th>Pass Percentage</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((result) => {
                return (
                  <tr key={result.sid}>
                    <td>{result.sname}</td>
                    <td>{result.stud_id}</td>
                    <td>{result.course}</td>
                    <td>{result.percentage}</td>
                    <td>{result.comments}</td>
                    <td>
                      <a href={this.state.url + result.sid}>
                        <button className="delete-button">Delete</button>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
</div>
          {/* Add Student Report Form Popup */}

          <div
            className="add-report-popup"
            id="popup"
            style={{ display: "none" }}
          >
            <h3>Add Student Report</h3>
            <form
              style={{ background: "rgb(176 214 255)" }}
              action="http://localhost/lerniverse/backend/addqualitystudentReport.php"
            >
              <div className="form-group">
                <label htmlFor="studentName">Student Name:</label>
                <input type="text" id="studentName" name="studentName" />
              </div>
              <div className="form-group">
                <label htmlFor="studentID">Student ID:</label>
                <input type="text" id="studentID" name="studentID" />
              </div>
              <div className="form-group">
                <label htmlFor="course">Course:</label>
                <input type="text" id="course" name="course" />
              </div>
              <div className="form-group">
                <label htmlFor="passPercentage">Pass Percentage:</label>
                <input type="text" id="passPercentage" name="passPercentage" />
              </div>
              <div className="form-group">
                <label htmlFor="comments">Comments:</label>
                <textarea id="comments" name="comments"></textarea>
              </div>
              <button type="submit" className="add-button">
                Add Student Report
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
export default QAOfficerMonitorReports;
