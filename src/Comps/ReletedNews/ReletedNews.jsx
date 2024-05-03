import React, { useEffect, useState } from "react";
import "./ReletedNews.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";
import BanglaDateTime from "../BanglaTime/BanglaTime";
import FacebookComments from "../FacebookComments/FacebookComments";
import SanitizedParagraph from "../SanitizedParagraph";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";
import SocialShareButtons from "../SocialShareButtons/SocialShareButtons";
import toast from "react-hot-toast";
import BanglaTime from "../BanglaTime/BanglaDynamicTIme";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const RelatedNews = ({ singleNewsDetails }) => {
  const [relatedNews, setRelatedNews] = useState([]);
  const urlData = `https://backoffice.ajkal.us/category-news/${singleNewsDetails}`;

  useEffect(() => {
    axios
      .get(urlData)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRelatedNews(response.data); // Remove slice(0, 1) if you expect multiple items
        } else if (Array.isArray(response.data.data)) {
          setRelatedNews(response.data.data); // Remove slice(0, 1) if you expect multiple items
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
  }, [urlData]);

  // Copy News Url

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

  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";
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
  const links = [
    { label: "বাংলাদেশ", url: "#" },
    { label: "বিরোধী ", url: "#" },
    { label: "সংবাদ", url: "#" },
    { label: "নির্দেশনা ", url: "#" },
    { label: "নেতা", url: "#" },
    { label: "যুক্তরাষ্ট্র", url: "#" },
    { label: "নিউইয়র্ক", url: "#" },
    { label: "সারা বিশ্ব", url: "#" },
    { label: "বিনোদন", url: "#" },
    { label: "কারাগার", url: "#" },
    { label: "প্রবাস", url: "#" },
    { label: "লাইফস্টাইল", url: "#" },
    { label: "খেলা", url: "#" },
    { label: "সারা বাংলা", url: "#" },
    { label: "সাপ্তাহিক", url: "#" },
    // Add more link objects as needed
  ];


// Copy News Url

  return (
    <div className="container my-4">
      {relatedNews.map((newsItem, index) => (
        <div className="row" key={index}>
          <div className="col-lg-12 ps-0">
            <div
              className="d-flex justify-content-between align-items-center py-3"
              style={{ borderBottom: "1px solid var(--main)" }}
            >
              <h5 className="text-muted">
                <span> প্রচ্ছদ </span> <IoMdArrowDropright />
                <Link
                  className="text-muted"
                  to={`/categories/${newsItem.category_id}`}
                >
                  {newsItem.category_name_bangla}
                </Link>{" "}
                <IoMdArrowDropright /> {newsItem.news_title}
              </h5>
              {/* Assuming BanglaDateTime is another component */}
              <BanglaDateTime dateTime={newsItem.news_time} />
            </div>
          </div>
          <div>
            <div className="col-lg-8 ps-0" id="printThis">
              <h5 className="fw-bold py-4 mb-0" style={{ color: "#ee2026" }}>
                {newsItem.category_name_bangla}
              </h5>
              <h1 className="main_color">{newsItem.news_title}</h1>
              <p className="pt-3" style={{ fontSize: `${fontSize}px` }}>
                <SanitizedParagraph htmlContent={newsItem.news_short_brief} />
              </p>
              <div className="mt-4">
                {/* Condition to check if singleNewsDetails.video_url is empty */}
                {newsItem.video_url ? (
                  <iframe
                    width="100%"
                    height="500"
                    style={{ borderRadius: "5px" }}
                    src={`https://www.youtube.com/embed/${newsItem.video_url}`}
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <img
                    src={`https://ajkal.us/images/${newsItem.title_img}`}
                    className="rounded-2 img-fluid w-100"
                    alt=""
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                )}
                <p className="pt-2" style={{ fontSize: `${fontSize}px` }}>
                  {newsItem.news_title} | ফাইল ছবি
                </p>
                {/* Author */}
                <div className="d-flex justify-content-between  align-items-center py-5">
                  <div className="news-author-box">
                    <h4 className="main-color">{newsItem.news_author}</h4>
                    <p>
                      <BanglaTime
                        time={newsItem.news_time.slice(10)}
                      ></BanglaTime>
                    </p>
                  </div>
                  <div>
                    <div className="social-author">
                      <SocialShareButtons
                        title={newsItem.news_title}
                        type="article"
                        image={`https://ajkal.us/images/${newsItem.title_img}`} // Replace with actual image URL
                        url={`https://ajkal.us/news/${newsItem.id}`} // Replace with actual page URL
                        card={`https://ajkal.us/images/${newsItem.title_img}`}
                        description={newsItem.news_detail}
                        increaseFontSize={increaseFontSize}
                        decreaseFontSize={decreaseFontSize}
                        resetFontSize={resetFontSize}
                      />
                    </div>
                  </div>
                </div>
                {/* News Details */}
                <div className="pb-4 py-3">
                  {addvertisement.map((data) =>
                    // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
                    data.ad_category_id === "4" && data.status === "1" ? (
                      <Link to={data.ad_link} key={data.id}>
                        <LazyImageShortNews
                          src={`https://ajkal.us/images/${data.title_img}`}
                          alt={data.news_title}
                          className="img-fluid"
                          errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                          width="100%"
                          height="auto"
                          style={{ objectFit: "cover" }}
                        />
                      </Link>
                    ) : null
                  )}
                </div>
                <p style={{ fontSize: `${fontSize}px` }}>
                  <SanitizedParagraph
                    htmlContent={newsItem.news_detail}
                  ></SanitizedParagraph>
                </p>
              </div>
              <div>
                <div className="row py-4 px-3">
                  <div className="col-lg-12 pb-3 ps-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <h5 className="secondary-color mb-0 ">
                        সংবাদ টি শেয়ার করুন।
                      </h5>
                      <div className="social-share-buttons">
                        <FacebookShareButton
                          title={newsItem.news_title}
                          type="article"
                          image={`https://ajkal.us/images/${newsItem.title_img}`} // Replace with actual image URL
                          url={`https://ajkal.us/${newsItem.category_name_bangla}/${newsItem.id}`} // Replace with actual page URL
                          card={`https://ajkal.us/images/${newsItem.title_img}`}
                          description={newsItem.news_detail}
                          increaseFontSize={increaseFontSize}
                          decreaseFontSize={decreaseFontSize}
                          resetFontSize={resetFontSize}
                        >
                          <FaFacebook />
                        </FacebookShareButton>
                        <TwitterShareButton
                          title={newsItem.news_title}
                          type="article"
                          image={`https://ajkal.us/images/${newsItem.title_img}`} // Replace with actual image URL
                          url={`https://ajkal.us/${newsItem.category_name_bangla}/${newsItem.id}`} // Replace with actual page URL
                          card={`https://ajkal.us/images/${newsItem.title_img}`}
                          description={newsItem.news_detail}
                          increaseFontSize={increaseFontSize}
                          decreaseFontSize={decreaseFontSize}
                          resetFontSize={resetFontSize}
                        >
                          <FaTwitter />
                        </TwitterShareButton>
                        <WhatsappShareButton
                          title={newsItem.news_title}
                          type="article"
                          image={`https://ajkal.us/images/${newsItem.title_img}`} // Replace with actual image URL
                          url={`https://ajkal.us/${newsItem.category_name_bangla}/${newsItem.id}`} // Replace with actual page URL
                          card={`https://ajkal.us/images/${newsItem.title_img}`}
                          description={newsItem.news_detail}
                          increaseFontSize={increaseFontSize}
                          decreaseFontSize={decreaseFontSize}
                          resetFontSize={resetFontSize}
                        >
                          <FaWhatsapp />
                        </WhatsappShareButton>
                        <button
                          type="button"
                          title={`${newsItem.news_title}.লিঙ্ক কপি করুন `}
                          className="react-share__ShareButton border-0"
                          onClick={() => {
                            const url = `https://ajkal.us/${newsItem.category_name}/${newsItem.id}`;
                            copyUrlToClipboard(url);
                          }}
                        >
                          <FaCopy />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* News Details Tags */}
                  <div className="col-lg-12 px-0">
                    <div>
                      {links.map((link, index) => (
                        <Link
                          to="#"
                          className="pe-3 mb-2 d-inline-block"
                          key={index}
                        >
                          <span
                            tabIndex={0}
                            className="v-chip v-chip--clickable theme--light v-size--default tags-button"
                          >
                            <span className="v-chip__content">
                              <span>{link.label}</span>
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  {/* News Details Tags end*/}
                </div>
                <div className="">
                  <FacebookComments
                    url={`https://ajkal.us/news/${newsItem.id}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Releted News Show */}
      <div className="row"></div>
    </div>
  );
};

export default RelatedNews;
