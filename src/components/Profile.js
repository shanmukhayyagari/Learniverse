import { useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import "../css/Profile.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";



export default function Profile() {
  const storeData = useSelector((store) => {
    return store.TeacherProfile;
  });
  console.log(storeData);
  const [feedBack, setFeedBack] = useState([]);
  
  const getMovieList  =  () => {

    // const url = 'http://localhost/lerniverse/backend/getProfile.php';

    
    axios
    .post("http://localhost/lerniverse/backend/getProfile.php")
    .then((res) => {
      setFeedBack(res.data);
      console.log(res.data);
    });
    
  };
  
  useEffect(() => {
    getMovieList();

    // setFeedBack(['3', '2', '1']);
   

    

  },[])
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex', justifyContent:"center", }}>
        <div className="profile"
          // style={{
          //   margin: "80px auto",
          //   textAlign: "center",
          //   display: "flex",
          //   justifyContent: "center",
          // }}
        >
          <img className="image-profile" src="teacherdummy.png" />
          <div className="img"
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginLeft: "30px",
            }}
          >
            <div style={{ textAlign: "left" }}>
            <h6>Name : </h6>
              <h6>Email: </h6>
              <h6>Contact No.: 7515236579</h6>

              <h6>Designation:Professor</h6>
              <h6>Department: Department or School Affiliation</h6>

              <h6>Institution: Barkatullah University</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
