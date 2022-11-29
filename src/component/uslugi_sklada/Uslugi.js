import './style.scss'
const array = [
  {
    title: 'Консолидация ',
    amount: '£1.00/1 трек'
  },
  {
    title: 'Заполнение декларации',
    amount: '£1.00'
  },
  {
    title: 'Дополнительная упаковка',
    amount: '£5.00'
  },
  {
    title: 'Упаковка xрупкиx предметов',
    amount: '£10.00'
  },
  {
    title: 'Заполнение декларации',
    amount: '£1.00'
  },
  {
    title: 'Разделение заказа',
    amount: '£2.00'
  }
]
const array2 = [
  {
    title: 'Сборка исходящей посылки вне очереди или экспресс сборка',
    description: 'Чтобы сэкономить время',
    amount: '£5.00',
  },
  {
    title: 'Фото содержимого входящей посылки',
    description: '3 фото за $5 или 10 фото за $8, а ещё можно попросить сфотографировать бирку или подарочный сертификат',
    amount: '£1.00 за 1 фото',
  },
  {
    title: 'Возврат вещей в магазин',
    description: 'В случае, если вещи нельзя отправить в страну назначения, возврат в магазин для услуги "Виртуальный адрес"',
    amount: '£10 + почтовые расходы',
  },
  {
    title: 'Проверка техники на работоспособность',
    description: 'Проверка электроники на включение/выключение (запрос через тикеты).',
    amount: '£10',
  },
  {
    title: 'Удаление инвойса',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    amount: 'Бесплатно',
  },
  {
    title: 'Дополнительная упаковка',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    amount: 'По договоренности',
  },
]
function Uslugi() {
  return ( 
    <div className='uslugi-sklada'>
      <h1 className='title-h1'>Услуги склада</h1>
      <div className="uslugi-sklada__div">
        {
          array.map(obj => {
            return <div className="box">
              <h1 className='h1'>{obj.title}</h1>
              <h2 className="h2">{obj.amount}</h2>
            </div>
          })
        }
      </div>
      <div className='uslugi-sklada__div1'>
        {
          array2.map(obj => {
            return <div className="box">
              <div className="text">
                <h1 className="h1">{obj.title}</h1>
                <p className="p">{obj.description}</p>
              </div>
              <h2 className='h2'>{obj.amount}</h2>
            </div>
          })
        }
      </div>
    </div>
  )
}
export default Uslugi