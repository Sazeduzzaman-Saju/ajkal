import React, { useEffect, useState } from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import SearchForm from "./SearchForm";
import { useForm } from "react-hook-form";
import SearchData from "./SearchData";
import axios from "axios";

const Search = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://news.goexpressus.com/news-category";
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

  const [archive, setArchive] = useState([]);
  const urlArchive = "https://news.goexpressus.com/archive-news";

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

  return (
    <>
      <PageTitle title="অনুসন্ধান করুন" description="Text" />
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-12">
            <div
              className=""
              style={{ borderBottom: "2px solid var(--secondary)" }}
            >
              <h5 className="text-muted fw-bold">অনুসন্ধান করুন আর্কাইভ এ।</h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <SearchForm />
          </div>
          <div className="col-lg-3">
            <div>
              <img
                className=""
                style={{ height: "250px", width: "100%" }}
                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/01/neiman_marcus.gif?auto=format&q=60&fit=max&w=930"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-9">
            <div className="card border-0">
              <div className="card-header border-0">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex justify-content-between  align-items-center ">
                    <div>
                      <p className="m-0">
                        ফলাফল: <span className="text-danger">{archive.length}</span>
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
              <SearchData></SearchData>
            </div>
          </div>
          <div className="col-lg-3">
            <div>
              <img
                className="img-fluid pt-2"
                src="https://i.pinimg.com/originals/2b/13/92/2b1392f3215cd433fb7530e3959a38c7.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
