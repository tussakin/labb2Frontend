import React from "react";
import '../mystyle.css';
import { Link, useLocation } from "react-router-dom"; 
const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className="image-container-header">
        <img src={process.env.PUBLIC_URL + 'photos/linesLeft.png'} alt="lines" style={{ width: "350px", height: "100px" }} />
        <Link to="/"> 
          <div className="overlay-text">Theres Sundberg Selin</div>
        </Link>
      </div>
      <div className="dropdown">
        <img src="./photos/menulines.png" alt="3 lines" style={{ width: "40px", height: "40px" }} />
        <div className="dropdown-content">
          <nav className="menuhover">
            <ul>
            <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
              <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
              <li className={location.pathname === "/resume" ? "active" : ""}><Link to="/resume">Resume</Link></li>
              <li className={location.pathname === "/portfolio" ? "active" : ""}><Link to="/portfolio">Portfolio</Link></li>
              <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
            </ul>
          </nav> 
        </div>
      </div>
    </header>
  );
};

export default Header;
