import React, { useEffect, useState } from "react";
import "./ReletedNews.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { PiAirplayFill } from "react-icons/pi";
import BanglaTimeAgo from "../BanglaTime/BanglaTimeDiffrence";
import SanitizedParagraph from "../SanitizedParagraph";

const RelatedNews = ({ singleNewsDetails }) => {
  const [reletedNews, setReletedNews] = useState([]);
  const url = `https://backoffice.ajkal.us/category-news/${singleNewsDetails}`;

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
                  src={`https://ajkal.us/img/news/${news.title_img}`}
                  alt={news.news_title}
                  style={{ height: "250px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src =
                      "https://ajkal.us/img/settings/placeholder.jpg";
                  }}
                />
              </div>
              <div className="post-content">
                <div className="category">{news.category_name_bangla}</div>
                <h1 className="title">
                  {news.news_title.split(" ").slice(0, 7).join(" ")}
                </h1>
                <h2 className="sub-title mb-0 pb-0">
                  <SanitizedParagraph
                    htmlContent={news.news_short_brief
                      .split(" ")
                      .slice(0, 8)
                      .join(" ")}
                  ></SanitizedParagraph>
                  <span className="text-primary"></span>
                </h2>
                <p
                  className={`description ${
                    hoveredCard === news.id ? "visible" : ""
                  }`}
                >
                  {news.news_detail && ( // Add a conditional check
                    <SanitizedParagraph
                      htmlContent={news.news_detail
                        .split(" ")
                        .slice(0, 15)
                        .join(" ")}
                    />
                  )}
                </p>
                <div className="post-meta mt-1">
                  <span className="timestamp">
                    <i className="fa fa-clock-o"></i>
                    {news?.timestamp}
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


import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import RelatedNewsDetails from "./ReletedNewsDetails";

const RelatedNews = ({ singleNewsDetails }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [loadedItemsCount, setLoadedItemsCount] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchData();
  }, [singleNewsDetails]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiUrl = `https://backoffice.ajkal.us/category-news/${singleNewsDetails.category_id}`;
      const response = await axios.get(apiUrl);
      console.log("Fetched data:", response.data); // Log fetched data
      if (Array.isArray(response.data)) {
        setItems(response.data.slice(0, 5));
        setHasMore(response.data.length > 5);
      } else if (Array.isArray(response.data.data)) {
        setItems(response.data.data.slice(0, 5));
        setHasMore(response.data.data.length > 5);
      } else {
        console.error("Invalid data structure in API response:", response.data);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    }
    setLoading(false);
  };

  const fetchMoreData = async () => {
    if (!hasMore || loadingMore) return;
  
    setLoadingMore(true);
  
    try {
      const apiUrl = `https://backoffice.ajkal.us/category-news/${singleNewsDetails.category_id}?page=${page}`;
      const response = await axios.get(apiUrl);
  
      if (Array.isArray(response.data) || Array.isArray(response.data.data)) {
        const responseData = Array.isArray(response.data) ? response.data : response.data.data;
  
        if (responseData.length > 0) {
          const uniqueNextItems = responseData
            .filter((item) => !items.some((existingItem) => existingItem.id === item.id))
            .slice(0, 5);
  
          setLoadedItemsCount((prevCount) => prevCount + uniqueNextItems.length);
          setItems((prevItems) => [...prevItems, ...uniqueNextItems]);
          setHasMore(loadedItemsCount + uniqueNextItems.length < 500);
        } else {
          // No more data available
          setHasMore(false);
        }
      } else {
        console.error("Invalid data structure in API response:", response.data);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setHasMore(false);
    }
  
    setLoadingMore(false);
  };

  return (
    <div>
      <h3 className="mb-0 p-3 ps-0 secondary-color ">ক্যাটেগরি নিউজ</h3>
      <hr className=" mt-0" />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={""}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {loading
          ? // Skeleton loader for news items
            Array.from({ length: items.length }, (_, index) => (
              <div key={index} style={{ height: "auto", overflow: "hidden" }}>
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
            ))
          : // Render actual news items when not loading
            items.map((item, index) => (
              <div key={index} style={{ height: "auto", overflow: "hidden" }}>
               <RelatedNewsDetails></RelatedNewsDetails>
              </div>
            ))}
      </InfiniteScroll>
    </div>
  );
};

export default RelatedNews;
