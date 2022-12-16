import React, { useState, useRef } from "react";

import style from "./navbar.module.scss";
import { NavLink } from "react-router-dom";
import InstIcon from "remixicon-react/InstagramFillIcon";
import FacebookIcon from "remixicon-react/FacebookCircleFillIcon";
import HeartIcon from "remixicon-react/HeartLineIcon";
import CartIcon from "remixicon-react/ShoppingCartLineIcon";
import SearchIcon from "remixicon-react/SearchLineIcon";
import BarsIcon from "remixicon-react/BarChartHorizontalLineIcon";
import AccorDatas from "../../components/accordion/Accordion";
import logo from "../logoPic/navLogo.png";

const Navbar = (props) => {
  const [state, setState] = useState(0);
  const gum = useRef();
  const nav = useRef();

  function tab(params) {
    if (state) {
      setState(0);
      gum.current.style.right = "-150%";
    } else {
      setState(1);
      gum.current.style.right = "0";
    }
  }
  return (
    <div ref={nav} className={style.navDiv}>
      <div className="container">
        <dir className={style.nav}>
          <div className={style.nav__logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <ul className={style.nav__list}>
            <li>
              <NavLink to="/all_prods">ALL PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT SEEDRA</NavLink>
            </li>
            <li>
              <NavLink to="/">OUR BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/">CONTACTS</NavLink>
            </li>
          </ul>
          <div className={style.nav__menuDiv}>
            <span className={style.nav__icon}>
              <NavLink to="/">
                <InstIcon color="#70737C" />
              </NavLink>
            </span>
            <span className={style.nav__icon}>
              <NavLink to="/">
                <FacebookIcon color="#70737C" />
              </NavLink>
            </span>
            <div className={style.nav__inpDiv}>
              <SearchIcon color="#70737C" />
              <input
                className={style.nav__inp}
                type="text"
                placeholder="Search"
              />
            </div>
            <span className={style.nav__icon}>
              <NavLink to="/">
                <HeartIcon color="#359740" />
              </NavLink>
            </span>
            <span className={style.nav__icon}>
              <NavLink to="/">
                <CartIcon color="#359740" />
              </NavLink>
            </span>
            <span className={style.nav__icon}>
              <button onClick={tab}>
                <BarsIcon color="#359740" />
              </button>
            </span>
          </div>
          <div ref={gum} className={style.nav__gam}>
            <div className={style.nav__inpDiv}>
              <SearchIcon color="#70737C" />
              <input
                className={style.nav__inp}
                type="text"
                placeholder="Search"
              />
            </div>
            <AccorDatas />
          </div>
        </dir>
      </div>
    </div>
  );
};

export default Navbar;
