import React from "react";
import "./style.scss";

const Pokupku = () => {
  const arr = [
    {
      title: "Быстрое оформление покупок в интернет-магазинах",
      description:
        "Вы присылаете ссылки, а оформлением заказов занимаются операторы Почтой.ком. Они сделают покупки за вас, проконтролируют доставку на склад и сообщат, когда всё будет готово.",
      amount:
        "5% от стоимости товаров минимум £7 для каждого магазина Но не менее £7 для каждого лота eBay",
    },
    {
      title: 'Фото товара по услуге "Покупка с операторами"',
      description:
        'Три фото выбранного вами товара, приобретенного по услуге "Полное сопровождение"',
      amount: "£2",
    },
  ];

  return (
    <>
      <div className="pokupka">
        <h1 className="title-h1">Покупки с операторами Okeypost.com</h1>
        <div className="pokupka__div1">
          {arr.map((obj) => {
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

export default Pokupku;
