import "./EarnMoney.scss";
import { data2 } from "./earnData";

function EarnMoney(parse) {
  return (
    <div className="EarnMoney">
      <h3 className="EarnMoney__header">
        Зарабатывать с нами — проще простого:
      </h3>
      <div className="howToEarn">
        {data2.map((el) => {
          return (
            <div className="card">
              <img className="card__img" src={el.img} alt={el.title} />
              <h4 className="card__title">{el.title}</h4>
              <p className="card__text">{el.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EarnMoney;
