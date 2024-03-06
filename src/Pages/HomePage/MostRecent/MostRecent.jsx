import React from "react";
import "./MostRecent.css";
import { Link } from "react-router-dom";

const MostRecent = () => {
  return (
    <div>
      <div className="row gx-2">
        <div className="col-lg-3">
          <Link to={'/news/2'} className="card card-news p-0">
            <img
            className=""
            height={'150px !important'}
              src="https://www.goarif.com/wp-content/uploads/2019/01/Introduction-to-Bangladesh-GoArif-1536x1024.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>বাংলাদেশ</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          <Link to={'/news/2'} className="card card-news p-0">
            <img
            className=""
            height={'150px !important'}
              src="https://d2u0ktu8omkpf6.cloudfront.net/74154686eb66f7d7a54f2ae953992e2353edb95a457c6276.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>বিশ্ব</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          <Link to={'/news/2'} className="card card-news p-0">
            <img
              src="https://www.jugantor.com/assets/news_photos/2020/03/16/image-289736-1584330085.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>আজকের নিউজ</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          <Link to={'/news/2'} className="card card-news p-0">
            <img
              src="https://static.kent.ac.uk/nexus/ems/63.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>ইন্টারন্যাশনাল</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
