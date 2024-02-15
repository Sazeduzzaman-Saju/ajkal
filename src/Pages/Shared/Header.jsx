import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="container">
        {/* Advertisement Banner */}
        <div className="row">
          <div className="col-lg-12 px-0">
            <img
              className="img-fluid top-add"
              src="https://i.ibb.co/PNnmqXT/3614798860483355171.gif"
              alt=""
            />
          </div>
        </div>
        {/* Top Bar Area */}
        <div className="row top-bar-area align-items-center">
          <div className="col-lg-6">
            <p className="m-0 p-0">
              ঢাকা, বৃহস্পতিবার ১৫ ফেব্রুয়ারি ২০২৪, ২ ফাল্গুন ১৪৩০, ০৪ শাবান
              ১৪৪৫
            </p>
          </div>
          <div className="col-lg-6">
            <div className="top-bar p-2 d-flex justify-content-between align-items-center">
              <ul className="mb-0">
                <li className="">
                  <Link to="\" className="">
                    বাংলাদেশ
                  </Link>
                </li>
                <li className="">
                  <Link to="\" className="">
                    শেষের পাতা
                  </Link>
                </li>
                <li className="">
                  <Link to="\" className="">
                    ই-পেপার
                  </Link>
                </li>
              </ul>
              <div>
                <div className="social">
                  <a href="#" className="">
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
          </div>
        </div>
        {/* Main Navigation Menu */}
        <div className="row">
          <div className="col-lg-12 px-0 sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light top-bar-area">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <a className="navbar-brand" href="#">
                    <img src="https://i.ibb.co/6D35WjX/logo.png" alt="" />
                  </a>
                  <div className="mx-auto mb-2 mb-lg-0">
                    <marquee
                      behavior="scroll"
                      direction="left"
                      style={{ width: "61.875rem", color: "black" }}
                    >
                      প্রতিবছর বিশ্বে অন্তত চার লাখ শিশু ক্যান্সারে আক্রান্ত হয়
                      । উন্নত দেশগুলোতে ক্যান্সার থেকে রোগীর সু । ডেইলি স্টারের
                      নির্বাহী সম্পাদক আশফাক ও স্ত্রীকে জিজ্ঞাসাবাদ চলছে ।
                      শ্রীলঙ্কা সিরিজের দল নির্বাচন নিয়ে প্রশ্ন তুললেন
                      সালাউদ্দিন । ১০ মাস পর বিয়ের খবর জানালেন ‘পালকী’ খ্যাত
                      নায়িকা
                    </marquee>
                  </div>
                  <div class="search-container">
                    <form action="/search" method="get">
                      <input
                        class="search expandright"
                        id="searchright"
                        type="search"
                        name="q"
                        placeholder="Search"
                      />
                      <label class="buttonss searchbutton" for="searchright">
                        <span class="mglass">&#9906;</span>
                      </label>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light main-menu py-0">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarTogglerDemo01"
                  aria-controls="navbarTogglerDemo01"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarTogglerDemo01"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to="#"
                      >
                        যুক্তরাষ্ট্র
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        বাংলাদেশ
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        নিউইয়র্ক
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        সারাবিশ্ব
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        প্রবাস
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        বিনোদন
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        খেলার মাট
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        স্বাস্থ্য
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        ধর্ম
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        সংকলন
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3">
                      <Link className="nav-link" aria-current="page" to="#">
                        আর্কাইভ
                      </Link>
                    </li>
                    <li className="nav-item menu-border pe-3 ps-3 ">
                      <div class="dropdown main-menu">
                        <a
                          class="border-0 bg-transparent pt-2 text-white"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          style={{ fontSize: "18px" }}
                        >
                          আরও +
                        </a>
                        <ul
                          class="dropdown-menu"
                          style={{ borderBottom: "none" }}
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a class="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
