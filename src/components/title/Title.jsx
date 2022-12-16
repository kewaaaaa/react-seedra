import React from 'react'
import s from './titleStyle.module.scss'

function Title(props) {
  return (
    <div className={s.title}>
        <h1>{props.title}</h1>
        {props.button ? <button>{props.button}</button> : <></>}
    </div>
  )
}

export default Title