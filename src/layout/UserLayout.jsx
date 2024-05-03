import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import { FaRegUser } from "react-icons/fa6";
import { ImUpload } from "react-icons/im";
import { IoIosLogOut } from "react-icons/io";
import { RiAdvertisementLine } from "react-icons/ri";
import "./UserLayout.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";

const UserLayout = () => {
  const navigate = useNavigate();
  // Logout function
  const handleLogout = () => {
    const accessToken = localStorage.getItem("accessToken");
    // Assuming logout API URL is "https://backoffice.ajkal.us/auth/logout"
    fetch("https://backoffice.ajkal.us/auth/logout", {
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
        navigate("/"); // Use Navigate function to navigate
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
                  <Link to={"/user"} className="user-dashboard-nav nav-link">
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <MdOutlineSpaceDashboard className="pe-2 fs-2" />
                      </span>{" "}
                      <span className="pt-1">Dashboard</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/user/my-profile"}
                    activeClassName="active"
                    className="user-dashboard-nav nav-link"
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <FaRegUser className="pe-2 ps-1 fs-3" />
                      </span>{" "}
                      <span className="pt-1 ps-1">My Profile</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/user/my-post"}
                    activeClassName="active"
                    className="user-dashboard-nav nav-link"
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <ImUpload className="pe-2 fs-2" />
                      </span>{" "}
                      <span className="pt-1">Post News</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/user/my-advertisement"}
                    activeClassName="active"
                    className="user-dashboard-nav nav-link"
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <RiAdvertisementLine className="pe-2 fs-2" />
                      </span>{" "}
                      <span className="pt-1">Advertisement</span>
                    </div>
                  </Link>
                </li>
                <li className="nav-item">
                  {/* Call handleLogout function when Logout link is clicked */}
                  <Link
                    className="user-dashboard-nav nav-link"
                    onClick={handleLogout}
                  >
                    <div className="d-flex align-items-center ">
                      <span style={{ color: "var(--main)" }}>
                        <IoIosLogOut className="pe-2 fs-2" />
                      </span>{" "}
                      <span className="pt-1">Logout</span>
                    </div>
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
