import React, { useEffect,useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import "../../../src/css/manageCourse.css";

import axios from 'axios'


export default function ManageCourse() {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost/lerniverse/backend/fetchCourses.php")
    .then((res) => {
      setCourse(res.data);
      console.log(res.data);
    });

    // fetch('http://localhost:3000/lerniverse/backend/fetchfeedback.php').then(response => response.json()).then(result => console.log(result)).catch(err => console.log(err))
  },[]);
  return (
    <>
    <Navbar />
    <div style={{textAlign:'center',margin:'40px 0'}}>
        <div style={{ width: '250px', margin: 'auto', padding: '20px 60px', color: 'white', background: 'rgb(51,51,51)' }}>{'Mannage Course'}</div>
        <div className='table-res'>
          <table border='2' style={{width:'60%',textAlign:'center',margin:'40px auto'}}>
            <thead>
            <tr>
              <th style={{background:'rgb(51,51,51)',color:'white'}}>Course Id</th>
              <th style={{background:'rgb(51,51,51)',color:'white'}}>Course Name</th>
              <th style={{background:'rgb(51,51,51)',color:'white'}}>Instructor Name</th>
              <th style={{background:'rgb(51,51,51)',color:'white'}}>No. of Student</th>
            </tr>
            </thead>
          <tbody>
          {course.map((course) => {
            return (<>
            <tr>
                <td style={{ background: 'rgb(80,160,96)', border: '1px solid white' }}>{ course.coid }</td>
                <td style={{ background: 'rgb(80,160,96)', border: '1px solid white' }}>{ course.course_name}</td>
                <td style={{ background: 'rgb(80,160,96)', border: '1px solid white' }}>{ course.name }</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}></td>
            </tr>
            </>)
          })}
            {/* <tr>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>P023</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>full-stack web Developer</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>Ankush</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>55</td>
            </tr>
            <tr>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>P024</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>Communication Skills</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>Venu</td>
              <td style={{background:'rgb(80,160,96)',border:'1px solid white'}}>48</td>
            </tr> */}
            </tbody>
            
          </table>
          </div>
    </div>
    <Footer />
    </>
    
  )
}

