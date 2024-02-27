import React from "react";

const NewsSectionTwo = [
  {
    imgsrc:
      "https://www.aljazeera.com/wp-content/uploads/2023/02/339M8ZK-highres.jpg?resize=770%2C513&quality=80",
    postTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    postDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন.",
  },
  {
    imgsrc:
      "https://www.aljazeera.com/wp-content/uploads/2023/02/339M8ZK-highres.jpg?resize=770%2C513&quality=80",
    postTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    postDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন.",
  },
  {
    imgsrc:
      "https://www.aljazeera.com/wp-content/uploads/2023/02/339M8ZK-highres.jpg?resize=770%2C513&quality=80",
    postTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    postDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন.",
  },
  {
    imgsrc:
      "https://www.aljazeera.com/wp-content/uploads/2023/02/339M8ZK-highres.jpg?resize=770%2C513&quality=80",
    postTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    postDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন.",
  },
  {
    imgsrc:
      "https://www.aljazeera.com/wp-content/uploads/2023/02/339M8ZK-highres.jpg?resize=770%2C513&quality=80",
    postTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    postDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন.",
  },
  {
    imgsrc:
      "https://www.aljazeera.com/wp-content/uploads/2023/02/339M8ZK-highres.jpg?resize=770%2C513&quality=80",
    postTitle: "সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্পের",
    postDescription:
      "স্বাস্থ্যমন্ত্রী ডা. সামন্ত লাল সেন বলেছেন, ‘অবৈধ হাসপাতাল-ক্লিনিক বন্ধ করে দিন.",
  },
];

const VideoNews = () => {
  return (
    <div>
      <div className="row">
        {NewsSectionTwo.map(
          ({ imgsrc, postTitle, postDescription }, index) => (
            <div className="col-lg-4" key={imgsrc.id}>
              <a href="" key={index} className="text-muted">
                <div className="d-flex align-items-center mb-3">
                  <div>
                    <img width={250} src={imgsrc} className="img-fluid rounded-1" alt="" />
                  </div>
                  <div className="ps-3">
                    <h5 className="mb-1 main-color">{postTitle}</h5>
                    <p className="m-0">{postDescription}</p>
                  </div>
                </div>
              </a>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default VideoNews;
