import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const CategoryNewsSlider = ({ singleNews, loading }) => {

  return (
    <div>
      {loading ? (
        // Render skeleton loading placeholders
        <Skeleton height={200} count={3} />
      ) : (
        // Render actual data
        singleNews.map((data) =>
          data.is_featured === "1" ? (
            <Link
              to={`/news/${data.id}`}
              className="shadow-sm"
              key={data.id}
            >
              <div className="card rounded-0 border-0 ">
                <div className="card-header p-0"></div>
                <div className="card-body p-0">
                  <div>
                    <img
                      className="img-fluid w-100 category-slider-img"
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt=""
                    />
                  </div>
                  <div
                    className="p-2 feature-text-area"
                    style={{ backgroundColor: "var(--main)" }}
                  >
                    <h4 className="pt-1 mb-1 text-white">
                      {data.news_title.slice(0, 50)}
                    </h4>
                  </div>
                </div>
              </div>
            </Link>
          ) : null
        )
      )}
    </div>
  );
};

export default CategoryNewsSlider;
