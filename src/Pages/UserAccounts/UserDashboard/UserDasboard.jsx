import React from "react";
import { MdOutlinePostAdd } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdInsertComment } from "react-icons/md";
import { TiUpload } from "react-icons/ti";

const UserDasboard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center pt-5">ড্যাশবোর্ড</h3>
        </div>
      </div>
      <div className="row py-5">
        <div className="col-lg-4">
          <div className="card border-0 rounded-1 shadow-sm">
            <div className="card-body">
              <p className="icon-container">
                <TiUpload></TiUpload>
              </p>
              <h4 className="pt-3">সংবাদ পোস্ট।</h4>
              <p className="icon-container-amount">
                12
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 rounded-1 shadow-sm">
            <div className="card-body">
              <p className="icon-container">
                <RiAdvertisementFill></RiAdvertisementFill>
              </p>
              <h4 className="pt-3">মোট বিজ্ঞাপন পোস্ট।</h4>
              <p className="icon-container-amount">
                12
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card border-0 rounded-1 shadow-sm">
            <div className="card-body">
              <p className="icon-container">
                <MdInsertComment></MdInsertComment>
              </p>
              <h4 className="pt-3">মোট মন্তব্য।</h4>
              <p className="icon-container-amount">
                12
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDasboard;
