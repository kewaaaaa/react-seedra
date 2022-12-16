import React, { useEffect, useState, useRef } from "react";
import { AccordionData } from "./AccordionData";
import accor from "./accorStyle.scss";
import DownArrowIcon from 'remixicon-react/ArrowDownSLineIcon'

function Accordion(props) {
  const [state, setState] = useState(0);
  const answer = useRef();
  function plus(target) {
    setState(1);

    answer.current.style.display = "block";
    setTimeout(() => {
      answer.current.style.transform = "translate(0, 0)";
    }, 0);
    target.style.transform = "rotate(180deg)";
  }
  function minus(target) {
    setState(0);

    answer.current.style.transform = "translate(0, -20px)";

    setTimeout(() => {
      answer.current.style.display = "none";
    }, 200);

    target.style.transform = "rotate(0)";
  }
  function click({ target }) {
    state ? minus(target) : plus(target);
  }

  return (
    <>
    <div className="accor">
      <div className="">
      <h1 className={accor}>{props.title}</h1>
      <div className="accor__card">
        <div className="accor__quest">{props.question}</div>
        <button  className="accor__arrow">
          <DownArrowIcon className="accor__arrow_btn" onClick={click} color="#98999C" />
        </button>
        <div className="accor__ansDiv">
          <ul className="accor__ans" ref={answer}>
            <li> {props.answer1}</li>
            <li> {props.answer2}</li>
            <li> {props.answer3}</li>
          </ul>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

function AccorDatas() {
  return (
    <div className="accordions">
      {AccordionData.map((accItem, index) => (
        <Accordion {...accItem} />
      ))}
    </div>
  );
}

export default AccorDatas;


