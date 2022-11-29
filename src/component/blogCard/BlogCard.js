import "./blogCard.scss";

const BlogCard = function (props) {
  return (
    <div className="blog-card-root">
      <div className="blog-card-img">
        <img src={props.imgURL} alt="img" />
      </div>
      <div className="blog-card-text">
        <p className="blog-card-text-p">{props.blogCardText}</p>
        <div className="blog-card-footer">
          <p>22.10.2021</p>
          <p>Читать: 8 минут</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
