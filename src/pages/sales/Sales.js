import React from 'react'
import Cards from '../../component/cards/Cards';
import Title from '../../component/TITLE/Title';
import SaleCardData from "./ShowcaseData.json";
import TextData from "../How to buy/TextData.json"
import "./Sale.scss" 

const Sales = () => {

  const[card, card2] = SaleCardData;

  const[title1, title2] = TextData;


  return (
    <div>
      
      <div className="showcase">
        <Cards locationPage={card.link} MiniTitle={card.text} BigTitle={card.largeText} button={card.button}/>
      </div>

      <div className="container">
        <div className="title">
          <Title title={title2.title} color="black" i />
        </div>

        <div className="cards">
          <div className="card">1</div>
          <div className="card">2</div>
          <div className="card">3</div>
          <div className="card">4</div>
          <div className="card">5</div>
          <div className="card">6</div>
        </div>

      </div>

      <div className="showcase">
        <Cards BigTitle={card2.largeText} links1={card2.icon1} links2={card2.icon2} links3={card2.icon3}/>
      </div>
      
    </div>
  )
}

export default Sales