import React from "react";
import "./CategoryNewsOne.css";
import CategoryNewsOneData from "../../../Comps/CategoryNewsOneData/CategoryNewsOneData";
import CategoryNewsTwoData from "../../../Comps/CategoryNewsOneData/CategoryNewsOneThree";
import CategoryNewsThreeData from "../../../Comps/CategoryNewsOneData/CategoryNewsTwoData";

const CategoryNewsOne = () => {

  return (
    <div>
      <div className="continer">
        <div className="row">
          <CategoryNewsOneData></CategoryNewsOneData>
          <CategoryNewsTwoData></CategoryNewsTwoData>
          <CategoryNewsThreeData></CategoryNewsThreeData>
        </div>
      </div>
    </div>
  );
};

export default CategoryNewsOne;
