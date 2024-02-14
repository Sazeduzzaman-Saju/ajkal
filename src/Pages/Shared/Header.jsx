import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="position-relative">
      <div className="sticky-top">
        <div className="container">
          {/* Advertisement Start */}
          <div>
            <img
              style={{ width: "100%", height: "70px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNtTolu36cl46avjq7lkZd87uoaoN7w9i8VOdDTQe&s"
              alt
            />
          </div>
          {/* Advertisement End */}
          {/* Top Bar */}
          <div className="pt-4">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <h1>
                  <Link className="navbar-brand" to="/">
                    দৈনিক আজকাল
                  </Link>
                </h1>
              </div>
              <div className="col-lg-4">
                <Link className="navbar-brand" to="/">
                  বুধবার, ১৪ ফেব্রুয়ারি ২০২৪, ফাল্গুন ১৪৩০
                </Link>
              </div>
              <div className="col-lg-4">SOcial</div>
            </div>
          </div>
          {/* Top Bar End */}

          {/* Menu Area */}
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              {/* Navbar Toggler */}
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

              {/* Navbar Content */}
              <div
                className="collapse navbar-collapse"
                id="navbarTogglerDemo01"
              >
                {/* Brand */}

                {/* Navigation Links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">
                      বাংলাদেশ
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/link">
                      রাজনীতি
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/link">
                      আন্তর্জাতিক
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/link">
                      খেলা
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/link">
                      বিনোদন
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/link">
                      স্বাস্থ্য
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/link">
                      বাণিজ্য
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      যোগাযোগ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Menu Area End*/}
        </div>
      </div>
    </div>
  );
};

export default Header;
