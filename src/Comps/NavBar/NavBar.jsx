import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const navLinks = [
    { id: 1, text: "যুক্তরাষ্ট্র", path: "#" },
    { id: 2, text: "বাংলাদেশ", path: "#" },
    { id: 3, text: "নিউইয়র্ক", path: "#" },
    { id: 4, text: "সারাবিশ্ব", path: "#" },
    { id: 5, text: "প্রবাস", path: "#" },
    { id: 6, text: "বিনোদন", path: "#" },
    { id: 7, text: "খেলার মাট", path: "#" },
    { id: 8, text: "স্বাস্থ্য", path: "#" },
    { id: 9, text: "ধর্ম", path: "#" },
    { id: 10, text: "সংকলন", path: "#" },
    { id: 11, text: "আর্কাইভ", path: "#" },
  ];

  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`nav-item menu-border pe-3 ps-3 ${
              activeLink === link.text ? "active" : ""
            }`}
          >
            <Link
              to={link.path}
              className="nav-link navlinks"
              onClick={() => handleLinkClick(link.text)}
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li className="nav-item menu-border pe-3 ps-3 ">
          <div className="dropdown main-menu">
            <a
              className="border-0 bg-transparent pt-2 text-white"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "18px", textDecoration: 'none' }}
            >
              আরও +
            </a>
            <ul
              className="dropdown-menu"
              style={{ borderBottom: "none" }}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
