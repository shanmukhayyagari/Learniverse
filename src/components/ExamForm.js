// ExamForm.js
import React, { useEffect,useState } from "react";
import "../css/ExamForm.css";
import axios from 'axios';

const ExamForm = ({ onClose, onSave ,id }) => {
    const [examDetails, setExamDetails] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
    });
    const [exam, setExam] = useState('this is me');
    const [course, setCourse] = useState('kashif farooq');
    const [qid, setQid] = useState('good to fo');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExamDetails({
            ...examDetails,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        onSave(examDetails);
        onClose();
        alert("form submitted successfully");
    }
    const [feedBack, setFeedBack] = useState([]);
    // const [id, setId] = useState('');
    
    const getMovieList  =  () => {
  
      // const url = 'http://localhost/lerniverse/backend/getProfile.php';
  
      axios
      .get("http://localhost/lerniverse/backend/getExam.php?q="+id)
      .then((res) => {
        setFeedBack(res.data);
          console.log(res.data);
        //   console.log(id);
      });
      
    };
    
    useEffect(() => {
      getMovieList();
  
      // setFeedBack(['3', '2', '1']);
     
  
      
  
    }, [])
    // componentDidMount() {
    //     fetch('localhost').than(response => {
    //         console.log(response);
    //         return response.json();
    //     }).then(result => {
    //         console.log(result);
    //     }).catch(err => {
    //         console.log('error reading data' + err);
    //     });
    // };

    return (
        <div className="exam-overlay">
            <div className="exam-popup">
                <h2>Exam Questions</h2>
                <form method="POST" action="http://localhost/lerniverse/backend/addExamStudent.php">
                    {feedBack.map((student) => {
                        return (<>
                        <div>
                                <label>{ student.q1 }</label>
                        <input
                            type="text"
                            name="question1"
                            
                        />
                    </div>
                    <input type="hidden" name="exam" value={student.exam_id} />
                    <input type="hidden" name="course" value={student.course_id} />
                    <input type="hidden" name="questionId" value={student.sid}/>
                    
                    
                    <div>
                        <label>{ student.q2 }</label>
                        <input
                            type="text"
                            name="question2"
                           
                        />
                    </div>
                    <div>
                        <label>{ student.q3 }</label>
                        <input
                            type="text"
                            name="question3"
                            
                        />
                    </div>
                    <div>
                        <label>{ student.q4 }</label>
                        <input
                            type="text"
                            name="question4"
                            
                        />
                    </div>
                        </>)
                    })}
                    
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

export default ExamForm;
