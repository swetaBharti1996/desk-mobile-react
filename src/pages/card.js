import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import "./card.css";

export default class Card extends React.Component {
  state = {
    home: {},
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      const home = res.data;
      this.setState({ home });
    });
  }

  render() {
    const { home } = this.state;

    return (
      <div
        className="wrapper-desktop ml-4 mt-3"
        style={{ backgroundColor: "white" }}
      >
        {/* ***************************CARD START******************** */}

        {home.length > 0 ? (
          home.map((home, index) => {
            return (
              <div className="card card-desktop ml-3 mt-3">
                <div className="card-body card-body-desktop">
                  <a href="{}" class="card-link">
                    {home.id}
                  </a>
                  <h5 class="ml-3">
                    {home.name}
                    <br />
                    Statements
                  </h5>
                </div>
                <div className="card-tv-desktop ml-5">
                  <FontAwesomeIcon icon={faTv} style={{ color: " blue" }} />

                  <p className="ml-2">17 Lectures</p>
                </div>
              </div>
            );
          })
        ) : (
          <h5 colSpan="5">Loading...</h5>
        )}
      </div>
    );
  }
}
