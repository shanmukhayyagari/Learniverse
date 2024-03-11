import React from "react";
import "../css/Admin.css"; // Import the CSS file
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="admin-admin">
        <div>
          <h2>Admin</h2>
          <div className="admin-cont">
            <div className="row">
              <div className="col-md-3">
                <div className="admin-investor-box">
                  <h2>Student</h2>
                  <div className="admin-flip-view">
                    <Link to="/studentdetails">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="admin-investor-box">
                  <h2>Instructor</h2>
                  <div className="admin-flip-view">
                    <Link to="/instructordetails">View Details</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="admin-investor-box">
                  <h2>Quality Assurance Officer</h2>
                  <div className="admin-flip-view">
                    <Link to="/qadetails">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <h2>Reports</h2>
          <div className="reports-container">
            <div className="profiles-container">
              <h1>Student Profiles</h1>
              <div className="user-info">
                <h5>User1</h5>
                <p>Name: John</p>
                <p>Email: abc@gmail.com</p>
              </div>
              <div className="user-info">
                <h5>User2</h5>
                <p>Name: John</p>
                <p>Email: abc@gmail.com</p>
              </div>
            </div>
            <div className="profiles-container">
              <h1>Teachers Profiles</h1>
              <div className="user-info">
                <h5>User1</h5>
                <p>Name: John</p>
                <p>Email: abc@gmail.com</p>
              </div>
              <div className="user-info">
                <h5>User2</h5>
                <p>Name: John</p>
                <p>Email: abc@gmail.com</p>
              </div>
            </div>
          </div> */}
        </div>

        <div>
          <h2>Admin Access</h2>
          <div className="container">
            <form
              action="http://localhost/lerniverse/backend/admin.php"
              method="POST"
              style={{ background: "rgb(176 214 255)" }}
              id="user-management-form"
            >
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />

              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
              />

              <label htmlFor="role">Role:</label>
              <select id="role" name="role">
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>

              <button type="submit">Edit User</button>
            </form>

            {/* <div id="user-list">
              <h3>User List</h3>
              <ul>
                <li>User 1 - john@example.com (User)</li>
                <li>User 2 - jane@example.com (Admin)</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
