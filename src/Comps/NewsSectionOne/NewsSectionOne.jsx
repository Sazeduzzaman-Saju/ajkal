import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./NewsSectionOne.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import SanitizedParagraph from "../SanitizedParagraph";

const NewsSectionOne = ({ bangladeshNews }) => {
  const [loading, setLoading] = useState(true);
  const [slicedNews, setSlicedNews] = useState([]);
  const [slicedNewsAll, setSlicedNewsAll] = useState([]);

  useEffect(() => {
    if (bangladeshNews && bangladeshNews.length > 0) {
      setLoading(false);
      // Slice the first 5 items
      setSlicedNews(bangladeshNews.slice(0, 8));
      setSlicedNewsAll(bangladeshNews);
    }
  }, [bangladeshNews]);

  const hasFeaturedItems = slicedNewsAll.some(
    (newsItem) => newsItem.is_featured === 1
  );
  console.log(hasFeaturedItems, "asdasdas");
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
                          <img
                            className="rouned-2 news-ft-section-imge zoom-image"
                            src={`https://ajkal.us/images/${data.title_img}`}
                            width={80}
                            alt=""
                            onError={(e) => {
                              e.target.src =
                                "https://ajkal.us/image/settings/placeholder.jpg";
                            }}
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
                  <p key={index}>
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
                            <p>
                              <SanitizedParagraph
                                htmlContent={newsItem.news_short_brief
                                  .split(" ")
                                  .slice(0, 15)
                                  .join(" ")}
                              />
                              <span className="text-danger"> আরও পড়ুন...</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </p>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

NewsSectionOne.propTypes = {
  bangladeshNews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imageLink: PropTypes.string.isRequired,
      titles: PropTypes.string.isRequired,
      // Add any other properties and their types as needed
    })
  ).isRequired,
};

export default NewsSectionOne;
