import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="image-container-header">
        <img
          src="photos/linesLeft.png"
          alt="lines"
          style={{ width: "350px", height: "100px" }}
        />
        <Link to="/">
          <div className="overlay-text">Theres Sundberg Selin</div>
        </Link>
      </div>
      <div className="dropdown">
        <img
          src="photos/menulines.png"
          alt="3 lines"
          style={{ width: "40px", height: "40px" }}
        />
        <div className="dropdown-content">
          <nav className="menuhover">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About me</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <Link to="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact">Contact me</Link>
              </li>
              <li>
                <Link to="/WCAG">WCAG Guidelines</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
