import React from 'react'
import "../cards/Cards.scss"

const Cards = ({ BigTitle, MiniTitle, text, button, buttonRight, imgRight, imgleft, inpRight, links1, links2, links3, locationPage, Inp, text2 }) => {
    return (
        <div className='conta'>
            <div className='Card'>

                {imgleft ? <img src={imgleft} /> : <></>}
                <div className="all_texts">

                    {locationPage ? <p>{locationPage}</p> : <></>}

                    {BigTitle ? <h2>{BigTitle}</h2> : <></>}
                    {MiniTitle ? <h3>{MiniTitle}</h3> : <></>}
                    {text ? <p>{text}</p> : <></>}
                    {Inp == true ? <input className='inp' type='text' placeholder='Введите ссылку на товар' /> : <></>}
                    <div className='box'>
                        {button ? <button>{button}</button> : <></>}
                        {text2 ? <p>{text2}</p> : <></>}
                    </div>
                </div>


                {imgRight ? <img src={imgRight} /> : <></>}


                {buttonRight || inpRight ?
                    <div className='Right'>
                        <div className='right__inner'>
                        <input type="text" name="" id="" placeholder='Введите ваш email' />
                        <button>{buttonRight}</button>
                        </div>
                    </div>
                    : <></>}

                <div className='links'>
                <a href="https://web.whatsapp.com/">{links1 ? <img src={links1} /> : <></>}</a>
                <a href="https://t.me/JavohirAbduxalilov_Front">{links2 ? <img src={links2} /> : <></>}</a>
                <a href="#">{links3 ? <img src={links3} /> : <></>}</a>
                </div>
            </div>
<<<<<<< HEAD


            {imgRight ? <img src={imgRight} /> : <></>}
        

            {buttonRight || inpRight ?
                <div className='Right'>
                    <input type="text" name="" id="" placeholder='Введите ваш email'/>
                    <button>{buttonRight}</button>
                </div>
                : <></>}

                {links1 ? <img src={`assets/images/icons-page1/${links1}`} /> : <></>}
                {links2 ? <img src={`assets/images/icons-page1/${links2}`} /> : <></>}
                {links3 ? <img src={`assets/images/icons-page1/${links3}`} /> : <></>}
=======
>>>>>>> f734c233f3af5675c18e5b7ad88afe5f711b2120
        </div>
    )
}
export default Cards