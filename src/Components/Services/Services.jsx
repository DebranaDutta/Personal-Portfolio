import React from "react";
import "./Services.css";

import Card from "../Card/Card";

import heartemoji from "../../img/heartemoji.png";
import glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import resume from "./resume.pdf";

const Services = () => {
  return (
    <div className="services" id="Services">
      {/* left Side */}
      <div className="awsome">
        <span>My Services</span>
        <span>
          Production Support Engineer
          <br />
          Developer
        </span>
        <a href={resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <div style={{ left: "28rem" }}>
          <Card
            emoji={heartemoji}
            heading={"Support"}
            details={"Autosys, ServiceNow, AppDynamics, Unix, SQL"}
          />
        </div>
        <div style={{ left: "10rem" }}>
          <Card
            emoji={glasses}
            heading="Developer"
            details="JAVA, JavaScript, Html, Css, React, JQuery"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
