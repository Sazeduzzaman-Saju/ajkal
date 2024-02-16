import React from "react";
import PostHeader from "../PostHeader/PostHeader";

const NewsSectionTwo = [
  {
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
  {
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
  {
    videoLink:
      "https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1",
    videTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    VideoDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন, নইলে উপযুক্ত. স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন",
  },
  {
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
      <div className="row">
        <div className="col-lg-6">
          <a href="">
            <div className="card border-0">
              <div className="card-body p-0">
                <iframe
                  className="mb-0 pb-0 rounded-1 shadow-sm "
                  width="100%"
                  height="358"
                  src="https://www.youtube.com/embed/FnO61gV6O_g?si=s1-YrwJfn5b1R9xb&autoplay=1&mute=1"
                  title="YouTube Video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-6">
          {NewsSectionTwo.map(
            ({ videoLink, videTitle, VideoDescription }, index) => (
              <a href="" key={index} className="text-muted">
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <iframe
                      className="mb-0 pb-0 rounded-1 shadow-sm"
                      width="128"
                      height="72"
                      src={videoLink}
                      title="YouTube Video"
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
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
