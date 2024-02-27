import React from "react";
import "./MostRecent.css";

const MostRecent = () => {
  return (
    <div>
      <div className="row gx-2">
        <div className="col-lg-3">
          <a href="#" className="card card-news p-0">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/961/859/615/newdelhi-redfort-landmark-sky-wallpaper-preview.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>বাংলাদেশ</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3">
          <a href="#" className="card card-news p-0">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/249/678/415/unesco-world-heritage-site-asia-india-agra-wallpaper-preview.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>বিশ্ব</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3">
          <a href="#" className="card card-news p-0">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/249/678/415/unesco-world-heritage-site-asia-india-agra-wallpaper-preview.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>আজকের নিউজ</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </a>
        </div>
        <div className="col-lg-3">
          <a href="#" className="card card-news p-0">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/249/678/415/unesco-world-heritage-site-asia-india-agra-wallpaper-preview.jpg"
              alt="Card Background"
            />
            <div className="overlay-recents">
              <h2>ইন্টারন্যাশনাল</h2>
              <p>নিউজ গুলো দেখে আসুন এখনি।</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MostRecent;
