import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import NavBar from "../../Comps/NavBar/NavBar";

function NavScrollExample() {
  return (
    <>
      <div className="container-fluid">
        {/* Advertisement Banner */}
        <div className="container">
          <div className="row top-bar-area">
            <div className="col-lg-12 px-0">
              <img
                className="img-fluid top-add"
                src="https://i.ibb.co/PNnmqXT/3614798860483355171.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid main-menu">
        <div className="container">
          {/* Top Bar Area */}
          <div className="row top-bar-area align-items-center top-bar-area">
            <div className="col-lg-6">
              <p className="m-0 p-0">
                ঢাকা, বৃহস্পতিবার ১৫ ফেব্রুয়ারি ২০২৪, ২ ফাল্গুন ১৪৩০, ০৪ শাবান
                ১৪৪৫
              </p>
            </div>
            <div className="col-lg-6">
              <div className="top-bar p-2 d-flex justify-content-between align-items-center pt-1">
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
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top flex-column main-menu pt-0 pb-0">
        <div className="container px-0 pb-1 pt-1">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div>
            <a className="navbar-brand" href="#">
              <img src="https://i.ibb.co/6D35WjX/logo.png" alt="" />
            </a>
          </div>
          <div className="search-container">
            <form action="/search" method="get">
              <input
                className="search expandright"
                id="searchright"
                type="search"
                name="q"
                placeholder="Search"
              />
              <label className="buttonss searchbutton" for="searchright">
                <span className="mglass">&#9906;</span>
              </label>
            </form>
          </div>
        </div>
        <div className="container-fluid main-menu">
          <div className="container px-0 main-menu">
            <NavBar></NavBar>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavScrollExample;
