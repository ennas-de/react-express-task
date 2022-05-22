import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <ul>
          <li>Services</li>
          <li>Webinars</li>
          <li>Profile Evaluation</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
