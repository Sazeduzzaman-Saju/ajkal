import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import "./UserLayout.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserLayout = () => {
  const navigate = useNavigate();
  // Logout function
  const handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    // Assuming logout API URL is "https://news.goexpressus.com/auth/logout"
    fetch("https://news.goexpressus.com/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        // If logout is successful, remove access token from localStorage
        localStorage.removeItem("accessToken");
        // Redirect to login page or any other page as needed
        toast.success("User Logout successfully");
        navigate("/login"); // Use Navigate function to navigate
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

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
                  {/* Call handleLogout function when Logout link is clicked */}
                  <Link
                    className="user-dashboard-nav nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
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
