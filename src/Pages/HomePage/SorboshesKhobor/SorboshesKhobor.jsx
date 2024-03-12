import React, { useEffect, useState } from "react";
import "./SorboshesKhobor.css";
import { Link } from "react-router-dom";
import axios from "axios";
const SorboshesKhobor = () => {
  const [sorboshesPothitoData, setSorboshesPothitoData] = useState([]);
  const [sorboshesData, setSorboshesData] = useState([]);

  const url = "https://news.goexpressus.com/viewed-news";
  const urlsorboshes = "https://news.goexpressus.com/latest-news";

  useEffect(() => {
    axios
      .get(urlsorboshes)
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

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setSorboshesPothitoData(response.data);
        } else if (Array.isArray(response.data.data)) {
          setSorboshesPothitoData(response.data.data);
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
    <div className="row mb-5 mt-5">
      <div className="col-lg-8">
        <div style={{ borderBottom: "2px solid var(--secondary)" }}>
          <h5 className="text-muted">সর্বশেষ আজকাল</h5>
        </div>
        <div className="row mt-4">
          {sorboshesData.length === 0 ? (
            <p>No data available</p>
          ) : (
            sorboshesData.map((data, index) => (
              <div className="col-lg-4 mb-3" key={index}>
                <Link to={`/news/${data.id}`}>
                  <div className="card rounded-1 border-0 shadow-sm">
                    <div className="card-body card-body-1">
                      <div>
                        <p className="secondary-color">{data.category}</p>
                        <p className="text-muted">{data.postTime}</p>
                        <h5 className="main-color">{data.postTitle}</h5>
                        <p>{data.postDescription}</p>
                      </div>
                    </div>
                    <div className="card-body p-0 card-body-2">
                      <img
                        className="sorboshes-news-image"
                        src={data.postImage}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="col-lg-4">
        <div style={{ borderBottom: "2px solid var(--secondary)" }}>
          <h5 className="text-muted">সর্বাধিক পঠিত</h5>
        </div>
        <div className="row mt-3">
          {sorboshesPothitoData.map((data, index) => (
            <div className="col-lg-12 mt-2" key={index}>
              <Link to={`/news/${data.id}`}>
                <div className="card mb-1 border-0 shadow-sm rounded-2">
                  <div className="card-body p-0 d-flex align-items-center">
                    <div className="pothito-img w-25 h-100 ">
                      <img
                        className="img-fluid rounded-1"
                        width={105}
                        height={60}
                        src={
                          data.thumbnail_img
                            ? data.thumbnail_img
                            : "https://i.ibb.co/jRBh5pr/canva-news-update-opening-video-c-E-6jfu-Ir-PA.jpg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="pothito-content w-75 ps-4">
                      <div>
                        <h5 className="main-color">{data.category}</h5>
                        <p className="m-0 text-muted">{data.news_title}...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SorboshesKhobor;
