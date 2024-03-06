import React from "react";
import "./SorboshesKhobor.css";
import { Link } from "react-router-dom";

const sorboshesData = [
  {
    id: "1",
    category: "সারা বিশ্ব",
    postTime: "৫৭ মিনিট আগে",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postDescription:
      "পাকিস্তানের জাতীয় পরিষদ নির্বাচনে এবার দলীয় প্রতীকে লড়তে পারেনি",
    postImage:
      "https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F7f2ae5ff-be3e-48bb-80a0-8fa87432bae4%2FInu_jasod.jpeg?rect=0%2C61%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480",
  },
  {
    id: "2",
    category: "সারা বিশ্ব",
    postTime: "৫৭ মিনিট আগে",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postDescription:
      "পাকিস্তানের জাতীয় পরিষদ নির্বাচনে এবার দলীয় প্রতীকে লড়তে পারেনি",
    postImage:
      "https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F7f2ae5ff-be3e-48bb-80a0-8fa87432bae4%2FInu_jasod.jpeg?rect=0%2C61%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480",
  },
  {
    id: "3",
    category: "সারা বিশ্ব",
    postTime: "৫৭ মিনিট আগে",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postDescription:
      "পাকিস্তানের জাতীয় পরিষদ নির্বাচনে এবার দলীয় প্রতীকে লড়তে পারেনি",
    postImage:
      "https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F7f2ae5ff-be3e-48bb-80a0-8fa87432bae4%2FInu_jasod.jpeg?rect=0%2C61%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480",
  },
  {
    id: "4",
    category: "সারা বিশ্ব",
    postTime: "৫৭ মিনিট আগে",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postDescription:
      "পাকিস্তানের জাতীয় পরিষদ নির্বাচনে এবার দলীয় প্রতীকে লড়তে পারেনি",
    postImage:
      "https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F7f2ae5ff-be3e-48bb-80a0-8fa87432bae4%2FInu_jasod.jpeg?rect=0%2C61%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480",
  },
  {
    id: "5",
    category: "সারা বিশ্ব",
    postTime: "৫৭ মিনিট আগে",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postDescription:
      "পাকিস্তানের জাতীয় পরিষদ নির্বাচনে এবার দলীয় প্রতীকে লড়তে পারেনি",
    postImage:
      "https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F7f2ae5ff-be3e-48bb-80a0-8fa87432bae4%2FInu_jasod.jpeg?rect=0%2C61%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480",
  },
  {
    id: "6",
    category: "সারা বিশ্ব",
    postTime: "৫৭ মিনিট আগে",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postDescription:
      "পাকিস্তানের জাতীয় পরিষদ নির্বাচনে এবার দলীয় প্রতীকে লড়তে পারেনি",
    postImage:
      "https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F7f2ae5ff-be3e-48bb-80a0-8fa87432bae4%2FInu_jasod.jpeg?rect=0%2C61%2C1600%2C1067&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480",
  },
];

const sorboshesPothitoData = [
  {
    id: "1",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/a93130a6dd1285a7ac6adc2776eef5ca9315e4fb855d1d66.jpg",
  },
  {
    id: "2",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/666cd631392472bcfb84a978006a12caadaf0aecc54a6487.jpg",
  },
  {
    id: "3",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/7fbf7d175b47f9fa3f5a399eef6b748e5253a668949a31da.jpg",
  },
  {
    id: "4",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/7fe12d6e2d3c4e2e661b52fe006b22298f8b7fa7fa2934d2.jpg",
  },
  {
    id: "5",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/23acb2b717e5907b288e75947d3256dc36882510b5009177.jpg",
  },
  {
    id: "6",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/e3ccd551402f995d19f48261f40a93ef075aec3c98134232.jpg",
  },
  {
    id: "7",
    category: "সারা বিশ্ব",
    postTitle: "নওয়াজের দলে যোগ দিলেন ৬ স্বতন্ত্র প্রার্থী",
    postImage:
      "https://d2u0ktu8omkpf6.cloudfront.net/666cd631392472bcfb84a978006a12caadaf0aecc54a6487.jpg",
  },
];

const SorboshesKhobor = () => {
  return (
    <div className="row mb-5 mt-5">
      <div className="col-lg-8">
        <div style={{ borderBottom: "2px solid var(--secondary)" }}>
          <h5 className="text-muted">সর্বশেষ আজকাল</h5>
        </div>
        <div className="row mt-4">
          {sorboshesData.map((data, index) => (
            <div className="col-lg-4 mb-3" key={index}>
              <Link to={`/news/${data.id}`}>
                <div className="card rounded-1 border-0 shadow-sm">
                  <div className="card-body card-body-1">
                    <div>
                      <p className="secondary-color">{data.category}</p>
                      <p className="text-muted">{data.postTime}</p>
                      <h5 className="main-color">{data.postTitle}</h5>
                      <p>{data.postDescription}</p>
                    </div>
                  </div>
                  <div className="card-body p-0 card-body-2">
                    <img
                      className=" sorboshes-news-image"
                      src={data.postImage}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-4">
        <div style={{ borderBottom: "2px solid var(--secondary)" }}>
          <h5 className="text-muted">সর্বাধিক পঠিত</h5>
        </div>
        <div className="row mt-3">
          {sorboshesPothitoData.map((data, index) => (
            <div className="col-lg-12 mt-2" key={index}>
              <Link to={`/news/${data.id}`}>
                <div className="card mb-1 border-0 shadow-sm rounded-2">
                  <div className="card-body p-0 d-flex align-items-center">
                    <div className="pothito-img w-25 h-100 ">
                      <img
                        className="img-fluid rounded-1 "
                        src={data.postImage}
                        alt=""
                      />
                    </div>
                    <div className="pothito-content w-75 ps-4">
                      <div>
                        <h5 className="main-color">{data.category}</h5>
                        <p className="m-0 text-muted">{data.postTitle}...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SorboshesKhobor;
