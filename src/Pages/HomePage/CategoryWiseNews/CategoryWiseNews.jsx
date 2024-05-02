import React, { useEffect, useState } from "react";
import NewsSectionOne from "../../../Comps/NewsSectionOne/NewsSectionOne";
import NewsSectionTwo from "../../../Comps/NewsSectionTwo/NewsSectionTwo";
import NewsSectionThree from "../../../Comps/NewsSectionThree/NewsSectionThree";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";
import NewsSectionFour from "../../../Comps/NewsSectionFour/NewsSectionFour";
import { Link } from "react-router-dom";

const CategoryWiseNews = () => {
  const [bangladeshNews, setBangladeshNews] = useState([]);
  const [binodon, setBinodon] = useState([]);
  const [khelarNews, setKhelarNews] = useState([]);
  const [dhormo, setDhormo] = useState([]);

  const url = "https://backoffice.ajkal.us/category-news/5";
  const urlBinodon = "https://backoffice.ajkal.us/category-news/7";
  const urlKhela = "https://backoffice.ajkal.us/category-news/6";
  const dhormoData = "https://backoffice.ajkal.us/category-news/8";
  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
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
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        let slicedData = [];
        if (Array.isArray(response.data)) {
          slicedData = response.data;
        } else if (Array.isArray(response.data.data)) {
          slicedData = response.data.data;
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
        setBangladeshNews(slicedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(urlBinodon)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBinodon(response.data.slice(0, 8));
        } else if (Array.isArray(response.data.data)) {
          setBinodon(response.data.data.slice(0, 8));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(urlKhela)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setKhelarNews(response.data.slice(0, 6));
        } else if (Array.isArray(response.data.data)) {
          setKhelarNews(response.data.data.slice(0, 6));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(dhormoData)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setDhormo(response.data.slice(0, 6));
        } else if (Array.isArray(response.data.data)) {
          setDhormo(response.data.data.slice(0, 6));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div>
        {/* First Style */}
        <div>
          <PostHeader
            title={
              bangladeshNews.length > 0 &&
              bangladeshNews[0].category_name_bangla
                ? bangladeshNews[0].category_name_bangla
                : ""
            }
          />
          <NewsSectionOne bangladeshNews={bangladeshNews.map(news => ({...news, id: String(news.id)}))} />
        </div>
        {/* add */}
        <div>
          {/* sara bangla category advertisement */}
          {addvertisement.map(
            (data) =>
              // Check if data.status is "1" and data.ad_position is "HeaderTop"
              data.status === 1 &&
              data.ad_position === "BelowNewsCategory2" && (
                <Link to={data.ad_link} key={data.id} target="_blank">
                  <img
                    className="img-fluid w-100"
                    src={`https://ajkal.us/img/ad/${data.ad_banner}`}
                    alt={`https://ajkal.us/img/ad/${data.ad_banner}`}
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                </Link>
              )
          )}
        </div>
        {/* Second Style */}
        <div className="pt-2">
          <PostHeader
            title={binodon.length > 0 ? binodon[0].category_name_bangla : ""}
          />
          <NewsSectionTwo binodon={binodon} />
        </div>
        {/* Third Style */}
        <div className="">
          <PostHeader
            title={
              khelarNews.length > 0 ? khelarNews[0].category_name_bangla : ""
            }
          />
          <NewsSectionThree khelarNews={khelarNews.map(news => ({...news, id: String(news.id)}))} />
        </div>
        <div className="">
          <PostHeader
            title={dhormo.length > 0 ? dhormo[0].category_name_bangla : ""}
          />
          <NewsSectionFour dhormo={dhormo.map(news => ({...news, id: String(news.id)}))} />
        </div>
      </div>
    </>
  );
};

export default CategoryWiseNews;
