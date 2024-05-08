import React, { useEffect, useState } from "react";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { PiAirplayFill } from "react-icons/pi";
import { MdPlayCircleFilled } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "./VideoNews.css";
import LazyImageShortNews from "../../../Comps/LazyImage/LazyImageShortNews";
import SanitizedParagraph from "../../../Comps/SanitizedParagraph";

const VideoNews = () => {
  // State variables
  const [videoNews, setVideoNews] = useState([]);
  const [videoNewsAll, setVideoNewsAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [addvertisementVideo, setAdvertisementVideo] = useState([]);

  // API URLs
  const videoNewsUrl = "https://backoffice.ajkal.us/category-news/14";
  const advertisementUrl = "https://backoffice.ajkal.us/ad/all";

  // Fetch video news data
  useEffect(() => {
    axios
      .get(videoNewsUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setVideoNews(response.data.slice(0, 4));
          setVideoNewsAll(response.data);
        } else if (Array.isArray(response.data.data)) {
          setVideoNews(response.data.data.slice(0, 4));
          setVideoNewsAll(response.data.data);
        } else {
          console.error(
            "Invalid data structure in video news API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching video news data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Fetch advertisement data
  useEffect(() => {
    axios
      .get(advertisementUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAdvertisementVideo(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementVideo(response.data.data);
        } else {
          console.error(
            "Invalid data structure in advertisement API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching advertisement data:", error);
      });
  }, []);

  // Function to render the "No data available" message
  const renderNoDataMessage = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <p className="text-center">No Data Available For This Category</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Post Header */}
      <PostHeader
        title={videoNews.length > 0 ? videoNews[0].category_name_bangla : ""}
      />

      {/* Video News Section */}
      <div className="row gx-3">
        {/* Featured Video */}
        <div className="col-lg-6">
          {loading ? (
            // Skeleton loader for featured video
            <Skeleton height={100} width={100} count={3} />
          ) : videoNewsAll.length === 0 ? (
            // Render "No data available" message
            renderNoDataMessage()
          ) : (
            // Render actual featured video
            <>
              {Array.from(new Set(videoNewsAll.map((data) => data.id))).map(
                (uniqueId) => {
                  const data = videoNewsAll.find(
                    (item) => item.id === uniqueId
                  );
                  if (data && data.is_featured === 1) {
                    return (
                      <Link
                        to={`/${data.category_name}/${data.id}`}
                        key={data.id}
                        className="text-muted"
                      >
                        <div className="card border-0">
                          <div className="card-body p-0">
                            <div className="is_video_icon">
                              <PiAirplayFill /> {/* Assuming this is an icon */}
                            </div>
                            <LazyImageShortNews
                              src={`https://ajkal.us/img/news/${data?.title_img}`}
                              alt={data?.news_title}
                              className="rounded-top-1 rounded-bottom-0"
                              errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                              width="100%"
                              height="415px"
                              style={{ objectFit: "cover" }}
                            />
                            <div className="vide-feature-title">
                              <h5 className="mb-1 text-white pt-3">
                                {data.news_title &&
                                  data.news_title
                                    .split(" ")
                                    .slice(0, 7)
                                    .join(" ")}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                  return null;
                }
              )}
            </>
          )}
        </div>

        {/* Other Videos Section */}
        <div className="col-lg-6">
          {loading ? (
            // Skeleton loader for other videos
            Array.from({ length: 5 }).map((_, index) => (
              <div className="text-muted" key={index}>
                <div className="d-flex align-items-center mb-3">
                  <div className="video-side">
                    <MdPlayCircleFilled />
                  </div>
                  <div className="rounded-1">
                    <Skeleton height={100} width={150} />
                  </div>
                  <div className="ps-3">
                    <Skeleton height={30} width={200} />
                  </div>
                </div>
              </div>
            ))
          ) : videoNews.filter((data) => data && data.id).length > 0 ? (
            // Render other videos
            videoNews.map((data) => (
              <Link
                to={`/${data.category_name}/${data.id}`}
                key={data.id}
                className="text-muted"
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="card border-0 shadow-sm ">
                    <div className="card-body p-0">
                      <div className="row gx-3 align-items-center ">
                        <div className="col-lg-4">
                          <div>
                            <div className="video-side">
                              <MdPlayCircleFilled />
                            </div>
                            <div className="rounded-1">
                              <LazyImageShortNews
                                src={`https://ajkal.us/img/news/${data?.title_img}`}
                                alt={data?.news_title}
                                className="rounded-top-1 rounded-bottom-0"
                                errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                                width="300px"
                                height="auto"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="">
                            <h5 className="mb-1 main-color pe-2 fw-bolder">
                              {data.news_title}
                            </h5>
                            <div className="mb-0">
                              <SanitizedParagraph
                                htmlContent={data.news_short_brief
                                  .split(" ")
                                  .slice(0, 5)
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
          ) : (
            // No data available message
            <div className="text-center">
              <p>No Data Available For This Category</p>
            </div>
          )}
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="row mt-3">
        <div className="coll-lg-12">
          {addvertisementVideo.map(
            (data) =>
              // Check if data.status is "1" and data.ad_position is "BelowNewsCategory2"
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

export default VideoNews;
