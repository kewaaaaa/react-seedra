import React from "react";
import "./style.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "./slidesData";
import slidesData from "./slidesData";

const Showcase = () => {
  return (
    <section className="showcase">
      <Swiper
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {slidesData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="slide-bg-img" src={slide.img} />
              <div className="slide-text">
                <h4 className="slide-text-title">{slide.title}</h4>
                <p className="slide-text-subtitle">{slide.subtitle}</p>
                <button className="slide-text-btn">{slide.button}</button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Showcase;
