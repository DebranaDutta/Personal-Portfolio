import React from "react";
import "./Worked.css";
import Amazon from "../../img/amazon.png";
import Tcs from "../../img/tcs.png";
import Citi from "../../img/citi.png";

const Work = () => {
  return (
    <div className="work" id="Work">
      <div className="l-work">
        <span>Worked for</span>
        <span>Brand & Clients like</span>
      </div>
      <div className="r-work">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Tcs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Citi} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
