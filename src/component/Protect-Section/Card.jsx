import React from 'react'

const Cards = (props) => {
    let {text1, text2} = props
  return (
    <>
        <div className="cardWrap__card">
            <div className="left">{text1}</div>
            <div className="right">{text2}</div>
        </div>
    </>
  )
}

export default Cards


