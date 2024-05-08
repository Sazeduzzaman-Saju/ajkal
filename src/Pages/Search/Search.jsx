import React, { useEffect, useState } from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import SearchForm from "./SearchForm";
import { useForm } from "react-hook-form";
import SearchData from "./SearchData";
import axios from "axios";
import PostHeader from "../../Comps/PostHeader/PostHeader";
import Skeleton from "react-loading-skeleton";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://backoffice.ajkal.us/news-category";
  const [archive, setArchive] = useState([]);
  const urlArchive = "https://backoffice.ajkal.us/archive-news";
  const [addvertisement, setAddvertisement] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          // Slice the array to get the first 10 items
          setCategoriesData(response.data.slice(0, 10));
        } else if (Array.isArray(response.data.data)) {
          // Check if the response has a property "data" containing an array
          // Slice the array to get the first 12 items
          setCategoriesData(response.data.data.slice(0, 12));
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
      .get(urlArchive)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setArchive(response.data);
        } else if (Array.isArray(response.data.data)) {
          setArchive(response.data.data);
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
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAddvertisement(response.data);
          setLoading(true);
        } else if (Array.isArray(response.data.data)) {
          setAddvertisement(response.data.data);
          setLoading(true);
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
      <PageTitle title="অনুসন্ধান করুন" description="Text" />
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-12">
            <div
               
              style={{ borderBottom: "2px solid var(--secondary)" }}
            >
              <h5 className="text-muted fw-bold">অনুসন্ধান করুন আর্কাইভ এ।</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <SearchForm />
            <div className="card border-0">
              <div className="card-header border-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex justify-content-between  align-items-center ">
                    <div>
                      <p className="m-0">
                        ফলাফল:
                        <span className="text-danger">{archive.length}</span>
                      </p>
                    </div>
                    <div>
                      <select
                        className="form-select"
                        {...register("category", { required: true })}
                      >
                        <option value="">সিলেক্ট করুন...</option>
                        {categoriesData.map((data) => (
                          <option value={data.name} key={data.id}>
                            {data.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              {/* Filterd Data */}
              <SearchData archive={archive}></SearchData>
            </div>
          </div>
          <div className="col-lg-3">
            <div style={{ marginTop: "-3rem !important" }}>
              <PostHeader title="বিজ্ঞাপন কর্নার"></PostHeader>
            </div>
            <div className="image-container">
              {addvertisement.length === 0 ? (
                // Render skeleton while loading
                <>
                  {[...Array(6)].map((_, index) => (
                    <Skeleton
                      key={index}
                      height={200}
                      style={{ marginBottom: "1rem" }}
                    />
                  ))}
                </>
              ) : (
                addvertisement
                  .filter(
                    (data) => data.ad_category_id === "3" && data.status === "1"
                  )
                  .map((filteredData) => (
                    <img
                      key={filteredData.id}
                      className="w-100 zoom-image img-fluid mb-2"
                      src={`https://ajkal.us/img/news/${filteredData.ad_banner}`}
                      alt="advertisement"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://ajkal.us/img/settings/placeholder.jpg";
                      }}
                    />
                  ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
