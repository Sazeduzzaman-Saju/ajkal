import React, { useEffect, useState } from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
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

  const data = [
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428698148_995436498676939_3615129788480048429_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CP0P9r9QIboAX-1Tc4i&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfBMHVsAXC64Y6T7s8D7kukn8b3BeZ1ERcosqRZJocCM5Q&oe=66073876",
      altText: "Image 1",
      title: "পৃষ্ঠা 1",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428697346_995436558676933_5623284481187764986_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DLM1wRnuMpIAX8GzLge&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfB-xFdHtJHgjePRwF7AP-TaWy-2AYXxnWgta5B2VqDL5Q&oe=66078848",
      altText: "Image 2",
      title: "পৃষ্ঠা 2",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428703522_995436608676928_3434650837610885842_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Wu20eQ0xBrQAX9MIG89&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfAch-bfMAF0ReV9-CZB5kwjTZP5pWNzwHSPAp6E2iotrQ&oe=66071799",
      altText: "Image 3",
      title: "পৃষ্ঠা 3",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428701116_995437158676873_2878985723501366656_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BejiYrLsQA0AX-Ny8OX&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfDe92rLfYkKLt_oZwDkDzDYcGnHTENK-p3tZaPx2XsE6g&oe=66084DF6",
      altText: "Image 4",
      title: "পৃষ্ঠা 4",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428712828_995436652010257_8772320100815178075_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=N-uLDwEByuEAX_xi_YX&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfA7T9Dt305xHGM4Xlm1dHKdXnGEZgzlN70tq4IQ5PAs1g&oe=660873F4",
      altText: "Image 5",
      title: "পৃষ্ঠা 5",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428697515_995436392010283_7777513234782130527_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Po2p7BHC_PgAX9Voshc&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCL7E6ZG9-jC5yro6RT3QOwOyvimnw4TX6BSX1T5znN2g&oe=6607FD06",
      altText: "Image 6",
      title: "পৃষ্ঠা 6",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428712491_995436655343590_9123864372195212787_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=0GxZDPoI2mEAX8Fr_cr&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCSe2FooRbuTKPEn957y6zamPcGWgdS_QdDz4lk6E27gA&oe=66078D90",
      altText: "Image 7",
      title: "পৃষ্ঠা 7",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428711546_995436445343611_9160423908191451581_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Giuz0SO7RVQAX8Fyw6D&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfD8HyBEHm11I1df_4ojBXfb9ycZUQza2nfnl2vn7xBkmQ&oe=66082F21",
      altText: "Image 8",
      title: "পৃষ্ঠা 8",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428709390_995436532010269_4502184587479259184_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=DsfIMpqdzI4AX_bALb8&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfCjFdgNtJvEXos9aCV8UZDKbhQlxh8EdfaBJllba8ruPg&oe=660752BD",
      altText: "Image 9",
      title: "পৃষ্ঠা 9",
    },
    {
      link: "#",
      imageURL:
        "https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/428695044_995436542010268_6076254141111008576_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=PUCgikpwyesAX-ELiZp&_nc_pt=1&_nc_ht=scontent.fdac99-1.fna&oh=00_AfDdZqnTRT1bn_33PICmUvKqw_wxwdb1fUDKDi3H33LZtA&oe=6608A135",
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
          <EpaperGallary></EpaperGallary>
          <div>
            <div className="d-flex justify-content-between align-items-center pt-2 px-5">
              <button className="epaper-next">
                <div className=" d-flex align-content-center ">
                  <p className="mb-0">
                    <FaArrowLeftLong className="pe-2 mb-0 pb-0" size={25} />{" "}
                  </p>
                  <p className="mb-0">আগের পাতা</p>
                </div>
              </button>
              <p className="mb-0">আগে ও পরের পাতা দেখতে ক্লিক করুন।</p>
              <button className="epaper-next">
                <div className="d-flex align-content-center ">
                  <p className="mb-0">পরের পাতা</p>
                  <p className="mb-0">
                    <FaArrowRightLong className="ps-2 mb-0 pb-0" size={25} />
                  </p>
                </div>
              </button>
            </div>
          </div>
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
                  data.map((item, index) => (
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
