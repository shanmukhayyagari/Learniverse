import React, { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Student.css";
import ExamForm from "./ExamForm";
import FeedbackForm from "./FeedbackForm";
import UserDetailsForm from "./UserDetailsForm";
import DiscussionForm from "./DiscussionForm";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from 'axios';
const Student = () => {
  const [showUserDetailsForm, setShowUserDetailsForm] = useState(false);
  const [showExamForm, setShowExamForm] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    // otherDetails: "",
  });

  const [feedBack, setFeedBack] = useState([]);
  const [id, setId] = useState('');
  
  const getMovieList  =  () => {

    // const url = 'http://localhost/lerniverse/backend/getProfile.php';

    axios
    .get("http://localhost/lerniverse/backend/getStudent.php")
    .then((res) => {
      setFeedBack(res.data);
      console.log(res.data);
    });
    
  };
  
  useEffect(() => {
    getMovieList();

    // setFeedBack(['3', '2', '1']);
   

    

  }, [])
  
  const navigate = useNavigate();

  const handleSaveUserDetails = (editedDetails) => {
    setUserDetails(editedDetails);
    setShowUserDetailsForm(false);
  };

  const handleOpenExamForm = (id) => {
    setId(id);
    setShowExamForm(true);
  };

  const handleSaveExamDetails = (examDetails) => {
    console.log("Exam Details:", examDetails);
    setShowExamForm(false);
  };

  const handleOpenFeedbackForm = (id) => {
    setId(id);
    setShowFeedbackForm(true);
  };

  const handleSaveFeedbackDetails = (feedbackDetails) => {
    console.log("Feedback Details:", feedbackDetails);
    setShowFeedbackForm(false);
  };

  const handleOpenDiscussionForm = () => {
    
    setShowDiscussionForm(true);
  };

  const handleSaveDiscussionDetails = (discussionDetails) => {
    console.log("Discussion Details:", discussionDetails);
    setShowDiscussionForm(false);
  };

  return (
    <>
      <Navbar />
      <div className="student-container">
        {/* <h1>Welcome, {userDetails.name}!</h1> */}
        <div className="btn-container">
          
          {/* <button className="exam-btn" onClick={handleOpenExamForm}>Exam</button> */}
        </div>
        {showUserDetailsForm && (
          <UserDetailsForm
            userDetails={userDetails}
            onSave={handleSaveUserDetails}
          />
        )}

        {showExamForm && (
          <ExamForm
            onClose={() => setShowExamForm(false)}
            onSave={handleSaveExamDetails}
            id={id}
          />
        )}

        {showFeedbackForm && (
          <FeedbackForm
            onClose={() => setShowFeedbackForm(false)}
            onSave={handleSaveFeedbackDetails}
            id={id}
          />
        )}

        {showDiscussionForm && (
          <DiscussionForm
            onClose={() => setShowDiscussionForm(false)}
            onSave={handleSaveDiscussionDetails}
          />
        )}

        {/* Other content of the Student component */}
      </div>
      <div className="student-data">
        <div className="student-heading-container">
          <h6 className="student-headings">Welcome Back Student</h6>
        </div>
        <div className="student-heading-container">
          <h6 className="student-headings">Semester Details: 2023 </h6>
        </div>
        <div
          className=" st1-btn"
          style={{width:'10px;'}}
              onClick={() => {
                navigate("/analytics");
              }}
            >
              Analytics
                  </div>
        <div className="st-main-container">
          {feedBack.map((student) => {
            return (<>
             <div>
                <p>{ student.courseCode }</p>
                <p>{student.course_name}</p>
                {student.course_name == 'WEB DATA MANAGEMENT' ? (
            <div
              className="st-btn"
              onClick={() => {
                navigate("/webcourse");
              }}
            >
              Course Content
                  </div>) : (student.course_name == 'Machine Learning') ? (
                    <div
                    className="st-btn"
                    onClick={() => {
                      navigate("/mlcourse");
                    }}
                  >
                    Course Content
                        </div>
                  ) : (student.course_name == 'CLOUD COMPUTING') ? (<div
                    className="st-btn"
                    onClick={() => {
                      navigate("/cloudcourse");
                    }}
                  >
                    Course Content
                        </div>) : (<div
                    className="st-btn"
                    onClick={() => {
                      navigate("/cloudcourse");
                    }}
                  >
                    Course Content
                        </div>)}
                <div className="st-btn" onClick={() => { handleOpenExamForm(student.eid) }}>
              Exam
            </div>
            {/* <div
              className="st-btn"
              onClick={() => {
                navigate("/analytics");
              }}
            >
              Analytics
            </div> */}
            <div className="st-btn" onClick={handleOpenFeedbackForm}>
              Feedback
            </div>
            <div className="st-btn" onClick={handleOpenDiscussionForm}>
              Discussion
            </div>
            <div className="st-btn" >
              <a href="/examques">Exam Questions</a>
            </div>
          </div>
            </>)
          })}
          {/* <div>
            <p>CSE -5235-002</p>
            <p>WEB DATA MANAGEMENT</p>
            <div
              className="st-btn"
              onClick={() => {
                navigate("/webcourse");
              }}
            >
              Course Content
            </div>
            <div className="st-btn" onClick={handleOpenExamForm}>
              Exam
            </div>
            <div
              className="st-btn"
              onClick={() => {
                navigate("/analytics");
              }}
            >
              Analytics
            </div>
            <div className="st-btn" onClick={handleOpenFeedbackForm}>
              Feedback
            </div>
            <div className="st-btn" onClick={handleOpenDiscussionForm}>
              Discussion
            </div>
            <div className="st-btn" >
              <a href="/examques">Exam Questions</a>
            </div>
          </div>
           <div>
            <p>CSE-6324-001</p>
            <p>MACHINE LEARNING</p>
            <div
              className="st-btn"
              onClick={() => {
                navigate("/mlcourse");
              }}
            >
              Course Content
            </div>
            <div className="st-btn" onClick={handleOpenExamForm}>
              Exam
            </div>
            <div
              className="st-btn"
              onClick={() => {
                navigate("/analytics");
              }}
            >
              Analytics
            </div>
            <div className="st-btn" onClick={handleOpenFeedbackForm}>
              Feedback
            </div>
            <div className="st-btn" onClick={handleOpenDiscussionForm}>
              Discussion
            </div>
            <div className="st-btn" >
              <a href="/examques">Exam Questions</a>
            </div>
          </div> */}
         {/* <div>
            <p>CSE-6345-002</p>
            <p>CLOUD COMPUTING</p>
            <div
              className="st-btn"
              onClick={() => {
                navigate("/cloudcourse");
              }}
            >
              Course Content
            </div>
            <div className="st-btn" onClick={handleOpenExamForm}>
              Exam
            </div>
            <div
              className="st-btn"
              onClick={() => {
                navigate("/analytics");
              }}
            >
              Analytics
            </div>
            <div className="st-btn" onClick={handleOpenFeedbackForm}>
              Feedback
            </div>
            <div className="st-btn" onClick={handleOpenDiscussionForm}>
              Discussion
            </div>
            <div className="st-btn" >
              <a href="/examques">Exam Questions</a>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student;
