import React, { useEffect, useState } from "react";
import './accorStyle.scss'

function Accordion(props) {
  const [state, setState] = useState(0);
  function plus() {
    setState(1)
    document.querySelector(".accor__ans").style.display = "block"
    document.querySelector(".accor__arrow").style.transform = "rotate(135deg)"
  }
  function minus() {
    setState(0)
    document.querySelector(".accor__ans").style.display = "none"
    document.querySelector(".accor__arrow").style.transform = "rotate(0)"
  }
  function click() {
    state ? minus() : plus();
  }  

  return (<>

    <h1 className="accor__tit">{props.title}</h1>
    <div className="accor__card">
      <div className="accor__quest">{props.question}</div>
      <button  onClick={click} className="accor__arrow">+</button>
      <div  className="accor__ans">{props.answer}</div>
    </div>
  </>);
}

Accordion.defaultProps ={
  title: "Title",
  question: "Question",
  answer: "Answer"
}

export default Accordion;
