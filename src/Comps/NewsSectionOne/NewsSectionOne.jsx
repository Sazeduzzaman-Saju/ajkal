import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./NewsSectionOne.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SanitizedParagraph from "../SanitizedParagraph";
import LazyImageNews from "../LazyImage/LazyImageNews";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";

const NewsSectionOne = ({ saraBanglaNews }) => {
  const [loading, setLoading] = useState(true);
  const [slicedNews, setSlicedNews] = useState([]);
  const [slicedNewsAll, setSlicedNewsAll] = useState([]);

  useEffect(() => {
    if (saraBanglaNews && saraBanglaNews.length > 0) {
      setLoading(false);
      // Slice the first 5 items
      setSlicedNews(saraBanglaNews.slice(0, 10));
      setSlicedNewsAll(saraBanglaNews);
    }
  }, [saraBanglaNews]);

  const hasFeaturedItems = slicedNewsAll.some(
    (newsItem) => newsItem.is_featured === 1
  );
  return (
    <div>
      <div className="row mb-4 align-items-center">
        <div className="col-lg-8">
          <div className="row">
            {loading ? (
              <>
                <Skeleton width={80} height={80} />
                <Skeleton height={20} />
                <Skeleton width={80} height={80} />
                <Skeleton height={20} />
              </>
            ) : (
              slicedNews.map((data) => (
                <div className="col-lg-6" key={data.id}>
                  <Link
                    to={`/${data.category_name_bangla}/${data.id}`}
                    className="text-muted"
                  >
                    <div className="card border-0 shadow-sm mb-3">
                      <div className="card-body p-0">
                        <div className="d-flex align-items-center image-container">
                          <LazyImageShortNews
                            src={`https://ajkal.us/images/${data.title_img}`}
                            alt={data.news_title}
                            className="rounded-1"
                            errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                            width="150px"
                            height="auto"
                          />
                          <div className="ps-2 p-2">
                            <h6 className="mb-0 main-color">
                              {data.news_title.slice(0, 32)}...
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="col-lg-4">
          {hasFeaturedItems &&
            slicedNewsAll.map((newsItem, index) => (
              <div key={index}>
                {newsItem.is_featured === 1 && (
                  <div key={index}>
                    {/* {newsItem.is_featured} */}
                    <Link
                      to={`/${newsItem.category_name_bangla}/${newsItem.id}`} // assuming newsItem.id is already a string
                      className="text-muted"
                      key={`${newsItem.id}`} // Convert key to string using string interpolation
                    >
                      <div className="card border-0 shadow-sm mb-2">
                        <div className="card-body p-0 image-container">
                          <img
                            className="img-fluid rouned-2 "
                            src={`https://ajkal.us/images/${newsItem.title_img}`}
                            alt={newsItem.news_title}
                            style={{ borderRadius: "5px" }}
                            onError={(e) => {
                              e.target.src =
                                "https://ajkal.us/image/settings/placeholder.jpg";
                            }}
                          />
                          <div className="ps-2 p-2">
                            <h5 className="mb-0 main-color py-3">
                              <SanitizedParagraph
                                className="mb-0"
                                htmlContent={newsItem.news_title}
                              />
                            </h5>
                            <div>
                              <SanitizedParagraph
                                htmlContent={newsItem.news_short_brief
                                  .split(" ")
                                  .slice(0, 15)
                                  .join(" ")}
                              />
                              <span className="text-danger"> আরও পড়ুন...</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSectionOne;
