import React from "react";
import "./NewsSectionOne.css";
import { Link } from "react-router-dom";
const smalRightData = [
  {
    id: "7",
    imageLink:
      "https://d2u0ktu8omkpf6.cloudfront.net/e65277ba8c7ea0a7c4295824b8c7a9a2cda74b1783d6e70a.jpg",
    titles: "নতুন প্রযুক্তির সাথে আসছে উচ্চমান চুল কাটাতে দিবসে বিশেষ ।",
  },
  {
    id: "8",
    imageLink:
      "https://d2u0ktu8omkpf6.cloudfront.net/b9afca3fc3085a815547d9fc8403f0bda923cd8d5aa13910.jpg",
    titles: "মুক্তিযুদ্ধে সেরা শত্রুকে হারিয়ে মুক্তির অবসানে  শত্রুকে হারিয়ে হারিয়ে মুক্তির অবসানে।",
  },
  {
    id: "9",
    imageLink:
      "https://d2u0ktu8omkpf6.cloudfront.net/67b220af189ca6307747810d6c63236f90fac5cb55ac665a.png",
    titles: "মহাকবর দিবসে বিশেষ আয়োজনে রোমান্টিক রাত্রি কাটাতে বিশেষ আয়োজনে।",
  },
  {
    id: "10",
    imageLink:
      "https://d2u0ktu8omkpf6.cloudfront.net/927a4611f2bbb3dbbb4d1075573a7e4701585897324ecc2b.jpg",
    titles: "বিজ্ঞানীদের সফল প্রযুক্তির মাধ্যমে আবৃত্তি করা হবে আবারো প্রযুক্তির মাধ্যমে।",
  },
  {
    id: "11",
    imageLink:
      "https://d2u0ktu8omkpf6.cloudfront.net/944cc731d6c89f07c2f096b28faa0553303ad4c1eded2f43.jpg",
    titles: "আত্মনির্ভরশীল বাংলাদেশে নতুন উদ্যোগে বিনিয়োগ হচ্ছে বৃহত্তর প্রকল্প উদ্যোগে বিনিয়োগ।",
  },
  {
    id: "12",
    imageLink: "https://d2u0ktu8omkpf6.cloudfront.net/dbe790171661f76e24d0867b695498fb517a8df9c76f53e6.jpg",
    titles: "সমাজসেবা কর্মীদের মাধ্যমে গ্রামীণ অঞ্চলে শিক্ষা প্রতিষ্ঠানে নতুন মাধ্যমে গ্রামীণ।",
  },
];
const smalLeftData = [
  {
    id: "1",
    imageLink:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMwCDya5bKs1rW0X_4rUeCWniEWomoJiXkIhefDy9vX8mu5jvXcOFBI08JSdx2OEts3krCxifhVro3IuFW958SZw4lb12E1hz_kxT1tMSr0aav2Ww9B-LHL8ova11QryWlmGUf2qT-Jol7fBW_qJxaMIoVtClzZKHhoO4vpR1MqZZ2HiHuEBLUy4Jc057S/w640/BD%20News%20Official%20Website.png",
    titles: "বীজ পেঁয়াজ নয়, কালো সোনা: সম্ভাবনা ও সৌন্দর্য মিলেমিশে।",
  },
  {
    id: "2",
    imageLink:
      "https://cdn.dhakapost.com/media/imgAll/BG/2024January/nator-dame-20240126124633.jpg",
    titles: "১৬৬ রানের লক্ষ্যটা যেন হেসেখেলেই পেরিয়ে গেল।",
  },
  {
    id: "3",
    imageLink:
      "https://www.jugantor.com/assets/news_photos/2020/08/17/image-335681-1597666973.jpg",
    titles: "বিচ্ছেদের হুমকি ইমরান হাশমির স্ত্রীর, যা জানাল।",
  },
  {
    id: "4",
    imageLink:
      "https://www.aljazeera.com/wp-content/uploads/2023/12/Activists-protesting-the-arrest-of-workers-in-recent-wage-hike-protest-copy-1703179928.jpg?resize=770%2C513&quality=80",
    titles: "সাংবাদিকদের অধিকার আদায়ে ব্রাহ্মণবাড়িয়ায়।",
  },
  {
    id: "5",
    imageLink:
      "https://img.cricketworld.com/images/d-133824/georgia-atkinson-.jpg",
    titles: "বেইলি রোড ট্রাজেডির সুষ্ঠু তদন্ত এবং বিচার হবে।",
  },
  {
    id: "6",
    imageLink: "http://ajkalusa.nawazgroup.us/img/Features/feature3.png",
    titles: "কারাগারে রাশিয়ার বিরোধী নেতা নাভালনির মৃত্যু.",
  },
];

const NewsSectionOne = () => {
  return (
    <div>
      <div className="row mb-5 align-items-center ">
        <div className="col-lg-3">
          {smalLeftData.map((data) => (
            <Link to={`/news/${data.id}`} className="text-muted" key={data.id}>
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
                    <h6 className="mb-0 main-color">{data.titles.slice(0,18)}...</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="col-lg-3">
          {smalRightData.map((data) => (
            <Link to={`/news/${data.id}`} className="text-muted" key={data.id}>
              <div className="card border-0 shadow-sm mb-2">
                <div className="card-body p-0">
                  <div className="d-flex align-items-center image-container">
                    <div>
                      <img
                        className="img-fluid rouned-2 news-ft-section-imge"
                        src={data.imageLink}
                        width={'100px'}
                        height={'80px'}
                        alt=""
                      />
                    </div>
                    <div className="ps-2 p-2">
                      <h6 className="mb-0 main-color">{data.titles.slice(0,18)}...</h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="col-lg-6">
          <Link to="/news/1" className="text-muted">
            <div className="card border-0">
              <div className="card-body p-0 image-container">
                <img
                  className="w-100 rounded-2 zoom-image"
                  src="https://d2u0ktu8omkpf6.cloudfront.net/9884e75ef459571ccbf52b43501e895d57d6534ba82232d4.jpg"
                  alt=""
                />
                <h5 className=" p-0 pt-3 main-color">
                  বীজ পেঁয়াজ নয়, কালো সোনা: সম্ভাবনা ও সৌন্দর্য মিলেমিশে একাকার!
                </h5>
                <p>
                  একাকার! উৎপাদন ব্যয় কম ও বিক্রিতে লাভ বেশি হওয়ায় রাজশাহীতে দিন
                  দিন জনপ্রিয় হচ্ছে ‘কালো সোনা’ খ্যাত বীজ পেঁয়াজের চাষ।
                  বিস্তীর্ণ ফসলের মাঠে সম্ভাবনা ও।
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsSectionOne;
