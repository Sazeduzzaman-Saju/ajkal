import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import PropTypes from "prop-types";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";
import SanitizedParagraph from "../SanitizedParagraph";

const NewsSectionThree = ({ khelarNews, loading }) => {
  // State for storing advertisement data
  const [advertisementKhela, setAdvertisementKhela] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  // Fetch advertisement data on component mount
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAdvertisementKhela(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementKhela(response.data.data);
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
      {/* Left column for regular news items */}
      <div className="col-lg-6">
        {loading ? (
          // Render skeleton loading placeholders
          <Skeleton height={100} width={100} count={3} />
        ) : (
          // Render actual data
          khelarNews.slice(0, 5).map((data) => (
            <Link
              to={`/${data.category_name}/${data.id}`}
              className="text-muted"
              key={data.id}
            >
              <div className="card border-0 shadow-sm mb-3">
                <div className="card-body p-0">
                  <div className="row align-items-center khelar-news">
                    {/* Image column */}
                    <div className="col-lg-4">
                      <LazyImageShortNews
                        src={`https://ajkal.us/img/news/${data.title_img}`}
                        alt={data.news_title}
                        className="rounded-1"
                        errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                        width="250px"
                        height="75px"
                      />
                    </div>
                    {/* Content column */}
                    <div className="col-lg-8 ps-1 ps-lg-0 pb-4 pb-lg-0 ">
                      <h6 className="mb-0 main-color fw-bolder py-2 py-lg-0">
                        <SanitizedParagraph
                          htmlContent={data.news_title
                            .split(" ")
                            .slice(0, 5)
                            .join(" ")}
                        />
                      </h6>
                      <div className="ps-4">
                        <SanitizedParagraph
                          className="mb-0 text-muted"
                          htmlContent={data.news_short_brief
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* Right column for featured news items */}
      <div className="col-lg-6 ps-1">
        {loading ? (
          // Render skeleton loading placeholders
          <Skeleton height={200} count={3} />
        ) : (
          // Render actual data
          khelarNews.map((data, index) =>
            data.is_featured === 1 ? (
              <div key={index}>
                <Link to={`/${data.category_name}/${data.id}`}>
                  <div className="card border-0 shadow-sm ">
                    <div className="card-body p-0">
                      {/* Featured news image */}
                      <LazyImageShortNews
                        src={`https://ajkal.us/img/news/${data.title_img}`}
                        alt={data.news_title}
                        className="rounded-top-1 rounded-bottom-0"
                        errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                        width="auto"
                        height="385px"
                        style={{ objectFit: "cover" }}
                      />
                      {/* Featured news title */}
                      <h5
                        className="m-0 p-0 py-3 text-center text-white rounded-bottom-1 khela-feature-box"
                        style={{ backgroundColor: "var(--main)" }}
                      >
                        {data.news_title &&
                          data.news_title.split(" ").slice(0, 5).join(" ")}
                      </h5>
                    </div>
                  </div>
                </Link>
              </div>
            ) : null
          )
        )}
      </div>

      {/* Advertisement section */}
      <div className="col-lg-12 pt-3">
        {advertisementKhela.map(
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
  );
};

// Prop types validation
NewsSectionThree.propTypes = {
  khelarNews: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NewsSectionThree;
