import React from "react";
import "./style.css";

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
];
const NewsSectionThree = () => {
  return (
    <div>
      <div className="row mb-5 align-items-center ">
        <div className="col-lg-3">
          {smalLeftData.map((data, index) => (
            <a href="#" className="text-muted" key={index}>
              <div className="d-flex align-items-center mb-3">
                <div className="w-30">
                  <img
                    className="img-fluid rouned-1 post-boxs-small"
                    src={data.imageLink}
                    alt=""
                  />
                </div>
                <div className="ps-2">
                  <h6 className="mb-0 main-color">{data.titles}</h6>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="col-lg-6">
          <a href="">
            <div className="card border-0">
              <div className="card-body p-0 image-container">
                <img
                  className="w-100 rounded-2 zoom-image"
                  src="../../../../public/image/Features/feature3.png"
                  alt=""
                />
                <h5 className="m-0 p-0 pt-2 text-center">
                  কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.
                </h5>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-3">
          {smalLeftData.map((data, index) => (
            <a href="#" className="text-muted" key={index}>
              <div className="d-flex align-items-center mb-3">
                <div className="w-30">
                  <img
                    className="img-fluid rouned-1 post-boxs-small"
                    src={data.imageLink}
                    alt=""
                  />
                </div>
                <div className="ps-2">
                  <h6 className="mb-0 main-color">{data.titles}</h6>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSectionThree;
