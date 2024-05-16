import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
import axios from "axios";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";
import SanitizedParagraph from "../SanitizedParagraph";
import "./NewsSectionFive.css";

const NewsSectionFive = ({ ScienceData, loading }) => {
  // State for storing sliced news data
  const [slicedNews, setSlicedNews] = useState([]);
  const [slicedNewsAll, setSlicedNewsAll] = useState([]);
  const [addvertisementScienceData, setAdvertisementScienceData] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  // Fetch advertisement data on component mount
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAdvertisementScienceData(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementScienceData(response.data.data);
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

  // Slice the news data
  useEffect(() => {
    if (ScienceData && ScienceData.length > 0) {
      setSlicedNews(ScienceData);
      setSlicedNewsAll(ScienceData);
    }
  }, [ScienceData]);

  // Check if there are featured news items
  const hasFeaturedItems = slicedNewsAll.some(
    (newsItem) => newsItem.is_featured === 1
  );

  return (
    <div>
      <div className="row">
        {/* Render featured news items */}
        <div className="col-lg-6">
          {hasFeaturedItems &&
            slicedNewsAll.map((newsItem, index) => (
              <div key={index}>
                {newsItem.is_featured === 1 && (
                  <Link
                    to={`/${newsItem.category_name}/${newsItem.id}`}
                    key={newsItem.id}
                  >
                    <div className="card border-0">
                      <div className="card-body p-0">
                        <LazyImageShortNews
                          src={`https://ajkal.us/img/news/${newsItem.title_img}`}
                          alt={newsItem.news_title}
                          className="rounded-top-1 rounded-bottom-0"
                          errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                          width="100%"
                          height="275px"
                          style={{ objectFit: "cover" }}
                        />
                        <h5
                          className="m-0 p-0 py-3 text-center text-white rounded-bottom-2 science-feature"
                        >
                          <SanitizedParagraph
                            htmlContent={newsItem.news_title
                              .split(" ")
                              .slice(0, 5)
                              .join(" ")}
                          />
                        </h5>
                      </div>
                    </div>
                  </Link>
                )}
              </div>
            ))}
        </div>

        {/* Render regular news items */}
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <Skeleton height={100} width={100} count={3} />
          ) : (
            // Render actual data
            slicedNews.slice(0, 5).map((data) => (
              <Link
                to={`/${data.category_name}/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="card border-0 shadow-sm science-cat">
                    <div className="card-body p-0">
                      <div className="row align-items-center ">
                        <div className="col-lg-4 science-cat-image">
                          <LazyImageShortNews
                            src={`https://ajkal.us/img/news/${data.title_img}`}
                            alt={data.news_title}
                            className="rounded-2"
                            errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                            width="200px"
                            height="70px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-lg-8">
                          <h6 className="mb-0 main-color fw-semibold">
                            {data &&
                              data.news_title.split(" ").slice(0, 5).join(" ")}
                          </h6>
                          <div className="mb-0 text-muted">
                            <SanitizedParagraph
                              htmlContent={
                                data &&
                                data.news_short_brief
                                  .split(" ")
                                  .slice(0, 5)
                                  .join(" ")
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      {/* Render advertisement */}
      <div className="row">
        <div className="col-lg-12">
          {addvertisementScienceData.map(
            (data) =>
              data.status === 1 &&
              data.ad_position === "BelowNewsCategory2" && (
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
  );
};

// Prop types validation
NewsSectionFive.propTypes = {
  ScienceData: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NewsSectionFive;
