import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";

const HomePage = () => {
  return (
    <>
      <PageTitle title="সাপ্তাহিক আজকাল || Saptahik Ajkal" description="Text" />
      <section>
        {/* Banner  Section */}
        <div className="container-fluid px-0">
          <Banner></Banner>
        </div>
        {/* Banner Feature Cards */}
        <div className="container feature-top-section">
          <div className="col-lg-12">
            <FeatureNews></FeatureNews>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default HomePage;
