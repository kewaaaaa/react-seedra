import React from "react";
import s from "./homePageStyle.module.scss";
import FireIcon from "remixicon-react/FireFillIcon";
import Title from "../../components/title/Title";
import Products from "../../components/products/Products";
import CardClass from "../../components/cards/CardClass";

function HomePage() {
  return (
    <div className={s.home}>
      <div className="container">
        <div className={s.showcase1}>
          <h1>SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
          <p>
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className={s.showcase1__price}>
            <FireIcon color="#E55C5C" />
            <strong>$12.56</strong>
            <del>$15.56</del>
          </div>
          <div className={s.showcase1__btn}>
            <button>Add to card</button>
            <button className={s.button}>Discover</button>
          </div>
          <img src="assets/images/home_pic.png" alt="pic" />
        </div>
        <div className={s.showcase2}>
          <h1>We sell seeds </h1>
          <p>that always sprout and gardening supplies which never break</p>
        </div>
        <Title title="Our products." button="View all (12)" />
        <div className={s.prods}>
          <Products
            button1="ALL"
            button2="BUNDLESS"
            button3="HERBS"
            button4="VEGETABLES"
            button5="FRUITS"
            button6="SUPPLIES"
            button7="FLOWERS"
          />
        </div>
        <CardClass kolva={6} />
        <Title title="Our Blog." button="Go to our blog" />
        <div className={s.about}>
          <div className={s.about__txt}>
            <h1>Seedra helps to grow fast and efficiant</h1>
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George Be sure of
              our quality - the freshest batches of this season. Non-GMO,
              Heirloom - our seeds were tested and have the best germination
              ratings. <br />
              <br />
              Your easy growing experience is our guarantee Spinach commom
              culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
              risotto, and more <br /> <br />
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
          <img src="assets/images/about.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
