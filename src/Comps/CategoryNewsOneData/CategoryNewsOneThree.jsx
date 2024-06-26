import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import LazyImageShortNews from "../LazyImage/LazyImageShortNews";
import SanitizedParagraph from "../SanitizedParagraph";

const CategoryNewsOneData = () => {
  const [comunity, setComunity] = useState([]);
  const [loadingBangladesh, setLoadingBangladesh] = useState(true);
  const url = "https://backoffice.ajkal.us/category-news/13";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setComunity(response.data.slice(0, 6));
        } else if (Array.isArray(response.data.data)) {
          setComunity(response.data.data.slice(0, 6));
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
      .finally(() => setLoadingBangladesh(false)); // Set loading to false when request is complete
  }, []);

  const [slicedNewsAll, setSlicedNewsAll] = useState([]);

  useEffect(() => {
    if (comunity && comunity.length > 0) {
      // Slice the first 5 items
      setSlicedNewsAll(comunity);
    }
  }, [comunity]);

  const hasFeaturedItems = slicedNewsAll.some(
    (newsItem) => newsItem.is_featured === 1
  );
  return (
    <div className="col-lg-4">
      {/* Feature News */}
      <div>
        {hasFeaturedItems &&
          slicedNewsAll.map((data, index) => (
            <div key={index}>
              {data.is_featured === 1 && (
                <div key={index}>
                  <Link
                    to={`/${data.category_name}/${data.id}`}
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
                        <LazyImageShortNews
                          src={`https://ajkal.us/img/news/${data?.title_img}`}
                          alt={data?.news_title}
                          className="img-fluid bottom-there-cat"
                          errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                          width="100%"
                          height="auto"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="card-footer news-info-box">
                        <div className="news-hover-box">
                          <h5 className="mb-0 text-white">
                            {data.news_title.split(" ").slice(0, 7).join(" ")}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          ))}
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
            comunity.map((data) => {
              // Check if the news is not featured
              if (data.is_featured !== 1) {
                return (
                  <div className="card border-0 shadow-sm mb-3" key={data.id}>
                    <Link to={`/${data.category_name}/${data.id}`}>
                      <div className="card-body ctnone_regular-news d-flex p-0 align-items-center ">
                        <div className="row align-items-center ">
                          <div className="col-lg-4">
                            <div>
                              <LazyImageShortNews
                                src={`https://ajkal.us/img/news/${data?.title_img}`}
                                alt={data?.news_title}
                                className="rounded-top-1 rounded-bottom-0"
                                errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                                width="200px"
                                height="90px"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div>
                              <div className="main_color pe-2 fw-bolder">
                                {/* {data.news_title} */}
                                <SanitizedParagraph
                                  htmlContent={data.news_title
                                    .split(" ")
                                    .slice(0, 4)
                                    .join(" ")}
                                />
                              </div>
                              <div className="text-muted mb-0">
                                <SanitizedParagraph
                                  htmlContent={data.news_short_brief
                                    .split(" ")
                                    .slice(0, 4)
                                    .join(" ")}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
              // Return null if the news is featured
              return null;
            })}
      </div>
    </div>
  );
};

export default CategoryNewsOneData;
