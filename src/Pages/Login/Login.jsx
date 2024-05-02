import React from "react";
import "./style.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    try {
      const response = await fetch("https://backoffice.ajkal.us/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error("Failed to login user");
      }
  
      const responseData = await response.json();
      const accessToken = responseData.access_token;
  
      if (!accessToken) {
        throw new Error("Access token not provided in response");
      }
  
      // Store access token in localStorage
      localStorage.setItem("accessToken", accessToken);
  
      // Now use the access token as a bearer token to send requests
      const userResponse = await fetch(`https://backoffice.ajkal.us/auth/profile`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${accessToken}`,
        },
      });
  
      if (!userResponse.ok) {
        throw new Error("Failed to fetch user data");
      }
  
      // const userData = await userResponse.json();
      // Do something with the user data, such as storing it in localStorage or displaying it
  
      toast.success("User login successful");
      navigate("/user");
    } catch (error) {
      toast.error("Failed to login user:", error.message);
      // Handle error here
    }
  };
  
  return (
    <div className="container">
      <div className="row my-5 gx-0">
        <div className="col-lg-6">
          <div className="card border-0 login-form bg-transparent ">
            <div className="card-body py-5 form-area ">
              <div>
                <div className="text-center py-2">
                  <h3 className="text-muted mb-0">লগিন করুন !</h3>
                  <p className="text-muted mb-0">
                    সাপ্তাহিক আজকালে আপনাকে স্বাগতম।
                  </p>
                </div>
                {/* <div className="row py-2">
                  <div className="col-lg-6 offset-lg-3 mx-auto">
                    <div className="d-flex pb-2">
                      <div className="pe-2">
                        <Link to={"/"} className="submit-btn-one w-100">
                          <FaFacebookF /> ফেসবুক
                        </Link>
                      </div>
                      <div>
                        <Link to={"/"} className="submit-btn-one w-100">
                          <FaGoogle /> গুগোল
                        </Link>
                      </div>
                    </div>
                    <p className="text-center bg-light devider-text">Or</p>
                    <p className="devider"></p>
                  </div>
                </div> */}
                <div className="row mt-5">
                  <div className="col-lg-10 offset-1 mx-auto">
                    {/* Form Start */}
                    <form
                      onSubmit={handleSubmit(handleSignUp)}
                      className=""
                    >
                      <div className="row">
                        <div className="col-lg-12">
                          <label htmlFor="">
                            ইমেইল দিন <span className="text-danger">*</span>
                          </label>
                          <input
                            {...register("email", {
                              required: "Email Address Required",
                            })}
                            placeholder="ইমেইল"
                            className="form-style mb-2 form-control"
                          />
                          {errors.email && (
                            <p className="text-danger ">
                              {errors.email?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <label htmlFor="">
                            পাসওয়ার্ড দিন{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="password"
                            {...register("password", {
                              required: "Password Required",
                            })}
                            placeholder="*****"
                            className=" form-style form-control"
                          />
                          {errors.password && (
                            <p className="text-danger ">
                              {errors.password?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-12">
                        <p className="text-muted text-center pt-5">আপনি কী নতুন, আপনার একাউন্ট নেই <br /> তাহলে--<Link to={"/register"}> রেজিস্টার করুন !</Link></p>
                        </div>
                      </div>
                      <input
                        type="submit"
                        value="Login"
                        className="submit-btn-one w-100 mx-0 "
                      />
                    </form>
                    {/* Form End */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
        <div className="col-lg-6">
          <div className="card border-0 ">
            <div className="card-body p-0">
              <div className="sidebar-login">
                <img
                  className="login-sidebanner"
                  src="https://allbanglanewspaper.net/widget/image_slider/images/2.jpg"
                  alt=""
                  onError={(e) => {
                    e.target.src =
                      "https://ajkal.us/image/settings/placeholder.jpg";
                  }}
                />
                <div className="image-overlay-login">
                  <div className="p-5">
                    <h1 className="text-center">
                      ফিরে আসার জন্য <br /> স্বাগত!
                    </h1>
                    <p className="text-center pt-3">
                      যদি আপনার বিজ্ঞাপনের তথ্য প্রয়োজন হয়, তবে আপনার লগইনের পরে
                      আপনার অ্যাকাউন্টে দেখানো হবে। অথবা{" "}
                      <Link
                        to={"/accounts"}
                        className="text-danger bg-white px-2 rounded-1"
                      >
                        এখানে ক্লিক করুন
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
