import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TeachAuthAction } from "./Redux/Action";
import store from "./Redux/Store";
import Navbar from "./Navbar";
import Footer from "./Footer";
import '../css/Instructor.css';

export default function Instructure() {
  const navigate = useNavigate();
  const [chat, setChat] = useState("");
  const [chat2, setChat2] = useState(["hii"]);
  const [flag, setFlag] = useState(false);
  const data = store.getState();

  console.log(data);
  function heartButton() {
    // Implement heartButton functionality
  }

  function sendChat(e) {
    // Implement sendButton functionality
    e.preventDefault();
    setChat2([...chat2, chat]);
  }

  function logout() {
    TeachAuthAction(false);
    navigate("/login");
  }

  return (
    <>
      <Navbar />
      <div>
        <div>
          <br />
          <br />
          <div>
            <div>
              <div>
                <h2 style={{ textAlign: "center" }}>Instructor</h2>
                <hr />
                <div>
                  <div className="card"
                    // style={{
                    //   border: "2px solid gray",
                    //   width: "35%",
                    //   padding: "10px",
                    //   borderRadius: "40px",
                    //   margin: "auto",
                    // }}
                  >
                    <div className="card-body"
                      // style={{
                      //   background: "rgb(211, 209, 209)",
                      //   padding: "40px",
                      //   width: "100%",
                      //   margin: "auto",
                      //   borderRadius: "40px",
                      // }}
                    >
                      <Link to="/profile" style={{ textDecoration: "none" }}>
                        <button
                          type="button"
                          className="butt"
                        >
                          Profile
                        </button>
                      </Link>
                      <br />
                      <br />
                      <Link to="/grade" style={{ textDecoration: "none" }}>
                        <button
                          type="button"
                          className="butt"
                        >
                          Grade
                        </button>
                      </Link>
                      <br />
                      <br />
                      <Link to="/feedback" style={{ textDecoration: "none" }}>
                        <button
                          type="button"
                          className="butt"
                        >
                          Student feedback
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div>
            <div style={{ textAlign: "center" }}>
              <div className="buttons" style={{ paddingTop: "5%" }}>
                <Link to="/createexam">
                  <button
                    type="button"
                    style={{
                      display: "inline-block",
                      margin: "10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Create exam
                  </button>
                </Link>
                <Link to="/createcourse">
                  <button
                    type="button"
                    style={{
                      display: "inline-block",
                      margin: "10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Create Course
                  </button>
                </Link>
                <Link to="/report">
                  <button
                    type="button"
                    style={{
                      display: "inline-block",
                      margin: "10px",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Submit Report
                  </button>
                </Link>

                <Link to="/mannagecourse">
                  <button
                    type="button"
                    style={{
                      display: "inline-block",
                      margin: "10px",
                      backgroundColor: "#007BFF",
                      color: "#fff",
                      border: "none",

                      borderRadius: "5px",
                      padding: "10px 20px",
                      cursor: "pointer",
                    }}
                  >
                    Mannage course
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* CHAT BAR BLOCK */}
          <div style={{ textAlign: "center", paddingTop: "5%" }}>
            <button
              id="chat-button"
              type="button"
              style={{
                backgroundColor: "#007bff",
                border: "none",
                cursor: "pointer",

                color: "white",
                fontSize: "18px",
              }}
              onClick={() => setFlag(true)}
            >
              Chat with us!
              <i
                id="chat-icon"
                style={{ color: "white" }}
                className="fa fa-fw fa-comments-o"
              ></i>
            </button>
          </div>
          {flag ? (
            <div
              className="message-box"
              style={{
                background: "white",
                width: "350px",
                height: "330px",
                color: "black",
                padding: "5px 20px",
                margin: "50px auto",
                borderRadius: "20px",
                border: "1px solid black",
              }}
            >
              {/* Your message box content */}
              <h5
                style={{
                  textAlign: "right",
                  color: "black",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                onClick={() => setFlag(false)}
              >
                close
              </h5>
              <h5 style={{ textAlign: "center" }}>Chat with us</h5>

              {/* Add any other content or functionality you need */}
              <div
                style={{
                  height: "150px",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  flexDirection: "column",
                }}
              >
                {chat2.slice(-3).map((ele) => {
                  return <p>{ele}</p>;
                })}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <form
                  style={{ textAlign: "center", margin: "10px auto" }}
                  onSubmit={(e) => sendChat(e)}
                >
                  <input
                    type="text"
                    placeholder="Enter Your Message Here"
                    onChange={(e) => setChat(e.target.value)}
                    required
                    style={{ textAlign: "center", margin: "10px auto" }}
                  />
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <input
                      type="submit"
                      value="send"
                      style={{
                        textAlign: "center",
                        margin: "10px auto",
                        border: "none",
                        borderRadius: "5px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </form>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}
