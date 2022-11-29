import React from 'react'
import Zarabivat from '../../component/p6/Zarabivat'
import Page1Showcase3 from '../../component/page1/page1Showcase3/Page1Showcase3'
import Sale from '../../component/sale-component/Sale'
import '../../component/p6/style.scss'
function Page6() {
  return (
    <div className='page6'>
        <Sale/>
        <Zarabivat />
        <Page1Showcase3/>
        
    </div>
  )
}

export default Page6