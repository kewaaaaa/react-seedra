import React, { Component } from "react";
import AccorDatas from "../../component/accordion/Accordion.js";
import Chasto from "../../component/Chasto/Chasto.js";
import Question from "../../component/Question/Question.jsx";
import './faq.scss'


class Faqs extends Component {
  render() {
    return (
      <div className="faq">
        <div className="faq__section">
        <Chasto />
        </div>
        <div className="faq__section">
      <AccorDatas />
        </div>
        <Question />
      </div>
    );
  }
}

export default Faqs;
