// DiscussionForm.js
import React, { useState } from "react";
import "../css/DiscussionForm.css";

const DiscussionForm = ({ onClose, onSave }) => {
  const [discussionDetails, setDiscussionDetails] = useState({
    discussionTitle: "",
    discussionContent: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDiscussionDetails({
      ...discussionDetails,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    onSave(discussionDetails);
    onClose();
  };

  const hide=()=>{
    document.getElementById("id").style.display="none";
  }
  return (
    <div className="discussion-overlay" id="id">
      <div className="discussion-popup" >
        <h2>Create Discussion</h2>
        <form style={{ background: 'rgb(176 214 255)' }} action="http://localhost/lerniverse/backend/discussion.php">
          <div>
            <label>Discussion Title</label>
            <input
              type="text"
              name="discussionTitle"
             
            />
          </div>
          <div>
            <label>Discussion Content</label>
            <textarea
              name="discussionContent"
              
            ></textarea>
          </div>
          <div className="form-buttons">
            <button type="submit" >
              Save
            </button>
            <button type="button" onClick={hide} >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DiscussionForm;
