import React from "react";
import PageTitle from "../../Comps/PageTitle/PageTitle";
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import { HiCheckBadge } from "react-icons/hi2";
import { MdOutlineReportProblem } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import "./UserAccounts.css";

const UserAccounts = () => {
  return (
    <div>
      <PageTitle title="আপনার একাউন্ট" description="Text" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="text-center pt-5">আমার প্রফাইল।</h3>
          </div>
        </div>
        <div className="card border-0 shadow-sm my-5">
            <div className="card-body pb-0">
            <div className="row">
          <div className="col-lg-4 px-0">
            <div>
              <img
                className="user-images"
                src="https://images.pexels.com/photos/8124212/pexels-photo-8124212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-8 px-0">
            <div className="ps-4">
              <h3 className="main-color">Sazeduzzaman Saju</h3>
              <p className="text-muted m-0 pb-2">
                <span className="user-contact-icons">
                  <FaLocationDot className="" />
                </span>{" "}
                Dhaka, Bangladesh
              </p>
              <p className="text-muted m-0 pb-2 ">
                <span className="user-contact-icons">
                  {" "}
                  <IoCallSharp className="" />
                </span>{" "}
                sazeduzzaman@gmail.com
              </p>
              <p className="text-muted m-0 pb-2">
                <span className="user-contact-icons">
                  <IoCallSharp className="" />
                </span>{" "}
                015 7661 4451
              </p>
              <p className="text-muted">
               Verified: 
                <span className="ps-2 fw-bold ">
                User
                  <HiCheckBadge
                    style={{ marginTop: "-10px" }}
                    className="text-primary"
                  />
                </span>
              </p>
              <p className="pt-3 m-0 fw-bold ">Tags</p>
              <div className="d-flex align-items-center">
                <span className="pe-2 text-muted">#Story Writer,</span>
                <span className="pe-2 text-muted">#Crime Reporter,</span>
                <span className="text-muted pe-2">#Entertainment Reporter</span>
              </div>
              <div className="d-flex align-items-center pt-3">
                <button className="btn-outline-primary btn rounded-0 me-2">
                  <MdOutlineReportProblem className="text-danger pe-2 fs-3" />
                  Report
                </button>
                <button className="btn-outline-primary btn rounded-0 me-2 main-color">
                  <FaCheck className="main-color pe-2 fs-3" />
                  Message
                </button>
                <button className="btn-outline-primary btn rounded-0 me-2 main-color">
                  <FaMessage className="main-color pe-2 fs-3" />
                  Contacts
                </button>
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

export default UserAccounts;
