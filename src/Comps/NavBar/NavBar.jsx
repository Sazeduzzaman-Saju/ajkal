import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [navLinks, setNavLinks] = useState([]);
  const [extraNav, setExtraNav] = useState([]);

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
          // Remove the second argument to get items from 10 to the end
          setExtraNav(response.data.slice(10));
        } else if (Array.isArray(response.data.data)) {
          // Check if the response has a property "data" containing an array
          // Slice the array to get the first 12 items
          setNavLinks(response.data.data.slice(0, 12));
          // Remove the second argument to get items from 12 to the end
          setExtraNav(response.data.data.slice(12));
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
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`nav-item menu-border menu-specing ${
              currentActiveLink === link.text ? "active" : ""
            }`}
          >
            <NavLink
              to={`/categories/${link.id}`}
              className="nav-link navlinks"
              onClick={() => handleLinkClick(link.text)}
            >
              {link.name_bangla}
            </NavLink>
          </li>
        ))}
        <li className="nav-item menu-specing ">
          <div className="dropdown main-menu">
            <NavLink
              className="border-0 bg-transparent pt-2 text-white"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "18px", textDecoration: "none" }}
            >
              অন্যান্য +
            </NavLink>
            <ul
              className="dropdown-menu"
              style={{ borderBottom: "none" }}
              aria-labelledby="dropdownMenuButton1"
            >
              {extraNav.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className="dropdown-item"
                    to={`/categories/${item.id}`}
                    activeClassName="active"
                    onClick={() => handleLinkClick(item.name)}
                  >
                    {item.name_bangla}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
