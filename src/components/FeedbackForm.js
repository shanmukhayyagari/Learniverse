// FeedbackForm.js
import React, { useState } from "react";
import "../css/FeedbackForm.css";

const FeedbackForm = ({ onClose, onSave }) => {
  const [feedbackDetails, setFeedbackDetails] = useState({
    studentId: "",
    studentEmail: "",
    instructorName: "",
    course: "",
    feedback: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedbackDetails({
      ...feedbackDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(feedbackDetails);
    onClose();
    alert('feedback Submitted successfully')
  };

  return (
    <div className="feedback-overlay">
      <div className="feedback-popup">
        <h2>Feedback Form</h2>
        <form style={{ background: 'rgb(176 214 255)' }} action="http://localhost/lerniverse/backend/addFeedbackstudent.php">
          <div>
            <label>Student ID</label>
            <input
              type="text"
              name="studentId"
              
            />
          </div>
          <div>
            <label>Student Email</label>
            <input
              type="text"
              name="studentEmail"
              
            />
          </div>
          <div>
            <label>Instructor Name</label>
            <input
              type="text"
              name="instructorName"
             
            />
          </div>
          <div>
            <label>Course</label>
            <input
              type="text"
              name="course"
            
            />
          </div>
          <div>
            <label>Feedback</label>
            <textarea
              name="feedback"
             
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" >
              Save
            </button>
            <button type="button" onClick={onClose}>
                            Cancel
                        </button>
            
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
