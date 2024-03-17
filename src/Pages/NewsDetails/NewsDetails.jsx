import React, { useEffect, useState } from "react";
import "./NewsDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import ReletedNews from "../../Comps/ReletedNews/ReletedNews";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import BanglaDateTime from "../../Comps/BanglaTime/BanglaTime";
import BanglaTime from "../../Comps/BanglaTime/BanglaDynamicTIme";
import SocialShareButtons from "../../Comps/SocialShareButtons/SocialShareButtons";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const singleNewsDetails = singleNews.data[0];

  const [fontSize, setFontSize] = useState(16); // Initial font size

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 2);
  };

  const resetFontSize = () => {
    setFontSize(16); // Reset font size to initial value
  };

  return (
    <>
      <PageHelmet
        title={singleNewsDetails.news_title}
        type="article"
        image={`https://ajkal.goexpressus.com/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card={`https://ajkal.goexpressus.com/images/${singleNewsDetails.title_img}`}
        description={singleNewsDetails.news_detail} // Replace with appropriate description field from singleNewsDetails
      />
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-12">
            <div style={{ borderBottom: "1px solid var(--main)" }}>
              <h5 className="text-muted">
                বিস্তারিত নিউজ {singleNews.data.lenght}
              </h5>
            </div>
            <div className="d-flex justify-content-between  align-items-center pt-3">
              <h5 className="fw-bold" style={{ color: "#ee2026" }}>
                {singleNewsDetails.category_name_bangla}
              </h5>
              {/* <h5>{singleNewsDetails.news_time}</h5> */}
              <BanglaDateTime dateTime={singleNewsDetails.news_time} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8" id="printThis">
            <h1>{singleNewsDetails.news_title}</h1>
            <p>{singleNewsDetails.news_short_brief}</p>
            <div>
              <img
                src={`https://ajkal.goexpressus.com/images/${singleNewsDetails.title_img}`}
                className="rounded-2 img-fluid "
                alt=""
              />
              <p className="pt-2">{singleNewsDetails.news_title} | ফাইল ছবি</p>
              {/* Author */}
              <div className="d-flex justify-content-between  align-items-center py-5">
                <div>
                  <h4 className="main-color">
                    {singleNewsDetails.news_author}
                  </h4>
                  <p>
                    <BanglaTime
                      time={singleNewsDetails.news_time.slice(10)}
                    ></BanglaTime>
                  </p>
                </div>
                <div>
                  <div className="social-author">
                    <SocialShareButtons
                      title={singleNewsDetails.news_title}
                      type="article"
                      image={`https://ajkal.goexpressus.com/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
                      url={window.location.href} // Replace with actual page URL
                      card={`https://ajkal.goexpressus.com/images/${singleNewsDetails.title_img}`}
                      description={singleNewsDetails.news_detail}
                      increaseFontSize={increaseFontSize}
                      decreaseFontSize={decreaseFontSize}
                      resetFontSize={resetFontSize}
                    />
                  </div>
                </div>
              </div>
              {/* News Details */}
              {/* <p>{singleNewsDetails.news_detail.slice(0, 250)}</p> */}
              <p
                style={{ fontSize: `${fontSize}px` }}
                dangerouslySetInnerHTML={{
                  __html: singleNewsDetails.news_detail.slice(250),
                }}
              />
              <div className="pb-4 py-3">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/myN58Z7/Whats-App-Image-2024-02-18-at-22-16-04-10030316.jpg"
                  alt=""
                />
              </div>
              <p
                style={{ fontSize: `${fontSize}px` }}
                dangerouslySetInnerHTML={{
                  __html: singleNewsDetails.news_detail.slice(250),
                }}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div style={{ borderBottom: "1px solid var(--main)" }}>
              <h5 className="text-muted main-color">সর্বাধিক পঠিত</h5>
            </div>
            {/* Advertisement */}
            <div className="d-flex justify-content-center align-items-center pt-4 pb-3 ">
              <img
                src="https://i.ibb.co/j39LZmN/Give-Advertisement.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
            {/* Advertisement End*/}
            <div>
              {/* News Sidebar */}
              <NewsSidebar></NewsSidebar>
            </div>
            <div className="d-flex justify-content-center align-items-center pt-3 ">
              <img
                src="https://i.ibb.co/CHz52fX/goldenagehome.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div style={{ borderBottom: "1px solid var(--main)" }}>
            <h5 className="text-muted">
              <Link
                to={`/categories/${singleNewsDetails.category_id}`}
                className="text-muted"
              >
                <span className="fw-bold">
                  {singleNewsDetails.category_name_bangla}
                </span>{" "}
                নিয়ে আরও পড়ুন
              </Link>
            </h5>
          </div>
          <ReletedNews
            singleNewsDetails={singleNewsDetails.category_id}
          ></ReletedNews>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
