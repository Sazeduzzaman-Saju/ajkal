import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeatureNews.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import BanglaTimeAgo from "../../../Comps/BanglaTime/BanglaTimeDiffrence";
import SanitizedParagraph from "../../../Comps/SanitizedParagraph";
import LazyImageNews from "../../../Comps/LazyImage/LazyImageNews";

const FeatureNews = () => {
  const [spotlightNews, setSpotlightNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://backoffice.ajkal.us/spotlight-news";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSpotlightNews(response.data);
        } else if (Array.isArray(response.data.data)) {
          setSpotlightNews(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="row">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <div className="col-lg-3" key={index}>
              <div className="card rounded-1 border-0 shadow-sm feature-cards">
                <div className="card-body">
                  <Skeleton height={20} />
                  <Skeleton height={30} count={2} />
                </div>
                <Skeleton height={200} />
              </div>
            </div>
          ))
        : spotlightNews.map((data, index) => (
            <div className="col-lg-3" key={index}>
              <Link to={`/${data.category_name}/${data.id}`}>
                <div className="card rounded-1 border-0 shadow-sm feature-cards">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="secondary-color">
                        {data.category_name_bangla}
                      </p>
                      <p className="badge bg-light text-black">
                        <BanglaTimeAgo postTime={data.news_time} />
                      </p>
                    </div>
                    <h5 className="main-color" style={{ height: "50px" }}>
                      {data.news_title.split(" ").slice(0, 10).join(" ")}
                    </h5>
                    <div
                      className="card-text text-muted"
                      style={{ height: "70px" }}
                    >
                      <SanitizedParagraph
                        htmlContent={data.news_short_brief
                          .split(" ")
                          .slice(0, 10)
                          .join(" ")}
                      />
                    </div>
                  </div>
                  {/* Pass the image URL directly to the LazyImage component */}
                  <LazyImageNews
                    src={`https://ajkal.us/img/news/${data.title_img}`}
                    alt="Card Image"
                    className="card-img-top rounded-0 custom-class" // You can add additional classes if needed
                    errorSrc="https://ajkal.us/img/settings/placeholder.jpg" // Pass the path of the error image
                  />
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default FeatureNews;
