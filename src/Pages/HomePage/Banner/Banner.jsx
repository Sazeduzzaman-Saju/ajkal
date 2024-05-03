import React, { useState, useEffect } from "react";
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
import Skeleton from "react-loading-skeleton";
import SanitizedParagraph from "../../../Comps/SanitizedParagraph";
import LazyImageBanner from "../../../Comps/LazyImage/LazyImageBanner";

export default function Banner() {
  const [bannerData, setBannerData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://backoffice.ajkal.us/breaking-news";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (Array.isArray(response.data)) {
          setBannerData(response.data.slice(0, 10));
        } else if (Array.isArray(response.data.data)) {
          setBannerData(response.data.data.slice(0, 12));
        } else {
          console.error("Invalid data structure in API response:", response.data);
        }
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchData();
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
          pagination={false} // Set pagination to false
          navigation={false}
          effect="fade" // Add fade effect for transition
          modules={[Autoplay, Pagination, EffectFade]}
          className="mySwiper"
        >
          {bannerData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="showcase">
                <LazyImageBanner
                  src={`https://ajkal.us/img/news/${slide.title_img}`}
                  alt={slide.news_title}
                  className="rounded-0 custom-class" // You can add additional classes if needed
                  errorSrc="https://ajkal.us/image/settings/placeholder-banner.jpg" // Pass the path of the error image
                />
                <div className="overlay">
                  <Link
                    to={`/${slide.category_name_bangla}/${slide.id}`}
                    className="text-white"
                  >
                    <div className="container">
                      <h1 className="mb-0 fw-bold banner_title">
                        {slide.news_title || <Skeleton count={3} />}
                      </h1>
                      <div className="mb-0 pt-2 banner-description">
                        <SanitizedParagraph
                          htmlContent={slide.news_short_brief
                            .split(" ")
                            .slice(0, 15)
                            .join(" ")}
                        ></SanitizedParagraph>
                      </div>
                      <div style={{ fontSize: "14px", width: "50%" }}>
                        <SanitizedParagraph
                          htmlContent={slide.news_detail
                            .split(" ")
                            .slice(15, 40)
                            .join(" ")}
                        ></SanitizedParagraph>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}
