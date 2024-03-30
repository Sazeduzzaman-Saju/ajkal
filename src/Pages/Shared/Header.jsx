import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BiMenuAltLeft } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { FaUser, FaHome } from "react-icons/fa";
import NavBar from "../../Comps/NavBar/NavBar";
import SearchBoxHeader from "../../Comps/SearchBoxHeader/SearchBoxHeader";
import DynamicDateTime from "../../Comps/DynamicDateTime/DynamicDateTime";
import axios from "axios";

function Header() {
  // Retrieve access token from localStorage
  const [isHovered, setIsHovered] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const url = "https://news.goexpressus.com/news-category";

  const navigate = useNavigate();
  const [accessTokenTimeout, setAccessTokenTimeout] = useState(null);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      navigate("/"); // Navigate to login if access token is not found
      return;
    }

    // Set timeout to navigate to login page after 3600 seconds
    const timeout = setTimeout(() => {
      localStorage.removeItem("accessToken");
      navigate("/");
    }, 3600 * 1000);

    // Store timeout reference in state for cleanup
    setAccessTokenTimeout(timeout);

    // Cleanup function to clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          // Slice the array to get the first 10 items
          setNavLinks(response.data);
        } else if (Array.isArray(response.data.data)) {
          // Slice the array to get the first 12 items
          setNavLinks(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://news.goexpressus.com/ad/all";
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAddvertisement(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAddvertisement(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="container-fluid main-menu">
        <div className="container">
          {/* Top Bar Area */}
          <div className="row top-bar-area align-items-center top-bar-area">
            <div className="col-lg-4">
              <DynamicDateTime />
            </div>
            <div className="col-lg-4">
              <div className="top-bar d-flex justify-content-center">
                <ul className="mb-0">
                  <li className="">
                    <NavLink to={"/login"} className="">
                      বিজ্ঞাপন
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/epaper"} className="">
                      ই-পেপার
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to={"/search"} className="">
                      আর্কাইভ
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 pe-0">
              <div className="top-bar p-2 d-flex justify-content-end align-items-center pt-1">
                <div>
                  <div className="social">
                    <NavLink href="#" className="">
                      <FaFacebookF />
                    </NavLink>
                    <NavLink href="#" className="">
                      <FaTwitter />
                    </NavLink>
                    <NavLink href="#" className="">
                      <FaYoutube />
                    </NavLink>
                    <NavLink href="#" className="">
                      <AiFillInstagram />
                    </NavLink>
                    {accessTokenTimeout ? (
                      <NavLink to="/user" className="">
                        <FaHome />
                      </NavLink>
                    ) : (
                      <NavLink to="/login" className="">
                        <FaUser />
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top flex-column main-menu pt-0 pb-0">
        <div className="container px-0 pb-3 pt-3">
          <button
            className="navbar-toggler mobile-menu"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobile-Menu"
            aria-controls="mobile-Menu"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {isHovered ? (
              <MdClose className="icon close-icon" />
            ) : (
              <BiMenuAltLeft className="icon menu-icon" />
            )}
          </button>

          <div>
            <Link className="navbar-brand" to="/">
              <img src="https://i.ibb.co/6D35WjX/logo.png" alt="" />
            </Link>
          </div>

          <div className="container-fluid">
            {/* Advertisement Banner */}
            <div className="container">
              <div className="row top-bar-area">
                <div className="col-lg-12 px-0">
                  {addvertisement.map((data) =>
                    // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
                    data.ad_category_id === "2" && data.status === "1" ? (
                      <Link to={data.ad_link} key={data.id} target="_blank">
                        <img
                          className="img-fluid top-add"
                          src={`https://ajkal.goexpressus.com/images/${data.ad_banner}`}
                          alt=""
                        />
                      </Link>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Search Box Start */}
          <div className="search-container">
            <SearchBoxHeader />
          </div>
          {/* Search Box End */}
        </div>
        <div className="container-fluid main-menu">
          <div className="container px-0 main-menu">
            <NavBar></NavBar>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div>
        <div
          className="offcanvas offcanvas-start w-100 border-0"
          data-bs-backdrop="static"
          tabIndex={-1}
          id="mobile-Menu"
          aria-labelledby="staticBackdropLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold" id="staticBackdropLabel">
              নিউজ ক্যাটেগরিস
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            {navLinks.map((data) => (
              <div key={data.id} className="row">
                <Link
                  to={`/categories/${data.id}`}
                  className="submit-btn-one w-75 mx-auto"
                >
                  {data.name_bangla}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
