import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeatureNews.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const FeatureNews = () => {
  const [spotlightNews, setSpotlightNews] = useState([]);

  const url = "https://news.goexpressus.com/spotlight-news";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
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
      });
  }, []);
  return (
    <div className="row">
      {spotlightNews.map((data, index) => (
        <div className="col-lg-3 " key={index}>
          <Link to={`/news/${data.id}`}>
            <div className="card rounded-1 border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between  align-items-center ">
                  <p className="secondary-color">
                    {data.category_name_bangla || <Skeleton></Skeleton>}
                  </p>
                  <p className="badge bg-light text-black">
                    {data.news_time.slice(10) || <Skeleton></Skeleton>}
                  </p>
                </div>
                <h5 className="main-color">
                  {data.news_title.slice(0, 28) || <Skeleton></Skeleton>}..
                </h5>
                <p className="card-text text-muted">
                  {data?.news_short_brief?.length > 70
                    ? `${data.news_short_brief.slice(0, 70)}...`
                    : data?.news_short_brief || <Skeleton></Skeleton>}
                </p>
              </div>
              <img
                src={`https://ajkal.goexpressus.com/images/${data.title_img}`} // Replace with the actual image source
                className="card-img-top rounded-0"
                alt="Card Image"
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FeatureNews;
