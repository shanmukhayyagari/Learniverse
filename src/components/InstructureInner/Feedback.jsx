
import React, { useEffect,useState } from 'react'

import Navbar from '../Navbar'
import Footer from '../Footer'
import "../../../src/css/Feedback.css";
export default function Feedback() {
  const [feedBack, setFeedBack] = useState([]);
  
  const getMovieList  = async () => {

    const url = 'http://localhost/lerniverse/backend/getFeedback.php';

    const response = await fetch (url);
            try {
                const responseJson = await response.json();
                console.log(responseJson);  
              // setData = responseJson;
              setFeedBack(responseJson);
              
            } catch (err) {
                console.error(err);
            }
    
  };
  
  useEffect(() => {
    getMovieList();

    // setFeedBack(['3', '2', '1']);
    console.log(feedBack);

    

  },[]);
  return (
    <>
    <Navbar />
    <div className='main' >
        <div className='manage'>{'Mannage Grade'}</div>
        <div className='table-res'>
          <table border='2' className='table' >
            <thead>
            <tr>
              <th   >Name</th>
              <th   >email</th>
              <th   >course</th>
              <th   >Feedback</th>
            </tr>
            </thead>
            <tbody>
              {feedBack.map((user, key) => {
                return (
                  <tr>
                    <td>{ user.name}</td>
                    <td>{ user.email}</td>
                    <td>{ user.course}</td>
                    <td>{ user.feedback}</td>
                  
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
