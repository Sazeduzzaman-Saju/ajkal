import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewsSidebar = () => {
  const [sorboshesData, setSorboshesData] = useState([]);
  // সর্বাধিক পঠিত Api
  const url = "https://news.goexpressus.com/viewed-news";
  // সর্বাধিক পঠিত
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setSorboshesData(response.data);
        } else if (Array.isArray(response.data.data)) {
          setSorboshesData(response.data.data);
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
    <>
      {sorboshesData.map((data, index) => (
        <div className="col-lg-12 mt-3" key={index}>
          <Link to={`/news/${data.id}`}>
            <div className="card mb-1 border-0 shadow-sm rounded-2">
              <div className="card-body p-0 d-flex align-items-center">
                <div className="pothito-img w-25 h-100 ">
                  <img
                    className="img-fluid rounded-1"
                    style={{ height: "70px", objectFit: "cover" }}
                    src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                    alt=""
                  />
                </div>
                <div className="pothito-content w-75 ps-4">
                  <div>
                    <h5 className="main-color">{data.category_name_bangla}</h5>
                    <p className="m-0 text-muted">
                      {data.news_title.slice(0, 38)}
                      <span className="text-primary">...</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default NewsSidebar;
