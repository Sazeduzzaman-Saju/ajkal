import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";
import { TbFileUpload } from "react-icons/tb";
import { BiRightArrow } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import { Triangle } from "react-loader-spinner";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [userNewsData, setUserNewsData] = useState(null);
  const [userAddData, setUserAddData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          navigate("/login"); // Use Navigate function to navigate
          return;
        }

        const response = await axios.post(
          "https://backoffice.ajkal.us/dashboard/all-news",
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserNewsData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();

    const timeout = setTimeout(() => {
      navigate("/login"); // Navigate to login after 3600 seconds
    }, 3600 * 1000);

    return () => clearTimeout(timeout); // Clear timeout on component unmount
  }, []);

  useEffect(() => {
    const fetchAddData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "https://backoffice.ajkal.us/ad/my-ads",
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserAddData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchAddData();
  }, []);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "https://backoffice.ajkal.us/auth/profile",
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
      );
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);
  const fullName = userData?.full_name;

  if (loading) {
    return (
      <div className="">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Triangle
            height={80}
            width={80}
            color={"#4fa94d"}
            ariaLabel={"circles-loading"}
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-12">
          <h3 className="text-center pt-5">Hello, {fullName} আপনার ড্যাশবোর্ড</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="row py-5">
            <div className="col-lg-6">
              <div className="card border-0 rounded-1 shadow-sm">
                <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
                  <div>
                    <p className="icon-container">
                      <TbFileUpload></TbFileUpload>
                    </p>
                    <h4 className="pt-3">সংবাদ পোস্ট।</h4>
                  </div>
                  <p className="icon-container-amount">
                    {userNewsData !== null ? (
                      <span className="">{userNewsData.length}</span>
                    ) : (
                      <Skeleton height={10}></Skeleton>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card border-0 rounded-1 shadow-sm">
                <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
                  <div>
                    <p className="icon-container">
                      <BiRightArrow></BiRightArrow>
                    </p>
                    <h4 className="pt-3">মোট বিজ্ঞাপন পোস্ট।</h4>
                  </div>
                  <p className="icon-container-amount">
                    {userAddData !== null ? (
                      <span className="">{userAddData.length}</span>
                    ) : (
                      <Skeleton height={10}></Skeleton>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12">
          <div>
            <h3 className="text-center pt-3">সকল পোস্ট</h3>
            <div className="card border-0">
              <div className="card-body p-0">
                <div className="table-responsive">
                  <table className="table table-hover table-striped border text-center">
                    <thead>
                      <tr className="user-th">
                        <th>Sl</th>
                        <th>News Image</th>
                        {/* <th>Thumb Image</th> */}
                        <th>Post Image</th>
                        <th>Post Title</th>
                        <th>Category</th>
                        <th>Post Date</th>
                        {/* <th>Post Status</th> */}
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {userNewsData &&
                        userNewsData.map((item, index) => (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <img width={50} className="img-fluid" src={`https://ajkal.us/img/news/${item.title_img}`} alt="" />
                              {/* <img src={item.news_img} alt="" /> */}
                            </td>
                            {/* <td>
                              <img width={50} className="img-fluid" src={`https://ajkal.us/img/news/${item.thumbnail_img}`} alt="" />
                            </td> */}
                            <td>{item.news_title}</td>
                            <td>{item.category_name}</td>
                            <td>{item.news_time}</td>
                            <td>
                              <span className="badge bg-info rounded-2">
                                {item.status === 0 ? "Inactive" : "Active"}
                              </span>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
