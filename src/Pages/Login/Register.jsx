import React from "react";
import "./style.css";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignUp = async (data) => {
    try {
      console.log("User Data:", data);
  
      const response = await fetch(
        // "https://resell-autocar-server.vercel.app/users",
        "https://news.goexpressus.com/auth/registration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
  
      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      toast.success("User created successfully");
      navigate("/login"); // Use Navigate function to navigate
    } catch (error) {
      toast.error("Failed to create user:", error.message);
      // Handle error here
    }
  };

  return (
    <div className="container">
      <div className="row my-5 align-items-center ">
        <div className="col-lg-6">
          <div>
            <img
              className="img-fluid"
              src="https://i.ibb.co/QbMgZSm/Sign-up-rafiki.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-lg-6 ">
          {/* <form noValidate validated={validated} onSubmit={handleSubmit}> */}
          <div className="card border-0 login-form bg-transparent ">
            <div className="card-body py-5 form-area ">
              <div>
                <div className="text-center py-2">
                  <h3 className="text-muted mb-0">রেজিস্টার করুন !</h3>
                  <p className="text-muted mb-0">
                    সাপ্তাহিক আজকাল এর ফেম্যালি তে আপনাকে স্বাগতম।
                  </p>
                </div>
                <div className="row py-2">
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
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-1 mx-auto">
                    {/* Form Start */}
                    <form
                      onSubmit={handleSubmit(handleSignUp)}
                      className="pb-5 "
                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <label htmlFor="">
                            আপনার নাম <span className="text-danger">*</span>
                          </label>
                          <input
                            {...register("full_name", {
                              required: "Name",
                            })}
                            placeholder="আপনার নাম"
                            className="form-style mb-2 form-control"
                          />
                          {errors.full_name && (
                            <p className="text-danger ">
                              {errors.full_name?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label htmlFor="">
                            আপনার ফোন নাম্বার।{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="number"
                            {...register("phone", {
                              required: "Photo URL Required",
                            })}
                            placeholder="15******"
                            className="form-style form-control mb-2"
                          />
                          {errors.phone && (
                            <p className="text-danger ">
                              {errors.phone?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-6">
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
                        <div className="col-lg-6">
                          <label htmlFor="">
                            জেন্ডার <span className="text-danger">*</span>
                          </label>
                          <select
                            {...register("gender", {
                              required: "gender Required",
                            })}
                            className=" form-style mb-2 form-control"
                            aria-label="Default select example"
                          >
                            <option value="1">
                              পুরুষ
                            </option>
                            <option value="2">মহিলা</option>
                          </select>
                          {errors.gender && (
                            <p className="text-danger ">
                              {errors.gender?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-6">
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
                        <div className="col-lg-6">
                          <label htmlFor="">
                            ইউজার নেম
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("username", {
                              required: "Password Required",
                            })}
                            placeholder="ইউজার"
                            className=" form-style form-control mb-2"
                          />
                          {errors.username && (
                            <p className="text-danger ">
                              {errors.username?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <label htmlFor="">
                            ঠিকানা
                            <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            {...register("address", {
                              required: "Password Required",
                            })}
                            placeholder="ঠিকানা দিন"
                            className=" form-style form-control"
                          />
                          {errors.address && (
                            <p className="text-danger ">
                              {errors.address?.message}
                            </p>
                          )}
                        </div>
                        <div className="col-lg-12">
                          <div className="form-check pt-5">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              {...register("policy", {
                                required: "Password Required",
                              })}
                              id="flexCheckChecked"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              আমাদের সকল শর্ত আপনি মেনে নিয়েছেন । অথবা শর্ত গুলো
                              পরতে<a href="/">এখানে ক্লিক করুন।</a>
                            </label>
                          </div>

                          {errors.policy && (
                            <p className="text-danger ">
                              {errors.policy?.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-muted text-center pt-5">
                        আপনার আক্যাউন্ট আগে থেকেই করা আছে ? তাহলে
                        <a href="/login"> লগিন করুন !</a>
                      </p>
                      <input
                        type="submit"
                        value="Sign Up"
                        className="submit-btn-one w-100 mx-0"
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
      </div>
    </div>
  );
};

export default Register;
