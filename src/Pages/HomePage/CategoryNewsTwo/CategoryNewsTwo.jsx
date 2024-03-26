import React, { useEffect, useState } from "react";
import "./CategoryNewsTwo.css";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const CategoryNewsTwo = () => {
  // Define dynamic data within the component
  const [videoNews, setVideoNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://news.goexpressus.com/category-news/2";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setVideoNews(response.data);
        } else if (Array.isArray(response.data.data)) {
          setVideoNews(response.data.data.slice(0, 8));
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

  return (
    <div>
      <PostHeader title={"বিনোদন"} />
      <div className="row">
        {loading ? (
          // Render skeleton loader while data is loading
          Array.from({ length: 8 }, (_, index) => (
            <div className="col-lg-3" key={index}>
              <div className="card border-0 shadow-sm mb-4" style={{ height: "22rem" }}>
                <Skeleton height={200} />
                <div className="px-2 py-3">
                  <Skeleton count={2} />
                </div>
              </div>
            </div>
          ))
        ) : (
          // Render actual news cards once data is loaded
          videoNews.map((news, index) => (
            <div className="col-lg-3" key={index}>
              <Link to={`/news/${news.id}`}>
                <div className="card border-0 shadow-sm mb-4" style={{ height: "22rem" }}>
                  <div className="card-body p-0">
                    <div>
                      <img className="img-fluid rounded-1 border-0" src={`https://ajkal.goexpressus.com/images/${news.title_img}`} alt="" />
                    </div>
                    <div className="px-2 py-3">
                      <h5 className="main_color fw-bold ">{news.news_title}</h5>
                      <p className="mb-0">{news.news_short_brief.slice(0, 125)}...</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CategoryNewsTwo;
