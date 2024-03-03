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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://news.goexpressus.com/news-category');
        setCategoriesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // console.log(categoriesData.data)
  return (
    <div className="container-fluid p-0">
      <div className="container-fluid main_footer py-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 ">
              {/* Footer Category */}
              <NewsCategory categories={categoriesData.data} />
            </div>
          </div>
          <div className="row footer-brand d-flex align-items-center">
            <div className="col-lg-4 p-3 text-lg-start text-center">
              <div>
                <Link className="navbar-brand" to="/">
                  <img src="https://i.ibb.co/6D35WjX/logo.png" alt="" />
                </Link>
                <p className="pb-0 pt-3 mb-0 text-white">
                  সাপ্তাহিক পত্রিকা ইউএসএ।
                </p>
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
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center py-4">
                <p className="fs-3 text-white mb-0">
                  {" "}
                  <strong>সম্পাদক ও প্রকাশক : </strong>{" "}
                  <span className="">শাহ্‌ নেওয়াজ</span>
                </p>
                <p className="fs-3 text-white ">
                  {" "}
                  <strong>প্রধান সম্পাদক : </strong>{" "}
                  <span className="">মনজুর আহমেদ</span>
                </p>
                <p className="text-white">
                  ফোন: <span>+1646 267-7751</span> ফ্যাক্স:
                  <span>718-865-9130</span>
                  <br />
                  <span> 71-16 35th Ave, Jackson Heights,NY 11372, USA.</span>
                </p>
                <p className="text-white mb-0">
                  ইমেইল: <span>ajkalnews@gmail.com</span> সম্পাদক ইমেইল:{" "}
                  <span>editor@ajkalusa.com</span>
                </p>
                <p className="text-white mb-0">
                  Marketing Department: +880 961 212 3131 ।।
                  E-mail: marketing@ajkalusa.com
                </p>
                <p className="text-white">
                  কপিরাইট © ২০২৪ সাপ্তাহিক আজকাল কর্তৃক সর্বসত্ব ® সংরক্ষিত
                </p>
              </div>
              <div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
