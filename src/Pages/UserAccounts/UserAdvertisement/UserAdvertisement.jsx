import React from "react";
import NewPost from "../UserPost/NewPost";

const UserAdvertisement = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center pt-5">বিজ্ঞাপন দিন।</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
            <NewPost></NewPost>
        </div>
      </div>
    </div>
  );
};

export default UserAdvertisement;
