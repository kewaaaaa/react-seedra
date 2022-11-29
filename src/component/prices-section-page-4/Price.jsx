import React from 'react'
import "./Price.scss"
import data from "./data.json"


function Price() {
    let data1 = data
    console.log(data1);
    return (
        <>
            <div className='price_box'>
                <p>
                    <a href="#">
                        Главная
                    </a>
                    /
                    <a href="#">
                        Цены
                    </a>

                </p>
                <h3>Услуги доставки из Великобритании</h3>
            </div>

            <div>
                <ul className='list'>
                    {data1.map((index) => {
                        return (
                            <li key={index.id}>
                                <img src={index.img} alt="" />
                                <h4>{index.title}</h4>
                                <p>{index.description}</p>
                                <button>
                                    {index.btn}
                                </button>
                            </li>)
                    })}
                </ul>
            </div>
        </>
    )
}

export default Price