import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserAddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAdPost = async (data) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in localStorage");
      }

      // Convert selected image file to base64
      const adBannerFile = data.ad_banner[0];
      const adBannerBase64 = await convertToBase64(adBannerFile);

      // Include base64 data in the form data
      const formData = {
        ...data,
        ad_banner: adBannerBase64,
      };
      const response = await fetch("https://backoffice.ajkal.us/ad/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.status !== 200) {
        throw new Error("Failed to Add Post");
      }

      toast.success("Your Add Post successfully");
    } catch (error) {
      toast.error("Failed to Add Post:", error.message);

      // Handle error here
    }
  };

  // Function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (error) => reject(error);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(handleAdPost)} encType="multipart/form-data">
        <div className="card shadow-sm mb-5">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-4 mb-3">
                <div>
                  <label htmlFor="">
                    বিজ্ঞাপন দিন <span className="text-danger">*</span>
                  </label>
                  <select
                    className="form-select form-select-sm"
                    aria-label="Default select example"
                    {...register("ad_category_id")}
                  >
                    <option disabled>বেছে নিন</option>
                    <option value="1">ইপেপার</option>
                    <option value="2">অনলাইন পোর্টাল</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <label htmlFor="">
                  পে-এমাউন্ট <span className="text-danger">*</span>
                </label>
                <input
                  className="w-100 form-control"
                  type="number"
                  {...register("pay_amount", { required: true })}
                  aria-invalid={errors.pay_amount ? "true" : "false"}
                />
                {errors.pay_amount?.type === "required" && (
                  <p role="alert" className="text-danger">
                    পে-এমাউন্ট দিন!
                  </p>
                )}
              </div>
              <div className="col-lg-4 mb-3">
                <label htmlFor="">
                  টোটাল পেমেন্ট <span className="text-danger">*</span>
                </label>
                <input
                  className="w-100 form-control"
                  type="text"
                  {...register("total_payment", { required: true })}
                  aria-invalid={errors.total_payment ? "true" : "false"}
                />
                {errors.total_payment?.type === "required" && (
                  <p role="alert" className="text-danger">
                    টোটাল পেমেন্ট দিন।
                  </p>
                )}
              </div>
              <div className="col-lg-4 mb-3">
                <label htmlFor="">
                  এড ব্যানার <span className="text-danger">*</span>
                </label>
                <input
                  className="w-100 form-control"
                  type="file"
                  {...register("ad_banner", { required: false })}
                  aria-invalid={errors.ad_banner ? "true" : "false"}
                />
                {errors.ad_banner?.type === "required" && (
                  <p role="alert" className="text-danger">
                    এড ব্যানার দিন!
                  </p>
                )}
              </div>
              <div className="col-lg-4 mb-3">
                <label htmlFor="">
                  এড লিংক <span className="text-danger">*</span>
                </label>
                <input
                  className="w-100 form-control"
                  type="url"
                  {...register("ad_link", { required: true })}
                  aria-invalid={errors.ad_link ? "true" : "false"}
                />
                {errors.ad_link?.type === "required" && (
                  <p role="alert" className="text-danger">
                    এড এর লিংক!
                  </p>
                )}
              </div>
              <div className="col-lg-2 mb-3">
                <label htmlFor="">
                  এড ডিউরেশন <span className="text-danger">*</span>
                </label>
                <input
                  className="w-100 form-control"
                  type="text"
                  {...register("duration", { required: true })}
                  aria-invalid={errors.duration ? "true" : "false"}
                />
                {errors.duration?.type === "required" && (
                  <p role="alert" className="text-danger">
                    এড এর ডিউরেশন!
                  </p>
                )}
              </div>
              <div className="col-lg-2 mb-3">
                <label htmlFor="">এড স্টার্ট ডেট</label>
                <input
                  className="w-100 form-control"
                  type="date"
                  {...register("start_date", { required: true })}
                  aria-invalid={errors.start_date ? "true" : "false"}
                />
                {errors.start_date?.type === "required" && (
                  <p role="alert" className="text-danger">
                    এড স্টার্ট ডেট দিন!
                  </p>
                )}
              </div>
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
    </>
  );
};

export default UserAddPost;
