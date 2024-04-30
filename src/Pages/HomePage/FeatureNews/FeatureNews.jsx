import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeatureNews.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import BanglaTimeAgo from "../../../Comps/BanglaTime/BanglaTimeDiffrence";

const FeatureNews = () => {
  const [spotlightNews, setSpotlightNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://backoffice.ajkal.us/spotlight-news";

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
              <Link to={`/${data.category_name_bangla}/${data.id}`}>
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
                    <p className="card-text text-muted" style={{ height: "70px" }}>
                      {/* {data?.news_short_brief?.length > 70 ? `${data.news_short_brief.slice(0, 70)}...` : data?.news_short_brief} */}

                      {data.news_short_brief.split(" ").slice(0, 10).join(" ")}
                    </p>
                  </div>
                  <img
                    src={`https://ajkal.us/images/${data.title_img}`}
                    className="card-img-top rounded-0"
                    alt="Card Image"
                    loading="lazy"
                    style={{ height: "200px" }}
                  />
                </div>
              </Link>
            </div>
          ))}
    </div>
  );
};

export default FeatureNews;
