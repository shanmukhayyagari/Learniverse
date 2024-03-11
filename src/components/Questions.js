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
    users: []
    
  };

  

  componentDidMount() {
    axios
      .get("http://localhost/lerniverse/backend/questions.php")
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
          <h2>Exam Questions and Answer</h2>
          <center>
          {this.state.users.map((result) => {
                return (
                  
                  <div style={{width:"80%"}}>
                      <h3>{result.description}</h3>
                  </div>
                
                )})}
                  <br></br> <br></br> <br></br>
                Upload Answer Sheet:
                <input type="file" />
                </center>
                <br></br> <br></br> <br></br>
          {/* Button to show the Add Course form */}
      </div>
        <Footer />
      </>
    );
  }
}
export default QAOfficerManageCourses;
