import React from "react";

const ComingSoon = ({title,textOne,textTwo}) => {
  return (
    <div className="container">
      <div className="row" style={{ height: '550px'}}>
        <div className="d-flex justify-content-center flex-column  align-items-center">
          <h1>{title}</h1>
          <h5 className="text-center">{textOne} <br /> {textTwo}।</h5>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
