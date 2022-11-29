import React from 'react'
import "./Chasto.scss"

function Chasto(props) {
  return (
    <div>

        <div className="showcasecha2">
            <div className="container">
                <p className='showcasecha2__small'>
                    <a href="/">Главная </a>  /  Частозадаваемые     вопросы
                </p>
                <h2 className='showcasecha2__big'>Отвечаем на вопросы доставки</h2>
            </div>
        </div>

        <div className="container">
            <form className="search">
                <label htmlFor="search"><b>Поиск в вопросах и ответах:</b></label>
                <div className="search__input">
                    <input id='search' type="text" placeholder='Введите свой вопрос...' required/>
                    <label htmlFor="search">
                        <img className='search__icon' src='assets/images/icons-page1/icon-6.png' alt="poisk" />
                    </label>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Chasto;