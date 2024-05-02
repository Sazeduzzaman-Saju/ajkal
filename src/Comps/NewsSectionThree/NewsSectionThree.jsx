import React, { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import axios from "axios";
import PropTypes from 'prop-types';

const NewsSectionThree = ({ khelarNews, loading }) => {
  const [addvertisementKhela, setAdvertisementKhela] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAdvertisementKhela(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementKhela(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div>
      <div className="row align-items-center ">
        {/* <p>{khelarNews}</p> */}
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <>
              <Skeleton height={100} width={100} count={3} />
            </>
          ) : (
            // Render actual data
            khelarNews.slice(0, 5).map((data) => (
              <Link
                to={`/${data.category_name_bangla}/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div className="d-flex align-items-center mb-3 row">
                  <div className="col-lg-3">
                    <img
                      className="img-fluid rounded-2"
                      width={90}
                      src={`https://ajkal.us/images/${data.title_img}`}
                      alt=""
                      onError={(e) => {
                        e.target.src =
                          "https://ajkal.us/image/settings/placeholder.jpg";
                      }}
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
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <>
              <Skeleton height={200} count={3} />
            </>
          ) : (
            // Render actual data
            khelarNews.map((data, index) =>
              data.is_featured === 1 ? (
                <div key={index}>
                  <Link to={`/${data.category_name_bangla}/${data.id}`}>
                    <div className="card border-0">
                      <div className="card-body p-0">
                        <img
                          className="img-fluid"
                          height={235}
                          style={{ objectFit: "cover", height: "250px" }}
                          src={`https://ajkal.us/images/${data.title_img}`}
                          alt=""
                          onError={(e) => {
                            e.target.src =
                              "https://ajkal.us/image/settings/placeholder.jpg";
                          }}
                        />
                        <h5
                          className="m-0 p-0 py-3 text-center text-white"
                          style={{ backgroundColor: "var(--main)" }}
                        >
                          {data.news_title &&
                            data.news_title.split(" ").slice(0, 7).join(" ")}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : null
            )
          )}
        </div>
        <div className="col-lg-12 pt-3">
          {addvertisementKhela.map(
            (data) =>
              // Check if data.status is "1" and data.ad_position is "HeaderTop"
              data.status === 1 &&
              data.ad_position === "BelowNewsCategory2" && (
                <Link to={data.ad_link} key={data.id} target="_blank">
                  <img
                    className="img-fluid w-100"
                    src={`https://ajkal.us/img/ad/${data.ad_banner}`}
                    alt={`https://ajkal.us/img/ad/${data.ad_banner}`}
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};
NewsSectionThree.propTypes = {
  khelarNews: PropTypes.array.isRequired, // Assuming khelarNews is still required
};
export default NewsSectionThree;
