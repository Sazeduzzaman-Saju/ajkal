import React from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import "./Categories.css";
import { Link, useLoaderData } from "react-router-dom";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";

const Categories = () => {
  const singleNews = useLoaderData();
  const categoryBanglaName =
    singleNews && singleNews.data.length > 0
      ? singleNews.data[0].category_name_bangla
      : "";

  console.log(categoryBanglaName);

  return singleNews && singleNews.data.length > 0 ? (
    <div className="container">
      <PostHeader title={categoryBanglaName} />
      <div className="row">
        <CategoryFeature singleNews={singleNews.data.slice(0, 4)} />
        <div className="col-lg-4">
          <div className="d-flex justify-content-center align-items-center ">
            <img
              src="https://i.ibb.co/j39LZmN/Give-Advertisement.jpg"
              alt=""
              className="img-fluid"
            />
          </div>
          <NewsSidebar />
          <div className="d-flex justify-content-center align-items-center pt-3 ">
            <img
              src="https://i.ibb.co/CHz52fX/goldenagehome.jpg"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />

      <div className="row">
        <div className="col-lg-10 mx-auto">
          {singleNews.data.map((data) => (
            <Link to={`/news/${data.id}`} key={data.id}>
              <div className="row align-items-center py-3">
                <div className="col-sm-7">
                  <div>
                    <h4 className="main_color">{data.news_title}</h4>
                    <p className="text-muted">{data.news_short_brief}</p>
                    <p className="text-primary">আরও পড়ুন...</p>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div>
                    <img
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      className="img-fluid rounded-1"
                      alt="{data.news_title}"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <div className="row pt-3">
            <div className="col-lg-12 pt-3 pb-5">
              <div className="d-flex justify-content-start align-items-center ">
                <Link className="text-center">
                  <button className="submit-btn-one rounded-pill px-5">
                    আরও দেখুন
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>No data available</div>
  );
};

export default Categories;
