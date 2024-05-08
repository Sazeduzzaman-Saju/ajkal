import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import BanglaDateTime from "../../Comps/BanglaTime/BanglaTime";
import LazyImageShortNews from "../../Comps/LazyImage/LazyImageShortNews";

const SearchData = ({ archive }) => {
  const [loading, setLoading] = useState(true);
  const [visibleItems, setVisibleItems] = useState(6);

  useEffect(() => {
    if (archive && archive.length > 0) {
      setLoading(false);
    }
  }, [archive]);

  const handleLoadMore = () => {
    setVisibleItems((prevCount) => prevCount + 6);
  };

  return (
    <div className="container">
      <hr />
      <div className="row">
        <div className="col-lg-12">
          {loading ? (
            // Render skeleton while loading
            <>
              {[...Array(visibleItems)].map((_, index) => (
                <div className="card border-0 mb-2" key={index}>
                  <Skeleton height={120} />
                  <Skeleton
                    height={20}
                    width={"80%"}
                    style={{ margin: "10px 0" }}
                  />
                  <Skeleton height={40} width={"100%"} />
                </div>
              ))}
            </>
          ) : (
            archive.slice(0, visibleItems).map((data, index) => (
              <div className="card border-0 mb-2" key={index}>
                <Link to={`/news/${data.id}`}>
                  <div className="card-body p-0 mt-3">
                    <div className="row align-items-center">
                      <div className="col-lg-8 p-0">
                        <div className="p-5 py-2 ps-0">
                          <h4 className="main-color">{data.news_title}</h4>
                          <p className="text-muted">{data.news_short_brief}</p>
                          <small className="secondary-text secondary-color">
                            <BanglaDateTime dateTime={data.news_time} />
                          </small>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <LazyImageShortNews
                          src={`https://ajkal.us/images/${data.title_img}`}
                          alt={data.news_title}
                          className="img-fluid w-100 rounded"
                          errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-12">
          {/* Button to load more items */}
          <button className="submit-btn-one mx-0" onClick={handleLoadMore}>
            আরও দেখুন।
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
