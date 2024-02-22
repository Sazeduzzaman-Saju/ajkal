import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import SearchForm from "./SearchForm";
import { useForm } from "react-hook-form";
import SearchData from "./SearchData";

const Search = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              <h5 className="text-muted fw-bold">অনুসন্ধান করুন ।</h5>
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
                        ফলাফল: <span className="text-danger">১২২২৪৩৫</span>
                      </p>
                    </div>
                    <div>
                      <select
                        className="form-select"
                        {...register("category", { required: true })}
                      >
                        <option value="">সিলেক্ট করুন...</option>
                        <option value="A">Option A</option>
                        <option value="B">Option B</option>
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
