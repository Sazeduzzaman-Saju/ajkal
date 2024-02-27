import React from "react";
import "./style.css";

const smalLeftData = [
  {
    imageLink: "https://www.hindustantimes.com/ht-img/img/2024/02/23/550x309/CRICKET-TEST-IND-ENG--93_1708657586432_1708657626179.JPG",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "../../../../public/image/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "https://img.cricketworld.com/images/d-133824/georgia-atkinson-.jpg",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "https://www.espncricinfo.com/db/PICTURES/CMS/363900/363973.6.jpg",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
  {
    imageLink: "https://www.hindustantimes.com/ht-img/img/2023/12/28/550x309/PTI12-26-2023-000394A-0_1703741487467_1703741520568.jpg",
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
                  <h6 className="mb-0 text-muted fw-semibold ">{data.titles}</h6>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="col-lg-6">
          <a href="">
            <div className="card border-0">
              <div className="card-body p-0">
                <img
                  className="w-100 rounded-2 img-fluid"
                  src="https://images.prothomalo.com/prothomalo-bangla%2F2024-02%2F9530ee3c-0cbe-417c-80fa-407938d5a0e8%2F527509_01_02.jpg?rect=0%2C0%2C6428%2C4285&auto=format%2Ccompress&fmt=webp&dpr=1.0&format=webp&w=480"
                  alt=""
                />
                <h5 className="m-0 p-0 pt-2 text-center text-muted ">
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
                  <h6 className="mb-0 text-muted fw-semibold ">{data.titles}</h6>
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
