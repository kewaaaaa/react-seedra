import React from "react";
import "./tablebottom.scss";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { card1 } from "../../../public/assets/images/page1/page1_card1.png";

const tablebottom = () => {
  return (
    <div className="container">
      <h1 className="tb-h1">
        4 простых шага для ваших <br /> покупок в Великобритании{" "}
      </h1>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img
            className="tb-img"
            src="assets/images/page1/page1_card1.png"
          ></img>
          <h2 className="tb-h2">
            вы ВЫБИРАЕТЕ <br /> ТОВАР
          </h2>
          <p className="tb-p">
            в английском магазине, оплачиваете и <br /> указываете{" "}
            <span>адрес склада </span>
            OkeyPost
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img
            className="tb-img"
            src="assets/images/page1/page1_card2.png"
          ></img>
          <h2 className="tb-h2">
            ПОКУПКИ ПРИХОДЯТ <br /> НА СКЛАД
          </h2>
          <p className="tb-p">
            и появляются в вашем личном кабинете <br /> на нашем сайте
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img
            className="tb-img"
            src="assets/images/page1/page1_card3.png"
          ></img>
          <h2 className="tb-h2">
            ОТПРАВЛЯЕМ ИХ <br /> К ВАМ ДОМОЙ
          </h2>
          <p className="tb-p">
            в надежной упаковке, по выгодной <br /> цене и очень быстро
          </p>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <img
            className="tb-img"
            src="assets/images/page1/page1_card4.png"
          ></img>
          <h2 className="tb-h2">
            ЗАБИРАЕТЕ <br />
            свою ПОСЫЛКУ
          </h2>
          <p className="tb-p">
            в пункте выдачи, на почте <br /> или с курьером
          </p>
        </div>
      </div>
      <h3 className="tb-h3">
        Не хотите разбираться самостоятельно, наши мастера шопинга с радостью{" "}
        <br /> купят все товары за вас.
      </h3>
      <button className="tb-btn">Быстрая покупка</button>
    </div>
  );
};

export default tablebottom;
