import React, { useEffect, useState } from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import Banner from "./Banner/Banner";
import FeatureNews from "./FeatureNews/FeatureNews";
import SorboshesKhobor from "./SorboshesKhobor/SorboshesKhobor";
import Categories from "./Categories/Categories";
import CategoryWiseNews from "./CategoryWiseNews/CategoryWiseNews";
import VideoNews from "./VideoNews/VideoNews";
import MostRecent from "./MostRecent/MostRecent";
import CategoryNewsOne from "./CategoryNewsOne/CategoryNewsOne";
import CategoryNewsTwo from "./CategoryNewsTwo/CategoryNewsTwo";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [advertisement, setAdvertisement] = useState([]);

  useEffect(() => {
    const url = "https://news.goexpressus.com/ad/all";

    axios
      .get(url)
      .then((response) => {
        setAdvertisement(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(advertisement);
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
                  className="w-100 zoom-image img-fluid "
                  src="https://i.ibb.co/YB3fYnL/main-Ad-Mid.jpg"
                  alt=""
                  loading="lazy"
                />
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
                <Link to={"#"}>
                  <button className="submit-btn-one w-100 mx-0 rounded-0 p-1">
                    বিজ্ঞাপন কর্নার
                  </button>
                </Link>
              </div>
              {/* Add Banner Start */}
              <div className="mb-2">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/xSV6xdY/Image-5.jpg"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/LPgDTs6/Image-6.jpg"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/GJvNFh6/Image-8.jpg"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/jMKbN8P/Image-9.jpg"
                  alt=""
                />
              </div>
              <div className="mb-2">
                <img
                  className="img-fluid"
                  src="https://i.ibb.co/fGH148g/Image-10.jpg"
                  alt=""
                />
              </div>
              {/* Add Banner End */}
              <div
                className="d-flex justify-content-center  align-items-center "
                style={{ height: "7rem", border: "2px dashed var(--main)" }}
              >
                <p className="mb-0">Facebook Like Box</p>
              </div>
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
                <img
                  className="img-fluid w-100 mt-4"
                  src="https://i.ibb.co/JdGPxKn/Image-11.jpg"
                  alt=""
                />
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
            <div className="col-lg-12">
              {/* aasd */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
