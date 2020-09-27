import React from "react";
import "./mobile.css";
import MobileHeader from "../components/header/mobileHeader";
import Accordian from "../components/accordian/accordian";
import CardMobile from "../pages/cardMobile";

const Mobile = () => {
  return (
    <div>
      <MobileHeader />
      <h4
        className="ml-3 mt-4"
        style={{ fontWeight: "bold", color: "#404040" }}
      >
        PAPERS
      </h4>
      <Accordian />

      {/* ****************SECTIONS STARTS**************** */}

      <section className="text-link">
        <a href="{}" className=" nav-item active">
          Series 1
        </a>
        <a href="{}">Series 2</a>
        <a href="{}">Series 3</a>
      </section>
      <h5
        className="ml-3 mt-4"
        style={{ fontWeight: "bold", color: "#404040" }}
      >
        CHAPTERS
      </h5>

      {/* ***********************CARD CONTAIONER****************** */}
      <div className="card-contaioner">
        <CardMobile />
      </div>
    </div>
  );
};

export default Mobile;
