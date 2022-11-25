import React from "react";
import "./Varianti-dostavki.scss";

const DelieveryTypes = () => {
  return (
    <div className="delievery_types">
      <h1>Варианты доставки:</h1>
      <div className="table">
        <div className="row">
          <div className="title">
            <img src="assets/images/icons-page1/icon-1.pochta.svg" alt="" />
            <p>Почта России</p>
          </div>
          <div className="wrap">
            <div className="sroki">
              <span>Сроки:</span>
              <p>10-14 дней</p>
            </div>
            <div className="delievery-cost">
              <span>Стоимость доставки:</span>
              <p>
                от £27.00
                <img src="assets/images/icons-page1/icon-5.info.svg" alt="" />
              </p>
            </div>
            <div className="cost">
              <span>Итого:</span>
              <p>£41.99 </p>
            </div>
          </div>
          <div className="ticket">
            <img src="assets/images/icons-page1/icon-4.angle-down.svg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="title">
            <img src="assets/images/icons-page1/icon-2.ems.svg" alt="" />
            <p>Почта России</p>
          </div>
          <div className="wrap">
            <div className="sroki">
              <span>Сроки:</span>
              <p>10-14 дней</p>
            </div>
            <div className="delievery-cost">
              <span>Стоимость доставки:</span>
              <p>
                от £27.00
                <img src="assets/images/icons-page1/icon-5.info.svg" alt="" />
              </p>
            </div>
            <div className="cost">
              <span>Итого:</span>
              <p>£41.99 </p>
            </div>
          </div>
          <div className="ticket">
            <img src="assets/images/icons-page1/icon-4.angle-down.svg" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="title">
            <img src="assets/images/icons-page1/icon-3.paketi.svg" alt="" />
            <p>Почта России</p>
          </div>
          <div className="wrap">
            <div className="sroki">
              <span>Сроки:</span>
              <p>10-14 дней</p>
            </div>
            <div className="delievery-cost">
              <span>Стоимость доставки:</span>
              <p>
                от £27.00
                <img src="assets/images/icons-page1/icon-5.info.svg" alt="" />
              </p>
            </div>
            <div className="cost">
              <span>Итого:</span>
              <p>£41.99 </p>
            </div>
          </div>
          <div className="ticket">
            <img src="assets/images/icons-page1/icon-4.angle-down.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DelieveryTypes;
