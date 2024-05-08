import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
import axios from "axios";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";
import SanitizedParagraph from "../SanitizedParagraph";

const NewsSectionThree = ({ dhormo, loading }) => {
  // State for storing sliced news data
  const [slicedNews, setSlicedNews] = useState([]);
  const [slicedNewsAll, setSlicedNewsAll] = useState([]);
  const [addvertisementdhormo, setAdvertisementdhormo] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  // Fetch advertisement data on component mount
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAdvertisementdhormo(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementdhormo(response.data.data);
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
    if (dhormo && dhormo.length > 0) {
      setSlicedNews(dhormo);
      setSlicedNewsAll(dhormo);
    }
  }, [dhormo]);

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
                          src={`https://ajkal.us/images/${newsItem.title_img}`}
                          alt={newsItem.news_title}
                          className="rounded-top-1 rounded-bottom-0"
                          errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                          width="auto"
                          height="370px"
                          style={{ objectFit: "cover" }}
                        />
                        <h5
                          className="m-0 p-0 py-3 text-center text-white"
                          style={{ backgroundColor: "var(--main)" }}
                        >
                          {newsItem.news_title}
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
            slicedNews.slice(0, 4).map((data) => (
              <Link
                to={`/${data.category_name}/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="card shadow-sm border-0">
                    <div className="carb-body p-0">
                      <div className="row align-items-center ">
                        <div className="col-lg-4">
                          <LazyImageShortNews
                            src={`https://ajkal.us/images/${data.title_img}`}
                            alt={data.news_title}
                            className="rounded-2 img-fluid "
                            errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                            width="200px"
                            height="95px"
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                        <div className="col-lg-8">
                          <div className="">
                            <div className="mb-1 main-color pe-2 fw-bolder">
                              <SanitizedParagraph
                                htmlContent={data.news_title
                                  .split(" ")
                                  .slice(0, 5)
                                  .join(" ")}
                              />
                            </div>
                            <div className="mb-0 text-muted">
                              <SanitizedParagraph
                                htmlContent={data.news_short_brief
                                  .split(" ")
                                  .slice(3, 10)
                                  .join(" ")}
                              />
                            </div>
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
          {addvertisementdhormo.map(
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
                        "https://ajkal.us/image/settings/placeholder.jpg";
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
NewsSectionThree.propTypes = {
  dhormo: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NewsSectionThree;
