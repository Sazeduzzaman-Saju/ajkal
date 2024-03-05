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
      title: "নিউ ইয়র্কে শহরের আলো",
      sub_title: "যে শহরটি কখনও ঘুমায় না।",
      description:
        "নিউ ইয়র্ক, মার্কিন যুক্তরাষ্ট্রের সবচেয়ে বড় শহর, এটি একটি স্থাপত্যমান অবিস্মরণীয় শিল্পকলা সহ অনেকগুলি ঐতিহাসিক স্মৃতিস্তম্ভ, শান্তির ভবন এবং অসংখ্য চমকময় উচ্চতর দিয়ে দেখা যায়।",
      timestamp: "6 মিনিট আগে",
      imageUrl:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
    },
    {
      id: 2,
      category: "বিনোদন",
      title: "অন্যান্য শহরের আলো",
      sub_title: "যে শহরটি সব সময় আলোয় প্রকাশ করে।",
      description:
        "একটি পৃষ্ঠভূমি শহর, যা শান্তিময় আলো এবং জীবনের উজ্জ্বল জীবনে পূর্ণ।",
      timestamp: "10 মিনিট আগে",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
    },
    {
      id: 3,
      category: "বিনোদন",
      title: "অন্যান্য শহরের আলো",
      sub_title: "যে শহরটি সব সময় আলোয় প্রকাশ করে।",
      description:
        "একটি পৃষ্ঠভূমি শহর, যা শান্তিময় আলো এবং জীবনের উজ্জ্বল জীবনে পূর্ণ।",
      timestamp: "10 মিনিট আগে",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
    },
    {
      id: 4,
      category: "বিনোদন",
      title: "অন্যান্য শহরের আলো",
      sub_title: "যে শহরটি সব সময় আলোয় প্রকাশ করে।",
      description:
        "একটি পৃষ্ঠভূমি শহর, যা শান্তিময় আলো এবং জীবনের উজ্জ্বল জীবনে পূর্ণ।",
      timestamp: "10 মিনিট আগে",
      imageUrl: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/photo-1429043794791-eb8f26f44081.jpeg",
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
