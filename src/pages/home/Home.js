import React from 'react'
import './home.scss'
import Cards from '../../component/cards/Cards'
import Title from '../../component/TITLE/Title'
import Description from '../../component/TITLE/Description'
import Table from '../../component/table/Table'

const Home = () => {
  return (
    <div className='home'>
      <section className='banner1 slider'>
        <Cards BigTitle="Доставка товаров из Великобритании в Россию" text='Начните экономить до 80% на шопинге. Регистрируйтесь в OkeyPost, чтобы покупать со скидками в UK одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Россию.'
          button={'Получить адрес в UK'}
          imgRight={'./assets/images/page1/page1_showcase1.png'} />
      </section>
      <section className='container '>
        <Title title="Насколько выгодно покупать?" color='black' size="44" />
      </section>
      <section className='banner1'>
        <Cards imgleft={'./assets/images/page1/page1_showcase2.png'}
          BigTitle="Поручите нашим мастерам шопинга оформить заказы в английских магазинах и освободите время для более важных дел."
          text="Такой способ покупки также подойдёт, если магазин принимает только английские карты."
          button={"Попробовать"}
        />
      </section>
      <section className='okeyPost container'>
        <Title
          title="OkeyPost удобная и быстрая доставка посылок из Великобритании "
          color="black"
          size="44"
        />
        <Description
          description="Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши посылки на складе, при необходимости объединим несколько доставок в одну и отправим их к вам надежно упакованными."
          size="20"
        />
      </section>
      <section className='container variant_dostavki'>
        <Title
          title="Варианты доставки:"
          color="black"
          size="36"
        />
        <div className='table'>
          <Table />

        </div>
      </section>
      <section className='container forSales'>
        <Title
        title="4 простых шага для ваших покупок в Великобритании "
        color="black"
        size="44"
        />
      </section>

    </div>
  )
}

export default Home