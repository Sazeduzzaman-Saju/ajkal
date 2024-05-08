import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SearchForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  

  const [categoriesData, setCategoriesData] = useState([]);
  const url = "https://backoffice.ajkal.us/news-category";
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
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-lg-12">
          <p className="m-0">খোঁজ করুন...</p>
          <input
            className="w-100 form-control border-0 bg-light shadow-sm "
            type="text"
            {...register("search_word", { required: true })}
            aria-invalid={errors.search_word ? "true" : "false"}
          />
          {errors.search_word?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
      </div>
      <div className="row pt-4">
        <div className="col-lg-6">
          <p className="m-0">ক্যটেগরি বেছে নিন।</p>
          <select
            className="form-select"
            {...register("category", { required: true })}
          >
            <option value="">সিলেক্ট করুন...</option>
            {categoriesData.map((data) => (
              <option value={data.name} key={data.id}>
                {data.name_bangla}
              </option>
            ))}
          </select>
          {errors.category?.type === "required" && (
            <p role="alert" className="text-danger">
              ক্যটেগরি নির্বাচন করেননি ।
            </p>
          )}
        </div>
        <div className="col-lg-6">
          <p className="m-0">তারিখ নির্বাচন করুন।</p>
          <input
            className="w-100 form-control border-0 bg-light shadow-sm "
            type="date"
            {...register("newDate", { required: true })}
            aria-invalid={errors.newDate ? "true" : "false"}
          />
          {errors.newDate?.type === "required" && (
            <p role="alert" className="text-danger">
              তারিখ নির্বাচন করেননি ।
            </p>
          )}
        </div>
      </div>
      <div className="row pt-4 pb-4">
        <div className="col-lg-12">
          <button type="submit" className="submit-btn-one w-100 mx-0">
            অনুসন্ধান করুন এখনি।
          </button>
        </div>
      </div>
    </form>
  );
}
