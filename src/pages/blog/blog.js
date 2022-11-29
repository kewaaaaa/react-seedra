import React from "react";
import Question from "../../component/Question/Question";
import Sale from "../../component/sale-component/Sale";
import Cardblog from "./cardblog";
import "./blog.scss";

import BlogCard from "../../component/blogCard/BlogCard";

const blog = () => {
  return (
    <div className="container">
      <Sale />
      {/* bu map cardlar un edi */}
      {/* <div className='cardlar-blog'>
          {
           data.map((item)=>{
           return <Cardblog text={item.title} urlimg={item.img}/>
           })
          }
      </div> */}
      {/* bu map cardlar un edi  end */}

      {/* card un joy */}
      <Question />
    </div>
  );
};

export default blog;
