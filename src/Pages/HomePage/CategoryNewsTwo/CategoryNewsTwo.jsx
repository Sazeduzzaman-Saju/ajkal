import React, { useEffect, useState } from "react";
import "./CategoryNewsTwo.css";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import { Link } from "react-router-dom";
import axios from "axios";
import "./CategoryNewsTwo.css";
import Skeleton from "react-loading-skeleton";
import SanitizedParagraph from "../../../Comps/SanitizedParagraph";
import LazyImageShortNews from "../../../Comps/LazyImage/LazyImageShortNews";

const CategoryNewsTwo = () => {
  // Define dynamic data within the component
  const [videoNews, setVideoNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "https://backoffice.ajkal.us/category-news/3";

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
      <PostHeader
        title={videoNews.length > 0 ? videoNews[0].category_name_bangla : ""}
      />
      <div className="row">
        {loading
          ? // Render skeleton loader while data is loading
            Array.from({ length: 8 }, (_, index) => (
              <div className="col-lg-3" key={index}>
                <div
                  className="card border-0 shadow-sm mb-4"
                  style={{ height: "22rem" }}
                >
                  <Skeleton height={200} />
                  <div className="px-2 py-3">
                    <Skeleton count={2} />
                  </div>
                </div>
              </div>
            ))
          : // Render actual news cards once data is loaded
            videoNews.map((news, index) => (
              <div className="col-lg-3" key={index}>
                <Link to={`/${news.category_name}/${news.id}`}>
                  <div
                    className="card border-0 shadow-sm mb-4 newyork-cat"
                    style={{ height: "21rem" }}
                  >
                    <div className="card-body p-0">
                      <div>
                        <LazyImageShortNews
                          src={`https://ajkal.us/img/news/${news?.title_img}`}
                          alt={news?.news_title}
                          className="rounded-top-1 rounded-bottom-0"
                          errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                          width="100%"
                          height="200px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="px-2 py-3">
                        <h5 className="main_color fw-bold ">
                          {news.news_title}
                        </h5>
                        <p className="mb-0">
                          <SanitizedParagraph
                            htmlContent={news.news_short_brief
                              .split(" ")
                              .slice(0, 7)
                              .join(" ")}
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CategoryNewsTwo;
