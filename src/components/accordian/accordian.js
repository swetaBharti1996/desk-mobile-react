import React, { Component } from "react";
import "./accordian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const faqData = [
  {
    question: "Strategic Cost Management and Performance Evaluation",
    answer:
      "Search the product you want to buy. Just like you search on Amazon or Flipkart. Check out the details of the product, along with the price on the online marketplaces and the nearby stores. With the help of latest tools and technologies and our in process patent algorithms we are able to analyze the products and prices all places and give you the right insights.",
  },
];

// ************************class starts***********************

class Accordian extends Component {
  state = {
    selected: "FAQ 1",
  };
  handleList = (key) => {
    if (this.state.selected === key) this.setState({ selected: "" });
    else this.setState({ selected: key });
  };

  // *********************components starts**************************

  render() {
    return (
      <div className="FaqContainer">
        {faqData.map((item, key) => (
          <div
            className="FaqCard"
            key={`faq${key}`}
            onClick={() => this.handleList(item.question)}
          >
            <div className="av">
              <p className="ml-2 pt-2" style={{ fontSize: "0.8rem" }}>
                <h6>PAPER 1</h6>
                {item.question}
              </p>

              <i className="material-icons mr-3 pt-4">
                {this.state.selected === item.question ? (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    style={{ color: "grey" }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="ml-3"
                    style={{ color: "grey" }}
                  />
                )}
              </i>
            </div>

            {this.state.selected === item.question && <p>{item.answer}</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default Accordian;
