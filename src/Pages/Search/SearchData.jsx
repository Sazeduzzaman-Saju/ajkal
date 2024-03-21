import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

const SearchData = () => {
  const [archive, setArchive] = useState([]);
  const [visibleItems, setVisibleItems] = useState(8); // State to track the number of visible items
  const url = "https://news.goexpressus.com/archive-news";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setArchive(response.data);
        } else if (Array.isArray(response.data.data)) {
          setArchive(response.data.data);
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

  // Function to handle "Load More" button click
  const handleLoadMore = () => {
    setVisibleItems((prevCount) => prevCount + 8); // Increment visible items count by 10
  };

  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-lg-12">
          {/* Display only the specified number of items */}
          {archive.slice(0, visibleItems).map((data, index) => (
            <div className="card border-0 mb-2" key={index}>
              <Link to={`/news/${data.id}`}>
                <div className="card-body p-0 mt-3">
                  <div className="row align-items-center ">
                    <div className="col-lg-8 p-0">
                      <div className="p-5 py-2 ps-0">
                        {/* Title */}
                        <h4 className="main-color">{data.news_title}</h4>
                        {/* Description */}
                        <p className="text-muted">{data.news_short_brief}</p>
                        {/* posting time */}
                        <small className="secondary-text secondary-color">
                          {data.news_time}
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <img
                          className="img-fluid w-100 rounded"
                          src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-12">
          {/* Button to load more items */}
          <button
            className="submit-btn-one rounded-pill px-5 shadow-sm"
            onClick={handleLoadMore}
          >
            আরও দেখুন।
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
