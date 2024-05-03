import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import BanglaTimeAgo from "../../../Comps/BanglaTime/BanglaTimeDiffrence";
import Skeleton from "react-loading-skeleton";
import CategoryNewsSlider from "./CategoryNewsSlider";
import SanitizedParagraph from "../../../Comps/SanitizedParagraph";
import axios from "axios";
import LazyImageShortNews from "../../../Comps/LazyImage/LazyImageShortNews";

const CategoryFeature = ({ singleNews }) => {
  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAddvertisement(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAddvertisement(response.data.data);
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
    <div className="col-lg-8">
      <div className="row gx-3">
        <div className="col-sm-8 mb-3">
          <CategoryNewsSlider singleNews={singleNews} />
        </div>
        {!singleNews.length ? ( // Render skeleton loading placeholders if singleNews is empty
          <div className="col-sm-4">
            <div className="card border-0 shadow-sm mb-3">
              <Skeleton height={200} />
              <div className="card-footer news-info-box">
                <div className="news-hover-box">
                  <Skeleton width={100} />
                  <Skeleton width={200} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Render actual data if singleNews is not empty and loading is false
          singleNews.slice(0, 4).map((data) => (
            <div className="col-sm-4" key={data.id}>
              <Link to={`/${data.category_name_bangla}/${data.id}`}>
                <div className="card rounded-0 border-0 shadow-sm ">
                  <div className="card-header p-0 border-0"></div>
                  <div className="card-body p-0" style={{ height: "375px" }}>
                    <div>
                      <LazyImageShortNews
                        src={`https://ajkal.us/images/${data.title_img}`}
                        alt={data.news_title}
                        className="card-img-top"
                        errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                        width="100%"
                        height="auto"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="p-2">
                      <h5 className="pt-2 main_color">
                        {data.news_title.split(" ").slice(0, 8).join(" ")}
                      </h5>
                      <div className="">
                        <SanitizedParagraph
                          htmlContent={data.news_short_brief
                            .split(" ")
                            .slice(0, 10)
                            .join(" ")}
                        ></SanitizedParagraph>
                      </div>
                      <p
                        className="text-muted mb-1"
                        style={{ fontSize: "12px" }}
                      >
                        <BanglaTimeAgo
                          postTime={data.news_time}
                        ></BanglaTimeAgo>
                      </p>
                      <p className="pb-0 mb-0 main_color sec_color">
                        {data.category_name_bangla}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="row">
        <div className="col-lg-12 py-4">
          {addvertisement.map(
            (data) =>
              // Check if data.status is "1" and data.ad_position is "HeaderTop"
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

CategoryFeature.propTypes = {
  singleNews: PropTypes.array.isRequired,
};

export default CategoryFeature;
