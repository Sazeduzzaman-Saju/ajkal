import React, { useEffect, useState } from "react";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { PiAirplayFill } from "react-icons/pi";
import { MdPlayCircleFilled } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "./VideoNews.css";

const VideoNews = () => {
  const [videoNews, setVideoNews] = useState([]);
  const [videoNewsAll, setVideoNewsAll] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://backoffice.ajkal.us/category-news/20";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setVideoNews(response.data.slice(0, 4));
          setVideoNewsAll(response.data);
        } else if (Array.isArray(response.data.data)) {
          setVideoNews(response.data.data.slice(0, 4));
          setVideoNewsAll(response.data.data);
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
  const [addvertisementVideo, setAdvertisementVideo] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAdvertisementVideo(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementVideo(response.data.data);
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
    <div>
      <PostHeader
        title={videoNews.length > 0 ? videoNews[0].category_name_bangla : ""}
      />
      <div className="row gx-3 align-items-center">
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <>
              <Skeleton height={100} width={100} count={3} />
            </>
          ) : (
            // Render actual data
            <>
              {Array.from(new Set(videoNewsAll.map((data) => data.id))).map(
                (uniqueId) => {
                  const data = videoNewsAll.find(
                    (item) => item.id === uniqueId
                  );
                  if (data && data.is_featured === 1) {
                    return (
                      <Link
                        to={`/${data.category_name_bangla}/${data.id}`}
                        key={data.id}
                        className="text-muted"
                      >
                        <div className="card border-0">
                          <div className="card-body p-0">
                            <div className="is_video_icon">
                              <PiAirplayFill />{" "}
                              {/* I'm assuming this is an icon */}
                            </div>
                            <img
                              className="img-fluid rounded-2"
                              src={`https://ajkal.us/images/${data?.title_img}`}
                              alt=""
                              onError={(e) => {
                                e.target.src =
                                  "https://ajkal.us/image/settings/placeholder.jpg";
                              }}
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

        <div className="col-lg-6">
          {loading
            ? // Skeleton loader for other videos
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
            : // Render other videos
              videoNews.map((data) => (
                <Link
                  to={`/${data.category_name_bangla}/${data.id}`}
                  key={data.id}
                  className="text-muted"
                >
                  <div className="d-flex align-items-center mb-3">
                    <div className="video-side">
                      <MdPlayCircleFilled />
                    </div>
                    <div className="rounded-1">
                      <img
                        className="rounded-2"
                        width={150}
                        src={`https://ajkal.us/images/${data.title_img}`}
                        alt=""
                        onError={(e) => {
                          e.target.src =
                            "https://ajkal.us/image/settings/placeholder.jpg";
                        }}
                      />
                    </div>
                    <div className="ps-3">
                      <div className="">
                        <h5 className="mb-1 main-color">{data.news_title}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
      <div className="row">
        <div className="coll-lg-12">
          {addvertisementVideo.map(
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

export default VideoNews;
