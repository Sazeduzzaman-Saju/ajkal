import React, { useEffect, useState } from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";
import SorboshesKhobor from "./SorboshesKhobor/SorboshesKhobor";
import CategoryWiseNews from "./CategoryWiseNews/CategoryWiseNews";
import VideoNews from "./VideoNews/VideoNews";
import CategoryNewsOne from "./CategoryNewsOne/CategoryNewsOne";
import CategoryNewsTwo from "./CategoryNewsTwo/CategoryNewsTwo";
import { Link } from "react-router-dom";
import axios from "axios";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FacebookEmbed, YouTubeEmbed } from "react-social-media-embed";

const HomePage = () => {
  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://news.goexpressus.com/ad/all";
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
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
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <PageTitle title="সাপ্তাহিক আজকাল || Saptahik Ajkal" description="Text" />
      <section>
        {/* Banner  Section */}
        <div className="container-fluid px-0">
          <Banner />
        </div>
        {/* Banner Feature Cards */}
        <div className="container feature-top-section">
          <div className="row">
            <div className="col-lg-12">
              <FeatureNews />
            </div>
          </div>
        </div>
        {/* Sroboses Khobor Area Start */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <SorboshesKhobor />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="image-container">
                {addvertisement.map((data) =>
                  // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
                  data.ad_category_id === "4" && data.status === "1" ? (
                    <Link to={data.ad_link} target="_blank" key={data.id}>
                      <img
                        className="w-100 zoom-image img-fluid "
                        src={`https://ajkal.goexpressus.com/images/${data.ad_banner}`}
                        alt={"advertisement"}
                        loading="lazy"
                      />
                    </Link>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <CategoryWiseNews />
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
                className="pt-3"
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
                    <Link to={data.ad_link} target="_blank">
                      <img
                        className="img-fluid side-add"
                        src={`https://ajkal.goexpressus.com/images/${data.ad_banner}`}
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
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              <VideoNews />
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row mb-2">
            <div className="col-lg-12">
              <CategoryNewsOne></CategoryNewsOne>
              <div>
                {addvertisement.map((data) =>
                  // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
                  data.ad_category_id === "5" && data.status === "1" ? (
                    <div className="mb-2" key={data.id}>
                      <Link to={data.ad_link} target="_blank">
                        <img
                          className="img-fluid w-100 mt-4"
                          src={`https://ajkal.goexpressus.com/images/${data.ad_banner}`}
                          alt=""
                        />
                      </Link>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              <CategoryNewsTwo></CategoryNewsTwo>
            </div>
          </div>
        </div>
        {/* Category Links */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">{/* aasd */}</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
