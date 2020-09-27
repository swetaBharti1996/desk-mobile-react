import React from "react";
import "./index.css";
import Leadslogo from "../../images/Leadslogo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={Leadslogo} className="ml-2 pt-3" alt="Leadslogo" />
        <h6 className="ml-2 mt-3">LearnCab</h6>
      </div>
      <div className="home pt-3">
        <FontAwesomeIcon
          className="ml-2"
          icon={faLongArrowAltLeft}
          style={{ color: "white" }}
        />
        <h6 className="ml-2 ">Home</h6>
      </div>
      {/* **************************chapter1 start*********************** */}
      <div className="all-chapter">
        <div className="ml-4 pt-2">
          <span>chapter 1</span>
          <p>
            <a href="#home">CA Finals</a>
          </p>
        </div>
      </div>
      {/* **************************chapter2 start*********************** */}

      <div className="all-chapter">
        <div className="ml-4 pt-2">
          <span>chapter 2</span>
          <p>
            <a href="#home">CA Finals</a>
          </p>
        </div>
      </div>
      {/* **************************chapter3 start*********************** */}

      <div className="all-chapter ">
        <div className="ml-4 pt-2">
          <span>chapter 3</span>
          <p>
            <a href="#home">CA Finals</a>
          </p>
        </div>
      </div>
      {/* **************************chapter4 start*********************** */}

      <div className="all-chapter">
        <div className="ml-4 pt-2">
          <span>chapter 4</span>
          <p>
            <a href="#home">CA Finals</a>
          </p>
        </div>
      </div>
      {/* **************************chapter5 start*********************** */}

      <div className="all-chapter">
        <div className="ml-4 pt-2">
          <span>chapter 5</span>
          <p>
            <a href="#home">CA Finals</a>
          </p>
        </div>
      </div>
      {/* **************************DOWNLOADED BUTTON*********************** */}

      <p className="ml-3 pt-4">DOWNLOADED APP</p>
      <br />
      <span className="ml-3 cus-btn">
        <button>
          <FontAwesomeIcon icon={faAppleAlt} style={{ color: "white" }} />
          Android
        </button>
        <button className="ml-2">
          <FontAwesomeIcon icon={faAppleAlt} style={{ color: "white" }} />
          Apple
        </button>
      </span>
    </div>
  );
};

export default Sidebar;
