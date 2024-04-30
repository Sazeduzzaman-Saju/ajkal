import React, { useEffect, useState } from "react";
import "./Categories.css";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";
import NoData from "../../Comps/NoData/NoData";
import CommonLoader from "../../Comps/CommonLoader/CommonLoader";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FacebookEmbed, YouTubeEmbed } from "react-social-media-embed";
import axios from "axios";
import SanitizedParagraph from "../../Comps/SanitizedParagraph";

const Categories = () => {
  const [addvertisement, setAddvertisement] = useState([]);
  const [showMoreCount, setShowMoreCount] = useState(5); // Initial count
  const singleNews = useLoaderData();
  const location = useLocation();

  // Fetch advertisement data
  useEffect(() => {
    const addUrl = "https://backoffice.ajkal.us/ad/all";
    axios
      .get(addUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAddvertisement(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAddvertisement(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching advertisement data:", error);
      });
  }, []);

  // Reset showMoreCount when location (pathname) changes
  useEffect(() => {
    setShowMoreCount(5); // Reset count to initial value
  }, [location.pathname]);

  // Handle "Load More" button click
  const handleShowMore = () => {
    setShowMoreCount((prevCount) => prevCount + 5); // Increment count by 5
  };
  return singleNews ? (
    <div className="container">
      <PageHelmet
        title={singleNews.categoryBanglaName}
        type="article"
        image="https://i.ibb.co/6D35WjX/logo.png" // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card="https://i.ibb.co/6D35WjX/logo.png"
        description={singleNews.news_detail} // Replace with appropriate description field from singleNewsDetails
      />
      {singleNews.data.length > 0 ? (
        <>
          <div className="row pt-3">
            <CategoryFeature singleNews={singleNews.data} />
            <div className="col-lg-4">
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
            <div className="col-lg-8">
              {singleNews &&
                singleNews.data.slice(0, showMoreCount).map((data) => (
                  <Link to={`/${data.category_name_bangla}/${data.id}`} key={data.id}>
                    <div className="row align-items-center py-3">
                      <div className="col-sm-7">
                        <div>
                          <h4 className="main_color">{data.news_title}</h4>

                          <p className="text-muted">
                            <SanitizedParagraph
                              className="text-muted"
                              htmlContent={data.news_detail
                                .split(" ")
                                .slice(0, 20)
                                .join(" ")}
                            ></SanitizedParagraph>
                          </p>

                          <p className="text-danger">আরও পড়ুন...</p>
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div>
                          <img
                            src={`https://ajkal.us/images/${data.title_img}`}
                            className="img-fluid rounded-1"
                            alt="{data.news_title}"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              {showMoreCount < (singleNews?.data?.length || 0) && (
                <div className="row pt-3">
                  <div className="col-lg-12 pt-3 pb-5">
                    <div className="d-flex justify-content-lg-start justify-content-center align-items-center ">
                      <button
                        className="submit-btn-one rounded-pill px-5"
                        onClick={handleShowMore}
                      >
                        আরও দেখুন
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <div className="mt-5">
                <PostHeader title="বিজ্ঞাপন কর্নার" />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FacebookEmbed
                  url="https://www.facebook.com/photo/?fbid=979852766901979"
                  width={418}
                />
              </div>
              <div
                className="pt-3 pb-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <YouTubeEmbed
                  url="https://www.youtube.com/watch?v=JQkevGu41D4"
                  width={418}
                  height={365}
                />
              </div>
              {/* Add Banner Start */}
              {addvertisement.map((data) =>
                // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
                data.ad_category_id === "3" && data.status === "1" ? (
                  <div className="mb-2" key={data.id}>
                    <Link to={data.ad_link}>
                      <img
                        className="img-fluid side-add"
                        src={`https://ajkal.us/images/${data.ad_banner}`}
                        alt=""
                      />
                    </Link>
                  </div>
                ) : null
              )}

              {/* Add Banner End */}
              <div className="">
                <div>
                  <div id="fb-root" />
                  <div
                    className="fb-page"
                    data-href="https://www.facebook.com/weeklyajkal/"
                    data-tabs="timeline"
                    data-width
                    data-height={400}
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/weeklyajkal/"
                      className="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/weeklyajkal/">
                        Weekly Ajkal
                      </a>
                    </blockquote>
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
