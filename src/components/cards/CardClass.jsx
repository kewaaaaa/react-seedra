import React, { Component } from "react";
import axios from 'axios'
import s from "./cardStyle.module.scss";
import { Link } from "react-router-dom";

export class CardClass extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      const products = res.data;
      this.setState({ products });
    });
  }

  render() {
    return (
      <div className={s.cards}>
        {this.state.products.map((prod) =>
          prod.id <= this.props.kolva ? (
            <abrr
              title={prod.title + " - " + prod.description}
              className={s.card}
            >
              <Link key={prod.id} to={`/posts/${prod.id}`}>
                <img src={prod.image} alt="" />
                <h1 className={s.title}>{prod.title}</h1>
                <p className={s.price}>
                  <p>
                    {`$${Math.round(prod.price * 0.9) - 0.01}`}
                    <del>{`$${prod.price}`}</del>
                  </p>
                  <button>buy</button>
                </p>
              </Link>
            </abrr>
          ) : (
            <></>
          )
        )}
      </div>
    );
  }
}

export default CardClass;
