import React from 'react'

const Additional = (props) => {
    let {main, p, price} = props
  return (
    <div className="cardWrap2__card">            
        <ul className='left'>
            <li className='mainText'>{main}</li>
            <li className='lorem'>{p}</li>
        </ul>
        <div className="right">{price}</div>
    </div>
  )
}

export default Additional;