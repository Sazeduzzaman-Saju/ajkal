import axios from "axios";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import RelatedNewsDetails from "./ReletedNewsDetails";
import { Triangle } from "react-loader-spinner";

const RelatedNews = ({ categoryId }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    fetchData();
  }, [categoryId]);

  const apiUrl = `https://backoffice.ajkal.us/category-news/${categoryId}`;
  console.log("Fetched data:", apiUrl);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(apiUrl);
      // Log fetched data regardless of its type
      if (Array.isArray(response.data)) {
        setItems(response.data.slice(0, 5));
        setHasMore(response.data.length > 5);
      } else if (response.data && Array.isArray(response.data.data)) {
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
      const response = await axios.get(
        `${apiUrl}?page=${Math.ceil(items.length / 5) + 1}&limit=1`
      );

      console.log("API Response:", response.data); // Log the response

      if (Array.isArray(response.data) || Array.isArray(response.data.data)) {
        const responseData = Array.isArray(response.data)
          ? response.data
          : response.data.data;

        if (responseData.length > 0) {
          const uniqueNextItem = responseData.find(
            (item) => !items.some((existingItem) => existingItem.id === item.id)
          );

          if (uniqueNextItem) {
            setItems((prevItems) => [...prevItems, uniqueNextItem]);
            setHasMore(true); // There might be more items to load
          } else {
            // No more unique items available
            setHasMore(false);
          }
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

  const links = [
    { label: "বাংলাদেশ", url: "#" },
    { label: "বিরোধী ", url: "#" },
    { label: "সংবাদ", url: "#" },
    { label: "নির্দেশনা ", url: "#" },
    { label: "নেতা", url: "#" },
    { label: "যুক্তরাষ্ট্র", url: "#" },
    { label: "নিউইয়র্ক", url: "#" },
    { label: "সারা বিশ্ব", url: "#" },
    { label: "বিনোদন", url: "#" },
    { label: "কারাগার", url: "#" },
    { label: "প্রবাস", url: "#" },
    { label: "লাইফস্টাইল", url: "#" },
    { label: "খেলা", url: "#" },
    { label: "সারা বাংলা", url: "#" },
    { label: "সাপ্তাহিক", url: "#" },
    // Add more link objects as needed
  ];
  return (
    <div>
      <h3 className="mb-0 p-3 ps-0 secondary-color ">ক্যাটেগরি নিউজ</h3>
      <hr className=" mt-0" />
      <InfiniteScroll
        style={{ height: "auto", overflow: "hidden" }}
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div style={{ height: "auto", overflow: "hidden" }}>
            <div className="card border-0 shadow-sm mb-3">
              <Skeleton height={150} />
              <Skeleton height={50} />
              <Skeleton height={50} />
              <Skeleton height={50} />

            </div>
          </div>
        }
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
            items.map((newsItem, index) => (
              <div
                className="row"
                key={index}
                style={{ height: "auto", overflow: "hidden" }}
              >
                <RelatedNewsDetails
                  newsItem={newsItem}
                  links={links}
                ></RelatedNewsDetails>
              </div>
            ))}
      </InfiniteScroll>
    </div>
  );
};

export default RelatedNews;
