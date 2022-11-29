import React from 'react'

import PriceSectionPage4 from '../../component/prices-section-page-4/Price'
import OnlineCalc from '../../component/page3_online-calc/OnlineCalc'
import Uslugi from '../../component/uslugi_sklada/Uslugi'
import VariantDostavki from '../../component/Varianti_dostavki/Varianti-dostavki'
import Question from "../../component/Question/Question";
import './price.scss'

const Price = () => {
  return (
    <div className='price'>
      <div className='price__section'>
      <PriceSectionPage4  />
        
      </div>
      <OnlineCalc/>
      <VariantDostavki/>
      <Uslugi/>
      <Question />
    </div>
  )
}

export default Price