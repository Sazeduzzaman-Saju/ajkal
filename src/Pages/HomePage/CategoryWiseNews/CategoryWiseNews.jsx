import React, { useEffect, useState } from "react";
import NewsSectionOne from "../../../Comps/NewsSectionOne/NewsSectionOne";
import NewsSectionTwo from "../../../Comps/NewsSectionTwo/NewsSectionTwo";
import NewsSectionThree from "../../../Comps/NewsSectionThree/NewsSectionThree";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";
import NewsSectionFour from "../../../Comps/NewsSectionFour/NewsSectionFour";

const CategoryWiseNews = () => {
  const [bangladeshNews, setBangladeshNews] = useState([]);
  const [probashNews, setProbashNews] = useState([]);
  const [khelarNews, setKhelarNews] = useState([]);
  const [dhormo, setDhormo] = useState([]);

  const url = "https://news.goexpressus.com/category-news/2";
  const urlProbas = "https://news.goexpressus.com/category-news/5";
  const urlKhela = "https://news.goexpressus.com/category-news/4";
  const dhormoData = "https://news.goexpressus.com/category-news/10";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBangladeshNews(response.data);
        } else if (Array.isArray(response.data.data)) {
          setBangladeshNews(response.data.data);
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
      .get(urlProbas)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setProbashNews(response.data.slice(0, 6));
        } else if (Array.isArray(response.data.data)) {
          setProbashNews(response.data.data.slice(0, 6));
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
    <div>
      {/* First Style */}
      <div>
        <PostHeader
          title={
            bangladeshNews.length > 0
              ? bangladeshNews[0].category_name_bangla
              : ""
          }
        />
        <NewsSectionOne bangladeshNews={bangladeshNews} />
      </div>
      {/* add */}
      <div>
        <img
          className="img-fluid"
          src="https://i.ibb.co/JdGPxKn/Image-11.jpg"
          alt=""
        />
      </div>
      {/* Second Style */}
      <div className="pt-2">
        <PostHeader
          title={
            probashNews.length > 0 ? probashNews[0].category_name_bangla : ""
          }
        />
        <NewsSectionTwo probashNews={probashNews} />
      </div>
      {/* Third Style */}
      <div className="">
        <PostHeader
          title={
            khelarNews.length > 0 ? khelarNews[0].category_name_bangla : ""
          }
        />
        <NewsSectionThree khelarNews={khelarNews} />
      </div>
      <div className="">
        <PostHeader
          title={dhormo.length > 0 ? dhormo[0].category_name_bangla : ""}
        />
        <NewsSectionFour dhormo={dhormo} />
      </div>
    </div>
  );
};

export default CategoryWiseNews;
