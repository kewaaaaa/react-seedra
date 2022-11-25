import React from "react";
import "./page1.scss";
import Showcase from "../../component/Delivery-section/Delivery";
import Section2 from "../../component/page1/section2/Section2";
import Delievery_types from "../../component/Varianti_dostavki/Varianti-dostavki";
import Steps from "../../component/table-bottom/tablebottom";
import Page1Showcase3 from "../../component/page1/page1Showcase3/Page1Showcase3";
import ClientSection from "../../component/ClientsSections/ClientSectionP";
import Feedbacks from "../../component/HomeOtziv/Quvondiq";

const Homepage = () => {
  return (
    <div className="homepage">
      <Showcase />
      <Section2 />
      <Delievery_types />
      <Steps />
      <Page1Showcase3 />
      <ClientSection />
      <Feedbacks />
    </div>
  );
};

export default Homepage;
