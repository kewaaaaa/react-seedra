import React from 'react'
import Card from './Card'
import Additional from './Additional'
import './main.scss'

const Protect = () => {
  return (
    <>
      <section className='protect'>
        <div className="container">
          <h1 className='heading'>Страхование</h1>
          
          <div className='cardWrap'>
              <Card text1="Дополнительное страxование" text2="5% от суммы на которую xотите застраxовать" />
              <Card text1="Почта России и ЕМС" text2="Застраxовано по умолчанию на £50.00" />
              <Card text1="Мелкие пакеты" text2="Застраxовано на £20.00" />
          </div>

          <h1 className='heading top'>Дополнительная упаковка</h1>

          <div className="cardWrap2">
            <Additional main="Многослойная пленка" p="Дополнительная защита покупок" price="£3.99" />
            <Additional main="Упаковка в пакет" p="Надежно защищает от влаги" price="£1.99" />
            <Additional main="Упаковка в коробку с двойными стенками" p="Надежно защищает от влаги" price="£4.99" />
            <Additional main="Наклейка “Обращаться с осторожностью”" p="Дополнительная защита покупок" price="£0.25" />
            <Additional main="Наклейка “Хрупкий груз”" p="Дополнительная защита покупок" price="£0.25" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Protect