import React, { useEffect, useState } from "react";
import "./CategoryNewsOne.css";
import { Link } from "react-router-dom";
import axios from "axios";
import CategoryNewsOneData from "../../../Comps/CategoryNewsOneData/CategoryNewsOneData";

const CategoryNewsOne = () => {
  const [bangladeshNews, setBangladeshNews] = useState([]);
  const [loadingBangladesh, setLoadingBangladesh] = useState(true);
  const url = "https://news.goexpressus.com/category-news/2";
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
      })
      .finally(() => setLoadingBangladesh(false));
  }, []);
  console.log(bangladeshNews);

  return (
    <div>
      <div className="continer">
        <div className="row">
          <CategoryNewsOneData></CategoryNewsOneData>

          <CategoryNewsOneData></CategoryNewsOneData>

          <CategoryNewsOneData></CategoryNewsOneData>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsOne;
