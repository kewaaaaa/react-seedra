import React from 'react'

import PriceSectionPage4 from '../../component/prices-section-page-4/Price'
import OnlineCalc from '../../component/page3_online-calc/OnlineCalc'
import Uslugi from '../../component/uslugi_sklada/Uslugi'
import Straxovani from '../../component/straxovanit/Straxovani'


const Price = () => {
  return (
    <div>
      <PriceSectionPage4/>
      <OnlineCalc/>
      <Uslugi/>
      <Straxovani />
    </div>
  )
}

export default Price