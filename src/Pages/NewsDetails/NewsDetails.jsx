import React, { useEffect, useState } from "react";
import "./NewsDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import ReletedNews from "../../Comps/ReletedNews/ReletedNews";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import BanglaDateTime from "../../Comps/BanglaTime/BanglaTime";
import BanglaTime from "../../Comps/BanglaTime/BanglaDynamicTIme";
import SocialShareButtons from "../../Comps/SocialShareButtons/SocialShareButtons";
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

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const singleNewsDetails = singleNews.data;
  console.log("asdasdasd", singleNewsDetails);
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

  const slicedText2 = singleNewsDetails.news_detail
    .split(/\s+/)
    .slice(200)
    .join(" "); // Split by whitespace, slice the array, then join it back into a string

  return (
    <>
      <PageHelmet
        title={singleNewsDetails.news_title}
        type="article"
        image={`https://ajkal.us/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
        description={singleNewsDetails.news_detail} // Replace with appropriate description field from singleNewsDetails
      />
      <div className="container">
        <div className="row py-4">
          <div className="col-lg-12">
            <div style={{ borderBottom: "1px solid var(--main)" }}>
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
            <h1 className="main_color">{singleNewsDetails.news_title}</h1>
            <p>{singleNewsDetails.news_short_brief}</p>
            <div className="mt-4">
              {/* Condition to check if singleNewsDetails.video_url is empty */}
              {singleNewsDetails.video_url ? (
                <iframe
                  width="100%"
                  height="500"
                  style={{ borderRadius: "5px" }}
                  src={`https://www.youtube.com/embed/${singleNewsDetails.video_url}`}
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : (
                <img
                  src={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
                  className="rounded-2 img-fluid w-100"
                  alt=""
                />
              )}
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
                      image={`https://ajkal.us/images/${singleNewsDetails.title_img}`} // Replace with actual image URL
                      url={`https://ajkal.us/news/${singleNewsDetails.id}`} // Replace with actual page URL
                      card={`https://ajkal.us/images/${singleNewsDetails.title_img}`}
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
              {/* <p
                style={{ fontSize: `${fontSize}px`, textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: slicedText,
                }}
              /> */}
              <p>
                <SanitizedParagraph
                  htmlContent={singleNewsDetails.news_detail}
                />
              </p>
              <div className="pb-4 py-3">
                {addvertisement.map((data) =>
                  // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
                  data.ad_category_id === "4" && data.status === "1" ? (
                    <Link to={data.ad_link} key={data.id}>
                      <img
                        className="img-fluid"
                        src={`https://ajkal.us/images/${data.ad_banner}`}
                        alt=""
                      />
                    </Link>
                  ) : null
                )}
              </div>
              <p
                style={{ fontSize: `${fontSize}px`, textAlign: "justify" }}
                dangerouslySetInnerHTML={{
                  __html: slicedText2,
                }}
              />
            </div>
            <div>
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
            {addvertisement.map((data) =>
              // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
              data.ad_category_id === "3" && data.status === "1" ? (
                <div className="mb-2" key={data.id}>
                  <Link to={data.ad_link}>
                    <img
                      className="img-fluid side-add"
                      src={`https://ajkal.us/images/${data.ad_banner}`}
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
            {/* Addvertisement Area End */}
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
                {singleNewsDetails.video_url ? "পরবর্তী +" : "নিয়ে আরও পড়ুন"}
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
