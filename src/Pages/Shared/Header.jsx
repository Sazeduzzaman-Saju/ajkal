import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container">
        {/* Advertisement Start */}
        {/* TODO: Add your advertisement component or content here */}
        {/* Advertisement End */}

        {/* Top Bar */}
        {/* TODO: Add your top bar component or content here */}
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
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              {/* Brand */}
              <a className="navbar-brand" href="#">
                Hidden brand
              </a>

              {/* Navigation Links */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
              </ul>

              {/* Search Form */}
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* Menu Area End*/}
      </div>
    </div>
  );
};

export default Header;
