import React from "react";
import { LuView } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdInsertComment } from "react-icons/md";
import { TiUpload } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import "./UserDashboard.css";
import { Link } from "react-router-dom";

const UserDasboard = () => {
  const fakeData = [
    {
      id: 1,
      category: "যুক্তরাষ্ট্র",
      postDate: "১২ ফেব্রুয়ারি ২০২৪",
      advertisement: "পুতিন দিয়ছে বাইডেন কে টেক্কা",
      postStatus: "পাবলিশ হয় নি।",
    },
    {
      id: 2,
      category: "বাংলাদেশ",
      postDate: "১৫ ফেব্রুয়ারি ২০২৪",
      advertisement: "পুতিন দিয়ছে বাইডেন কে টেক্কা",
      postStatus: "পাবলিশ হয়েছে।",
    },
    {
      id: 3,
      category: "কম্পিউটার",
      postDate: "২০ ফেব্রুয়ারি ২০২৪",
      advertisement: "পুতিন দিয়ছে বাইডেন কে টেক্কা",
      postStatus: "পাবলিশ হয়েছে।",
    },
    {
      id: 4,
      category: "বিজ্ঞান",
      postDate: "২৫ ফেব্রুয়ারি ২০২৪",
      advertisement: "পুতিন দিয়ছে বাইডেন কে টেক্কা",
      postStatus: "পাবলিশ হয়েছে।",
    },
    {
      id: 5,
      category: "খেলা",
      postDate: "২৮ ফেব্রুয়ারি ২০২৪",
      advertisement: "পুতিন দিয়ছে বাইডেন কে টেক্কা",
      postStatus: "পাবলিশ হয় নি।",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center pt-5">ড্যাশবোর্ড</h3>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-4">
          <div className="card border-0 rounded-1 shadow-sm">
            <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
              <div>
                <p className="icon-container">
                  <TiUpload></TiUpload>
                </p>
                <h4 className="pt-3">সংবাদ পোস্ট।</h4>
              </div>
              <p className="icon-container-amount">12</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 rounded-1 shadow-sm">
            <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
              <div>
                <p className="icon-container">
                  <RiAdvertisementFill></RiAdvertisementFill>
                </p>
                <h4 className="pt-3">মোট বিজ্ঞাপন পোস্ট।</h4>
              </div>
              <p className="icon-container-amount">12</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 rounded-1 shadow-sm">
            <div className="card-body info-cards d-flex justify-content-between  align-items-center ">
              <div>
                <p className="icon-container">
                  <MdInsertComment></MdInsertComment>
                </p>
                <h4 className="pt-3">মোট মন্তব্য।</h4>
              </div>
              <p className="icon-container-amount">12</p>
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
                        <th>Post Title</th>
                        <th>Category</th>
                        <th>Post Date</th>
                        <th>Post Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {fakeData.map((item, index) => (
                        <tr key={index} className="text-center">
                          <td>{index + 1}</td>
                          <td>{item.advertisement}</td>
                          <td>{item.category}</td>
                          <td>{item.postDate}</td>
                          <td><span className="badge bg-dark">{item.postStatus}</span></td>
                          <td>
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

export default UserDasboard;
