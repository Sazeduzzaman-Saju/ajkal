import React, { useEffect, useState } from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import "./Epaper.css";
import { FacebookEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";
import EpaperGallary from "../../Comps/EpaperGallary/EpaperGallary";
import CalendarEngliash from "../../Comps/Calender/CalendarEnglish";
import Skeleton from "react-loading-skeleton";

const EPaper = () => {
  const [loading, setLoading] = useState(true);

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
        "https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/thumbs/2024-03-25_1.jpg",
      altText: "Image 1",
      title: "পৃষ্ঠা 1",
    },
    {
      link: "#",
      imageURL:
        "https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/thumbs/2024-03-25_2.jpg",
      altText: "Image 2",
      title: "পৃষ্ঠা 2",
    },
    {
      link: "#",
      imageURL:
        "https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/thumbs/2024-03-25_3.jpg",
      altText: "Image 3",
      title: "পৃষ্ঠা 3",
    },
    {
      link: "#",
      imageURL:
        "https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/thumbs/2024-03-25_4.jpg",
      altText: "Image 4",
      title: "পৃষ্ঠা 4",
    },
    {
      link: "#",
      imageURL:
        "https://www.ekalerkantho.com/assets/contents/2024/2024-03-25/thumbs/2024-03-25_5.jpg",
      altText: "Image 5",
      title: "পৃষ্ঠা 5",
    },
  ];

  const featuresData = [
    {
      title: "মরুতে বিশ্বকাপ",
      date: "শনিবার, ১৯ নভেম্বর, ২০২২",
      src: "https://www.ekalerkantho.com/assets/magazine/2024/2024-03-25/thumbs/2024-03-25_1.jpg",
    },
    {
      title: "মরুতে বিশ্বকাপ",
      date: "শনিবার, ১৯ নভেম্বর, ২০২২",
      src: "https://www.ekalerkantho.com/assets/magazine/2023/2023-06-24/thumbs/2023-06-24_1.jpg",
    },
    {
      title: "মরুতে বিশ্বকাপ",
      date: "শনিবার, ১৯ নভেম্বর, ২০২২",
      src: "https://www.ekalerkantho.com/assets/magazine/2023/2023-06-24/thumbs/2023-06-24_1.jpg",
    },
  ];
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
                  featuresData.map((image, index) => (
                    <div key={index}>
                      <Link to={"#"}>
                        <div className="card shadow-none border-0 mb-2">
                          <div className="card-body p-0">
                            <div className="py-2 px-3 text-black border text-center epaper-feature-box">
                              <p className="mb-0 text-white">{image.title}</p>
                              <p className="mb-0 text-white">{image.date}</p>
                            </div>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                              <img
                                className="img-fluid shadow-sm w-100"
                                src={image.src}
                                alt=""
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
