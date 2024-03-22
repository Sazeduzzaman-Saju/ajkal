import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function NewPost() {
  const [categoryLink, setCategoryLink] = useState([]);
  const [userData, setUserData] = useState(null);

  // const fullName = userData?.full_name;
  const url = "https://news.goexpressus.com/news-category";

  // Login User Credintial
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.post(
          "https://news.goexpressus.com/auth/profile",
          null,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error Message", error);
      }
    };

    fetchUserData();
  }, []);

  // Category Data For Select Category
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          // Slice the array to get the first 10 items
          setCategoryLink(response.data.slice(0, 10));
        } else if (Array.isArray(response.data.data)) {
          // Check if the response has a property "data" containing an array
          // Slice the array to get the first 12 items
          setCategoryLink(response.data.data.slice(0, 12));
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

  // Post News
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        "https://news.goexpressus.com/post/add-news",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      toast.success("User created successfully");
    } catch (error) {
      toast.error("Failed to create user:", error.message);
      // Handle error here
    }
  };
  return (
    <form onSubmit={handleSubmit(handleSignUp)}>
      <div className="row pt-4">
        {/* Title */}
        <div className="col-lg-8 mb-3">
          <label htmlFor="">টাইটেল</label>
          <input
            className="w-100 form-control"
            placeholder="নিউজ এর টাইটেল দিন"
            type="text"
            {...register("news_title", { required: true })}
            aria-invalid={errors.news_title ? "true" : "false"}
          />
          {errors.news_title?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
        {/* শর্ট ব্রিফ */}
        <div className="col-lg-4 mb-3">
          <label htmlFor="">শর্ট ব্রিফ</label>
          <input
            className="w-100 form-control"
            placeholder="নিউজ এর শর্ট ব্রিফ দিন"
            type="text"
            {...register("short_brief", { required: true })}
            aria-invalid={errors.short_brief ? "true" : "false"}
          />
          {errors.short_brief?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
        {/* ক্যাটেগরি */}
        <div className="col-lg-6 mb-3">
          <label htmlFor="">ক্যাটেগরি</label>
          <select
            className="form-select"
            aria-label="Default select example"
            {...register("category_id", { required: true })}
            aria-invalid={errors.category_id ? "true" : "false"}
          >
            <option selected>Open this select menu</option>
            {categoryLink.map((data) => (
              <option value={data.id} key={data.id}>
                {data.name_bangla}
              </option>
            ))}
          </select>
          {errors.category_id?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
        {/* news_type */}
        {/* Mo Need To Show */}
        <div className="col-lg-6 mb-3 d-none">
          <input
            className="w-100 form-control"
            type="text"
            defaultValue={3} // Use defaultValue instead of value
            {...register("news_type", { required: true })}
            aria-invalid={errors.news_type ? "true" : "false"}
          />
        </div>
        {/* is_featured */}
        <div className="col-lg-6 mb-3 d-none">
          <input
            className="w-100 form-control"
            type="text"
            defaultValue={0} // Use defaultValue instead of value
            {...register("is_featured", { required: true })}
            aria-invalid={errors.is_featured ? "true" : "false"}
          />
        </div>
        {/* status */}
        <div className="col-lg-4 mb-3 d-none">
          <input
            className="w-100 form-control"
            type="text"
            defaultValue={0} // Use defaultValue instead of value
            {...register("status", { required: true })}
            aria-invalid={errors.status ? "true" : "false"}
          />
        </div>
        {/* Mo Need To Show */}
        {/* Title */}
        <div className="col-lg-6 mb-3">
          <label htmlFor="">ভিডিও লিঙ্ক</label>
          <input
            className="w-100 form-control"
            placeholder="ভিডিও লিঙ্ক"
            type="text"
            {...register("video_url", { required: true })}
            aria-invalid={errors.video_url ? "true" : "false"}
          />
          {errors.video_url?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
        {/* Title */}
        <div className="col-lg-4 mb-3">
          <label htmlFor="">অথর নেম</label>
          <input
            className="w-100 form-control"
            type="text"
            readOnly
            defaultValue={userData?.full_name}
            {...register("news_author", { required: false })}
            aria-invalid={errors.news_author ? "true" : "false"}
          />
        </div>
        {/* Title */}
        <div className="col-lg-4 mb-3">
          <label htmlFor="">নিউজ ইমেজ</label>
          <input
            className="w-100 form-control"
            type="file"
            {...register("news_image", { required: true })}
            aria-invalid={errors.news_image ? "true" : "false"}
          />
          {errors.news_image?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
        <div className="col-lg-4 mb-3">
          <label htmlFor="">থাম্বনেইল ইমেজ</label>
          <input
            className="w-100 form-control"
            type="file"
            {...register("thumbnail_image", { required: true })}
            aria-invalid={errors.thumbnail_image ? "true" : "false"}
          />
          {errors.thumbnail_image?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
        <div className="col-lg-12 mb-3">
          <label htmlFor="">নিউজ ডিটেইলস</label>
          <textarea
            {...register("news_detail", { required: true })}
            id=""
            className="form-control form-control-sm"
            rows="3"
          ></textarea>
          {errors.news_detail?.type === "required" && (
            <p role="alert" className="text-danger">
              খোঁজার শব্দ লিখুন!
            </p>
          )}
        </div>
      </div>
      <div className="row pt-3 pb-0">
        <div className="col-lg-12">
          <button type="submit" className="submit-btn-one w-100 mx-0">
            পোস্ট করুন
          </button>
        </div>
      </div>
    </form>
  );
}
