import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PropTypes from "prop-types";
import axios from "axios";

const NewsSectionThree = ({ dhormo, loading }) => {
  const [slicedNews, setSlicedNews] = useState([]);
  const [slicedNewsAll, setSlicedNewsAll] = useState([]);

  useEffect(() => {
    if (dhormo && dhormo.length > 0) {
      // Slice the first 5 items
      setSlicedNews(dhormo);
      setSlicedNewsAll(dhormo);
    }
  }, [dhormo]);

  const hasFeaturedItems = slicedNewsAll.some(
    (newsItem) => newsItem.is_featured === 1
  );
const [addvertisementDhormo, setAdvertisementDhormo] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAdvertisementDhormo(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementDhormo(response.data.data);
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
        <div className="col-lg-6">
          {hasFeaturedItems &&
            slicedNewsAll.map((newsItem, index) => (
              <div key={index}>
                {newsItem.is_featured === 1 && (
                  <p key={index}>
                    {/* {newsItem.is_featured} */}
                    <Link
                      to={`/${newsItem.category_name_bangla}/${newsItem.id}`}
                      key={newsItem.id}
                    >
                      <div className="card border-0">
                        <div className="card-body p-0">
                          <img
                            className="img-fluid dhormo-feature-image"
                            src={`https://ajkal.us/images/${newsItem.title_img}`}
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
                            {newsItem.news_title}
                          </h5>
                        </div>
                      </div>
                    </Link>
                  </p>
                )}
              </div>
            ))}
        </div>
        <div className="col-lg-6">
          {loading ? (
            // Render skeleton loading placeholders
            <>
              <Skeleton height={100} width={100} count={3} />
            </>
          ) : (
            // Render actual data
            dhormo.slice(0, 5).map((data) => (
              <Link
                to={`/${data.category_name_bangla}/${data.id}`}
                className="text-muted"
                key={data.id}
              >
                <div className="d-flex align-items-center mb-3">
                  <div className="">
                    <img
                      className="rounded-2 submenu-category"
                      src={`https://ajkal.us/images/${data.title_img}`}
                      alt=""
                      onError={(e) => {
                        e.target.src =
                          "https://ajkal.us/image/settings/placeholder.jpg";
                      }}
                    />
                  </div>
                  <div className="">
                    <h6 className="mb-0 text-muted fw-semibold ps-4">
                      {data && data.news_title.split(" ").slice(0, 7).join(" ")}
                    </h6>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {addvertisementDhormo.map(
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

// Prop types validation
NewsSectionThree.propTypes = {
  dhormo: PropTypes.array.isRequired,
};

export default NewsSectionThree;
