import React from "react";

const UserComments = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h3 className="text-center pt-5 main-color">আমার কমেন্টস ।</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
            <div className="card rounded-0 shadow-sm  border-0 d-flex justify-content-center  align-items-center " style={{height: '20vh'}}>
                <h4 className="text-center">Your Comments Will Be Shown Here !</h4>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserComments;
