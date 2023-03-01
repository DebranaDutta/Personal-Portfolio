import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Welcome to my page</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link
              spy={true}
              to="Services"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Services</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link spy={true} to="Work" smooth={true} activeClass="activeClass">
              <li>Work</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
