import React from 'react'

import PriceSectionPage4 from '../../component/prices-section-page-4/Price'
import OnlineCalc from '../../component/page3_online-calc/OnlineCalc'
import Uslugi from '../../component/uslugi_sklada/Uslugi'
import VariantDostavki from '../../component/Varianti_dostavki/Varianti-dostavki'
import Question from "../../component/Question/Question";
import Protect from '../../component/Protect-Section/Protect'
import './price.scss'

const Price = () => {
  return (
    <div className='price'>
      <div className='price__section'>
        <PriceSectionPage4 />
      </div>
      <div className='price__section'>
      <OnlineCalc />
      </div>
      <div className='price__section'>
      <VariantDostavki />
      </div>
      <div className='price__section'>
      <Uslugi />
      </div>
      <div className='price__section'>
      <Protect />
      </div>
      <Question />
    </div>
  )
}

export default Price