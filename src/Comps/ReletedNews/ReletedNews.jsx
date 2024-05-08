import React, { useEffect, useState } from "react";
import "./ReletedNews.css";
import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import axios from "axios";
import BanglaDateTime from "../BanglaTime/BanglaTime";
import RelatedNewsDetails from "./ReletedNewsDetails";

const RelatedNews = ({ singleNewsDetails }) => {
  const [relatedNews, setRelatedNews] = useState([]);
  const urlData = `https://backoffice.ajkal.us/category-news/${singleNewsDetails}`;

  useEffect(() => {
    axios
      .get(urlData)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setRelatedNews(response.data.slice(0, 5)); // Remove slice(0, 2) if you expect multiple items
        } else if (Array.isArray(response.data.data)) {
          setRelatedNews(response.data.data.slice(0, 5)); // Remove slice(0, 1) if you expect multiple items
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
                  to={`/ct/${newsItem.category_name}/${newsItem.category_id}`}
                >
                  {newsItem.category_name_bangla}
                </Link>{" "}
                <IoMdArrowDropright /> {newsItem.news_title}
              </h5>
              {/* Assuming BanglaDateTime is another component */}
              <BanglaDateTime dateTime={newsItem.news_time} />
            </div>
          </div>
          <RelatedNewsDetails newsItem={newsItem} links={links} />
        </div>
      ))}
    </div>
  );
};

export default RelatedNews;
