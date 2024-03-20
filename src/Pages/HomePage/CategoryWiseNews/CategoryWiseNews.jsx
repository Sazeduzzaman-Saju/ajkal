import React, { useEffect, useState } from "react";
import NewsSectionOne from "../../../Comps/NewsSectionOne/NewsSectionOne";
import NewsSectionTwo from "../../../Comps/NewsSectionTwo/NewsSectionTwo";
import NewsSectionThree from "../../../Comps/NewsSectionThree/NewsSectionThree";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";

const CategoryWiseNews = () => {
  const [bangladeshNews, setBangladeshNews] = useState([]);
  const [probashNews, setProbashNews] = useState([]);
  const [khelarNews, setKhelarNews] = useState([]);

  const url = "https://news.goexpressus.com/category-news/2";
  const urlProbas = "https://news.goexpressus.com/category-news/5";
  const urlKhela = "https://news.goexpressus.com/category-news/4";

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

  return (
    <div>
      {/* First Style */}
      <div>
        <PostHeader title="বাংলাদেশ" />
        <NewsSectionOne bangladeshNews={bangladeshNews} />
      </div>
      {/* Second Style */}
      <div className="pt-2">
        <PostHeader title="প্রবাস" />
        <NewsSectionTwo probashNews={probashNews} />
      </div>
      {/* Third Style */}
      <div className="pt-4">
        <PostHeader title="সারা বিশ্ব"/>
        <NewsSectionThree khelarNews={khelarNews} />
      </div>
    </div>
  );
};

export default CategoryWiseNews;
