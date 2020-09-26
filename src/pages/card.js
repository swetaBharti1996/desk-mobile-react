import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
   
    faTv
  } from "@fortawesome/free-solid-svg-icons";
  



const Card = () => {
    return(
    <div>
<div className="card">
    <div className="card-body">
        <h4 className="card-link">01</h4>
        <h4 className="card-title">Ind as on assest of the financial<br />Statements</h4>
        
    </div>
    <div className="card-text">
    <FontAwesomeIcon
                        icon={faTv}
                        style={{ color: " #33cc33" }}
                      />

        <h5>17 Lectures</h5>
    </div>
</div>
    </div>
    );
}

export default Card;