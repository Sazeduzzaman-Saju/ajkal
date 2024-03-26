import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserDashboard.css";
import { TbFileUpload } from "react-icons/tb";
import { BiRightArrow } from "react-icons/bi";
import Skeleton from "react-loading-skeleton";

const UserDashboard = () => {
  const [userNewsData, setUserNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "https://news.goexpressus.com/dashboard/all-news",
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserNewsData(response.data.data);
        console.log("inner-Data", response.data.data); // Log the response data
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Log userAddData outside useEffect

  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-lg-12">
          <h3 className="text-center pt-5">ড্যাশবোর্ড</h3>
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
                  {userNewsData !== null ? (
                    <p className="icon-container-amount">
                      {userNewsData.length}
                    </p>
                  ) : (
                    <Skeleton height={10}></Skeleton>
                  )}
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
                  <p className="icon-container-amount">12</p>
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
                        <th>Post Image</th>
                        <th>Post Title</th>
                        <th>Category</th>
                        <th>Post Date</th>
                        <th>Post Status</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {userNewsData &&
                        userNewsData.map((item, index) => (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.news_title}</td>
                            <td>{item.title_img}</td>
                            <td>{item.category_name}</td>
                            <td>{item.news_time}</td>
                            <td>
                              <span className="badge bg-info rounded-2">
                                {item.status === 0 ? "Inactive" : "Active"}
                              </span>
                            </td>
                            {/* <td>
                              <div className="d-flex justify-content-center  align-items-center ">
                                <Link to={"#"} className="me-2 user-dash-icons">
                                  <LuView></LuView>
                                </Link>
                                <Link to={"#"} className="me-2 user-dash-icons">
                                  <TbEdit></TbEdit>
                                </Link>
                                <Link to={"#"} className=" user-dash-icons">
                                  <MdDelete></MdDelete>
                                </Link>
                              </div>
                            </td> */}
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
