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
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { MdOutlineContactPhone } from "react-icons/md";
import PrayerTimeComponent from "../../Comps/PrayerTimeComponent/PrayerTimeComponent";

const HomePage = () => {
  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";
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

  const renderAdvertisement = (adPosition) => {
    return addvertisement.map((data) => {
      if (data.status === 1 && data.ad_position === adPosition) {
        return (
          <Link to={data.ad_link} key={data.id} target="_blank">
            <img
              className="img-fluid w-100"
              alt={data}
              loading="lazy"
              src={`https://ajkal.us/img/ad/${data.ad_banner}`}
              onError={(e) => {
                e.target.src =
                  "https://ajkal.us/img/settings/ad-placeholder-sidebar.jpg";
              }}
            />
          </Link>
        );
      }
      return null; // Return null if conditions are not met
    });
  };
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
                {addvertisement.map((data) => {
                  if (
                    data.status === 1 &&
                    data.ad_position === "BelowNewsCategoryFull"
                  ) {
                    return (
                      <Link
                        to={data.ad_link}
                        key={data.id}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="img-fluid w-100"
                          alt={`Advertisement ${data.id}`}
                          loading="lazy"
                          src={`https://ajkal.us/img/ad/${data.ad_banner}`}
                          onError={(e) => {
                            e.target.src =
                              "https://ajkal.us/img/settings/ad-placeholder.jpg";
                          }}
                        />
                      </Link>
                    );
                  } else {
                    return null; // Don't render anything if conditions are not met
                  }
                })}
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
              {/*home page sidebar youtube down Add Banner Start */}
              <div className="mt-3">{renderAdvertisement("SideBar1")}</div>
              <div className="mt-3">{renderAdvertisement("Sidebar3")}</div>
              <div className="mt-3">{renderAdvertisement("Sidebar2")}</div>
              {/*home page sidebar youtube down Add Banner End */}
              <div className="pt-3">
                <div className="card border-0">
                  <div className="card-header text-center p-0 border-0">
                    <h5 className="mb-0 sidebar_menu_link_title p-2 text-white">
                      বিজ্ঞাপন
                    </h5>
                  </div>
                  <div className="card-body p-3 sidebar_bigapon_area">
                    <div className="p-3 px-5">
                      <div className="mx-4 mb-2">
                        <Link to={'/ad-rate-print'}>
                          <div className="d-flex align-items-center">
                            <div className="sidebar_menu_icons py-3 px-3 text-center">
                              <FaBusinessTime size={25} />
                            </div>
                            <div className="sidebar_menu_links p-2">
                              <span className="ps-3">প্রিন্ট সংস্করণ</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="mx-4 mb-2">
                        <Link to="">
                          <div className="d-flex align-items-center">
                            <div className="sidebar_menu_icons py-3 px-3 text-center">
                              <MdOutlineOnlinePrediction size={25} />
                            </div>
                            <div className="sidebar_menu_links p-2">
                              <span className="ps-3">অনলাইন সংস্করণ</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="mx-4 mb-2">
                        <Link to={'/contact'}>
                          <div className="d-flex align-items-center">
                            <div className="sidebar_menu_icons py-3 px-3 text-center">
                              <MdOutlineContactPhone size={25} />
                            </div>
                            <div className="sidebar_menu_links p-2">
                              <span className="ps-3">যোগাযোগের ঠিকানা</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <PrayerTimeComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row mb-4">
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
                <div>
                  {addvertisement.map(
                    (data) =>
                      // Check if data.status is "1" and data.ad_position is "HeaderTop"
                      data.status === 1 &&
                      data.ad_position === "HeaderTop" && (
                        <Link to={data.ad_link} key={data.id} target="_blank">
                          <img
                            className="img-fluid w-100"
                            src={`https://ajkal.us/img/ad/${data.ad_banner}`}
                            alt={`https://ajkal.us/img/ad/${data.ad_banner}`}
                            onError={(e) => {
                              e.target.src =
                                "https://ajkal.us/img/settings/placeholder.jpg";
                            }}
                          />
                        </Link>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row mb-4">
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
