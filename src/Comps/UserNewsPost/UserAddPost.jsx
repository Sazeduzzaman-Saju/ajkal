import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserAddPost = () => {
  const [adBanner, setAdBanner] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("ad_banner", adBanner); // Append the ad_banner image file

      // Append other form data to formData
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) {
        throw new Error("Access token not found in localStorage");
      }

      const response = await fetch("https://news.goexpressus.com/ad/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to add news");
      }

      toast.success("News added successfully");
    } catch (error) {
      toast.error("Failed to add news:", error.message);
    }
  };

  const handleImageChange = (e) => {
    setAdBanner(e.target.files[0]);
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
                  <label className="labels"> বিজ্ঞাপন দিন </label>
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
                  <label className="labels"> টোটাল প্যামেন্ট </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="100 $"
                    {...register("total_payment")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <label className="labels"> পে প্যামেন্ট </label>
                  <input
                    type="text"
                    placeholder="50$"
                    className="form-control form-control-sm"
                    {...register("pay_amount")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <label className="labels"> এড এর লিংক</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="https://www.ajkalusa.com"
                    {...register("ad_link")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <label className="labels"> এড এর ডিউরেশন</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="2 Week"
                    {...register("duration")}
                  />
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div>
                  <label className="labels"> স্টার্ট ডেট</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    placeholder="05 March 2024"
                    {...register("start_date")}
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div>
                  <label className="labels">এড এর ব্যানার</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    {...register("ad_banner")} // Register the ad_banner field with react-hook-form
                  />
                  {/* Display the selected image */}
                  {/* {ad_banner && (
                    <img
                      src={URL.createObjectURL(ad_banner)}
                      alt="Selected Banner"
                    />
                  )} */}
                </div>
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
    </div>
  );
};

export default UserAddPost;
