import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "react-loading-skeleton/dist/skeleton.css";
import "./Banner.css";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };


  const url = "https://news.goexpressus.com/breaking-news";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBannerData(response.data.slice(0, 10));
        } else if (Array.isArray(response.data.data)) {
          setBannerData(response.data.data.slice(0, 12));
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
console.log(bannerData)
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        effect="fade"
        modules={[Autoplay, Pagination, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {bannerData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="showcase">
              <img className="fixed-img" src={slide.title_img} alt="Picture" />
              <div className="overlay">
                <Link to={`/news/${slide.id}`} className="text-white">
                  <div className="container">
                    <h1 className="mb-0 fw-bold ">{slide.news_title}</h1>
                    <h2 className="mb-0 pt-2">{slide.news_short_brief.slice(0,100)}</h2>
                    <p className="w-50 pt-5">{slide.news_detail.slice(0, 150)}</p>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="autoplay-progress text-white" slot="container-end">
          <svg viewBox="0 0 60 60" ref={progressCircle} stroke="#ffffff">
            <circle cx="24" cy="24" r="30"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
