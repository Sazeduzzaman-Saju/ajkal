import React, { useEffect, useState } from "react";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import { PiAirplayFill } from "react-icons/pi";
import "./VideoNews.css";
import { MdPlayCircleFilled } from "react-icons/md";

const VideoNews = () => {
  const [videoNews, setVideoNews] = useState([]);
  const url = "https://news.goexpressus.com/category-news/18";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setVideoNews(response.data);
        } else if (Array.isArray(response.data.data)) {
          setVideoNews(response.data.data);
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
      <PostHeader title="ভিডিও সংবাদ" />
      <div className="row gx-3 align-items-center">
        <div className="col-lg-6">
          {videoNews.map((data) =>
            // Check if data "is_featured" is equal to "1"
            data.is_featured === "1" ? (
              <Link to={`/news/${data.id}`} key={data.id}>
                <div className="card border-0">
                  <div className="card-body p-0">
                    <div className="is_video_icon">
                      <PiAirplayFill />
                    </div>
                    <img
                      className="img-fluid rounded-2"
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt=""
                    />
                    <h5 className="mb-1 main-color pt-3">
                      {data.news_title.slice(0, 50)}
                    </h5>
                  </div>
                </div>
              </Link>
            ) : // If not featured, render other content or nothing
            null
          )}
        </div>
        <div className="col-lg-6">
          {videoNews.map((data) => (
            <Link to={`/news/${data.id}`} key={data.id} className="text-muted">
              <div className="d-flex align-items-center mb-1">
                <div className="video-side">
                  <MdPlayCircleFilled />
                </div>
                <div className="rounded-1">
                  <img
                    className="rounded-2"
                    width={150}
                    src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                    alt=""
                  />
                </div>
                <div className="ps-3">
                  <h5 className="mb-1 main-color">{data.news_title}</h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
