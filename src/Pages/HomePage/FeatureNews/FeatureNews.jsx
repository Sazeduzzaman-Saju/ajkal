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
      console.log(spotlightNews)
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
                    {data.country || <Skeleton></Skeleton>}
                  </p>
                  <p className="badge bg-light text-black">
                    {data.time || <Skeleton></Skeleton>}
                  </p>
                </div>
                <h5 className="main-color">
                  {data.featureTite || <Skeleton></Skeleton>}
                </h5>
                <p className="card-text text-muted">
                  {data?.shortDescrioption?.length > 83
                    ? `${data.shortDescrioption.slice(0, 83)}...`
                    : data?.shortDescrioption || <Skeleton></Skeleton>}
                </p>
              </div>
              <img
                src={data.featureImage} // Replace with the actual image source
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
