import React from "react";
import Delivery from "../../component/Delivery-section/Delivery";
import Section2 from "../../component/page1/section2/Section2";
import Page2showcae1 from "../../component/page2_showcase1/P2sh1";
import Sale from "../../component/sale-component/Sale";
import Quvondiq from "../../component/HomeOtziv/Quvondiq";
import Page1Showcase3 from "../../component/page1/page1Showcase3/Page1Showcase3";
import Delievery_types from "../../component/Varianti_dostavki/Varianti-dostavki";

const Change = () => {
  return (
    <div>
      <Page1Showcase3 />
      <Quvondiq />
      <Delivery />
      <Section2 />
      <Page2showcae1 />
      <Sale />
      <Delievery_types />
    </div>
  );
};

export default Change;
