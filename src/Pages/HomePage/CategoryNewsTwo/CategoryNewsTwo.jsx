import React from "react";
import "./CategoryNewsTwo.css";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import { Link } from "react-router-dom";

const CategoryNewsTwo = () => {
  return (
    <div>
      <PostHeader title={"বিনোদন"} />
      <div className="row">
        <div className="col-lg-3">
          <Link to={'#'}>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
                    alt=""
                  />
                </div>
                <div className="px-2 py-3">
                  <h4 className="mb-0">Title</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti ipsa, beatae aliquam sit eum culpa.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          <Link to={'#'}>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
                    alt=""
                  />
                </div>
                <div className="px-2 py-3">
                  <h4 className="mb-0">Title</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti ipsa, beatae aliquam sit eum culpa.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          <Link to={'#'}>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
                    alt=""
                  />
                </div>
                <div className="px-2 py-3">
                  <h4 className="mb-0">Title</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti ipsa, beatae aliquam sit eum culpa.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-lg-3">
          <Link to={'#'}>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-0">
                <div>
                  <img
                    className="img-fluid"
                    src="https://static.vecteezy.com/system/resources/thumbnails/004/216/831/original/3d-world-news-background-loop-free-video.jpg"
                    alt=""
                  />
                </div>
                <div className="px-2 py-3">
                  <h4 className="mb-0">Title</h4>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti ipsa, beatae aliquam sit eum culpa.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsTwo;
