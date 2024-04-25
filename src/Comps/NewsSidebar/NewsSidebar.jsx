import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import PostHeader from "../PostHeader/PostHeader";

const NewsSidebar = () => {
  const [sorboshesData, setSorboshesData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://news.goexpressus.com/viewed-news";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setSorboshesData(response.data);
        } else if (Array.isArray(response.data.data)) {
          setSorboshesData(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  return (
    <>
      <div
        className=""
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgb(22, 85, 136) 0%, rgb(237, 30, 43) 51%, rgb(22, 85, 136) 100%)",
        }}
      >
        <p className="text-white ps-3 p-2">সর্বাধিক পঠিত </p>{" "}
      </div>
      {loading ? ( // Render skeleton loading cards if data is still loading
        <>
          <Skeleton height={70} count={3} />
        </>
      ) : (
        // Render actual data if loading is false
        sorboshesData.map((data, index) => (
          <div className="col-lg-12 " key={index}>
            <Link to={`/news/${data.id}`}>
              <div className="card mb-3 border-0 shadow-sm rounded-2">
                <div className="card-body p-0 d-flex align-items-center">
                  <div className="pothito-img w-25 h-100 ">
                    <img
                      className="img-fluid rounded-1"
                      style={{ height: "70px", objectFit: "cover" }}
                      src={`https://ajkal.goexpressus.com/images/${data.title_img}`}
                      alt=""
                    />
                  </div>
                  <div className="pothito-content w-75 ps-4">
                    <div>
                      <h5 className="main-color">
                        {data.category_name_bangla}
                      </h5>
                      <p className="m-0 text-muted">
                        {data.news_title.split(' ').slice(0, 4).join(' ')}
                        <span className="text-primary">...</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))
      )}
    </>
  );
};

export default NewsSidebar;
