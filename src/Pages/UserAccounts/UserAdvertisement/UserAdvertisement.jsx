import React from "react";
import NewPost from "../UserPost/NewPost";
import { Link } from "react-router-dom";
import { LuView } from "react-icons/lu";
import { TbEdit } from "react-icons/tb";
import { MdDelete } from "react-icons/md";

const UserAdvertisement = () => {
  const fakeData = [
    {
      id: 1,
      category: "যুক্তরাষ্ট্র",
      postDate: "১২ ফেব্রুয়ারি ২০২৪",
      advertisement: "না",
      postStatus: "পাবলিশ হয় নি।",
    },
    {
      id: 2,
      category: "বাংলাদেশ",
      postDate: "১৫ ফেব্রুয়ারি ২০২৪",
      advertisement: "হ্যাঁ",
      postStatus: "পাবলিশ হয়েছে।",
    },
    {
      id: 3,
      category: "কম্পিউটার",
      postDate: "২০ ফেব্রুয়ারি ২০২৪",
      advertisement: "না",
      postStatus: "পাবলিশ হয়েছে।",
    },
    {
      id: 4,
      category: "বিজ্ঞান",
      postDate: "২৫ ফেব্রুয়ারি ২০২৪",
      advertisement: "হ্যাঁ",
      postStatus: "পাবলিশ হয়েছে।",
    },
    {
      id: 5,
      category: "খেলা",
      postDate: "২৮ ফেব্রুয়ারি ২০২৪",
      advertisement: "না",
      postStatus: "পাবলিশ হয় নি।",
    },
  ];
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
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="messages-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#messages"
                    type="button"
                    role="tab"
                    aria-controls="messages"
                    aria-selected="false"
                  >
                    বিজ্ঞাপন স্ট্যাটাস দেখুন
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
                        <h3 className="text-center pt-5 main-color">বিজ্ঞাপন দিন।</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <form action="" method="post">
                          <div className="card shadow-sm mb-5" style={{border: "1px solid #eee"}}>
                            <div className="card-body">
                              <div className="row">
                                <div className="col-lg-4 mb-3">
                                  <div>
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label="Default select example"
                                      aria-placeholder="কোথায় বিজ্ঞাপন দেখতে চান"
                                    >
                                      <option selected>
                                        কোথায় বিজ্ঞাপন দেখতে চান
                                      </option>
                                      <option value="ইপেপার">ইপেপার</option>
                                      <option value="অনলাইন পোর্টাল">
                                        অনলাইন পোর্টাল
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                  <div>
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label="বিজ্ঞাপনের স্থান নির্বাচন করুন"
                                    >
                                      <option selected>
                                        বিজ্ঞাপনের স্থান নির্বাচন করুন।
                                      </option>
                                      <option value="ইপেপার">
                                        প্রধান বিজ্ঞাপন
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        প্রথম পেজ
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        দ্বিতীয় পেজ
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        তৃতীয় পেজে
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        হোমপেজের
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        সাইডবারে
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        বিস্তারিত নিউজে
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                  <div>
                                    <input
                                      type="file"
                                      name=""
                                      id=""
                                      accept="image/*"
                                      placeholder="বিজ্ঞাপনের ছবি আপলোড করুন"
                                      className="form-control form-control-sm  custom-file-input"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                  <div>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      placeholder=" বিজ্ঞাপনের সময়কাল"
                                      className="form-control form-control-sm "
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                  <div>
                                    <select
                                      className="form-select form-select-sm"
                                      aria-label="বিজ্ঞাপনের সময়কাল"
                                    >
                                      <option selected>
                                        বিজ্ঞাপনের সময়কাল
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        ১ সাপ্তাহ
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        {" "}
                                        ২ সাপ্তাহ
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        {" "}
                                        ৩ সাপ্তাহ
                                      </option>
                                      <option value="অনলাইন পোর্টাল">
                                        {" "}
                                        ৪ সাপ্তাহ
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4 mb-3">
                                  <div>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="form-control form-control-sm "
                                      placeholder="মোট বিল"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12 mb-3">
                                  <div>
                                    <input
                                      type="text"
                                      name=""
                                      id=""
                                      className="form-control form-control-sm "
                                      placeholder="এখন কত পরিশোধ করতে চান"
                                    />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="d-flex justify-content-end ">
                                    <button
                                      type="submit"
                                      className="submit-btn-one"
                                    >
                                      Submit
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
                                    <th>Category</th>
                                    <th>Post Date</th>
                                    <th>Advertisement</th>
                                    <th>Post Status</th>
                                    <th>Due Ammount</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody className="text-center">
                                  {fakeData.map((item, index) => (
                                    <tr key={index} className="text-center">
                                      <td>{index + 1}</td>
                                      <td>{item.category}</td>
                                      <td>{item.postDate}</td>
                                      <td>{item.advertisement}</td>
                                      <td>{item.postStatus}</td>
                                      <td>10$</td>
                                      <td>
                                        <div className="d-flex justify-content-center  align-items-center ">
                                          <Link
                                            to={"#"}
                                            className="me-2 user-dash-icons"
                                          >
                                            <LuView></LuView>
                                          </Link>
                                          <Link
                                            to={"#"}
                                            className="me-2 user-dash-icons"
                                          >
                                            <TbEdit></TbEdit>
                                          </Link>
                                          <Link
                                            to={"#"}
                                            className=" user-dash-icons"
                                          >
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
                <div
                  className="tab-pane"
                  id="messages"
                  role="tabpanel"
                  aria-labelledby="messages-tab"
                >
                  messages
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
