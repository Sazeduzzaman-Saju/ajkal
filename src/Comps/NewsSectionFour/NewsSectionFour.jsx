import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const NewsSectionThree = ({ dhormo, loading }) => {
  return (
    <div>
      <div className="row align-items-center ">
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <>
              <Skeleton height={200} count={3} />
            </>
          ) : (
            // Render actual data
            dhormo.map((data) =>
              data.is_featured === "1" ? (
                <Link to={`/news/${data.id}`} key={data.id}>
                  <div className="card border-0">
                    <div className="card-body p-0">
                      <img
                        className="img-fluid"
                        height={235}
                        style={{ objectFit: "fit" }}
                        src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                        alt=""
                      />
                      <h5
                        className="m-0 p-0 py-3 text-center text-white"
                        style={{ backgroundColor: "var(--main)" }}
                      >
                        {data.news_title}
                      </h5>
                    </div>
                  </div>
                </Link>
              ) : null
            )
          )}
        </div>
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <>
              <Skeleton height={100} width={100} count={3} />
            </>
          ) : (
            // Render actual data
            dhormo.slice(0, 4).map((data) => (
              <Link
                to={`/news/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div className="d-flex align-items-center mb-3 row">
                  <div className="col-lg-3">
                    <img
                      className="rounded-2"
                      width={90}
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt=""
                    />
                  </div>
                  <div className="col-lg-9">
                    <h6 className="mb-0 text-muted fw-semibold ">
                      {data.news_title}
                    </h6>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsSectionThree;
