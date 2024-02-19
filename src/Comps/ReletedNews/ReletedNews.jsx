import React from "react";
import { Link } from "react-router-dom";

const ReletedNews = () => {
  return (
    <div className="row my-4">
      <div className="col-lg-3">
        <div className="card border-0 releted-news">
          <div className="card-header p-0">
            <Link to={"/"}>
              <img
                className="img-fluid w-100"
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2Ff755541c-4c87-4159-a96b-07ed70e5db3a%2FUntitled_1.jpg?rect=2%2C0%2C1728%2C1152&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt=""
              />
            </Link>
          </div>
          <div className="card-body p-0">
            <Link to={"/"}>
              <h4 className="pt-2 text-muted">
                দুর্বৃত্তদের এলোপাতাড়ি গুলি, দুই শ্রমিক গুলিবিদ্ধ
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card border-0 releted-news">
          <div className="card-header p-0">
            <Link to={"/"}>
              <img
                className="img-fluid w-100"
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2Ff755541c-4c87-4159-a96b-07ed70e5db3a%2FUntitled_1.jpg?rect=2%2C0%2C1728%2C1152&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt=""
              />
            </Link>
          </div>
          <div className="card-body p-0">
            <Link to={"/"}>
              <h4 className="pt-2 text-muted">
              তারকাদের মধ্যে কে বা কারা হচ্ছেন সংরক্ষিত নারী আসনের সংসদ সদস্য
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card border-0 releted-news">
          <div className="card-header p-0">
            <Link to={"/"}>
              <img
                className="img-fluid w-100"
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2Ff755541c-4c87-4159-a96b-07ed70e5db3a%2FUntitled_1.jpg?rect=2%2C0%2C1728%2C1152&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt=""
              />
            </Link>
          </div>
          <div className="card-body p-0">
            <Link to={"/"}>
              <h4 className="pt-2 text-muted">
              বিএনপি থেকে বহিষ্কৃত স্বতন্ত্র সংসদ সদস্য একরামুজ্জামান যোগ দিলেন আওয়ামী লীগে
              </h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="card border-0 releted-news">
          <div className="card-header p-0">
            <Link to={"/"}>
              <img
                className="img-fluid w-100"
                src="https://images.prothomalo.com/prothomalo-bangla%2F2023-12%2Ff755541c-4c87-4159-a96b-07ed70e5db3a%2FUntitled_1.jpg?rect=2%2C0%2C1728%2C1152&auto=format%2Ccompress&fmt=webp&format=webp&w=300&dpr=1.0"
                alt=""
              />
            </Link>
          </div>
          <div className="card-body p-0">
            <Link to={"/"}>
              <h4 className="pt-2 text-muted">
              চাঁদাবাজির কারণে মানুষ অতিষ্ঠ, ভয়ে নাম বলতে পারে না: এ কে আজাদ
              </h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReletedNews;
