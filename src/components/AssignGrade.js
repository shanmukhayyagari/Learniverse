// ExamForm.js
import React, { useEffect,useState } from "react";
import "../css/ExamForm.css";
import axios from 'axios'

const AssignGrade = ({ onClose, onSave, id }) => {
    const [examDetails, setExamDetails] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
    });
    const [exam, setExam] = useState();

    // const [course, setCourse] = useState('kashif farooq');
    // const [qid, setQid] = useState('good to fo');

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
    const getMovieList = async () => {

        axios
            .get('http://localhost/lerniverse/backend/get_answers.php?q=' + id)
            .then((res) => {
                setExam(res.data);
                console.log(res.data);
            });
    
    }
      
      useEffect(() => {
        getMovieList();
          console.log(id);
      
      
    
        
    
      },[]);

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
                <form method="POST" action="http://localhost/lerniverse/backend/assign_grade.php">
                    <div>

                        <label>Marks</label>
                        <input
                            type="text"
                            name="marks"
                        
                        
                            
                        />
                    </div>
                    <div>
                    <input type="hidden" name="id" defaultValue={id} />
                        <label>Grade</label>
                        <input
                            type="text"
                            name="grade"
                           
                            
                        />
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

export default AssignGrade;
