import React from "react";
import { Link } from "react-router-dom";

const NoData = () => {
  return (
    <div>
      <div
        className="d-flex flex-column  justify-content-center align-items-center"
        style={{ height: "80vh" }}
      >
        <h1>Opps Sorry</h1>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/007/872/974/small/file-not-found-illustration-with-confused-people-holding-big-magnifier-search-no-result-data-not-found-concept-can-be-used-for-website-landing-page-animation-etc-vector.jpg"
          alt=""
        />
        <p>No Data Available On This Category</p>
        <Link className="submit-btn-one w-25 mx-0" to={"/"}>
          Go Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NoData;
