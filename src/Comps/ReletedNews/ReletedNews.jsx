import React, { useEffect, useState } from "react";
import "./ReletedNews.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { PiAirplayFill } from "react-icons/pi";
import BanglaTimeAgo from "../BanglaTime/BanglaTimeDiffrence";
import SanitizedParagraph from "../SanitizedParagraph";

const RelatedNews = ({ singleNewsDetails }) => {
  const [reletedNews, setReletedNews] = useState([]);
  const url = `https://news.goexpressus.com/category-news/${singleNewsDetails}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setReletedNews(response.data.slice(0, 4));
        } else if (Array.isArray(response.data.data)) {
          setReletedNews(response.data.data.slice(0, 4));
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
  }, [url]);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  return (
    <div className="row my-4 gx-3">
      {reletedNews.map((news) => (
        <div className="col-lg-3 " key={news.id}>
          <Link to={`/news/${news.id}`}>
            <div
              className={`post-module ${
                hoveredCard === news.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleHover(news.id)}
              onMouseLeave={() => handleLeave()}
            >
              <div className="thumbnail shadow-sm">
                <div>
                  {/* {news.video_url} */}
                  <div className="date">
                    <BanglaTimeAgo postTime={news.news_time} />
                  </div>
                  {news.video_url ? (
                    <div className="dates">
                      <PiAirplayFill />
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <img
                  src={`https://ajkal.goexpressus.com/images/${news.title_img}`}
                  alt={news.news_title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="post-content">
                <div className="category">{news.category_name_bangla}</div>
                <h1 className="title">{news.news_title.split(' ').slice(0, 7).join(' ')}</h1>
                <h2 className="sub-title mb-0 pb-0">
                  {news.news_short_brief.split(' ').slice(0, 8).join(' ')} ..
                  <span className="text-primary"></span>
                </h2>
                <p
                  className={`description ${
                    hoveredCard === news.id ? "visible" : ""
                  }`}
                  >
                  
                  <SanitizedParagraph htmlContent={news.news_detail.split(' ').slice(0, 15).join(' ')} />
                </p>
                <div className="post-meta mt-1">
                  <span className="timestamp">
                    <i className="fa fa-clock-o"></i>
                    {news.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedNews;
