import React from 'react'
import s from './prodStyle.module.scss'

function Products(props) {
  return (
    <div className={s.prods}>
        <button>{props.button1}</button>
        <button>{props.button2}</button>
        <button>{props.button3}</button>
        <button>{props.button4}</button>
        <button>{props.button5}</button>
        <button>{props.button6}</button>
        <button>{props.button7}</button>
    </div>
  )
}

export default Products