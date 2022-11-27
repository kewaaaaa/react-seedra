import React, { useEffect, useState } from "react";
import './accorStyle.scss'

function Accordion(props) {
  const [state, setState] = useState(0);
  function plus() {
    setState(1)
    document.querySelector(".accor__ans").style.display = "block"
    setTimeout(() => {
      document.querySelector(".accor__ans").style.transform= "translate(0, 0)";
      
    }, 0);
    document.querySelector(".accor__arrow").style.transform = "rotate(135deg)";
  }
  function minus() {
    setState(0)
    document.querySelector(".accor__ans").style.transform = "translate(0, -20px)";
    setTimeout(() => {
    document.querySelector(".accor__ans").style.display = "none"
    }, 200);
    document.querySelector(".accor__arrow").style.transform = "rotate(0)";
  }
  function click() {
    state ? minus() : plus();
  }  

  return (<>

    <h1 className="accor__tit">{props.title}</h1>
    <div className="accor__card">
      <div className="accor__quest">{props.question}</div>
      <button  onClick={click} className="accor__arrow">+</button>
      <div className="accor__ansDiv">
        <div  className="accor__ans">{props.answer}</div>
      </div>
    </div>
    {console.log('render')}
  </>);
}

Accordion.defaultProps ={
  title: "Title",
  question: "Question",
  answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos itaque nesciunt tempore, eaque exercitationem consequuntur. Iste impedit eos quia deleniti est vero autem numquam, deserunt quo inventore distinctio temporibus voluptatum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe nisi sequi ipsum distinctio perspiciatis! Consectetur, perferendis sunt! Quaerat, laboriosam? Voluptatibus cumque similique ad aut consequuntur asperiores eaque voluptates delectus doloribus?"
}

export default Accordion;
