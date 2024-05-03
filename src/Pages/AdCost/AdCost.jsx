import React from "react";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";
import { FaPaperPlane } from "react-icons/fa";
import { IoDiamond } from "react-icons/io5";
import { FaRocket } from "react-icons/fa";
import "./AdCost.css";
import { Link } from "react-router-dom";
const AdCost = () => {
  return (
    <div className="container">
      <PageHelmet
        title="বিজ্ঞাপনের মূল্য তালিকা"
        type="article"
        image="https://ajkal.us/image/settings/logo_red.png"
        url={window.location.href}
        card="https://ajkal.us/image/settings/logo_red.png"
        description="আজকাল বিজ্ঞাপন এর মুল্য তালিকা"
      />
      <div className="row">
        <div className="col-lg-12">
          <div className="">
            <section className="pricing-section">
              <div className="container">
                <div className="sec-title text-center">
                  <span className="title">
                    এক নজরে দেখে নিন। সকল বিজ্ঞাপন এর মূল্য
                  </span>
                  <h2>বিজ্ঞাপনের মূল্য</h2>
                </div>
                <div className="outer-box">
                  <div className="row">
                    {/* Pricing Block */}
                    <div className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon-outer">
                            <FaPaperPlane
                              size={50}
                              color="gray"
                              className="mt-4"
                            />
                          </div>
                        </div>
                        <div className="price-box">
                          <div className="title"> Top Header</div>
                          <h4 className="price">$35.99</h4>
                        </div>
                        <ul className="features">
                          <li className="CiCircleCheck">Conference plans</li>
                          <li className="true">Free Lunch And Coffee</li>
                          <li className="true">Certificate</li>
                          <li className="false">Easy Access</li>
                          <li className="false">Free Contacts</li>
                        </ul>
                        <div className="btn-box">
                          <Link
                            to="https://codepen.io/anupkumar92"
                            className="theme-btn"
                          >
                            BUY plan
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Pricing Block */}
                    <div
                      className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-delay="400ms"
                    >
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon-outer">
                            <IoDiamond
                              size={50}
                              color="gray"
                              className="mt-4"
                            />
                          </div>
                        </div>
                        <div className="price-box">
                          <div className="title">Home Page Sidebar</div>
                          <h4 className="price">$99.99</h4>
                        </div>
                        <ul className="features">
                          <li className="true">Conference plans</li>
                          <li className="true">Free Lunch And Coffee</li>
                          <li className="true">Certificate</li>
                          <li className="true">Easy Access</li>
                          <li className="false">Free Contacts</li>
                        </ul>
                        <div className="btn-box">
                          <Link
                            to="https://codepen.io/anupkumar92"
                            className="theme-btn"
                          >
                            BUY plan
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* Pricing Block */}
                    <div
                      className="pricing-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
                      data-wow-delay="800ms"
                    >
                      <div className="inner-box">
                        <div className="icon-box">
                          <div className="icon-outer">
                            <FaRocket size={50} color="gray" className="mt-4" />
                          </div>
                        </div>
                        <div className="price-box">
                          <div className="title">News Details</div>
                          <h4 className="price">$199.99</h4>
                        </div>
                        <ul className="features">
                          <li className="true">Conference plans</li>
                          <li className="true">Free Lunch And Coffee</li>
                          <li className="true">Certificate</li>
                          <li className="true">Easy Access</li>
                          <li className="true">Free Contacts</li>
                        </ul>
                        <div className="btn-box">
                          <Link
                            to="https://codepen.io/anupkumar92"
                            className="theme-btn"
                          >
                            BUY plan
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCost;
