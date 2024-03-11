import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Admin from "./components/Admin";
import Questions from "./components/Questions"
import Analytics from "./components/Analytics";
import CCCourseContent from "./components/CC/CCCourseContent";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorDetails from "./components/InstructorDetails";
import CreateCourse from "./components/InstructureInner/CreateCourse";
import CreateExam from "./components/InstructureInner/CreateExam";
import Feedback from "./components/InstructureInner/Feedback";
import Grade from "./components/InstructureInner/Grade";
import ManageCourse from "./components/InstructureInner/ManageCourse";
import Report from "./components/InstructureInner/Report";
import MLCourseContent from "./components/ML/MLCourseContent";
import Navbar from "./components/Navbar";
import {
  PrivateRouteForAdmin,
  PrivateRouteForPC,
  PrivateRouteForQA,
} from "./components/PrivateRoute/MultiplePrivateRoute";
import PrivateRouteForStudent from "./components/PrivateRoute/PrivateRouteForStudent";
import PrivateRouteForTeacher from "./components/PrivateRoute/PrivateRoutesForTeacher";
import Profile from "./components/Profile";
import ProgramCoordinator from "./components/ProgramCoordinator";
import QADetails from "./components/QADetails";
import QAOfficerManageCourses from "./components/QAOfficerManageCourses";
import QAOfficerManagePrograms from "./components/QAOfficerManagePrograms";
import QAOfficerMonitorReports from "./components/QAOfficerMonitorReports";
import QualityOfficer from "./components/QualityOfficer";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import Signup from "./components/Signup";
import Student from "./components/Student";
import StudentDetails from "./components/StudentDetails";
import WDMCourseContent from "./components/WDM/WDMCourseContent";
import ForgetPassword from "./components/ForgetPassword";
// import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/Profile" element={<Profile />} />
          <Route path="/report" element={<Report />} />
          <Route path="/mannagecourse" element={<ManageCourse />} />
          <Route path="/createcourse" element={<CreateCourse />} />
          <Route path="/createexam" element={<CreateExam />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/student" element={<Student />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/quality-officer" element={<QualityOfficer />} />
          <Route path="/program-coordinator" element={<ProgramCoordinator />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/services" element={<Services />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cloudcourse" element={<CCCourseContent />} />
          <Route path="/mlcourse" element={<MLCourseContent />} />
          <Route path="/webcourse" element={<WDMCourseContent />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/qadetails" element={<QADetails />} />

          <Route path="/examques" element={<Questions />} />
          <Route path="/studentdetails" element={<StudentDetails />} />
          <Route path="/instructordetails" element={<InstructorDetails />} />
          <Route
            path="/qaofficer-manage-courses"
            element={<QAOfficerManageCourses />}
          />
          <Route
            path="/qaofficer-manage-programs"
            element={<QAOfficerManagePrograms />}
          />
          <Route
            path="/qaofficer-monitor-reports"
            element={<QAOfficerMonitorReports />}
          />
         <Route
            path="/ForgetPassword"
            element={<ForgetPassword />}
          />
          {/* <Route path="/feedback" element={<FeedbackForm />} /> */}
          {/* <Route path="/discussion" element={<Discussion />} /> */}
        </Routes>
        <div className="chat-container">
          {/* <Chat /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
