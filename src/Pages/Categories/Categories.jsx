import React, { useState, useEffect } from "react";
import "./Categories.css";
import { Link, useLoaderData } from "react-router-dom";
import CategoryFeature from "./CategoryFeature/CategoryFeature";
import NewsSidebar from "../../Comps/NewsSidebar/NewsSidebar";
import PageHelmet from "../../Comps/PageHelmet/PageHelmet";
import NoData from "../../Comps/NoData/NoData";
import CommonLoader from "../../Comps/CommonLoader/CommonLoader";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import { FacebookEmbed, YouTubeEmbed } from "react-social-media-embed";
import axios from "axios";
import LazyImageShortNews from "../../Comps/LazyImage/LazyImageShortNews";
import InfiniteCategory from "./CategoryFeature/InfiniteCategory";

const Categories = () => {
  const [addvertisement, setAddvertisement] = useState([]);
  const singleNews = useLoaderData();

  // Fetch advertisement data
  useEffect(() => {
    const addUrl = "https://backoffice.ajkal.us/ad/all";
    axios
      .get(addUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAddvertisement(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAddvertisement(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching advertisement data:", error);
      });
  }, []);

  const renderAdvertisement = (adPosition) => {
    return addvertisement.map((data) => {
      if (data.status === 1 && data.ad_position === adPosition) {
        return (
          <Link to={data.ad_link} key={data.id} target="_blank">
            <LazyImageShortNews
              src={`https://ajkal.us/img/ad/${data.ad_banner}`}
              alt={data}
              className="img-fluid w-100 rounded-0"
              errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
              width="100%"
              height="auto"
              style={{ objectFit: "cover" }}
            />
          </Link>
        );
      }
      return null; // Return null if conditions are not met
    });
  };

  const title = `${singleNews.data[0].category_name_bangla} ক্যাটেগরি,  আজকাল পত্রিকা।`;

  return singleNews ? (
    <div className="container">
      <PageHelmet
        title={title}
        type="article"
        image="https://ajkal.us/image/settings/logo_red.png" // Replace with actual image URL
        url={window.location.href} // Replace with actual page URL
        card="https://ajkal.us/image/settings/logo_red.png"
        description={singleNews.news_detail} // Replace with appropriate description field from singleNewsDetails
      />
      {singleNews.data.length > 0 ? (
        <>
          <div className="row pt-3">
            <CategoryFeature singleNews={singleNews.data} />
            <div className="col-lg-4">
              <NewsSidebar />
              <div className="d-flex flex-column  justify-content-center align-items-center pt-3 ">
                <div className="mt-3">{renderAdvertisement("Sidebar2")}</div>
              </div>
            </div>
          </div>
          <hr className="my-0" />
          <div className="row">
            <div className="col-lg-8">
              <InfiniteCategory singleNews={singleNews} />
            </div>
            <div className="col-lg-4">
              <div>
                <PostHeader title="বিজ্ঞাপন কর্নার" />
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <FacebookEmbed
                  url="https://www.facebook.com/andrewismusic/posts/451971596293956"
                  width={550}
                />
              </div>
              <div
                className="pt-3 pb-3"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <YouTubeEmbed
                  url="https://www.youtube.com/watch?v=JQkevGu41D4"
                  width={418}
                  height={365}
                />
              </div>
              <div className="mt-3">{renderAdvertisement("SideBar1")}</div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <NoData></NoData>
        </div>
      )}
    </div>
  ) : (
    <div>
      <CommonLoader></CommonLoader>
    </div>
  );
};

export default Categories;
