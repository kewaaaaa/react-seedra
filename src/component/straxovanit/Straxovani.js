import React from "react";
import Page1Showcase3 from "../page1/page1Showcase3/Page1Showcase3";
import Question from "../Question/Question";
import "./style.scss";

const Straxovani = () => {
  const arr = [
    {
      title: "Дополнительное страxование ",
      amount: "5% от суммы на которую xотите застраxовать",
    },
    {
      title: "Почта России и ЕМС",
      amount: "Застраxовано по умолчанию на £50.00",
    },
    {
      title: "Мелкие пакеты",
      amount: "Застраxовано на £20.00",
    },
  ];
  const arr2 = [
    {
      title: "Многослойная пленка",
      description: "Дополнительная защита покупок",
      amount: "£3.99",
    },
    {
      title: "Упаковка в коробку с двойными стенками",
      description: "Надежно защищает от влаги",
      amount: "£4.99",
    },
    {
      title: "Наклейка “Хрупкий груз”",
      description: "Дополнительная защита покупок",
      amount: "£0.25",
    },
    {
      title: "Упаковка в пакет",
      description: "Надежно защищает от влаги",
      amount: "£1.99",
    },
    {
      title: "Наклейка “Обращаться с осторожностью”",
      description: "Дополнительная защита покупок",
      amount: "£0.25",
    },
  ];
  return (
    <>
      <Page1Showcase3 />
      <div className="straxov">
        <h1 className="title-h1">Страхование</h1>
        <div className="straxov__div">
          {arr.map((obj) => {
            return (
              <div className="box">
                <h1 className="h1">{obj.title}</h1>
                <h2 className="h2">{obj.amount}</h2>
              </div>
            );
          })}
        </div>
        <h1 className="title-h1">Дополнительная упаковка</h1>
        <div className="straxov__div1">
          {arr2.map((obj) => {
            return (
              <div className="box">
                <div className="text">
                  <h1 className="h1">{obj.title}</h1>
                  <p className="p">{obj.description}</p>
                </div>
                <h2 className="h2">{obj.amount}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Straxovani;
