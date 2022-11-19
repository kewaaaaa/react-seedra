import React from 'react'

const Quvondiq = (props) => {
  return (
    <div>
        <h1>Card 1 {props.title}</h1>
        <h1>Card 2</h1>
        <h1>Card 2</h1>
        <h1>Card {props.num}</h1>
        <p>{props.text}</p>
        <h1>Card 4</h1>
    </div>
  )
}
export default Quvondiq;

