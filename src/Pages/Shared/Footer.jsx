import React, { useEffect, useState } from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";
import NewsCategory from "../../Comps/NewsCategory/NewsCategory";
import axios from "axios";

const Footer = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://news.goexpressus.com/news-category";

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
    <div className="container-fluid p-0">
      <div className="container-fluid main_footer py-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 ">
              {/* Footer Category */}
              <NewsCategory categories={categoriesData} />
            </div>
          </div>
          <div className="row footer-brand d-flex align-items-center">
            <div className="col-lg-4 p-3 text-lg-start text-center">
              <div>
                <Link className="" to="/">
                  <img
                    src="https://i.ibb.co/LJtVLvQ/logo-white.png"
                    className="img-fluid"
                    alt=""
                    width={250}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 p-3"></div>
            <div className="col-lg-4 p-3">
              <h5 className="pt-0 text-white text-lg-end text-center">
                অনুসরণ করুন
              </h5>
              <div className="footer-social pt-2 text-lg-end text-center">
                <a href="#" className="ms-0">
                  <FaFacebookF />
                </a>
                <a href="#" className="">
                  <FaTwitter />
                </a>
                <a href="#" className="">
                  <FaYoutube />
                </a>
                <a href="#" className="">
                  <AiFillInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="main_author">
                <p className="fs-3 text-white mb-0">
                  <strong>সম্পাদক ও প্রকাশক : </strong>
                  <span className="">শাহ্‌ নেওয়াজ</span>
                </p>
                <p className="fs-3 text-white ">
                  <strong>প্রধান সম্পাদক : </strong>
                  <span className="">মনজুর আহমেদ</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tex-lg-end text-center  py-4 main_author">
                <p className="text-white mb-0 ">
                  ফোন: <span>+1646 267-7751</span> ফ্যাক্স:
                  <span>718-865-9130</span>
                  <br />
                  <span> 71-16 35th Ave, Jackson Heights,NY 11372, USA.</span>
                </p>
                <p className="text-white mb-0">
                  ইমেইল: <span>ajkalnews@gmail.com</span> সম্পাদক ইমেইল:
                  <span>editor@ajkalusa.com</span>
                </p>
              </div>
            </div>
            <div className="col-lg-12 mt-4">
              <div className="d-flex justify-content-center pt-5">
                <div className="d-flex">
                  <Link to={"#"}>
                    <img
                      width={180}
                      src="https://i.ibb.co/mvChxhk/play.png"
                      alt=""
                    />
                  </Link>
                  <Link to={"#"}>
                    <img
                      width={180}
                      src="https://i.ibb.co/WKqnRZW/applestore.png"
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="pt-4">
                <ul
                  className="navbar-nav flex-lg-row  flex-column d-flex justify-content-center  align-items-center"
                  style={{ display: "flex !important" }}
                >
                  <li className="nav-item pe-4">
                    <Link className="nav-link footer-links" to="/about">
                      আমাদের সম্পর্কে
                    </Link>
                  </li>
                  <li className="nav-item pe-4">
                    <Link className="nav-link footer-links" to="/terms">
                      শর্তাবলী
                    </Link>
                  </li>
                  <li className="nav-item pe-4">
                    <Link className="nav-link footer-links" to="/policy">
                      গোপনীয়তা নীতি
                    </Link>
                  </li>
                  <li className="nav-item pe-4">
                    <Link className="nav-link footer-links" to="/advertisement">
                      বিজ্ঞাপন
                    </Link>
                  </li>
                  <li className="nav-item pe-4">
                    <Link className="nav-link footer-links" to="/contact">
                      যোগাযোগ করুন
                    </Link>
                  </li>
                </ul>
                <p className="text-white pt-2 text-center ">
                  কপিরাইট © ২০২৪ সাপ্তাহিক আজকাল কর্তৃক সর্বসত্ব ® সংরক্ষিত
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
