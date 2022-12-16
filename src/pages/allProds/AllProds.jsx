import React from "react";
import AccorDatas from "../../components/accordion/Accordion";
import CardClass from "../../components/cards/CardClass";
import Products from "../../components/products/Products";
import s from "./allProdsStyle.module.scss";

function AllProds() {
  return (
    <div className={s.allProds}>
      <div className="container">
        <Products
          button1="ALL"
          button2="BUNDLESS"
          button3="HERBS"
          button4="VEGETABLES"
          button5="FRUITS"
          button6="SUPPLIES"
          button7="FLOWERS"
        />
        <div className={s.allProds__box}>
            <div className={s.allProds__left}>
                <AccorDatas />
                <input type="range"  id="" />
                <AccorDatas />
            </div>
            <div className={s.right}>
                <CardClass kolva={9} />
            </div>
        </div>
      </div>
    </div>
  );
}

export default AllProds;
