import React from "react";
import Delivery from "../../component/Delivery-section/Delivery";
import Section2 from "../../component/page1/section2/Section2";
import Page1Showcase3 from "../../component/page1/page1Showcase3/Page1Showcase3";

/*
  Components:
  Finished = 2
  Not finished = +4
*/

const Homepage = () => {
  return (
    <div className="homepage">
      <Delivery />
      <Section2 />
      <Page1Showcase3 />
    </div>
  );
};

export default Homepage;
