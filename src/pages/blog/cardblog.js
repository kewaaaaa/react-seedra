import React from 'react'
import "./cardblog.scss"
const cardblog = (props) => {
  // bu card blog component edi
  return (
    <div className='asosiyblog'>
       <div className="cardblog">
          <div className="cardblog__header">
               <img src={props.urlimg} alt="" />
          </div>
          <div className="cardblog__text">
               <h4>{props.text}</h4>
          </div>
          <div className="cardblog__time">
            <div>
              <p>22.10.2021</p>
            </div>
            <div>
              Читать: 8 минут
            </div>
          </div>
       </div>
    </div>
  )
}

export default cardblog
