import React from 'react'
import Cards from '../../component/cards/Cards'
import Card from '../../component/Cardlar_1_4_7/cardlar_1_4_7.jsx'
import "./HowToBuy.scss"
import showcaseData from "./ShowcaseData.json"
import CardData from "./CardData.json"

const HowTobuy = (props) => {

  const[showdata1, showdata2] = showcaseData;

  const[card, card2] = CardData;


  return (
    <div>
      
      <div className="showcase">
        <Cards locationPage={showdata1.link} MiniTitle={showdata1.text} BigTitle={showdata1.largeText} button={showdata1.button}/>
      </div>

      <div className="container">

        <div className="cards">
          {
            CardData.map((card)=>(
              <Card text={card.text}/>
            ))
          }
        </div>

      </div>

      <div className="showcase">
        <Cards BigTitle={showdata1.largeText} links1={showdata2.icon1} links2={showdata2.icon2} links3={showdata2.icon3}/>
      </div>

    </div>
  )
}

export default HowTobuy