import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AdminAuthAction,
  ProgramCordinatorAuthAction,
  QOAuthAction,
  StuAuthAction,
  StudentProfileAction,
  TeachAuthAction,
  TeacherProfileAction,
} from "../components/Redux/Action";
import Store from "../components/Redux/Store";
import "../css/SignIn.css"; // Import the CSS file
import Header from "./Header";
import Footer from "./Footer";

export default function SignIn() {
  const data = Store.getState();
  const navigate1 = useNavigate();
  const navigate2 = useNavigate();
  console.log(data);
  const [state, setState] = useState({
    Email: "",
    Password: "",
    user: "",
  });

  function setTheData(e) {
    e.preventDefault();

    if (state.user === "Student") {
      let flag = false;

      // Debugging logs
      console.log("Data.Student:", data.Student);
      console.log("Entered Email:", state.Email);
      console.log("Entered Password:", state.Password);

      if (data.Student) {
        for (let i = 0; i < data.Student.length; i++) {
          if (data.Student[i].Email === state.Email) {
            flag = true;

            // Debugging log
            console.log("Student Data Matched:", data.Student[i]);

            if (data.Student[i].Password === state.Password) {
              StuAuthAction(true);
              StudentProfileAction(data.Teacher[i]);
              alert("Log in Successful for student");
              navigate1("/student");
              return; // Exit the function after successful login
            } else {
              alert("Wrong Password");
              return; // Exit the function after wrong password
            }
          }
        }
      }

      if (!flag) {
        alert("User does not exist in student data, sign up first");
      }
    } else if (state.user === "Teacher") {
      let flag = false;

      // Debugging logs
      console.log("Data.Teacher:", data.Teacher);
      console.log("Entered Email:", state.Email);
      console.log("Entered Password:", state.Password);
      if (data.Teacher) {
        for (let i = 0; i < data.Teacher.length; i++) {
          if (data.Teacher[i].Email === state.Email) {
            flag = true;

            // Debugging log
            console.log("Teacher Data Matched:", data.Teacher[i]);

            if (data.Teacher[i].Password === state.Password) {
              TeachAuthAction(true);
              TeacherProfileAction(data.Teacher[i]);
              alert("Log in Successful for teacher");
              navigate2("/instructor");
              return; // Exit the function after successful login
            } else {
              alert("Wrong Password");
              return; // Exit the function after wrong password
            }
          }
        }
      }

      if (!flag) {
        alert("User does not exist in teacher data, sign up first");
      }
    } else if (state.user === "Admin") {
      let flag = false;

      // Debugging logs
      console.log("Data.Admin:", data.Admin);
      console.log("Entered Email:", state.Email);
      console.log("Entered Password:", state.Password);
      if (data.Admin) {
        for (let i = 0; i < data.Admin.length; i++) {
          if (data.Admin[i].Email === state.Email) {
            flag = true;

            // Debugging log
            console.log("Admin Data Matched:", data.Admin[i]);

            if (data.Admin[i].Password === state.Password) {
              AdminAuthAction(true);

              alert("Log in Successful for Admin");
              navigate2("/admin");
              return; // Exit the function after successful login
            } else {
              alert("Wrong Password");
              return; // Exit the function after wrong password
            }
          }
        }
      }

      if (!flag) {
        alert("User does not exist in Admin data, sign up first");
      }
    } else if (state.user === "Qo") {
      let flag = false;

      // Debugging logs
      console.log("Data.Qo:", data.Qo);
      console.log("Entered Email:", state.Email);
      console.log("Entered Password:", state.Password);
      if (data.Qo) {
        for (let i = 0; i < data.Qo.length; i++) {
          if (data.Qo[i].Email === state.Email) {
            flag = true;

            // Debugging log
            console.log("Qo Data Matched:", data.Qo[i]);

            if (data.Qo[i].Password === state.Password) {
              QOAuthAction(true);

              alert("Log in Successful for Quality officer");
              navigate2("/quality-officer");
              return; // Exit the function after successful login
            } else {
              alert("Wrong Password");
              return; // Exit the function after wrong password
            }
          }
        }
      }

      if (!flag) {
        alert("User does not exist in quality officer data, sign up first");
      }
    } else if (state.user === "ProgramCordinator") {
      let flag = false;
      // Debugging logs
      console.log("Data.Program Cordinator:", data.ProgramCordinator);
      console.log("Entered Email:", state.Email);
      console.log("Entered Password:", state.Password);

      if (data.ProgramCordinator) {
        for (let i = 0; i < data.ProgramCordinator.length; i++) {
          if (data.ProgramCordinator[i].Email === state.Email) {
            flag = true;

            // Debugging log
            console.log(
              "Program Cordinator Data Matched:",
              data.ProgramCordinator[i]
            );

            if (data.ProgramCordinator[i].Password === state.Password) {
              ProgramCordinatorAuthAction(true);
              alert("Log in Successful for program cordinator");
              navigate2("/program-coordinator");
              return; // Exit the function after successful login
            } else {
              alert("Wrong Password");
              return; // Exit the function after wrong password
            }
          }
        }
      }
    } else {
      alert("Select a user type");
    }
  }

  return (
    <>
      <Header />
      <div className="signin-container">
        <div className="signin-title">Forget Password</div>
        <div className="signin-form">
          {/* //http://localhost/backend/login.php  php cde API ok server kaise run kr*/}

          {/* php -S localhost:8080 */}
          {/* es line se server start hoga php ka ook or kya krna hai esme
aap free hona haa


pkka kasam khao ksm se

ok

eska admin module krna hai

me show krte hu
*/}

          <form action="http://localhost/lerniverse/backend/login.php">
            <input
              type="email"
              name="email"
              placeholder="Enter your Email here"
              required
            />
            
            <input type="submit" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
