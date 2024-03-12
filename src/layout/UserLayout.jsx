import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import "./UserLayout.css";
const UserLayout = () => {
  return (
    <>
      <Header />
      <div className="container">
      <div className="row">
          <div
            className="col-lg-2 px-0 shadow-sm "
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-vector/paper-style-smooth-background_52683-64676.jpg')",
              height: "auto",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="user-accounts-sidebar">
              <ul className="user-nav navbar-nav pt-3">
                <li className="nav-item">
                  <NavLink
                    to={"/user/dahboard"}
                    className="user-dashboard-nav nav-link"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/user/my-profile"}
                    className="user-dashboard-nav nav-link"
                  >
                    My Profile
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/user/my-comments"}
                    className="user-dashboard-nav nav-link"
                  >
                    My Comments
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/user/my-post"}
                    className="user-dashboard-nav nav-link"
                  >
                    Post News
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/user/my-advertisement"}
                    className="user-dashboard-nav nav-link"
                  >
                    Advertisement
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to={"/user/my-save-post"}
                    className="user-dashboard-nav nav-link"
                  >
                    Save Articales
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-10 px-0">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLayout;
