import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserAddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        throw new Error("Access token not found in localStorage");
      }

      const response = await axios.post(
        "https://news.goexpressus.com/ad/create",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status !== 200) {
        throw new Error("Failed to add news");
      }

      toast.success("News added successfully");
    } catch (error) {
      toast.error("Failed to add news:", error.message);
      // Handle error here
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          className="card shadow-sm mb-5"
          style={{ border: "1px solid #eee" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 mb-3">
                <div>
                  {/* ad_category_id, total_payment, pay_amount, ad_link, duration, start_date, ad_banner */}
                  <select
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    {...register("ad_category_id")}
                  >
                    <option value="1">ইপেপার</option>
                    <option value="2">অনলাইন পোর্টাল</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="total_payment"
                    {...register("total_payment")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <input
                    type="text"
                    placeholder="pay_amount"
                    className="form-control form-control-sm"
                    {...register("pay_amount")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="ad_link"
                    {...register("ad_link")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="duration"
                    {...register("duration")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="start_date"
                    {...register("start_date")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    className="form-control form-control-sm custom-file-input"
                    {...register("ad_banner")}
                  />
                </div>
              </div>
              {/* Other input fields */}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-end">
                  <button type="submit" className="submit-btn-one">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserAddPost;
