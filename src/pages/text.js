import React from "react";
import "./text.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Man from "../images/man.jpg";
import Woman from "../images/woman.jpg";
import Mobile from "../images/mobile.png";

const Text = () => {
  return (
    <div className="mt-3  ml-5 sections-all">
      <div>
        <section className="sections">
          <FontAwesomeIcon icon={faHome} style={{ color: "grey" }} />
          <li className="ml-4">CA finials</li>
          <li className="ml-4">Finaincial preparing</li>
        </section>

        <h4 className="mt-5">PAPER 1</h4>
        <h2 className="mt-2">Financial Reporting</h2>

        <section className="sections mt-5">
          <a href="{}">Series 1</a>
          <a href="{}" className="ml-2">
            Series 2
          </a>
          <a href="{}" className="ml-2">
            Series 3
          </a>
        </section>

        <h4 className="mt-5">FACULTY</h4>

        <section className="sections">
          <div className="sections">
            <img src={Woman} className=" mr-1 image" alt="Leadslogo" />
            <h6 className="ml-2 mt-3">Hema Kumari</h6>
          </div>
          <div className="sections">
            <img src={Man} className="ml-3  image" alt="Leadslogo" />
            <h6 className="ml-2 mt-3">CS Lakshmipathi Balaji</h6>
          </div>
        </section>
        <h4 className="mt-5">CHAPTERS</h4>
      </div>
      <img src={Mobile} className="image1" alt="Leadslogo" />
    </div>
  );
};
export default Text;
