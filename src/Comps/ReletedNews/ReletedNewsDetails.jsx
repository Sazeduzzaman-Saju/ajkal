import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SanitizedParagraph from "../SanitizedParagraph";
import BanglaTime from "../BanglaTime/BanglaDynamicTIme";
import SocialShareButtons from "../SocialShareButtons/SocialShareButtons";
import FacebookComments from "../FacebookComments/FacebookComments";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import toast from "react-hot-toast";
import NewsSidebar from "../NewsSidebar/NewsSidebar";
import { FacebookEmbed, YouTubeEmbed } from "react-social-media-embed";
import PostHeader from "../PostHeader/PostHeader";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";
import axios from "axios";

const RelatedNewsDetails = ({ newsItem, links }) => {
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

  const url = `https://ajkal.us/${newsItem.category_name}/${newsItem.id}`;
  const copyUrlToClipboard = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success("URL copied to clipboard:", url);
      })
      .catch((error) => {
        toast.error("Failed to copy URL: ", error);
      });
  };

  const [addvertisement, setAddvertisement] = useState([]);
  // Fetch advertisement data
  useEffect(() => {
    const addUrl = "https://backoffice.ajkal.us/ad/all";
    axios
      .get(addUrl)
      .then((response) => {
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
        console.error("Error fetching advertisement data:", error);
      });
  }, []);

  const renderAdvertisement = (adPosition) => {
    return addvertisement.map((data) => {
      if (data.status === 1 && data.ad_position === adPosition) {
        return (
          <Link to={data.ad_link} key={data.id} target="_blank">
            <LazyImageShortNews
              src={`https://ajkal.us/img/ad/${data.ad_banner}`}
              alt={data}
              className="img-fluid w-100 rounded-0"
              errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
              width="100%"
              height="auto"
              style={{ objectFit: "cover" }}
            />
          </Link>
        );
      }
      return null; // Return null if conditions are not met
    });
  };

  return (
    <>
      {/* Main Releted News Start */}
      <div className="col-lg-8 ps-0" id="printThis">
        <h5 className="fw-bold py-4 mb-0" style={{ color: "#ee2026" }}>
          {newsItem.category_name_bangla}
        </h5>
        <h1 className="main_color">{newsItem.news_title}</h1>
        <div className="pt-3" style={{ fontSize: `${fontSize}px` }}>
          <SanitizedParagraph htmlContent={newsItem.news_short_brief} />
        </div>
        <div className="mt-4">
          {/* Condition to check if newsItem.video_url is empty */}
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
          <div className="d-flex justify-content-between align-items-center py-5">
            <div className="news-author-box">
              <h4 className="main-color">{newsItem.news_author}</h4>
              <p>
                <BanglaTime time={newsItem.news_time.slice(10)}></BanglaTime>
              </p>
            </div>
            <div>
              <div className="social-author">
                <SocialShareButtons
                  title={newsItem.news_title}
                  image={`https://ajkal.us/images/${newsItem.title_img}`}
                  url={`https://ajkal.us/news/${newsItem.id}`}
                  description={newsItem.news_detail}
                  onIncreaseFontSize={increaseFontSize}
                  onDecreaseFontSize={decreaseFontSize}
                  onResetFontSize={resetFontSize}
                />
              </div>
            </div>
          </div>
          {/* News Details */}
          <p style={{ fontSize: `${fontSize}px` }}>
            <SanitizedParagraph
              htmlContent={newsItem.news_detail}
            ></SanitizedParagraph>
          </p>
        </div>
        <div className="row py-4 px-3">
          <div className="col-lg-12 pb-3 ps-0">
            <div className="d-flex align-items-center justify-content-between">
              <h5 className="secondary-color mb-0 ">সংবাদ টি শেয়ার করুন।</h5>
              <div className="social-share-buttons">
                <FacebookShareButton
                  title={newsItem.news_title}
                  type="article"
                  image={`https://ajkal.us/images/${newsItem.title_img}`} // Replace with actual image URL
                  url={`https://ajkal.us/${newsItem.category_name_bangla}/${newsItem.id}`} // Replace with actual page URL
                  card={`https://ajkal.us/images/${newsItem.title_img}`}
                  description={newsItem.news_detail}
                  increasefontsize={increaseFontSize}
                  decreasefontsize={decreaseFontSize}
                  resetfontsize={resetFontSize}
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
                  increasefontsize={increaseFontSize}
                  decreasefontsize={decreaseFontSize}
                  resetfontsize={resetFontSize}
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
                  increasefontsize={increaseFontSize}
                  decreasefontsize={decreaseFontSize}
                  resetfontsize={resetFontSize}
                >
                  <FaWhatsapp />
                </WhatsappShareButton>
                <button
                  type="button"
                  title={`${newsItem.news_title}.লিঙ্ক কপি করুন `}
                  className="react-share__ShareButton border-0"
                  onClick={copyUrlToClipboard} // Pass the function directly
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
                <Link to="#" className="pe-3 mb-2 d-inline-block" key={index}>
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
          <FacebookComments url={`https://ajkal.us/news/${newsItem.id}`} />
        </div>
      </div>
      {/* Main Releted News End */}
      <div className="col-lg-4">
        <NewsSidebar />
        <div className="">
          <PostHeader title="বিজ্ঞাপন কর্নার" />
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <FacebookEmbed
            url="https://www.facebook.com/photo/?fbid=979852766901979"
            width={418}
          />
        </div>
        <div
          className="pt-3 pb-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <YouTubeEmbed
            url="https://www.youtube.com/watch?v=JQkevGu41D4"
            width={418}
            height={365}
          />
        </div>
        <div className="mt-3">{renderAdvertisement("Sidebar1")}</div>
        <div className="mt-3">{renderAdvertisement("Sidebar2")}</div>
        <div className="mt-3">{renderAdvertisement("Sidebar3")}</div>
      </div>
    </>
  );
};

RelatedNewsDetails.propTypes = {
  newsItem: PropTypes.object.isRequired,
  links: PropTypes.array.isRequired,
};

export default RelatedNewsDetails;
