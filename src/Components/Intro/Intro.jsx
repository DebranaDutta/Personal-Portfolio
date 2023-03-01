import "./Intro.css";
import React from "react";

import Github from "../../img/github.png";
import linkedin from "../../img/linkedin.png";
import instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";

import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hay! I Am</span>
          <span>Debrana Dutta</span>
          <span>
            Experienced Production Support Engineer with a demonstrated history
            of working in the IT services industry.
            <br></br>
            Skilled in Production Deployment, Java, Big Data, Unix, and Sybase
            SQL Anywhere
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true} activeClass="activeClass">
          <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/debrana-dutta-14976a144/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://github.com/DebranaDutta">
            <img src={Github} alt="" />
          </a>
          <a href="#">
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <div style={{ top: "-6%", left: "70%" }} className="floating-div">
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </div>
        <div style={{ bottom: "5%", right: "60%" }} className="floating-div">
          <FloatingDiv image={thumbup} text1="Support" text2="Engineer" />
        </div>
        {/* blur div */}
        <div
          className="blur"
          style={{ background: "rgb(238, 210, 255)" }}
        ></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};
export default Intro;
