import React, { useState } from "react";
import "../css/ProgramCoordinator.css";

import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

class ProgramCoordinator extends React.Component {
  constructor(props) {
    super(props);
  }
 

    state={
        users:[],
        student:[],
        admin:[],
        qo:[],
        message:[],
        
        delete_url:'http://localhost/lerniverse/backend/deletprostudent.php?q=',
        delete_url_pro:'http://localhost/lerniverse/backend/delete_pro.php?q='
    }
    componentDidMount() {
        axios.get('http://localhost/lerniverse/backend/fetch_pro_ins.php').then(res => {

            this.setState({ users: res.data });
            console.log(this.state.users)


        });

        axios.get('http://localhost/lerniverse/backend/fetch_pro_admin.php').then(res => {

        this.setState({ admin: res.data });
        console.log(this.state.admin)


    });

    axios.get('http://localhost/lerniverse/backend/fetch_pro_qua.php').then(res => {

    this.setState({ qo: res.data });
    console.log(this.state.qo)


});

        axios.get('http://localhost/lerniverse/backend/pro_fetchStudent.php').then(res => {

        this.setState({ student: res.data });
        console.log(this.state.student)


    });
    axios.get('http://localhost/lerniverse/backend/fetch_message.php').then(res => {

        this.setState({ message: res.data });
        console.log(this.state.message)


    });


    }
    render()
    {
    return (
      <>
        <Navbar />
        <div className="program-coordinator">
          <h1>Program Coordinator Dashboard</h1>

          {/* Add new student */}
          <div>
            <form action="http://localhost/lerniverse/backend/prostudentAdd.php">
              <h2>Add New Student</h2>
              <input type="text" placeholder="Name" name="name" />
              <input type="text" placeholder="Performance" name="performance" />
              <button type="submit">Add Student</button>
            </form>
          </div>

          {/* Display student performance data */}
          <div className="student-performance">
            <h2>Student Performance Data</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Performance</th>
                  <th>Update Performance</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {this.state.student.map((result) => {
                  return (
                    <tr key={result.id}>
                      <td>{result.name}</td>
                      <td>{result.performance}</td>
                      <td>
                        <input type="text" value={result.performance} />
                      </td>
                      <td>
                        <a href={this.state.delete_url + result.id}>
                          {" "}
                          <button>Delete</button>
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

            {/* File management section */}
            <div className="file-management">
                <h2>Shared Documents for Instructor</h2>
                <table>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((result) => {
                            return (
                             <tr key={result.id}>
                                <td>{result.file_name}</td>
                                <td>
                                    <a href={this.state.delete_url_pro+result.id}>
                                    <button >Remove</button>
                                    </a>
                                </td>
                            </tr>
                                  )
                                })}
                    </tbody>
                </table>
                <form action="http://localhost/lerniverse/backend/add_pro_role.php">
                                <input type="hidden" name="role" value="instructor"/>
                <input style={{ marginTop: '20px' }} type="file" name="file"/>
                <button type="submit">Add Now</button>
                </form>
            </div>

            <div className="file-management">
                <h2>Shared Documents for Admin</h2>
                <table>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.admin.map((result) => {
                            return (
                             <tr key={result.id}>
                                <td>{result.file_name}</td>
                                <td>
                                <a href={this.state.delete_url_pro+result.id}>
                                    <button >Remove</button>
                                    </a>
                                </td>
                            </tr>
                                  )
                                })}
                    </tbody>
                </table>
                <form action="http://localhost/lerniverse/backend/add_pro_role.php">
                                <input type="hidden" name="role" value="admin"/>
                <input style={{ marginTop: '20px' }} type="file" name="file"/>
                <button type="submit">Add Now</button>
                </form>
            </div>

            <div className="file-management">
                <h2>Shared Documents for QA Officer</h2>
                <table>
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.qo.map((result) => {
                            return (
                             <tr key={result.id}>
                                <td>{result.file_name}</td>
                                <td>
                                <a href={this.state.delete_url_pro+result.id}>
                                    <button >Remove</button>
                                    </a>
                                </td>
                            </tr>
                                  )
                                })}  
                    </tbody>
                </table>
                <form action="http://localhost/lerniverse/backend/add_pro_role.php">
                                <input type="hidden" name="role" value="qua"/>
                <input style={{ marginTop: '20px' }} type="file" name="file"/>
                <button type="submit">Add Now</button>
                </form>
            </div>

          <div className="program-coordinator">
            {/* ... */}
            <div className="student-support">
              <h1>Student Support</h1>
              <div className="student-inquiries">
                <p>Student Inquiries</p>
                <ul></ul>
              </div>
            </div>
          </div>

            {/* Chat interface */}
            <div className="chat">
                <h2>Chat with Instructors and Stakeholders</h2>
                <div className="chat-messages">
                    <ul>
                {this.state.message.map((result) => {
                            return (
                             <li style={{listStyle:'none'}}>{result.message}</li>
                                  )
                                })}  
                                </ul>
                </div>
                <div className="chat-input">
                    <form action="http://localhost/lerniverse/backend/add_message_pro.php">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        name="message"
                    />
                    <button type='submit'>Send</button>
                    </form>
                    
                </div>
            </div>
          </div>
     
        <Footer />
      </>
    );
  }
}
export default ProgramCoordinator;
