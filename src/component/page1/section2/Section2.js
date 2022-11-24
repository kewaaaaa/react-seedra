import './Section2.scss'

const Section2 = () => {
  return (
    <div className="section2-page1">
      <div className='box'>

        <img src='assets/images/page1/page1_showcase2.png' alt='' />
        
        <div className='text'>

          <h1>
          Поручите нашим мастерам шопинга оформить <br/> заказы в английских магазинах и освободите время <br/> для более важных дел.
          </h1>

          <p>Такой способ покупки также подойдёт, если магазин принимает только английские карты.</p>

          <a href='/'><h2 className='section2-page1__button'>Попробовать</h2></a>

        </div>

      </div>

      <div className='okeyPost'>

        <div className='text'>
          <h1>OkeyPost удобная и быстрая доставка <br/> посылок из Великобритании </h1>
          <p>Рассчитайте стоимость доставки из Англии к вам домой. Мы получим ваши <br/> посылки на складе, при необходимости объединим несколько доставок в одну <br/> и отправим их к вам надежно упакованными.</p>
        </div>

        <div className='card'>
          <div className='card-grid'>
            <div className='box2'>
              <h3>Страна:</h3>
              <div className='div'>
                <h4>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M6.235 6.453a8 8 0 0 0 8.817 12.944c.115-.75-.137-1.47-.24-1.722-.23-.56-.988-1.517-2.253-2.844-.338-.355-.316-.628-.195-1.437l.013-.091c.082-.554.22-.882 2.085-1.178.948-.15 1.197.228 1.542.753l.116.172c.328.48.571.59.938.756.165.075.37.17.645.325.652.373.652.794.652 1.716v.105c0 .391-.038.735-.098 1.034a8.002 8.002 0 0 0-3.105-12.341c-.553.373-1.312.902-1.577 1.265-.135.185-.327 1.132-.95 1.21-.162.02-.381.006-.613-.009-.622-.04-1.472-.095-1.744.644-.173.468-.203 1.74.356 2.4.09.105.107.3.046.519-.08.287-.241.462-.292.498-.096-.056-.288-.279-.419-.43-.313-.365-.705-.82-1.211-.96-.184-.051-.386-.093-.583-.135-.549-.115-1.17-.246-1.315-.554-.106-.226-.105-.537-.105-.865 0-.417 0-.888-.204-1.345a1.276 1.276 0 0 0-.306-.43zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill="rgba(31,36,40,1)"/></svg></span>
                  <span>Россия</span>
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(31,36,40,1)"/></svg>
              </div>
            </div>
            <div className='box2'>
              <h3>Город:</h3>
              <div className='div'>
                <h4>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1v9zM5 5v14h8V5H5zm2 6h4v2H7v-2zm0-4h4v2H7V7z" fill="rgba(31,36,40,1)"/></svg></span>
                  <span>Москва</span>
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(31,36,40,1)"/></svg>
              </div>
            </div>
            <div className='box2'>
              <h3>Индекс:</h3>
              <div className='div'>
                <h4>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2h16.005zM8 4H6v16h2V4zm12 0H10v16h10V4z" fill="rgba(31,36,40,1)"/></svg></span>
                  <span>Введите индекс</span>
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(31,36,40,1)"/></svg>
              </div>
            </div>
            <div className='box2'>
              <h3>Вес посылки:</h3>
              <div className='div'>
                <h4>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M20.194 14.197c0 3.362-4.53 6.424-9.926 6.424C5.318 20.62 1 18.189 1 14.534c0-1.947 1.18-4.087 3.24-6.088 2.832-2.746 6.229-4.033 7.858-2.448.498.482.723 1.122.719 1.858 1.975-.576 3.65-.404 4.483.752.449.623.532 1.38.326 2.207 1.511.61 2.568 1.77 2.568 3.382zm-4.44-2.07c-.386-.41-.4-.92-.198-1.41.208-.508.213-.812.12-.94-.264-.368-1.533-.363-3.194.311a2.043 2.043 0 0 1-.509.14c-.344.046-.671.001-.983-.265-.419-.359-.474-.855-.322-1.316.215-.67.18-1.076.037-1.215-.186-.18-.777-.191-1.659.143-1.069.405-2.298 1.224-3.414 2.306C3.925 11.54 3 13.218 3 14.534c0 2.242 3.276 4.087 7.268 4.087 4.42 0 7.926-2.37 7.926-4.424 0-.738-.637-1.339-1.673-1.652-.394-.113-.536-.171-.767-.417zm7.054-1.617a1 1 0 0 1-1.936-.502 4 4 0 0 0-4.693-4.924 1 1 0 1 1-.407-1.958 6 6 0 0 1 7.036 7.384z" fill="rgba(31,36,40,1)"/></svg></span>
                  <span>0,5</span>
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(31,36,40,1)"/></svg>
              </div>
            </div>
            <div className='box2'>
              <h3>Дополнительные услуги:</h3>
              <div className='div'>
                <h4>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 15l-6 5.996L4.002 21A.998.998 0 0 1 3 20.007V3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.456.993 1.002V15zM19 5H5v14h8v-5a1 1 0 0 1 .883-.993L14 13l5-.001V5zm-.829 9.999L15 15v3.169l3.171-3.17z" fill="rgba(31,36,40,1)"/></svg></span>
                  <span>Выберите услуги</span>
                </h4>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z" fill="rgba(31,36,40,1)"/></svg>
              </div>
            </div>
          </div>
          <a href='/'><h2 className='section2-page1__button'>Рассчитать</h2></a>

        </div>

      </div>
      
    </div>
  )
}

export default Section2