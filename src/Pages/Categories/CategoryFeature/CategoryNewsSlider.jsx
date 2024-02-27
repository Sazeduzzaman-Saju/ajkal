import React, { useRef, useState } from "react";
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

export default function CategoryNewsSlider() {
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
      >
        <SwiperSlide style={{ padding: " 0px 4px" }} className="pb-4">
          <Link to={"/"} className="shadow-sm">
            <div className="card rounded-0 border-0 ">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid w-100 category-slider-img"
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2024-01%2Fc19e7e20-e49c-466c-84b0-da8cfcc20495%2Fdeath.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                    alt=""
                  />
                </div>
                <div className="p-2 feature-text-area">
                  <h4 className="pt-2">
                    একের পর এক গুন্ডাদের সঙ্গে লড়ছেন। এভাবেই আজ ‘ডার্ক জাস্টিস’
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"} className="shadow-sm">
            <div className="card rounded-0 border-0 shadow-sm ">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid w-100 category-slider-img"
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2024-01%2Fc19e7e20-e49c-466c-84b0-da8cfcc20495%2Fdeath.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                    alt=""
                  />
                </div>
                <div className="p-2 ">
                  <h4 className="pt-2">
                    একের পর এক গুন্ডাদের সঙ্গে লড়ছেন। এভাবেই আজ ‘ডার্ক জাস্টিস’
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"} className="shadow-sm">
            <div className="card rounded-0 border-0">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid w-100 category-slider-img"
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2024-01%2Fc19e7e20-e49c-466c-84b0-da8cfcc20495%2Fdeath.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                    alt=""
                  />
                </div>
                <div className="p-2 ">
                  <h4 className="pt-2">
                    একের পর এক গুন্ডাদের সঙ্গে লড়ছেন। এভাবেই আজ ‘ডার্ক জাস্টিস’
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"} className="shadow-sm">
            <div className="card rounded-0 border-0 shadow-sm ">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid w-100 category-slider-img"
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2024-01%2Fc19e7e20-e49c-466c-84b0-da8cfcc20495%2Fdeath.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                    alt=""
                  />
                </div>
                <div className="p-2 ">
                  <h4 className="pt-2">
                    একের পর এক গুন্ডাদের সঙ্গে লড়ছেন। এভাবেই আজ ‘ডার্ক জাস্টিস’
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"} className="shadow-sm">
            <div className="card rounded-0 border-0 shadow-sm ">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid w-100 category-slider-img"
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2024-01%2Fc19e7e20-e49c-466c-84b0-da8cfcc20495%2Fdeath.jpg?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                    alt=""
                  />
                </div>
                <div className="p-2 ">
                  <h4 className="pt-2">
                    একের পর এক গুন্ডাদের সঙ্গে লড়ছেন। এভাবেই আজ ‘ডার্ক জাস্টিস’
                  </h4>
                </div>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
