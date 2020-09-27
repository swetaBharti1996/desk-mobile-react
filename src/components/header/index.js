import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faShoppingCart,
  faUserPlus,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import "./header.css";
import Man from "../../images/man.jpg";

const Header = () => {
  return (
    <div className="navbar-wrapper">
      <div className="search ">
        <FontAwesomeIcon icon={faSearch} style={{ color: "grey" }} />

        <span className="ml-2">Search for paper, chapters and lectures</span>
      </div>
      <button className="membership">
        Get Membership
        <FontAwesomeIcon
          icon={faUserPlus}
          className="ml-3"
          style={{ color: "blue" }}
        />
      </button>
      <button className="upgrade">
        Upgrade
        <FontAwesomeIcon
          icon={faShoppingCart}
          className="ml-1"
          style={{ color: "grey" }}
        />
      </button>
      <button className="logout">
        <FontAwesomeIcon icon={faBell} style={{ color: "grey" }} />
        <img src={Man} className="ml-3 mr-1" alt="Leadslogo" />
        <FontAwesomeIcon icon={faSortDown} style={{ color: "grey" }} />
      </button>
    </div>
  );
};

export default Header;
