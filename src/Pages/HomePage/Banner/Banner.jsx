import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
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
        effect="fade" // Set the fade effect
        modules={[Autoplay, Pagination, EffectFade]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="showcase">
            <img className="fixed-img" src="../../../../public/image/banner1.jpg" alt="Picture"/>
            <div className="overlay">
              <div className="container">
                <h2 className="mb-0 fw-bold ">বাংলা অক্ষরে লেখা জার্সি</h2>
                <h1 className="mb-0 secondary-title">"পড়ে খেলবে বসুন্ধরা কিংস"</h1>
                <p className="w-50 pt-5">
                  ‘পুলিশ ও ভোক্তা অধিদপ্তর দিয়ে বাজার নিয়ন্ত্রণ সম্ভব নয় । দেশে
                  ‘জমিদারতন্ত্র’ কায়েম করেছে সরকার : রিজভী দেশে ‘জমিদারতন্ত্র’
                  কায়েম করেছে সরকার : রিজভী
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div className="autoplay-progress text-white" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} stroke="#ffffff">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
