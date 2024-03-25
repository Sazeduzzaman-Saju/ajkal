import React, { useEffect, useState } from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FacebookEmbed } from "react-social-media-embed";
import { Link } from "react-router-dom";
import axios from "axios";
import EpaperGallary from "../../Comps/EpaperGallary/EpaperGallary";
import CalendarEngliash from "../../Comps/Calender/CalendarEnglish";

const EPaper = () => {
  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://news.goexpressus.com/ad/all";
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAddvertisement(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAddvertisement(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // const images = [
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_19_b/256px/289px/102px/202px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_14_b/366px/316px/281px/174px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_17_b/656px/291px/201px/199px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_17_b/656px/291px/201px/199px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_21_b/458px/490px/190px/138px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_22_b/255px/487px/105px/89px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_21_b/458px/490px/190px/138px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_15_b/255px/488px/99px/146px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_25_b/557px/634px/296px/254px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_25_b/557px/634px/296px/354px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_25_b/557px/634px/296px/180px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_26_b/260px/723px/293px/363px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_23_b/258px/631px/299px/91px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_23_b/258px/631px/299px/91px",
  //   "https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_20_b/364px/489px/93px/139px",
  // ];
  const images = [];
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
      src: "https://www.ekalerkantho.com/assets/magazine/2024/2024-03-25/thumbs/2024-03-25_1.jpg",
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
        <div className="col-lg-3">
          <div className="shadow-sm">
            <div className="mt-2">
              <PostHeader title="ফিচারস" />
            </div>
            <div>
              <CalendarEngliash />
            </div>
            <div
              className="my-2 "
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FacebookEmbed
                url="https://www.facebook.com/photo/?fbid=979852766901979"
                width={305}
              />
            </div>
            <div>
              <div>
                {featuresData.map((image, index) => (
                  <div key={index}>
                    <div className="py-2 px-3 text-black border text-center bg-light">
                      <p className="mb-0">{image.title}</p>
                      <p className="mb-0">{image.date}</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                      <img className="img-fluid" src={image.src} alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <img
            className="img-fluid"
            src="https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_18_b/257px/146px/596px/141px"
            alt=""
          />
          <div>
            <EpaperGallary images={images}></EpaperGallary>
          </div>
          <img
            className="img-fluid"
            src="https://www.ekalerkantho.com/image/find/2024/2024-03-25/news_2024-03-25_1_18_b/257px/146px/596px/141px"
            alt=""
          />
        </div>
        <div className="col-lg-2 shadow-sm px-0">
          <div className="mt-2">
            <PostHeader title="বিজ্ঞাপন কর্নার" />
          </div>
          {/* Add Banner Start */}
          {addvertisement.map((data) =>
            // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
            data.ad_category_id === "3" && data.status === "1" ? (
              <div className="mb-2" key={data.id}>
                <Link to={data.ad_link}>
                  <img
                    className="img-fluid side-add"
                    src={`https://ajkal.goexpressus.com/images/${data.ad_banner}`}
                    alt=""
                  />
                </Link>
              </div>
            ) : null
          )}

          {/* Add Banner End */}
          <div className="">
            <div>
              <div id="fb-root" />
              <div
                className="fb-page"
                data-href="https://www.facebook.com/weeklyajkal/"
                data-tabs="timeline"
                data-width
                data-height={400}
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote
                  cite="https://www.facebook.com/weeklyajkal/"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/weeklyajkal/">
                    Weekly Ajkal
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EPaper;
