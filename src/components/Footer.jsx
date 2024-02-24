import React from "react";
import '../mystyle.css';

const Footer = () => {
  return (
    <footer>
      <div className="image-container-footer">
        <img src={process.env.PUBLIC_URL + 'photos/linesLeft.png'} alt="lines" style={{ width: "350px", height: "100px" }} />
      </div> 
      <div className="h4footer">
        <h4>Find me online!</h4>
      </div>
      <div className="linksfooter">
        <a href="mailto:theres.selin@gmail.com">
          <img src="photos/emaillogo.png" alt="Email Icon" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://www.instagram.com/kaotiskkreativitet?igsh=cDZqMWQzOW1waWY1&utm_source=qr">
          <img src='photos/instalogo.png' alt="instagram logo" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://linkedin.com/theressundbergselin">
          <img src={process.env.PUBLIC_URL + 'photos/linkedinlogo.png'} alt="linkedin logo" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://www.behance.net/theressundberg/">
          <img src={process.env.PUBLIC_URL + 'photos/behancelogo.png'} alt="behance logo" style={{ width: "50px", height: "50px" }} />
        </a>
        <a href="https://github.com/tussakin">
          <img src={process.env.PUBLIC_URL + 'photos/githubLogo.png'} alt="Github logo" style={{ width: "45px", height: "45px" }} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
