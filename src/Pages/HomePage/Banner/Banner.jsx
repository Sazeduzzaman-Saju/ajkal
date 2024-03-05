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

export default function Banner() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const bannerData = [
    {
      id: "01",
      category: "বাংলাদেশ",
      imageSrc: "http://ajkalusa.nawazgroup.us/img/banner1.jpg",
      title: "বাংলা অক্ষরে লেখা জার্সি",
      subtitle: "পড়ে খেলবে বসুন্ধরা কিংস",
      content:
        "‘পুলিশ ও ভোক্তা অধিদপ্তর দিয়ে বাজার নিয়ন্ত্রণ সম্ভব নয় । দেশে ‘জমিদারতন্ত্র’ কায়েম করেছে সরকার : রিজভী দেশে ‘জমিদারতন্ত্র’ কায়েম করেছে সরকার : রিজভী",
    },
    {
      id: "02",
      category: "বাংলাদেশ",
      imageSrc: "http://ajkalusa.nawazgroup.us/img/banner2.jpg",
      title: "উন্নয়নমূলক কাজ করতে গেলে",
      subtitle: "দুর্নীতি হবেই : তাজুল ইসলাম",
      content:
        "‘কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্য গত এক দশকে রাশিয়ার সবচেয়ে উল্লেখযোগ্য বিরোধী নেতা আলেক্সাই নাভালনি আর্কটিক সার্কেলের ভেতরে কারাগার",
    },
    {
      id: "03",
      category: "বাংলাদেশ",
      imageSrc: "http://ajkalusa.nawazgroup.us/img/banner3.jpg",
      title: "মেডিক্যালে চান্স পেলেও দুশ্চিন্তার ভাজ বাবার কপালে",
      subtitle: "ছেলে মেডিক্যালে চান্স পেলেও আনন্দের বদলে দুশ্চিন্তার ভাজ",
      content:
        "‘মৌলভীবাজারে সিএনজির মুখোমুখি সংঘর্ষ, নিহত বড় জয়ে শেষ চারের লড়াই জমিয়ে তুলেছে খুলনা",
    },
    {
      id: "04",
      category: "বাংলাদেশ",
      imageSrc: "http://ajkalusa.nawazgroup.us/img/banner4.jpg",
      title: "মিয়ানমার থেকে কুমিল্লায় পাসপোর্ট করতে এসে",
      subtitle: "অচিরে দেশে গণতন্ত্র ও ভোটাধিকার পুনঃপ্রতিষ্ঠিত হবে",
      content:
        "‘৫ উইকেটে ৩২৬ রানে দ্বিতীয় দিন শুরু করা ভারত ১১৯ রান যোগ করে পরের ৫ উইকেট হারায়। স্বাগতিকদের ৪৪৫ রানে ‘ডলার সংকটে বিকল্প বিনিময় ব্যবস্থা গড়ে তুলতে হবে’",
    },
  ];

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
              <img className="fixed-img" src={slide.imageSrc} alt="Picture" />
              <div className="overlay">
                <div className="container">
                  <h1 className="mb-0 fw-bold ">{slide.title}</h1>
                  <h2 className="mb-0">{slide.subtitle}</h2>
                  <p className="w-50 pt-5">{slide.content}</p>
                </div>
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
