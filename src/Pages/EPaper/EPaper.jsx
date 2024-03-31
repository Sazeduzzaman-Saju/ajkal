import React, { useEffect, useState } from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import "./Epaper.css";
import { FacebookEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";
import EpaperGallary from "../../Comps/EpaperGallary/EpaperGallary";
import CalendarEngliash from "../../Comps/Calender/CalendarEnglish";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BanglaTimeAgo from "../../Comps/BanglaTime/BanglaTimeDiffrence";

const EPaper = () => {
  const [loading, setLoading] = useState(true);
  const [bannerData, setBannerData] = useState([]);
  const url = "https://news.goexpressus.com/breaking-news";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout if the component unmounts or the loading state changes
    return () => clearTimeout(timer);
  }, [loading]);

  const epaperData = [
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/1.jpg",
      altText: "Image 1",
      title: "পৃষ্ঠা 1",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/2.jpg",
      altText: "Image 2",
      title: "পৃষ্ঠা 2",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/3.jpg",
      altText: "Image 3",
      title: "পৃষ্ঠা 3",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/4.jpg",
      altText: "Image 4",
      title: "পৃষ্ঠা 4",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/5.jpg",
      altText: "Image 5",
      title: "পৃষ্ঠা 5",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/6.jpg",
      altText: "Image 6",
      title: "পৃষ্ঠা 6",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/7.jpg",
      altText: "Image 7",
      title: "পৃষ্ঠা 7",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/8.jpg",
      altText: "Image 8",
      title: "পৃষ্ঠা 8",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/9.jpg",
      altText: "Image 9",
      title: "পৃষ্ঠা 9",
    },
    {
      link: "#",
      imageURL: "https://ajkal.us/image/epaper/10.jpg",
      altText: "Image 10",
      title: "পৃষ্ঠা 10",
    },
  ];

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
  console.log(bannerData);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2 px-0 shadow-sm">
          <div className="">
            <div className="mt-2">
              <PostHeader title="ফিচারস" />
            </div>
            <p className="text-center fw-bold mb-0">আমাদের সাথে থাকুন।</p>
            <div
              className="my-2 pb-2"
              style={{ display: "flex", justifyContent: "center" }}
            >
              {loading ? ( // Render skeleton loader while loading
                <Skeleton height={250} width={305} />
              ) : (
                <FacebookEmbed
                  url="https://www.facebook.com/photo/?fbid=979852766901979"
                  width={305}
                />
              )}
            </div>
            <div>
              <div>
                {loading ? ( // Render skeleton loader while loading
                  <div>
                    <Skeleton height={250} />
                    <Skeleton height={25} width={250} count={2} />
                  </div>
                ) : (
                  bannerData.map((image, index) => (
                    <div key={index}>
                      <Link to={`/news/${image.id}`}>
                        <div className="card shadow-none border-0 mb-2">
                          <div className="card-body p-0">
                            <div className="py-2 px-3 text-black border text-center epaper-feature-box">
                              <p className="mb-0 text-white">
                                {image.news_title.slice(0, 20)}...
                              </p>
                              <p
                                className="mb-0 text-info"
                                style={{ fontSize: "10px" }}
                              >
                                <BanglaTimeAgo
                                  postTime={image.news_time}
                                ></BanglaTimeAgo>
                              </p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                              <LazyLoadImage
                                alt={image.news_title}
                                className="img-fluid shadow-sm w-100 pt-0"
                                effect="blur"
                                loading="lazy"
                                src={`https://ajkal.goexpressus.com/images/${image.title_img}`}
                              />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 px-0 pb-3">
          <EpaperGallary epaperData={epaperData}></EpaperGallary>
        </div>
        <div className="col-lg-2 px-0 shadow-sm">
          <div className="mt-2">
            <PostHeader title="সকল পাতা" />
          </div>
          <div>
            <div className="card border-0 shadow-sm epaper-scroll-bar">
              <div className="card-body epaper-all p-0">
                {loading ? (
                  // Render skeleton loading
                  <div className="skeleton-loading">
                    <div className="skeleton-image"></div>
                    <div className="skeleton-text"></div>
                  </div>
                ) : (
                  // Render data when not loading
                  epaperData.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="epaper-sidebar-img"
                    >
                      <img
                        className="img-fluid w-100"
                        src={item.imageURL}
                        alt={item.altText}
                      />
                      <p className="mb-0 text-center epaper-sidebar-title">
                        {item.title}
                      </p>
                    </a>
                  ))
                )}
              </div>
            </div>
            <div className="pb-2">
              <CalendarEngliash />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPaper;
