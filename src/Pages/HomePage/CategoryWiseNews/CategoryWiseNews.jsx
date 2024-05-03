import React, { useEffect, useState } from "react";
import NewsSectionOne from "../../../Comps/NewsSectionOne/NewsSectionOne";
import NewsSectionTwo from "../../../Comps/NewsSectionTwo/NewsSectionTwo";
import NewsSectionThree from "../../../Comps/NewsSectionThree/NewsSectionThree";
import PostHeader from "../../../Comps/PostHeader/PostHeader";
import axios from "axios";
import NewsSectionFour from "../../../Comps/NewsSectionFour/NewsSectionFour";
import { Link } from "react-router-dom";
import NewsSectionFive from "../../../Comps/NewsSectionFive/NewsSectionFive";

const CategoryWiseNews = () => {
  // State for storing news data of different categories
  const [saraBanglaNews, setSaraBanglaNews] = useState([]);
  const [binodon, setBinodon] = useState([]);
  const [khelarNews, setKhelarNews] = useState([]);
  const [dhormo, setDhormo] = useState([]);
  const [ScienceData, setScienceData] = useState([]);

  // State for managing the loading state
  const [loading, setLoading] = useState(true);

  // URLs for fetching news data of different categories
  const url = "https://backoffice.ajkal.us/category-news/5";
  const urlBinodon = "https://backoffice.ajkal.us/category-news/7";
  const urlKhela = "https://backoffice.ajkal.us/category-news/6";
  const dhormoData = "https://backoffice.ajkal.us/category-news/8";
  const scienceData = "https://backoffice.ajkal.us/category-news/16";

  const [advertisementKhela, setAdvertisementKhela] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  // Fetch advertisement data on component mount
  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setAdvertisementKhela(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementKhela(response.data.data);
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

  // Fetch news data for Sara Bangla category
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data
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
        setSaraBanglaNews(slicedData);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  // Fetch news data for Binodon category
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data
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
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  // Fetch news data for Khelar category
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data
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
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  // Fetch news data for Dhormo category
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data
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
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  // Fetch news data for scienceData category
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data
    axios
      .get(scienceData)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setScienceData(response.data.slice(0, 4));
        } else if (Array.isArray(response.data.data)) {
          setScienceData(response.data.data.slice(0, 4));
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  return (
    <>
      <div>
        {/* Render news sections for different categories */}
        <div>
          <PostHeader
            title={
              saraBanglaNews.length > 0 &&
              saraBanglaNews[0].category_name_bangla
                ? saraBanglaNews[0].category_name_bangla
                : ""
            }
          />
          <NewsSectionOne
            saraBanglaNews={saraBanglaNews.map((news) => ({
              ...news,
              id: String(news.id),
            }))}
          />
        </div>

        {/* Render advertisement for Sara Bangla category */}
        <div>
          {advertisementKhela.map(
            (data) =>
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

        <div className="pt-2">
          <PostHeader
            title={binodon.length > 0 ? binodon[0].category_name_bangla : ""}
          />
          <NewsSectionTwo binodon={binodon} />
        </div>

        <div className="">
          <PostHeader
            title={
              khelarNews.length > 0 ? khelarNews[0].category_name_bangla : ""
            }
          />
          <NewsSectionThree
            khelarNews={khelarNews.map((news) => ({
              ...news,
              id: String(news.id),
            }))}
            loading={loading} // Pass loading prop to NewsSectionThree
          />
        </div>

        <div className="">
          <PostHeader
            title={dhormo.length > 0 ? dhormo[0].category_name_bangla : ""}
          />
          <NewsSectionFour
            loading={loading} // Pass loading prop to NewsSectionFive
            dhormo={dhormo.map((news) => ({ ...news, id: String(news.id) }))}
          />
        </div>
        <div className="">
          <PostHeader
            title={
              ScienceData.length > 0 ? ScienceData[0].category_name_bangla : ""
            }
          />
          <NewsSectionFive
            loading={loading} // Pass loading prop to NewsSectionFive
            ScienceData={ScienceData.map((news) => ({
              ...news,
              id: String(news.id),
            }))}
          />
        </div>
      </div>
    </>
  );
};

export default CategoryWiseNews;
