import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyImageShortNews from "../../../Comps/LazyImage/LazyImageShortNews";
import { Link } from "react-router-dom";
import SanitizedParagraph from "../../../Comps/SanitizedParagraph";
import { Triangle } from "react-loader-spinner";
import Skeleton from "react-loading-skeleton";

const InfiniteScrollComponent = ({ singleNews }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [loadedItemsCount, setLoadedItemsCount] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchData();
  }, [singleNews.data]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const apiUrl = `https://backoffice.ajkal.us/category-news/${singleNews.data[0].category_id}`;
      const response = await axios.get(apiUrl);
      if (Array.isArray(response.data)) {
        setItems(response.data.slice(0, 5));
        setHasMore(response.data.length > 5);
      } 
      else if (Array.isArray(response.data.data)) {
        setItems(response.data.data.slice(0, 5));
        setHasMore(response.data.data.length > 5);
      }
      else {
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
      const apiUrl = `https://backoffice.ajkal.us/category-news/${singleNews.data[0].category_id}`;
      const response = await axios.get(apiUrl);

      if (Array.isArray(response.data) || Array.isArray(response.data.data)) {
        const responseData = Array.isArray(response.data)
          ? response.data
          : response.data.data;

        // Filter out items with duplicate IDs and limit to the next batch of 5 items
        const uniqueNextItems = responseData
          .filter(
            (item) => !items.some((existingItem) => existingItem.id === item.id)
          )
          .slice(0, 5);

        // Update loaded items count
        setLoadedItemsCount((prevCount) => prevCount + uniqueNextItems.length);

        setItems((prevItems) => [...prevItems, ...uniqueNextItems]);

        // Update hasMore based on whether there are more unique items to load
        setHasMore(loadedItemsCount + uniqueNextItems.length < 500);
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
        loader={''}
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
                <Link
                  to={`/${item.category_name}/${item.id}`}
                  key={item.id}
                >
                  <div className="row align-items-center py-3">
                    <div className="col-sm-7">
                      <div>
                        <h4 className="main_color">{item.news_title}</h4>
                        <p className="text-muted">
                          {item.news_detail && (
                            <SanitizedParagraph
                              htmlContent={item.news_detail
                                .split(" ")
                                .slice(0, 40)
                                .join(" ")}
                            />
                          )}
                        </p>
                        <p className="text-danger">আরও পড়ুন...</p>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div>
                        <LazyImageShortNews
                          src={`https://ajkal.us/images/${item.title_img}`}
                          alt={item.news_title}
                          className="img-fluid w-100 rounded-0"
                          errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                          width="100%"
                          height="248px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollComponent;
