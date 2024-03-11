// import React, { useEffect, useState } from 'react'
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar'
import Footer from '../Footer'
import ExamFormanswer from "../ExamFormanswer";
import axios from "axios";



import "../../../src/css/Grade.css";
import AssignGrade from "../AssignGrade";


export default function Grade() {
 
  const [showAssignGrade, setShowAssignGrade] = useState(false);
  const [showExamFormanswer, setShowExamFormAnswer] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [showDiscussionForm, setShowDiscussionForm] = useState(false);
  const [feedBack, setFeedBack] = useState([]);
  const [id, setId] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    // otherDetails: "",
  });

  const navigate = useNavigate();

  

  const handleOpenExamForm = (id) => {
    console.log(id);
    setId(id);
    setShowExamFormAnswer(true);
    console.log(showExamFormanswer);
  };

  const handleSaveExamDetails = (examDetails) => {
    console.log("Exam Details:", examDetails)
    setShowExamFormAnswer(false);
  };

  const handleAssignGrade = (id) => {
    setId(id);
    setShowAssignGrade(true);
    
  };

  const handleSaveAssignGrade = (assignDetails) => {
    console.log("Feedback Details:", assignDetails);
    setShowAssignGrade(false);
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
  

  
  const getMovieList  =  () => {

    // const url = 'http://localhost/lerniverse/backend/getProfile.php';

    axios
    .get("http://localhost/lerniverse/backend/getGrade.php")
    .then((res) => {
      setFeedBack(res.data);
      console.log(res.data);
    });
    
  };
  
  useEffect(() => {
    getMovieList();

    // setFeedBack(['3', '2', '1']);
    console.log(feedBack);

    

  },[])
  return (
    <>
      <Navbar />
      {showAssignGrade && (
          <AssignGrade
            onClose={() => setShowAssignGrade(false)}
          onSave={handleSaveExamDetails}
          id = {id}
          />
        )}
      {showExamFormanswer && (
          <ExamFormanswer
            onClose={() => setShowExamFormAnswer(false)}
          onSave={handleSaveExamDetails}
          id = {id}
          />
        )}
    <div className='main' >
        <div className='manage'>{'Mannage Grade'}</div>
        <div className='table-res'>
          <table border='2' className='table' >
            <thead>
            <tr>
              <th   >Name</th>
              <th   >email</th>
              <th   >course</th>
                <th   >Grade</th>
                <th>Action</th>
            </tr>
            </thead>

            <tbody>
            {feedBack.map((user, key) => {
                return (
                  <tr>
                    <td>{ user.name}</td>
                    <td>{ user.email}</td>
                    <td>{ user.course}</td>
                    <td>{ user.grade}</td>
                    <td><button
                    className="edit-button"
                      onClick={()=>{handleAssignGrade(user.id)}} 
                      
                  >
                    Edit
                  </button>
                  <a />
                  <button
                    className="edit-button"
                        onClick={() => { handleOpenExamForm(user.id) }} 
                        
                  >
                     Answers
                    </button>
                </td>
                </tr>
                )
                
           })}
            
                
            </tbody>
            
          </table>
          </div>
    </div>
    <Footer />
    </>
  )
}
