import React, { useEffect, useState } from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import "./UserAccounts.css";
import axios from "axios";
import { Triangle } from "react-loader-spinner";

const UserAccounts = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "https://news.goexpressus.com/auth/profile",
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

  // User Data
  const fullName = userData?.full_name;
  const phone = userData?.phone;
  const address = userData?.address;
  const email = userData?.email;
  // User Data End
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
    <div>
      <PageTitle title="আপনার একাউন্ট" description="Text" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center pt-5 main-color">আমার প্রফাইল।</h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-3 border-right">
                <div className="card">
                  <div
                    className="card-header p-2 border-0"
                    style={{ backgroundColor: "var(--main)" }}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <h4 className="text-center mb-0 pb-0 text-white">
                        Profile Image
                      </h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-2">
                      <img
                        className="rounded-circle mt-1"
                        width="150px"
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                      />
                      {fullName && (
                        <span className="font-weight-bold">{fullName}</span>
                      )}
                      {email && <span className="text-black-50">{email}</span>}
                      <span> </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-9 border-right">
                <div className="card">
                  <div
                    className="card-header p-2 border-0"
                    style={{ backgroundColor: "var(--main)" }}
                  >
                    <div className="d-flex justify-content-center align-items-center">
                      <h4 className="text-center mb-0 pb-0 text-white">
                        Profile Settings
                      </h4>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="p-3 py-2">
                      <div className="row mt-2">
                        <div className="col-md-12">
                          <label className="labels">Name</label>
                          <input
                            type="text"
                            className="form-control form-control-sm "
                            placeholder="first name"
                            defaultValue={fullName}
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <label className="labels">Mobile Number</label>
                          <input
                            type="text"
                            className="form-control form-control-sm "
                            defaultValue={phone}
                            placeholder="enter phone number"
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="labels">Address</label>
                          <input
                            type="text"
                            className="form-control form-control-sm "
                            placeholder="Enter address line 1"
                            defaultValue={address}
                          />
                        </div>
                        <div className="col-md-12">
                          <label className="labels">Email ID</label>
                          <input
                            type="text"
                            className="form-control form-control-sm "
                            placeholder="enter email id"
                            defaultValue={email}
                          />
                        </div>
                      </div>
                      <div className="mt-0 text-center">
                        <button
                          className="submit-btn-one w-100 d-none"
                          type="button"
                        >
                          Save Profile
                        </button>
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
  );
};

export default UserAccounts;
