import React from "react";
import Question from "../../component/Question/Question";
import Sale from "../../component/sale-component/Sale";
import Cardblog from "../../component/blogCard/BlogCard"
import "./blog.scss";
import dataBlog from "../../component/blogCard/data.json"
import BlogCard from "../../component/blogCard/BlogCard";

const blog = () => {
  return (
    <div className="container">
      <Sale />
      <div className="cardlar-blog">
        {
          dataBlog.map((item)=>{
            return <BlogCard imgURL={item.imgURL} blogCardText={item.title}/>
          })

        }
      </div>
      <Question />
    </div>
  );
};

export default blog;
