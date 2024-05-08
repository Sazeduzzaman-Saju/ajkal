import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import NewsCategory from "../../Comps/NewsCategory/NewsCategory";
import axios from "axios";
import LazyImageShortNews from "../../Comps/LazyImage/LazyImageShortNews";

const Footer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://backoffice.ajkal.us/news-category";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if response status is successful
        if (
          response.data.status === "200" &&
          response.data.message === "success"
        ) {
          // Extract data array from the response
          const data = response.data.data;

          // Ensure that 'id' is converted to a number
          const formattedData = data.map((category) => ({
            ...category,
            id: parseInt(category.id),
          }));

          // Update state with formatted data
          setCategoriesData(formattedData);
        } else {
          console.error("API request failed with status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div
        className="container-fluid"
        style={{ backgroundColor: "var(--main)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 ps-0">
              <div
                style={{ width: "18%", background: "#fff", padding: "10px" }}
              >
                <Link to="/">
                  <LazyImageShortNews
                    src="https://ajkal.us/image/settings/logo_red.jpg"
                    alt="logo"
                    className="rounded-top-1 rounded-bottom-0"
                    errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                    width="250px"
                    height="auto"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-2 pb-3"
        style={{
          backgroundColor: "black",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 ps-0">
              <NewsCategory categories={categoriesData} />
              {/* Info */}
              <ul
                className="text-white"
                style={{ listStyle: "none", paddingLeft: "0" }}
              >
                <div className="row">
                  <div className="col-lg-3 d-flex">
                    <li className="nav-item pe-4">
                      <Link className="nav-link footer-links" to="/contact">
                        যোগাযোগ করুন
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-3">
                    <li className="nav-item pe-4">
                      <Link className="nav-link footer-links" to="/about">
                        আমাদের সম্পর্কে
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-3">
                    <li className="nav-item pe-4">
                      <Link className="nav-link footer-links" to="/terms">
                        শর্তাবলী
                      </Link>
                    </li>
                  </div>
                  <div className="col-lg-3">
                    <li className="nav-item pe-4">
                      <Link className="nav-link footer-links" to="/policy">
                        গোপনীয়তা নীতি
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="col-lg-2">
              <div className="pt-1">
                <h4 className="ps-0 text-white pt-1">ডাউনলোড করুন।</h4>
                <span className="border-devider"></span>
              </div>
              <div>
                <div className="pb-3">
                  <Link to={"/"}>
                    <img
                      className="mb-1"
                      width={180}
                      src="https://ajkal.us/image/settings/play.png"
                      alt="Play Store"
                    />
                  </Link>
                  <Link to={"/"}>
                    <img
                      className="mb-1"
                      width={180}
                      src="https://ajkal.us/image/settings/applestore.png"
                      alt="Apple Store"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-10 ps-0">
              <div>
                <div>
                  <p className="fs-3 text-white mb-0">
                    <strong>সম্পাদক ও প্রকাশক : </strong>
                    <span className="pe-3">শাহ্‌ নেওয়াজ ,</span>
                    <strong>প্রধান সম্পাদক : </strong>
                    <span>মনজুর আহমেদ</span>
                  </p>
                </div>
                <div className="text-lg-start text-center ">
                  <p className="text-white mb-0 ">
                    ফোন: <span>+1646 267-7751</span> ফ্যাক্স:
                    <span>718-865-9130</span>
                    <span> 71-16 35th Ave, Jackson Heights,NY 11372, USA.</span>
                  </p>
                  <p className="text-white mb-0">
                    ইমেইল: <span>ajkalnews@gmail.com</span> সম্পাদক ইমেইল:
                    <span>editor@ajkalusa.com</span>
                  </p>
                  <p className="text-white text-start mb-0 pt-0">
                    কপিরাইট © ২০২৪ সাপ্তাহিক আজকাল কর্তৃক সর্বসত্ব ® সংরক্ষিত
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="text-white text-lg-start text-center">
                অনুসরণ করুন
              </h5>
              <div className="footer-social text-lg-start text-center pt-4">
                <Link
                  to="https://www.facebook.com/weeklyajkal"
                  className="ms-0"
                >
                  <FaFacebookF />
                </Link>
                <Link to={'/'}>
                  <FaTwitter />
                </Link>
                <Link to={'/'}>
                  <FaYoutube />
                </Link>
                <Link to={'/'}>
                  <AiFillInstagram />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid p-0"
        style={{ backgroundColor: "var(--secondary)" }}
      >
        <div className="container-fluid">
          <div className="container">
            <div className="row ">
              <div className="col-lg-12 ps-0">
                <div className="d-flex justify-content-between align-items-center p-2 ps-0">
                  <p className="text-start mb-0" style={{ color: "#fff" }}>
                    এই ওয়েবসাইটের কোনো লেখা, ছবি, অডিও, ভিডিও অনুমতি ছাড়া
                    ব্যবহার বেআইনি।
                  </p>
                  <p className="text-white text-end mb-0">
                    Developed With Loved By
                    <Link
                      className="ps-2"
                      style={{ color: "orange" }}
                      to={"https://galaxymediaus.com/"}
                      target="_blank"
                    >
                      Galaxy Media
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
