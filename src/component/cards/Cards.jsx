import React from 'react'
import "../cards/Cards.scss"

const Cards = ({ BigTitle, MiniTitle, text, button, buttonRight, imgRight, imgleft,inpRight, links1, links2, links3, locationPage,Inp,text2 }) => {
    return (
        <div className='Card'>

            {imgleft ? <img src={imgleft} /> : <></>}
            <div className="all_texts">

                {locationPage ? <p>{locationPage}</p> : <></>}

                {BigTitle ? <h2>{BigTitle}</h2> : <></>}
                {MiniTitle ? <h3>{MiniTitle}</h3> : <></>}
                {text ? <p>{text}</p> : <></>}
                {Inp == true ? <input className='inp' type='text' placeholder='Введите ссылку на товар'/> : <></>}
                <div className=''>
                {button ? <button>{button}</button> : <></>}
                {text2 ? <p>{text2}</p> : <></>}
                </div>
            </div>


            {imgRight ? <img src={imgRight} /> : <></>}
        

            {buttonRight || inpRight ?
                <div className='Right'>
                    <input type="text" name="" id="" placeholder='Введите ваш email'/>
                    <button>{buttonRight}</button>
                </div>
                : <></>}

                {links1 ? <img src={links1} /> : <></>}
                {links2 ? <img src={links2} /> : <></>}
                {links3 ? <img src={links3} /> : <></>}
        </div>
    )
}
export default Cards