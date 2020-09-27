import React from "react";
import Man from "../../images/man.jpg";
import "./mobileHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const MobileHeader = () => {
  return (
    <div className="bg-dark mobile-header pb-1">
      <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "white", fontSize: "1.7rem" }}
          />
        </button>
        <h6 style={{ color: "white", fontFamily: "roboto" }}>CA Final</h6>
        <img src={Man} className="nabar-mobile-image" alt="Leadslogo" />

        <div
          class="collapse navbar-collapse p-3"
          id="navbarTogglerDemo01"
        ></div>
      </nav>
      {/* *********************search box***************** */}
      <button className="mobile-search">
        <h6 className="pt-2" style={{ fontSize: "0.8rem" }}>
          search for papers,chpaters and lectures
        </h6>
        <FontAwesomeIcon
          className="pt-2"
          icon={faSearch}
          style={{ color: "grey", fontSize: "1.7rem" }}
        />
      </button>
    </div>
  );
};

export default MobileHeader;
