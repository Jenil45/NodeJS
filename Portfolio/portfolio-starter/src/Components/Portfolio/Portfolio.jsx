import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// images
import sidebar from "../../img/sidebar.png";
import ecommerce from "../../img/ecommerce.png";
import hoc from "../../img/hoc.png";
import musicapp from "../../img/musicapp.png";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="portfolio-slider"
      >
        <SwiperSlide className="swiperslide">
          <img src={sidebar} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={ecommerce} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={hoc} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={musicapp} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={sidebar} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={ecommerce} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={hoc} />
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <img src={musicapp} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
