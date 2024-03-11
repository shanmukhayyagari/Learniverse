import React, { useState } from "react";
import "../css/QAOfficerManagePrograms.css"; // Import the CSS file
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
class QAOfficerManagePrograms extends React.Component {
  // const [users, usersSet] = React.useState([]);

  state = {
    users: [],
    url: "http://localhost/lerniverse/backend/deletequalitymanagepro.php?q=",
    approve_ulr: "http://localhost/lerniverse/backend/approvequalitymanagepro.php?q=",
    reject_url: "http://localhost/lerniverse/backend/rejectqualitymanagepro.php?q=",
  };

  showPopup = () => {
    document.getElementById("popup").style.display = "block";
  };
  hidepop = () => {
    document.getElementById("popup").style.display = "none";
  };

  showPopup = () => {
    document.getElementById("popup").style.display = "block";
  };
  hidepop = () => {
    document.getElementById("popup").style.display = "none";
  };

  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/fetchqualitymanagerprogram.php")
      .then((res) => {
        this.setState({ users: res.data });
        console.log(this.state.users);
      });
  }

  render() {
    return (
      <>
        <Navbar />
        <div className="qa-officer-manage-programs">
          <h2>Manage/Review Programs</h2>
          <button className="add-button" onClick={this.showPopup}>
            Add Program
          </button>

          <div
            className="add-program-popup"
            id="popup"
            style={{ display: "none" }}
          >
            <h3>Add New Program</h3>
            <form
              style={{ background: "rgb(176 214 255)" }}
              action="http://localhost/lerniverse/backend/addQualitymanageprogram.php"
            >
              <label htmlFor="name">Program Name:</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="description">Description:</label>
              <textarea id="description" name="description"></textarea>

              <button type="submit">Add Program</button>
              <button type="button" onClick={this.hidepop}>
                Cancel
              </button>
            </form>
          </div>
        <div className="table1">
          <table className="programs-table">
            <thead>
              <tr>
                <th>Program ID</th>
                <th>Program Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((result) => {
                return (
                  <tr key={result.pid}>
                    <td>{result.pid}</td>
                    <td>{result.pro_name}</td>
                    <td>{result.descp}</td>
                    <td>
                      {result.status == 0
                        ? "Pending"
                        : result.status == 1
                        ? "Approve"
                        : "Reject"}
                    </td>

                    <td>
                      <a href={this.state.approve_ulr + result.pid}>
                        <button className="approve-button">Approve</button>
                      </a>
                      <a href={this.state.reject_url + result.pid}>
                        <button className="reject-button">Reject</button>
                      </a>
                      <a href={this.state.url + result.pid}>
                        <button className="delete-button">Delete</button>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            </table>
            </div>
        </div>
        <Footer />
      </>
    );
  }
}
export default QAOfficerManagePrograms;
