import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const NewsSectionThree = ({ khelarNews }) => {
  if (!khelarNews) {
    return <div>Loading...</div>; // Display a loading indicator if khelarNews is not available yet
  }
  return (
    <div>
      <div className="row mb-5 align-items-center ">
        <div className="col-lg-3">
          {khelarNews.map((data) => (
            <Link to={`/news/${data.id}`} className="text-muted" key={data.id}>
              <div className="d-flex align-items-center mb-3 row">
                <div className="col-lg-4">
                  <img
                    className="rounded-1"
                    width={100}
                    src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                    alt=""
                  />
                </div>
                <div className="col-lg-8">
                  <h6 className="mb-0 text-muted fw-semibold ">
                    {data.news_title}
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="col-lg-6">
          {khelarNews.map((data) =>
            // Check if data "is_featured" is equal to "1"
            data.is_featured === "1" ? (
              <Link to={`/news/${data.id}`} key={data.id}>
                <div className="card border-0">
                  <div className="card-body p-0">
                    <img
                      className="w-100 rounded-2 img-fluid"
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt=""
                    />
                    <h5 className="m-0 p-0 pt-2 text-center text-muted ">
                      {data.news_title}
                    </h5>
                  </div>
                </div>
              </Link>
            ) : // If not featured, render other content or nothing
            null
          )}
        </div>
        <div className="col-lg-3">
          {khelarNews.map((data) => (
            <Link to={`/news/${data.id}`} className="text-muted" key={data.id}>
              <div className="d-flex align-items-center mb-3 row">
                <div className="col-lg-4">
                  <img
                    className="rounded-1"
                    width={100}
                    src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                    alt=""
                  />
                </div>
                <div className="col-lg-8">
                  <h6 className="mb-0 text-muted fw-semibold ">
                    {data.news_title}
                  </h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSectionThree;
