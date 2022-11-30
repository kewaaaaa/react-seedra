import React from 'react'
import Cards from '../../component/cards/Cards';
import SaleCardData from "./ShowcaseData.json"

const Sales = () => {

  const[card, card2] = SaleCardData;


  return (
    <div>
      
      <div className="showcase">
        <Cards locationPage={card.link} MiniTitle={card.text} BigTitle={card.largeText} button={card.button}/>
      </div>

      <div className="showcase">
        <Cards BigTitle={card2.largeText} links1={card2.icon1} links2={card2.icon2} links3={card2.icon3}/>
      </div>
      
    </div>
  )
}

export default Sales