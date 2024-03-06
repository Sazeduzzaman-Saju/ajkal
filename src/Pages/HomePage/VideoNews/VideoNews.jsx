import React from "react";
import PostHeader from "../../../Comps/PostHeader/PostHeader";

const videoNewsDetails = [
  {
    id: "1",
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
  {
    id: "2",
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
  {
    id: "3",
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
  {
    id: "4",
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
];

const VideoNews = () => {
  return (
    <div>
      <PostHeader title="ভিডিও সংবাদ" />
      <div className="row gx-3 align-items-center">
        <div className="col-lg-6">
          <a href="">
            <div className="card border-0">
              <div className="card-body p-0">
                <img
                  className="img-fluid rounded-2"
                  src="https://i.ytimg.com/vi/VFaIklJQ4U8/maxresdefault.jpg"
                  alt=""
                />
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-6">
          {videoNewsDetails.map(
            ({ videoLink, videTitle, VideoDescription }, index) => (
              <a href="" key={index} className="text-muted">
                <div className="d-flex align-items-center mb-1">
                  <div className="rounded-1">
                    <img
                      className="img-fluid rounded-2"
                      width={230}
                      src="https://www.banglainsider.com/news-image/main/main_1660884243.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ps-3">
                    <h5 className="mb-1 main-color">{videTitle}</h5>
                    <p className="m-0">{VideoDescription}</p>
                  </div>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoNews;
