import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <div className="error-container">
        <div className="error">
          <div className="error-title">ত্রুটি </div>
          <div className="error-number">
            ৪<span className="">০</span>৪
          </div>
          <div className="error-description">
            "দুঃখিত, আপনি যে পৃষ্ঠাটি দেখতে চাচ্ছেন তা অস্তিত্ব নেই। পাওয়া
            যায়নি"
          </div>
          <div className="error-textbox mt-4">
            <Link to="/" className="btn-dark btn w-100">হোমে ফিরুন</Link>
          </div>
          <div className="error-or">
            <div className="or-line" />
            <div className="or">অথবা</div>
          </div>
          <div className="error-textbox mt-4">
            <Link to="/" className="btn-dark btn w-100">লাইভ চ্যাট</Link>
          </div>
          <ul className="error-actions">
            <li>
              <Link to="/previous-page">
                <i
                  className="pe-7s-left-arrow"
                  data-toggle="tooltip"
                  title="BACK"
                  data-original-title="BACK"
                />
              </Link>
            </li>
            <li>
              <Link to="/">
                <i
                  className="pe-7s-home"
                  data-toggle="tooltip"
                  title="HOME"
                  data-original-title="HOME"
                />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <i
                  className="pe-7s-mail"
                  data-toggle="tooltip"
                  title="CONTACT US"
                  data-original-title="CONTACT US"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
