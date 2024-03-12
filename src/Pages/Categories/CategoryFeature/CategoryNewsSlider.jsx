import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import axios from "axios";

export default function CategoryNewsSlider() {
  const [categoryNews, setCategoryNews] = useState([]);
  const url = "https://news.goexpressus.com/breaking-news";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setCategoryNews(response.data.slice(0, 10));
        } else if (Array.isArray(response.data.data)) {
          setCategoryNews(response.data.data.slice(0, 12));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        style={{borderRadius: '10px'}}
      >
        {categoryNews.map((data) => (
          <SwiperSlide
            style={{ padding: " 0px 4px" }}
            className="pb-0"
            key={data.id}
          >
            <Link to={`/news/${data.id}`} className="shadow-sm">
              <div className="card rounded-0 border-0 ">
                <div className="card-header p-0"></div>
                <div className="card-body p-0">
                  <div>
                    <img
                      className="img-fluid w-100 category-slider-img"
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt=""
                    />
                  </div>
                  <div className="p-2 feature-text-area">
                    <h4 className="pt-2">{data.news_title.slice(0, 50)}</h4>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
