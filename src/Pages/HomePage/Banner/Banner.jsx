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
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const url = "https://news.goexpressus.com/breaking-news";
  useEffect(() => {
    const fetchData = () => {
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
          setLoading(false); // Set loading to false when data is fetched
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false on error
        });
    };

    // Fetch data after a delay of 2000 milliseconds (2 seconds)
    const delay = 2000;
    const timer = setTimeout(() => {
      fetchData();
    }, delay);

    // Clean up the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? ( // Show skeleton while loading
        <div className="skeleton-wrapper">
          <Skeleton height={500} />
        </div>
      ) : (
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
                <LazyLoadImage
                  alt={slide.news_title}
                  effect="blur"
                  loading="lazy"
                  src={`https://ajkal.goexpressus.com/images/${slide.title_img}`}
                />
                <div className="overlay">
                  <Link to={`/news/${slide.id}`} className="text-white">
                    <div className="container">
                      <h1 className="mb-0 fw-bold banner_title w-75">
                        {slide.news_title || (
                          <Skeleton count={3} />
                        )}
                      </h1>
                      <h2 className="mb-0 pt-2">
                        {slide.news_short_brief.slice(0, 97)}
                      </h2>
                      <p className="w-50 pt-5 bannger-description">
                        {slide.news_detail.slice(3, 150)}
                      </p>
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
      )}
    </>
  );
}
