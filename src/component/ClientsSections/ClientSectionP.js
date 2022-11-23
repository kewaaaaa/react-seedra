import React from "react";
import "./ClientSectionP.scss";

function ClientSection() {
  return (
    <>
      <section className="clientWrapper">
        <div className="clientContainer">
          <div className="clientTop">
            <h1 className="clientTitle">
              120 000 довольных клиентов в России уже сделали свой выбор
            </h1>
            <p className="clientDesc">
              За последний год десятки тысяч наших клиентов заказали товары из
              Англии и оставили 19 633 отзыва
            </p>
          </div>
          <div className="clientBottom">
            <div className="clientCard">
              <img
                src={"assets/images/page1/calendarIcon.svg"}
                alt="calendar-icon"
                className="clientPic"
              />
              <h4 className="clientSubtitle">Больше не значит дороже</h4>
              <p className="clientText">
                С ростом веса посылки цена за каждые 0.5 кг уменьшается в
                прогрессии.
              </p>
            </div>

            <div className="clientCard">
              <img
                src={"assets/images/page1/timerIcon.svg"}
                alt="timer-icon"
                className="clientPic"
              />
              <h4 className="clientSubtitle">Быстрая обработка посылок</h4>
              <p className="clientText">
                Посылка обрабатывается не дольше 48 часов после поступления на
                склад.
              </p>
            </div>

            <div className="clientCard">
              <img
                src={"assets/images/page1/phoneIcon.svg"}
                alt="phone-icon"
                className="clientPic"
              />
              <h4 className="clientSubtitle">SMS-уведомления</h4>
              <p className="clientText">
                Отслеживайте весь процесс с помощью sms-уведомлений.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientSection;
