import React, { Component } from "react";
import AccorDatas from "../../component/accordion/Accordion.js";
import Chasto from "../../component/Chasto/Chasto.js";
import Question from "../../component/Question/Question.jsx";

class Faqs extends Component {
  render() {
    return (
      <>
        <Chasto />
        <AccorDatas />
        <Question />
      </>
    );
  }
}

export default Faqs;
