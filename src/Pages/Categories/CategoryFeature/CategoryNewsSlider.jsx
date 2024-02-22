import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

export default function CategoryNewsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link to={"/"} className="shadow-sm">
            <div className="card rounded-0 border-0 shadow-sm ">
              <div className="card-header p-0"></div>
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid w-100"
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
                    className="img-fluid w-100"
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
                    className="img-fluid w-100"
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
                    className="img-fluid w-100"
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
                    className="img-fluid w-100"
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
