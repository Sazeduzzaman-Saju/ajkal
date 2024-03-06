import React, { useState } from "react";
import "./ReletedNews.css";
import { Link } from "react-router-dom";

const RelatedNews = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  // Fake news data
  const newsData = [
    {
      id: 1,
      category: "বিনোদন",
      title: "মার্কিন যুক্তরাষ্ট্রের সবচেয়ে",
      sub_title: "২১৭ বার করোনার টিকা নিয়েও সুস্থ।",
      description:
        "নিউ ইয়র্ক, মার্কিন যুক্তরাষ্ট্রের সবচেয়ে বড় শহর, এটি একটি স্থাপত্যমান অবিস্মরণীয় শিল্পকলা সহ অনেকগুলি ঐতিহাসিক স্মৃতিস্তম্ভ, শান্তির ভবন এবং অসংখ্য চমকময় উচ্চতর দিয়ে দেখা যায়।",
      timestamp: "6 মিনিট আগে",
      imageUrl:
        "https://d2u0ktu8omkpf6.cloudfront.net/85064e62f8af714d9d65a63884bd250f82d2664ed47d154c.jpg",
    },
    {
      id: 2,
      category: "বিনোদন",
      title: "বিজ্ঞান ও প্রযুক্তি ফিরে এলো ",
      sub_title: "বিজ্ঞান ও প্রযুক্তি ফিরে এলো ফেসবুক।",
      description:
        "একটি পৃষ্ঠভূমি শহর, যা শান্তিময় আলো এবং জীবনের উজ্জ্বল জীবনে পূর্ণ।",
      timestamp: "10 মিনিট আগে",
      imageUrl: "https://d2u0ktu8omkpf6.cloudfront.net/c7699c834b7f49cd19a309dfe630cffa19fe32495dcf8a7e.jpg",
    },
    {
      id: 3,
      category: "বিনোদন",
      title: "অন্যান্য শহরের আলো",
      sub_title: "যে শহরটি সব সময় আলোয় প্রকাশ করে।",
      description:
        "একটি পৃষ্ঠভূমি শহর, যা শান্তিময় আলো এবং জীবনের উজ্জ্বল জীবনে পূর্ণ।",
      timestamp: "10 মিনিট আগে",
      imageUrl: "https://d2u0ktu8omkpf6.cloudfront.net/ab2471fa90219e40abed803250058f7c9d41c377d455145f.jpg",
    },
    {
      id: 4,
      category: "বিনোদন",
      title: "একটি পৃষ্ঠভূমি শহর",
      sub_title: "শান্তিময় আলো এবং জীবনের একটি পৃষ্ঠভূমি শহর।",
      description:
        "একটি পৃষ্ঠভূমি শহর, যা শান্তিময় আলো এবং জীবনের উজ্জ্বল জীবনে পূর্ণ।",
      timestamp: "10 মিনিট আগে",
      imageUrl: "https://d2u0ktu8omkpf6.cloudfront.net/a21dec5cd8809040a91bf574d8c0501b30fcb42ea83c1afe.jpg",
    },
  ];

  return (
    <div className="row my-4 gx-3">
      {newsData.map((news) => (
        <div className="col-lg-3 " key={news.id}>
          <Link to={`/news/${news.id}`}>
            <div
              className={`post-module ${
                hoveredCard === news.id ? "hovered" : ""
              }`}
              onMouseEnter={() => handleHover(news.id)}
              onMouseLeave={handleLeave}
            >
              <div className="thumbnail shadow-sm">
                <div className="date">
                  <div className="day">27</div>
                  <div className="month">Mar</div>
                </div>
                <img src={news.imageUrl} alt={news.title} />
              </div>
              <div className="post-content">
                <div className="category">{news.category}</div>
                <h1 className="title">{news.title}</h1>
                <h2 className="sub-title">{news.sub_title}</h2>
                <p
                  className={`description ${
                    hoveredCard === news.id ? "visible" : ""
                  }`}
                >
                  {news.description}
                </p>
                <div className="post-meta">
                  <span className="timestamp">
                    <i className="fa fa-clock-o"></i>
                    {news.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RelatedNews;
