import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";
import SorboshesKhobor from "./SorboshesKhobor/SorboshesKhobor";
import Categories from "./Categories/Categories";
import CategoryWiseNews from "./CategoryWiseNews/CategoryWiseNews";
import VideoNews from "./VideoNews/VideoNews";
import MostRecent from "./MostRecent/MostRecent";

const HomePage = () => {
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
                <img
                  className="w-100 zoom-image"
                  height={300}
                  src="https://i.ibb.co/MCZhJmn/roma-post-01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <CategoryWiseNews />
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container-fluid" style={{ backgroundColor: "#fff3e0" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <MostRecent></MostRecent>
              </div>
            </div>
          </div>
        </div>
        {/* Category Post Show Style One */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <VideoNews />
            </div>
          </div>
        </div>
        {/* Category Links */}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Categories />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
