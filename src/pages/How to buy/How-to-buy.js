import React from 'react'
import Cards from '../../component/cards/Cards'
import "./HowToBuy.scss"
import showcaseData from "./ShowcaseData.json"

const HowTobuy = (props) => {

  const[showdata1, showdata2] = showcaseData;

  console.log();

  console.log(showdata2.icon1, `assets/images/icons-page1/${showdata1.icon1}`);

  return (
    <div>
      
      <div className="showcase">
        <Cards locationPage={showdata1.link} MiniTitle={showdata1.text} BigTitle={showdata1.largeText} button={showdata1.button}/>
      </div>

      <div className="container">
        
      </div>
      {/* <div className="icons">
        <img src={`assets/images/icons-page1/${showdata2.icon1}`} alt="" />
        <img src={`assets/images/icons-page1/${showdata2.icon2}`} alt="" />
        <img src={`assets/images/icons-page1/${showdata2.icon3}`} alt="" />
      </div> */}

    </div>
  )
}

export default HowTobuy