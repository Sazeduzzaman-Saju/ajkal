import React from "react";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import "./Categories.css";
import { Link, useLoaderData } from "react-router-dom";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";

const Categories = () => {
  const singleNews = useLoaderData();
  console.log(singleNews)

  return (
    singleNews && singleNews.data.length > 0 ? (
      <div className="container">
        <PostHeader title="বিশ্ব" />
        <div className="row">
          <CategoryFeature />
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

        {/* Advertisement Box */}
        <div className="row align-content-center ">
          <div className="col-lg-12">
            <div className="d-flex justify-content-center ">
              <img
                src="https://www.adgully.com/banners/ezgif_com_gif_maker__1__183907.gif"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Advertisement Box End */}
        
        <hr />

        <div className="row">
          <div className="col-lg-8 offset-2 mx-auto">
            <div className="row align-items-center py-3">
              {/* ... (existing code) ... */}
            </div>

            {/* ... (existing code) ... */}
            
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
    )
  );
};

export default Categories;
