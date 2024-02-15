import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container px-0">
        <footer className="py-5">
          <div className="row">
            <div className="col-lg-3">
              <h5>মোবাইল অ্যাপস ডাউনলোড করুন</h5>
              <p className="footer-devider"></p>
              <div className="d-flex align-items-center pt-4 pb-2">
                <div className="pe-1">
                  <img
                    className="img-fluid"
                    width={140}
                    src="../../../public/playstore.webp"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    width={140}
                    src="../../../public/applestore.webp"
                    alt=""
                  />
                </div>
              </div>
              <h5 className="pt-4">অনুসরণ করুন</h5>
              <div className="footer-social pt-2">
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
            <div className="col-lg-3">
              <h5>আজকের পত্রিকা</h5>
              <p className="footer-devider"></p>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        প্রথম পাতা
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        খেলা
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        শুভসংঘ
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        শেষের পাতা
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        খবর
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        দেশে দেশে
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h5>অনলাইন</h5>
              <p className="footer-devider"></p>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        জাতীয়
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        সারাবাংলা
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        বিশ্ব
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        বাণিজ্য
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        বিনোদন
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        খেলাধুলা
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h5>বিজ্ঞাপন</h5>
              <p className="footer-devider"></p>
              <div className="row">
                <div className="col-lg-12">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link footer-links" to="/">
                        মূল্য তালিকা (প্রিন্ট ভার্সন)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-5">
            <div className="col-lg-12">
              <div className="d-flex align-items-center justify-content-between ">
                <p>প্রধান সম্পাদক : ইমদাদুল হক মিলন</p>
                <div>
                  <ul
                    className="navbar-nav flex-row"
                    style={{ display: "flex !important" }}
                  >
                    <li className="nav-item pe-5">
                      <Link className="nav-link footer-links" to="/">
                        আমাদের
                      </Link>
                    </li>
                    <li className="nav-item pe-5">
                      <Link className="nav-link footer-links" to="/">
                        সম্পর্কে
                      </Link>
                    </li>
                    <li className="nav-item pe-5">
                      <Link className="nav-link footer-links" to="/">
                        শর্তাবলী
                      </Link>
                    </li>
                    <li className="nav-item pe-5">
                      <Link className="nav-link footer-links" to="/">
                        গোপনীয়তা নীতি
                      </Link>
                    </li>
                    <li className="nav-item pe-5">
                      <Link className="nav-link footer-links" to="/">
                        যোগাযোগ করুন
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 pt-5">
              <p className="text-center text-muted">স্বত্ব © ২০২৪ আজকাল</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
