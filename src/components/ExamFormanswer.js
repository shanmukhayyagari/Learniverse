// ExamForm.js
import React, { useEffect,useState } from "react";
import "../css/ExamForm.css";
import axios from "axios"

const ExamFormanswer = ({ onClose, onSave, id }) => {
    const [examDetails, setExamDetails] = useState({
        question1: "",
        question2: "",
        question3: "",
        question4: "",
    });
    const [exam, setExam] = useState([]);
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
    const getMovieList  =  () => {

        // const url = 'http://localhost/lerniverse/backend/getProfile.php';
    
        axios
        .get('http://localhost/lerniverse/backend/get_answers.php?q='+id)
        .then((res) => {
          setExam(res.data);
          console.log(res.data);
        });
        
      };
      
      useEffect(() => {
          getMovieList();
          console.log(id);
    
        // setFeedBack(['3', '2', '1']);
        // console.log(feedBack);
    
        
    
      },[])

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
                <h2>Questions Answer</h2>
                <form method="POST" action="http://localhost/lerniverse/backend/addExamStudent.php">
                   
                    {exam.map((user, key) => {
                        return (<>
                            <div>
                                <label>{ user.q1 }</label>
                        <input
                            type="text"
                            name="question1"
                            readOnly={true}
                            value={user.a1}
                            
                        />
                            </div>
                            <div>
                            <label>{ user.q2 }</label>
                    <input
                        type="text"
                        name="question1"
                        readOnly={true}
                        value={user.a2}
                        
                    />
                </div><div>
                                <label>{ user.q3 }</label>
                        <input
                            type="text"
                            name="question1"
                            readOnly={true}
                            value={user.a3}
                            
                        />
                    </div><div>
                                <label>{ user.q4 }</label>
                        <input
                            type="text"
                            name="question1"
                            readOnly={true}
                            value={user.a4}
                            
                        />
                    </div>
                    </>)
                
           })}
                       
                    {/* <input type="hidden" name="exam" value={exam} />
                    <input type="hidden" name="course" value={course} />
                    <input type="hidden" name="questionId" value={qid}/> */}
                    
                    
                    
                    <div className="form-buttons">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ExamFormanswer;
