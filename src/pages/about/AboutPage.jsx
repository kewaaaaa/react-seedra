import React from "react";
import DatasAbout from "../../components/accordion/DatasAbout";
import CardClass from "../../components/cards/CardClass";
import Title from "../../components/title/Title";
import s from "./aboutPStyle.module.scss";

function AboutPage() {
  return (
    <div className={s.aboutPage}>
      <div className="container">
        <div className={s.home}>
          <div className={s.home__box}>
            <div className={s.home__left}>
              <img src="assets/images/aboutPageHome.png" alt="" />
            </div>
            <div className={s.home__right}>
              <h1>
                SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
                Planting
              </h1>
              <button className={s.btn}>AVAILABLE</button>
              <button>VEGETABLES</button>
              <img src="assets/images/aboutPageLeft.png" alt="" />
            </div>
          </div>
        </div>
        <Title title="Product information" />
        <div className={s.info}>
          <ul className={s.info__list}>
            <li>
              EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
              professional instructions created by PhD Helga George
            </li>
            <li>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings. Your easy growing experience is our guarantee
            </li>
            <li>
              Cilantro common culinary uses: salsa, guacamole, pesto, salads,
              chutney, baked breads, pad thai, pico de gallo, rice, grilled
              shrimp skewers, falafel, and more
            </li>
            <li>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </li>
            <li>
              SEEDRA customer service - please contact us directly through
              Amazon with any questions or concerns about our products. We care
              about each customer and do our best to provide you with 100%
              satisfaction
            </li>
          </ul>
          <div className={s.info__table}>
            <p>
              Package Dimensions
              <span>5.51 x 3.5 x 0.35 inches</span>
            </p>
            <p>
              Item Weight
              <span>0.317 ounces</span>
            </p>
            <p>
              ASIN
              <span>B08Z3HN5MP</span>
            </p>
          </div>
        </div>
        <Title title="Frequently asked questions." />
        <div className={s.faq}>
          <DatasAbout />
        </div>
        <Title title="Related products" />
        <CardClass kolva={3} />
      </div>
    </div>
  );
}

export default AboutPage;
