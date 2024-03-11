import React,{useState} from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  AdminAuthAction,
  ProgramCordinatorAuthAction,
  QOAuthAction,
  StuAuthAction,
  TeachAuthAction,
} from "../components/Redux/Action";
import "../css/Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

 
  const data = useSelector((store) => {
    return store;
  });
  const navigate = useNavigate();

  const functionForSignOut = () => {
    StuAuthAction(false);
    TeachAuthAction(false);
    AdminAuthAction(false);
    QOAuthAction(false);
    ProgramCordinatorAuthAction(false);
    navigate("/");
  };
  // console.log(data);
  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
    console.log(isActive);
  };

  return (
    
    <div className="nav-container">
      {" "}
      {/* Use the prefixed class name */}
      <div className="nav-logo">
        {" "}
        {/* Use the prefixed class name */}
        <Link to="/" className="nav-logo">
          learniverse
        </Link>{" "}
        {/* Use the prefixed class name */}
      </div>
      <div>
        <ul className={isActive ? 'nav-links1' : 'nav-links'}>
          {" "}
          {/* Use the prefixed class name */}
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li><Link to="/student">Student</Link></li> */}
          <li>
            <Link to="/about">About Us</Link>
          </li>
          {/* <li><Link to="/admin">Admin</Link></li>
                    <li><Link to="/quality-officer">Quality Officer</Link></li>
                <Link to="/instructor">Instructor</Link></li> */}
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to="/program-coordinator">Program Cordinator</Link>
          </li> */}
          {/* {authLinks}///////////////////////////////////////////////////////////////////////////////////////////// */}
          <div>
            {!data.stuAuth &&
            !data.TeachAuth &&
            !data.QoAuth &&
            !data.adminAuth &&
            !data.ProgramCordinatorAuth ? (
              <>
                <li>
                  <Link to="/signin">Logout</Link>
                </li>
                {/* <li>
                  <Link to="/signup">Sign Up</Link>
                </li> */}
              </>
            ) : (
              <>
                {data.stuAuth ? (
                  <>
                    <li>
                      <Link to="/student">Student</Link>
                    </li>
                    <li
                      onClick={functionForSignOut}
                      style={{ cursor: "pointer" }}
                    >
                      Sign Out
                    </li>
                  </>
                ) : null}
                {data.adminAuth ? (
                  <>
                    <li>
                      <Link to="/admin">Admin</Link>
                    </li>
                    <li
                      onClick={functionForSignOut}
                      style={{ cursor: "pointer" }}
                    >
                      Sign Out
                    </li>
                  </>
                ) : null}
                {data.QoAuth ? (
                  <>
                    <li>
                      <Link to="/quality-officer">Quality officer</Link>
                    </li>
                    <li
                      onClick={functionForSignOut}
                      style={{ cursor: "pointer" }}
                    >
                      Sign Out
                    </li>
                  </>
                ) : null}
                {data.TeachAuth ? (
                  <>
                    <li>
                      <Link to="/instructor">Instructor</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={functionForSignOut}>
                        Sign Out
                      </Link>
                    </li>
                  </>
                ) : null}
                {data.ProgramCordinatorAuth ? (
                  <>
                    <li>
                      <Link to="/program-coordinator">Program Cordinator</Link>
                    </li>
                    <li>
                      <Link to="/" onClick={functionForSignOut}>
                        Sign Out
                      </Link>
                    </li>
                  </>
                ) : null}
              </>
            )}
          </div>
          {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        </ul>
      </div>
      <div className="nav-responsive">
        <img src="images.jpg" className="menu"  onClick={handleClick}/>
        {/* <button className="menu" onClick={handleClick}></button> */}
      </div>
      
      
      
    </div>
  );
};

export default Navbar;
