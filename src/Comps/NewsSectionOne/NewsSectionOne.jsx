import React from "react";
import './NewsSectionOne.css'
const smalLeftData = [
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
];

const NewsSectionOne = () => {
  return (
    <div>
      <div className="row mb-5 align-items-center ">
        <div className="col-lg-3">
          {smalLeftData.map((data, index) => (
            <a href="#" className="text-muted" key={index}>
              <div className="card border-0 shadow-sm mb-2">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center image-container">
                    <div>
                      <img
                        className="img-fluid rouned-2 news-ft-section-imge zoom-image"
                        src={data.imageLink}
                        alt=""
                      />
                    </div>
                    <div className="ps-2 p-2">
                      <h6 className="mb-0 main-color">{data.titles}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="col-lg-3">
          {smalLeftData.map((data, index) => (
            <a href="#" className="text-muted" key={index}>
              <div className="card border-0 shadow-sm mb-2">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center image-container">
                    <div>
                      <img
                        className="img-fluid rouned-2 news-ft-section-imge zoom-image"
                        src={data.imageLink}
                        width={150}
                        height={80}
                        alt=""
                      />
                    </div>
                    <div className="ps-2 p-2">
                      <h6 className="mb-0 main-color">{data.titles}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="col-lg-6">
          <div className="card border-0">
            <div className="card-body p-0 image-container">
              <img
                className="w-100 rounded-2 zoom-image"
                src="../../../../public/image/Features/feature3.png"
                alt=""
              />
              <h5 className=" p-0 pt-3 main-color">কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.</h5>
              <p>বাংলাদেশ নৌবাহিনী জাহাজ ‘সমুদ্র জয়’ বৃহস্পতিবার (১৫ ফেব্রুয়ারি) নিজের স্থাবর-অস্থাবর সম্পত্তির হিসাব দিলেন ভারতের কংগ্রেস নেত্রী সোনিয়া গান্ধী। নিজের স্থাবর-অস্থাবর সম্পত্তির হিসাব দিলেন ভারতের কংগ্রেস নেত্রী সোনিয়া গান্ধী।</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSectionOne;
