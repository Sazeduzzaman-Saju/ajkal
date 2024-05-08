import React, { useEffect, useState } from "react";
import axios from "axios";
import UserAddPost from "../../../Comps/UserNewsPost/UserAddPost";
import { Triangle } from "react-loader-spinner";

const UserAdvertisement = () => {
  const [userNewsData, setUserNewsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
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
        setUserNewsData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div>
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
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-lg-12 mx-auto">
            <div>
              <ul
                className="nav nav-tabs user-add d-flex justify-content-center  align-items-center "
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    বিজ্ঞাপন দিন।
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    বিজ্ঞাপন লিস্ট দেখুন।
                  </button>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3 className="text-center pt-5 main-color">
                          বিজ্ঞাপন দিন।
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <UserAddPost></UserAddPost>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-lg-12">
                      <div>
                        <h3 className="text-center pt-3">সকল পোস্ট</h3>
                        <div className="card border-0 mt-3 mb-5">
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table table-hover table-striped border text-center">
                                <thead>
                                  <tr className="user-th">
                                    <th>Sl</th>
                                    <th>Add Image</th>
                                    <th>Type</th>
                                    <th>Post Date</th>
                                    <th>Paid Amount</th>
                                    <th>Due Amount</th>
                                    <th>Post Status</th>
                                    <th>Post Duration</th>
                                    <th>Payable Ammount</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {userNewsData.map((item, index) => (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>
                                        <div>
                                          <img
                                            width={50}
                                            src={item.ad_banner}
                                            alt={item.ad_banner}
                                            onError={(e) => {
                                              e.target.src =
                                                "https://ajkal.us/img/settings/placeholder.jpg";
                                            }}
                                          />
                                        </div>
                                      </td>
                                      <td>
                                        {item.type === "1" ? (
                                          <span>ইপেপার</span>
                                        ) : item.type === "2" ? (
                                          <span>অনলাইন পোর্টাল</span>
                                        ) : null}
                                      </td>
                                      <td>{item.start_date}</td>
                                      <td>{item.paid_amount.slice(0, 3)}</td>
                                      <td>{item.due_amount.slice(0, 3)}</td>
                                      <td>
                                        {item.status === "1" ? (
                                          <span className="badge bg-success ">
                                            Approved
                                          </span>
                                        ) : item.type === "2" ? (
                                          <span className="badge bg-warning ">
                                            Pending
                                          </span>
                                        ) : null}
                                      </td>
                                      <td>{item.duration} Week</td>
                                      <td>{item.payable_amount}</td>
                                      <td>10$</td>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserAdvertisement;
