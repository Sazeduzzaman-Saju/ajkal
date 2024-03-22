import React, { useEffect, useState } from "react";
import UserNewsPost from "../../../Comps/UserNewsPost/UserNewsPost";

const UserPost = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center pt-5 main-color"> নিউজ পোস্ট করি ।</h3>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-lg-12">
          <div className="card shadow-sm " style={{ border: "1px solid #eee" }}>
            <div className="card-body">
              {/* <NewPost
                categoryLink={categoryLink}
                userData={userData}
              ></NewPost> */}
              <UserNewsPost></UserNewsPost>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPost;
