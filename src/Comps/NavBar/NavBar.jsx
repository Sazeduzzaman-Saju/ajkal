import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Dropdown, Button } from "react-bootstrap";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [navLinks, setNavLinks] = useState([]);
  const [extraNav, setExtraNav] = useState([]);
  const dropdownRef = useRef(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveLink(""); // Reset active link when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const url = "https://backoffice.ajkal.us/news-category";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          const navLinksData = response.data.slice(0, 10);
          setNavLinks(navLinksData);
          setExtraNav(response.data.slice(10));
        } else if (Array.isArray(response.data.data)) {
          const navLinksData = response.data.data.slice(0, 10);
          setNavLinks(navLinksData);
          setExtraNav(response.data.data.slice(10));
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
              to={`/ct/${link.name}/${link.id}`}
              className="nav-link navlinks"
              activeclassname="active"
              onClick={() => handleLinkClick(link.text)}
            >
              {link.name_bangla}
            </NavLink>
          </li>
        ))}
        {navLinks.length > 0 && (
          <li className="nav-item menu-specing ">
            <Dropdown ref={dropdownRef}>
              <Dropdown.Toggle
                variant="transparent"
                className="border-0 bg-transparent pt-2 text-white"
              >
                অন্যান্য +
              </Dropdown.Toggle>
              <Dropdown.Menu className="mt-0 pt-0">
                {extraNav.map((item, index) => (
<<<<<<< HEAD
                  <li key={index}>
                    <NavLink
                      className="dropdown-item"
                      to={`/categories/${item.id}`}
                      activeclassname="active"
=======
                  <Dropdown.Item key={index} className="mt-0 p-0">
                    <Button
                      as={NavLink}
                      to={`/ct/${item.name}/${item.id}`}
                      activeclassname="active"
                      className="dropdown-item px-4"
>>>>>>> e619897d37fb43f9fa43be9647797e35f6708a5c
                      onClick={() => handleLinkClick(item.name)}
                    >
                      {item.name_bangla}
                    </Button>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
