import { useParams } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import s from "../../components/cards/cardStyle.module.scss";


function Func() {
  const { id } = useParams();
  const [prod, setState] = useState(null);

  axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
    const data = res.data;
    setState({ data });
  });
  return (
    <div className="container">
      <div className={s.cardSingle}>
        <abrr
          title={prod?.data?.title + " - " + prod?.data?.description}
        >
          <img src={prod?.data?.image} alt="" />
          <h1 className={s.title}>{prod?.data?.title}</h1>
          <h2>{prod?.data?.description}</h2>
          <p className={s.price}>
            <p>
              {Math.round(prod?.data?.price * 0.9) - 0.01}
              <del>{prod?.data?.price}</del>
            </p>
            <button>buy</button>
          </p>
        </abrr>
      </div>

    </div>
  );

}
export default Func;
