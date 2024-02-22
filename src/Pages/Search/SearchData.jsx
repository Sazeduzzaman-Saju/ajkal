import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./style.css";

const SearchData = () => {
  const searchFakeData = [
    {
      id: "01",
      newsTitle:
        "চ্যাম্পিয়নস লিগ আর্সেনালকে হারাল পোর্তো, বার্সেলোনার জয় আটকাল নাপোলি",
      newsDescription:
        "আজেন্টাইন কিংবদন্তি ডিয়েগো ম্যারাডোনার দুই সাবেক ক্লাব বার্সেলোনা ও নাপোলি মুখোমুখি হয়েছিল তাঁরই নামের স্টেডিয়ামে। তবে দুই ক্লাবের কেউই জেতেনি।",
      writer: "sazeduzzaman",
      date: "২৫ ফেব্রুয়ারি ২০২৪",
      time: "10:52",
      thumb:
        "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
      img: "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
    },
    {
      id: "01",
      newsTitle:
        "চ্যাম্পিয়নস লিগ আর্সেনালকে হারাল পোর্তো, বার্সেলোনার জয় আটকাল নাপোলি",
      newsDescription:
        "আজেন্টাইন কিংবদন্তি ডিয়েগো ম্যারাডোনার দুই সাবেক ক্লাব বার্সেলোনা ও নাপোলি মুখোমুখি হয়েছিল তাঁরই নামের স্টেডিয়ামে। তবে দুই ক্লাবের কেউই জেতেনি।",
      writer: "sazeduzzaman",
      date: "২৫ ফেব্রুয়ারি ২০২৪",
      time: "10:52",
      thumb:
        "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
      img: "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
    },
    {
      id: "01",
      newsTitle:
        "চ্যাম্পিয়নস লিগ আর্সেনালকে হারাল পোর্তো, বার্সেলোনার জয় আটকাল নাপোলি",
      newsDescription:
        "আজেন্টাইন কিংবদন্তি ডিয়েগো ম্যারাডোনার দুই সাবেক ক্লাব বার্সেলোনা ও নাপোলি মুখোমুখি হয়েছিল তাঁরই নামের স্টেডিয়ামে। তবে দুই ক্লাবের কেউই জেতেনি।",
      writer: "sazeduzzaman",
      date: "২৫ ফেব্রুয়ারি ২০২৪",
      time: "10:52",
      thumb:
        "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
      img: "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
    },
    {
      id: "01",
      newsTitle:
        "চ্যাম্পিয়নস লিগ আর্সেনালকে হারাল পোর্তো, বার্সেলোনার জয় আটকাল নাপোলি",
      newsDescription:
        "আজেন্টাইন কিংবদন্তি ডিয়েগো ম্যারাডোনার দুই সাবেক ক্লাব বার্সেলোনা ও নাপোলি মুখোমুখি হয়েছিল তাঁরই নামের স্টেডিয়ামে। তবে দুই ক্লাবের কেউই জেতেনি।",
      writer: "sazeduzzaman",
      date: "২৫ ফেব্রুয়ারি ২০২৪",
      time: "10:52",
      thumb:
        "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
      img: "https://online.maryville.edu/wp-content/uploads/sites/97/2020/08/author-at-work.jpg",
    },
  ];
  return (
    <div className="contaioner">
      <hr />
      <div className="row">
        <div className="col-lg-12">
          {searchFakeData.map((data, index) => (
            <div className="card border-0 shadow-sm mb-2" key={index}>
              <Link to={"/news/:1"}>
                <div className="card-body p-0">
                  <div className="row align-items-center ">
                    <div className="col-lg-8 p-0">
                      <div className="p-5 py-2">
                        {/* Title */}
                        <h4 className="main-color">{data.newsTitle}</h4>
                        {/* Description */}
                        <p className="text-muted">{data.newsDescription}</p>
                        {/* posting time */}
                        <small className=" text-muted ">{data.date}</small>,
                        <small className=" text-info ps-1">{data.time}</small>,
                        <small className="text-muted ps-1">
                          <img
                            className="img-fluid news-author"
                            src={data.img}
                            alt=""
                          />
                          {data.writer}
                        </small>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div>
                        <img
                          className="img-fluid w-100 rounded"
                          src="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F12f807c2-0bc7-4da2-8feb-0dfa47224327%2FGG5EsMDWgAAtHyJ.jpg?rect=0%2C0%2C1604%2C1069&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-12">
          <button className="submit-btn-one rounded-pill px-5 shadow-sm">
            আরও দেখুন।
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
