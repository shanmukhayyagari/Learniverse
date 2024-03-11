import React, { useEffect, useState } from "react";
import {
  AdminAction,
  ProgramCordinatorAction,
  QOAction,
  StudentAction,
  TeacherAction,
} from "../components/Redux/Action";
import "../css/SignUp.css"; // Import the CSS file
import Header from "./Header";
import Footer from "./Footer";

export default function SignUp() {
  const [state, setState] = useState({
    name: "",
    Email: "",
    Password: "",
    user: "",
  });
  const [user, setUser] = useState("");

  console.log(state);

  const [studentArr, setStudentArr] = useState([]);
  const [teacherArr, setTeacherArr] = useState([]);
  const [adminArr, setAdminArr] = useState([]);
  const [qoArr, setQoArr] = useState([]);
  const [PCArr, setPCArr] = useState([]);
  console.log(studentArr);
  useEffect(() => {
    if (user === "Student") {
      StudentAction(studentArr);
    } else if (user === "Teacher") {
      TeacherAction(teacherArr);
    } else if (user === "Admin") {
      AdminAction(adminArr);
    } else if (user === "QO") {
      QOAction(qoArr);
    } else if (user === "ProgramCordinator") {
      ProgramCordinatorAction(PCArr);
    }
  }, [studentArr, teacherArr, adminArr, qoArr, PCArr]);

  function setTheData(e) {
    console.log(state.user);
    e.preventDefault();
    if (state.user === "Student") {
      setUser("Student");
      setStudentArr([...studentArr, state]);
      alert("Student Account Added");
    } else if (state.user === "Teacher") {
      setUser("Teacher");
      setTeacherArr([...teacherArr, state]);
      alert("Teacher Account Added");
    } else if (state.user === "Admin") {
      setUser("Admin");
      setAdminArr([...adminArr, state]);
      alert("Admin Account Added");
    } else if (state.user === "QO") {
      setUser("QO");
      setQoArr([...qoArr, state]);
      alert("Quality officer Account Added");
    } else if (state.user === "ProgramCordinator") {
      setUser("ProgramCordinator");
      setPCArr([...PCArr, state]);
      alert("Program Cordinator Account Added");
    }
  }

  const validate=()=>{
    var password=document.frm.password.value;
    var name=document.frm.name.value;
    var email=document.frm.email.value;
    var password=document.frm.password.value;
    var profile=document.frm.profile.value;
   if(password.length<6)
   {
    alert("atleast 6 characters required")
    
    return false
   }
 else 
 {
  alert('submited succesfully')
  window.location.href="http://localhost/lerniverse/backend/useradd.php?name="+name+"&email="+email+"&password="+password+"&profile="+profile;
 }      
    
  }
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="signup-title">Sign Up</div>
        <div className="signup-form">
          <form action="http://localhost/lerniverse/backend/useradd.php" method="POST">
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your Email here"
              
              required
            />
            <input
              type="number"
              name="contact"
              placeholder="Enter your Contact No."
              required
            />
            <input
              type="password"
              name="password"
              id="pass"
              placeholder="Enter Password"
             
              required
            />
            <select
              name="profile"
              id=""
              
            >
              <option value="">Select the user type</option>
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
              <option value="QO">Quality officer</option>
              <option value="ProgramCordinator">Program Coordinator</option>
            </select>
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
