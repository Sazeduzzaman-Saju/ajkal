import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
import "./Banner.css";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "../../../../public/Database/bannarData.json"
        );
        const data = response.data;
        setBannerData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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
        {loading ? (
          // Render skeleton loader only when data is loading
          <SwiperSlide>
            <Skeleton height={385} />
          </SwiperSlide>
        ) : (
          // Render actual data once it's loaded
          bannerData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="showcase">
                <img
                  className="fixed-img"
                  src={slide.imageSrc || <Skeleton />}
                  alt="Picture"
                />
                <div className="overlay">
                  <div className="container">
                    <h2 className="mb-0 fw-bold ">{slide.title || <Skeleton />}</h2>
                    <h1 className="mb-0 secondary-title">
                      {slide.subtitle || <Skeleton />}
                    </h1>
                    <p className="w-50 pt-5">{slide.content || <Skeleton />}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        )}

        <div className="autoplay-progress text-white" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle} stroke="#ffffff">
            <circle cx="24" cy="24" r="30"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
