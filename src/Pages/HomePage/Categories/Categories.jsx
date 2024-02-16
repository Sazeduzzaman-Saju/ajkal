import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const categoriesData = [
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 1, name: "পাকিস্তানের", link: "/" },
  { id: 2, name: "ভারতের", link: "/" },
  { id: 3, name: "অমেরিকার", link: "/" },
  // Add more categories as needed
];

const Categories = () => {
  return (
    <div className="row my-5">
      <h5 className="text-center">মুল ক্যাটেগরি</h5>
      <p className="footer-devider w-10 mx-auto"></p>
      <div className="col-lg-12">
        <ul className="list-unstyled d-flex flex-wrap justify-content-center">
          {categoriesData.map((category) => (
            <li key={category.id} className="mb-2">
              <div className="circle-marker"></div>
              <Link to="/" className="text-muted link-text">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
