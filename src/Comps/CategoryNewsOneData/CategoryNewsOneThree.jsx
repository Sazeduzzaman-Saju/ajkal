import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

const CategoryNewsTwoData = () => {
  const [bangladeshNews, setBangladeshNews] = useState([]);
  const [loadingBangladesh, setLoadingBangladesh] = useState(true);
  const url = "https://backoffice.ajkal.us/category-news/13";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBangladeshNews(response.data.slice(0, 6));
        } else if (response.data && Array.isArray(response.data.data)) {
          setBangladeshNews(response.data.data.slice(0, 6));
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
      .finally(() => setLoadingBangladesh(true));
  }, []);

  const [slicedNewsAll, setSlicedNewsAll] = useState([]);

  useEffect(() => {
    if (bangladeshNews && bangladeshNews.length > 0) {
      // Slice the first 5 items
      setSlicedNewsAll(bangladeshNews);
    }
  }, [bangladeshNews]);

  const hasFeaturedItems = slicedNewsAll.some(
    (newsItem) => newsItem.is_featured === 1
  );
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
          hasFeaturedItems &&
          slicedNewsAll.map((data, index) => (
            <div key={index}>
              {data.is_featured === 1 && (
                <p key={index}>
                  {/* {newsItem.is_featured} */}
                  <Link
                    to={`/${data.category_name_bangla}/${data.id}`}
                    className="text-muted"
                    key={data.id}
                  >
                    <div>
                      <p className="cnewsone_title">
                        {data.category_name_bangla}
                      </p>
                    </div>
                    <div className="card ctn_one">
                      <div className="card-body p-0">
                        <img
                          className="img-fluid bottom-there-cat"
                          // height={310}
                          // style={{ objectFit: "fit" }}
                          src={`https://ajkal.us/images/${data.title_img}`}
                          alt=""
                          onError={(e) => {
                            e.target.src =
                              "https://ajkal.us/image/settings/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div className="card-footer news-info-box">
                        <div className="news-hover-box">
                          <Link to={`/${data.category_name_bangla}/${data.id}`}>
                            <p className="mb-0 text-white">
                              {data.category_name_bangla}
                            </p>
                            <h5 className="mb-0 text-white">
                              {data.news_title.split(" ").slice(0, 7).join(" ")}
                            </h5>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Link>
                </p>
              )}
            </div>
          ))
        )}
      </div>
      {/* Regular News */}
      <div>
        {bangladeshNews.map((data) => (
          <div className="card border-0 shadow-sm mb-3" key={data.id}>
            <Link to={`/${data.category_name_bangla}/${data.id}`}>
              <div className="card-body ctnone_regular-news d-flex p-0 align-items-center ">
                <div>
                  <img
                    className="rounded-1"
                    width={150}
                    src={`https://ajkal.us/images/${data.title_img}`}
                    alt=""
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                </div>
                <div>
                  <h6 className="ps-3 main_color">{data.news_title}</h6>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryNewsTwoData;
