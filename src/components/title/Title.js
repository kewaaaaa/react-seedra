import React from "react";
import "./style.scss";

function Title(props) {
  if (props.title) {
    return <h1 id="title">{props.title}</h1>;
  } else if (props.titleUp) {
    return <h1 id="titleUp">{props.titleUp}</h1>;
  } else if (props.titleDown) {
    return <h1 id="titleDown">{props.titleDown}</h1>;
  }
}

export default Title;
