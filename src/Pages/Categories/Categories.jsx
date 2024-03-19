import React from "react";
import "./Categories.css";
import { Link, useLoaderData } from "react-router-dom";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";
import { Triangle } from "react-loader-spinner";
import NoData from "../../Comps/NoData/NoData";
import CommonLoader from "../../Comps/CommonLoader/CommonLoader";

const Categories = () => {
  const singleNews = useLoaderData();
  const categoryBanglaName =
    singleNews && singleNews.data.length > 0
      ? singleNews.data[0].category_name_bangla
      : "";

  return singleNews ? (
    <div className="container">
      <PageHelmet
        title={categoryBanglaName}
        type="article"
        image="https://i.ibb.co/6D35WjX/logo.png" // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card="https://i.ibb.co/6D35WjX/logo.png"
        description={singleNews.news_detail} // Replace with appropriate description field from singleNewsDetails
      />
      {singleNews.data.length > 0 ? (
        <>
          <div className="row pt-3">
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
                        <p
                          className="text-muted"
                          dangerouslySetInnerHTML={{
                            __html: data.news_detail.slice(0, 198),
                          }}
                        ></p>

                        <p className="text-danger">আরও পড়ুন...</p>
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
                  <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                    <Link to={`/news/${singleNews.data[0].id}`}>
                      <button className="submit-btn-one rounded-pill px-5">
                        আরও দেখুন
                      </button>
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <NoData></NoData>
        </div>
      )}
    </div>
  ) : (
    <div className="">
      <CommonLoader></CommonLoader>
    </div>
  );
};

export default Categories;
