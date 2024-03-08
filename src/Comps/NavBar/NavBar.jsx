import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [navLinks, setNavLinks] = useState([]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const url = "https://news.goexpressus.com/news-category";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          // Slice the array to get the first 10 items
          setNavLinks(response.data.slice(0, 10));
        } else if (Array.isArray(response.data.data)) {
          // Check if the response has a property "data" containing an array
          // Slice the array to get the first 12 items
          setNavLinks(response.data.data.slice(0, 12));
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

  const currentActiveLink = activeLink || "";

  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`nav-item menu-border pe-3 ps-3 ${
              currentActiveLink === link.text ? "active" : ""
            }`}
          >
            <NavLink
              to={`/categories/${link.id}`}
              className="nav-link navlinks"
              onClick={() => handleLinkClick(link.text)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <li className="nav-item menu-border pe-3 ps-3 ">
          <div className="dropdown main-menu">
            <NavLink
              className="border-0 bg-transparent pt-2 text-white"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "18px", textDecoration: "none" }}
            >
              আরও +
            </NavLink>
            <ul
              className="dropdown-menu"
              style={{ borderBottom: "none" }}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <NavLink className="dropdown-item" to={"/news/1"}>
                  সর্বশেষ
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/news/2"}>
                  রাজনীতি
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/news/3"}>
                  বাংলাদেশ
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/news/4"}>
                  অপরাধ
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/news/5"}>
                  বিশ্ব
                </NavLink>
              </li>
              <li>
                <NavLink className="dropdown-item" to={"/news/6"}>
                  বাণিজ্য
                </NavLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
