import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const CategoryNewsTwoData = () => {
  const [bangladeshNews, setBangladeshNews] = useState([]);
  const [loadingBangladesh, setLoadingBangladesh] = useState(true);
  const url = "https://backoffice.ajkal.us/category-news/8";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBangladeshNews(response.data);
        } else if (Array.isArray(response.data.data)) {
          setBangladeshNews(response.data.data);
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
      .finally(() => setLoadingBangladesh(false));
  }, []);

  return (
    <div className="col-lg-4">
      {/* Feature News */}
      <div>
        {loadingBangladesh ? (
          // Skeleton loader for feature news
          <div className="card ctn_one">
            <Skeleton height={200} />
            <div className="card-footer news-info-box">
              <div className="news-hover-box">
                <Skeleton width={100} />
                <Skeleton width={200} />
              </div>
            </div>
          </div>
        ) : (
          // Render actual feature news once data is loaded
          bangladeshNews.map((data) =>
            data.is_featured === "1" ? (
              <Link
                to={`/${data.category_name_bangla}/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div>
                  <p className="cnewsone_title">{data.category_name_bangla}</p>
                </div>
                <div className="card ctn_one">
                  <div className="card-body p-0">
                    <img
                      className="img-fluid"
                      height={310}
                      style={{ objectFit: "fit" }}
                      src={`https://ajkal.us/images/${data.title_img}`}
                      alt=""
                    />
                  </div>
                  <div className="card-footer news-info-box">
                    <div className="news-hover-box">
                      <Link to={`/${data.category_name_bangla}/${data.id}`}>
                        <p className="mb-0 text-white">
                          {data.category_name_bangla}
                        </p>
                        <h5 className="mb-0 text-white">
                          {data.news_title.slice(0, 28)}
                        </h5>
                      </Link>
                    </div>
                  </div>
                </div>
              </Link>
            ) : null
          )
        )}
      </div>
      {/* Regular News */}
      <div>
        {loadingBangladesh
          ? // Skeleton loader for regular news
            Array.from({ length: 3 }, (_, index) => (
              <div className="card border-0 shadow-sm mb-3" key={index}>
                <Skeleton height={200} />
                <div className="card-footer news-info-box">
                  <div className="news-hover-box">
                    <Skeleton width={100} />
                    <Skeleton width={200} />
                  </div>
                </div>
              </div>
            ))
          : // Render actual regular news once data is loaded
            bangladeshNews.slice(0, 3).map((data) =>
              data.is_featured === "0" ? (
                <div className="card border-0 shadow-sm mb-3" key={data.id}>
                  <Link to={`/${data.category_name_bangla}/${data.id}`}>
                    <div className="card-body ctnone_regular-news d-flex p-0 align-items-center ">
                      <div>
                        <img
                          className="rounded-1"
                          width={150}
                          src={`https://ajkal.us/images/${data.title_img}`}
                          alt=""
                        />
                      </div>
                      <div>
                        <h6 className="ps-3 main_color">{data.news_title}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : null
            )}
      </div>
    </div>
  );
};

export default CategoryNewsTwoData;
