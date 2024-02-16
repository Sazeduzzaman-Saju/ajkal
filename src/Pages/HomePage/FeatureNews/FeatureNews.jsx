import React from "react";
import './FeatureNews.css'

const featureData = [
  {
    country: "যুক্তরাষ্ট্র",
    time: "৬ ঘণ্টা আগে",
    featureTite: "ট্রাম্পকে তিরস্কার ন্যাটো প্রধান ও বাইডেনের",
    shortDescrioption:
      "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের মন্তব্যের তীব্র নিন্দা জানিয়েছেন মন্তব্যেরমন্তব্যেরমন্তব্যেরমন্তব্যের",
    featureImage: "../../../../public/image/Features/feature1.png",
  },
  {
    country: "যুক্তরাষ্ট্র",
    time: "৬ ঘণ্টা আগে",
    featureTite: "ড. ইউনূসের আবেদন খারিজ, দিতে হবে ৫০ কোটি টাকা",
    shortDescrioption:
      "শান্তিতে নোবেলজয়ী ড. মুহাম্মদ ইউনূসের গ্রামীন টেলিকম ট্রাস্টকে ৫০ মন্তব্যের মন্তব্যের মন্তব্যের মন্তব্যের মন্তব্যের",
    featureImage: "../../../../public/image/Features/feature2.png",
  },
  {
    country: "যুক্তরাষ্ট্র",
    time: "৬ ঘণ্টা আগে",
    featureTite: "রোজার আগে পেঁয়াজ-চিনির রপ্তানি বাড়াতে ভারতকে অনুরোধ",
    shortDescrioption:
      "প্রধান জেনস স্টোলেনবার্গ। রোববার এক বিবৃতিতে ট্রাম্পের মন্তব্যের তীব্র নিন্দা মন্তব্যের",
    featureImage: "../../../../public/image/Features/feature3.png",
  },
  {
    country: "যুক্তরাষ্ট্র",
    time: "৬ ঘণ্টা আগে",
    featureTite: "ড. ইউনূসের আবেদন খারিজ, দিতে হবে ৫০ কোটি টাকা",
    shortDescrioption:
      "শান্তিতে নোবেলজয়ী ড. মুহাম্মদ ইউনূসের গ্রামীন টেলিকম ট্রাস্টকে ৫০ মন্তব্যের মন্তব্যের মন্তব্যের মন্তব্যের",
    featureImage: "../../../../public/image/Features/feature2.png",
  },
];
const FeatureNews = () => {
  return (
    <div className="row">
      {featureData.map((data, index) => (
        <div className="col-lg-3" key={index}>
          <div className="card rounded-1 border-0 shadow-sm">
            <a href="">
              <div className="card-body">
                <div className="d-flex justify-content-between  align-items-center ">
                  <p className="secondary-color">{data.country}</p>
                  <p className="badge bg-light text-black">{data.time}</p>
                </div>
                <h5 className="main-color">{data.featureTite}</h5>
                <p className="card-text text-muted">
                  {data?.shortDescrioption?.length > 83
                    ? `${data.shortDescrioption.slice(0, 83)}...`
                    : data?.shortDescrioption}
                </p>
              </div>
              <img
                src={data.featureImage} // Replace with the actual image source
                className="card-img-top rounded-0"
                alt="Card Image"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureNews;
