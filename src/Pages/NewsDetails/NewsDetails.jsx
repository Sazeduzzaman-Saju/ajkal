import React, { useEffect, useState } from "react";
import "./NewsDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import ReletedNews from "../../Comps/ReletedNews/ReletedNews";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import BanglaDateTime from "../../Comps/BanglaTime/BanglaTime";
import BanglaTime from "../../Comps/BanglaTime/BanglaDynamicTIme";
import SocialShareButtons from "../../Comps/SocialShareButtons/SocialShareButtons";
import { FaCopy } from "react-icons/fa";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";
import axios from "axios";
import { IoMdArrowDropright } from "react-icons/io";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FacebookEmbed, YouTubeEmbed } from "react-social-media-embed";
import SanitizedParagraph from "../../Comps/SanitizedParagraph";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import toast from "react-hot-toast";
import FacebookComments from "../../Comps/FacebookComments/FacebookComments";
import LazyImageShortNews from "../../Comps/LazyImage/LazyImageShortNews";
import VideoPlayer from "../../Comps/VideoPlayer/VideoPlayer";

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const singleNewsDetails = singleNews.data;
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
  // Copy News Url
  const url = `https://ajkal.us/${singleNewsDetails.category_name_bangla}/${singleNewsDetails.id}`;

  const copyUrlToClipboard = () => {
    // Create a temporary input element
    const input = document.createElement("input");
    input.setAttribute("value", url);
    document.body.appendChild(input);

    // Select the input value
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(input);

    // Optionally, provide feedback to the user
    toast.success("News URL copied : " + url);
  };
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
  return (
    <>
      <PageHelmet
        title={singleNewsDetails.news_title}
        type="article"
        image={`https://ajkal.us/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
        description={singleNewsDetails.news_detail} // Replace with appropriate description field from singleNewsDetails
      >
        {/* Additional Meta Tags */}
        <meta name="okeywords" content="news, article, updates" />
        <meta name="author" content="Your Name" />
        {/* Add more meta tags as needed */}
      </PageHelmet>

      <div className="container">
        <div className="row">
          <div className="col-lg-12 ps-0">
            <div
              className="d-flex justify-content-between  align-items-center py-3"
              style={{ borderBottom: "1px solid var(--main)" }}
            >
              <h5 className="text-muted">
                <span> প্রচ্ছদ </span> <IoMdArrowDropright />
                <Link
                  className="text-muted"
                  to={`/categories/${singleNewsDetails.category_id}`}
                >
                  {singleNewsDetails.category_name_bangla}
                </Link>{" "}
                <IoMdArrowDropright /> {singleNewsDetails.news_title}
              </h5>
              <BanglaDateTime dateTime={singleNewsDetails.news_time} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 ps-0" id="printThis">
            <h5 className="fw-bold py-4 mb-0" style={{ color: "#ee2026" }}>
              {singleNewsDetails.category_name_bangla}
            </h5>
            <h1 className="main_color">{singleNewsDetails.news_title}</h1>
            <div className="pt-3" style={{ fontSize: `${fontSize}px` }}>
              <SanitizedParagraph
                htmlContent={singleNewsDetails.news_short_brief}
              />
            </div>
            <div className="mt-4">
              {/* Condition to check if singleNewsDetails.video_url is empty */}
              {singleNewsDetails.video_url ? (
                <VideoPlayer
                  videoUrl={singleNewsDetails.video_url}
                  width="100%"
                  style={{ borderRadius: "5px" }}
                  height="500px"
                />
              ) : (
                <LazyImageShortNews
                  src={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
                  alt={singleNewsDetails.news_title}
                  className="rounded-2 img-fluid w-100"
                  errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                  style={{ objectFit: "cover" }}
                />
              )}
              <p className="pt-2" style={{ fontSize: `${fontSize}px` }}>
                {singleNewsDetails.news_title} | ফাইল ছবি
              </p>
              {/* Author */}
              <div className="d-flex justify-content-between  align-items-center py-5">
                <div className="news-author-box">
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
                      image={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
                      url={`https://ajkal.us/news/${singleNewsDetails.id}`}
                      description={singleNewsDetails.news_detail}
                      onIncreaseFontSize={increaseFontSize}
                      onDecreaseFontSize={decreaseFontSize}
                      onResetFontSize={resetFontSize}
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

              <div style={{ fontSize: `${fontSize}px` }}>
                <SanitizedParagraph
                  htmlContent={singleNewsDetails.news_detail}
                ></SanitizedParagraph>
              </div>
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
                        title={singleNewsDetails.news_title}
                        type="article"
                        image={`https://ajkal.us/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
                        url={`https://ajkal.us/${singleNewsDetails.category_name_bangla}/${singleNewsDetails.id}`} // Replace with actual page URL
                        card={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
                        description={singleNewsDetails.news_detail}
                        increaseFontSize={increaseFontSize}
                        decreaseFontSize={decreaseFontSize}
                        resetFontSize={resetFontSize}
                      >
                        <FaFacebook />
                      </FacebookShareButton>
                      <TwitterShareButton
                        title={singleNewsDetails.news_title}
                        type="article"
                        image={`https://ajkal.us/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
                        url={`https://ajkal.us/${singleNewsDetails.category_name_bangla}/${singleNewsDetails.id}`} // Replace with actual page URL
                        card={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
                        description={singleNewsDetails.news_detail}
                        increaseFontSize={increaseFontSize}
                        decreaseFontSize={decreaseFontSize}
                        resetFontSize={resetFontSize}
                      >
                        <FaTwitter />
                      </TwitterShareButton>
                      <WhatsappShareButton
                        title={singleNewsDetails.news_title}
                        type="article"
                        image={`https://ajkal.us/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
                        url={`https://ajkal.us/${singleNewsDetails.category_name_bangla}/${singleNewsDetails.id}`} // Replace with actual page URL
                        card={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
                        description={singleNewsDetails.news_detail}
                        increaseFontSize={increaseFontSize}
                        decreaseFontSize={decreaseFontSize}
                        resetFontSize={resetFontSize}
                      >
                        <FaWhatsapp />
                      </WhatsappShareButton>
                      <button
                        type="button"
                        title={`${singleNewsDetails.news_title}.লিঙ্ক কপি করুন `}
                        className="react-share__ShareButton border-0"
                        onClick={copyUrlToClipboard}
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

              <div>
                <FacebookComments
                  url={`https://ajkal.us/news/${singleNewsDetails.id}`}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div>
              {/* News Sidebar */}
              <NewsSidebar></NewsSidebar>
            </div>
            {/* Addvertisement Area Start */}
            <div className="mt-5">
              <PostHeader title="বিজ্ঞাপন কর্নার" />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <FacebookEmbed
                url="https://www.facebook.com/photo/?fbid=979852766901979"
                width={418}
              />
            </div>
            <div
              className="pt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <YouTubeEmbed
                url="https://www.youtube.com/watch?v=JQkevGu41D4"
                width={418}
                height={365}
              />
            </div>
            {/* Add Banner Start */}
            {/* Advertisement */}
            <div className="pt-3">
              {addvertisement.map(
                (data) =>
                  data.status === 1 &&
                  data.ad_position === "Sidebar3" && (
                    <Link to={data.ad_link} key={data.id} target="_blank">
                      <img
                        className="img-fluid w-100"
                        src={`https://ajkal.us/img/ad/${data.ad_banner}`}
                        alt={`https://ajkal.us/img/ad/${data.ad_banner}`}
                        onError={(e) => {
                          e.target.src =
                            "https://ajkal.us/image/settings/placeholder.jpg";
                        }}
                      />
                    </Link>
                  )
              )}
            </div>
          </div>
        </div>
        <div className="pt-5">
          <ReletedNews
            singleNewsDetails={singleNewsDetails.category_id}
          ></ReletedNews>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
