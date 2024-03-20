import React, { useEffect, useState } from "react";
import "./SorboshesKhobor.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import BanglaTimeAgo from "../../../Comps/BanglaTime/BanglaTimeDiffrence";

const SorboshesKhobor = () => {
  const [sorboshesPothitoData, setSorboshesPothitoData] = useState([]);
  const [sorboshesData, setSorboshesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://news.goexpressus.com/viewed-news";
  const urlsorboshes = "https://news.goexpressus.com/latest-news";

  useEffect(() => {
    axios
      .get(urlsorboshes)
      .then((response) => {
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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Make sure to set loading to false even if there's an error
      });
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
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
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Make sure to set loading to false even if there's an error
      });
  }, []);

  return (
    <div className="row mb-5 mt-5">
      {loading ? (
        // Show skeleton while loading
        <div className="skeleton-wrapper">
          <Skeleton height={500} />
        </div>
      ) : (
        <>
          <div className="col-lg-8">
            <div style={{ borderBottom: "2px solid var(--secondary)" }}>
              <h5 className="text-muted">সর্বশেষ আজকাল</h5>
            </div>
            <div className="row mt-4">
              {sorboshesData.map((data, index) => (
                <div className="col-lg-4 mb-3" key={index}>
                  <Link to={`/news/${data.id}`}>
                    <div className="card rounded-1 border-0 shadow-sm">
                      <div className="card-body card-body-1 w-lg-auto w-100">
                        <div>
                          <p className="secondary-color">
                            {data.category_name_bangla}
                          </p>
                          <p className="text-muted">
                            <BanglaTimeAgo postTime={data.news_time} />
                          </p>
                          <p className="text-muted"></p>
                          <h5 className="main-color">
                            {data.news_title.slice(0, 24)}..
                          </h5>
                          <p>
                            {data.news_short_brief.slice(0, 110)}
                            <span className="text-primary">...</span>
                          </p>
                        </div>
                      </div>
                      <div className="card-body p-0 card-body-2">
                        <img
                          className="sorboshes-news-image"
                          src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                          alt=""
                        />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
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
                            style={{ height: "70px", objectFit: "cover" }}
                            src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                            alt=""
                          />
                        </div>
                        <div className="pothito-content w-75 ps-4">
                          <div>
                            <h5 className="main-color">
                              {data.category_name_bangla}
                            </h5>
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
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SorboshesKhobor;
