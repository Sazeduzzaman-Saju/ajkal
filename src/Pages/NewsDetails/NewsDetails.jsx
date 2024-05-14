import React, { useEffect, useState } from "react";
import "./NewsDetails.css";
import { Link, useLoaderData } from "react-router-dom";
import ReletedNews from "../../Comps/ReletedNews/ReletedNews";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import BanglaDateTime from "../../Comps/BanglaTime/BanglaTime";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";
import axios from "axios";
import { IoMdArrowDropright } from "react-icons/io";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FacebookEmbed, YouTubeEmbed } from "react-social-media-embed";
import NewsDetailsContent from "./NewsDetailsContent";

const NewsDetails = () => {
  const singleNews = useLoaderData();
  const singleNewsDetails = singleNews.data;


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
        title={singleNewsDetails?.news_title}
        type="article"
        image={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`} // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`}
        description={singleNewsDetails?.news_detail} // Replace with appropriate description field from singleNewsDetails
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
              className="d-flex justify-content-between  align-items-center py-3 breadcrumb-box"
              style={{ borderBottom: "1px solid var(--main)" }}
            >
              <h5 className="text-muted">
                <span> প্রচ্ছদ </span> <IoMdArrowDropright />
                <Link
                  className="text-muted"
                  to={`/ct/${singleNewsDetails.category_name}/${singleNewsDetails?.category_id}`}
                >
                  {singleNewsDetails?.category_name_bangla}
                </Link>{" "}
                <IoMdArrowDropright /> {singleNewsDetails?.news_title}
              </h5>
              <BanglaDateTime dateTime={singleNewsDetails?.news_time} />
            </div>
          </div>
        </div>
        <div className="row">
          <NewsDetailsContent
            singleNewsDetails={singleNewsDetails}
            addvertisement={addvertisement}
            links={links}
          />
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
                            "https://ajkal.us/img/settings/placeholder.jpg";
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
            singleNewsDetails={singleNewsDetails?.category_id}
            links={links}
          ></ReletedNews>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
