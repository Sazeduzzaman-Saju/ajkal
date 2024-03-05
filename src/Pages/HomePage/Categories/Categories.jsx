import React from "react";
import "./Categories.css";
import { Link } from "react-router-dom";

const categoriesData = [
  { id: 1, name: "যুক্তরাষ্ট্র", link: "/" },
  { id: 2, name: "বাংলাদেশ", link: "/" },
  { id: 1, name: "নিউইয়র্ক", link: "/" },
  { id: 2, name: "সারাবিশ্ব", link: "/" },
  { id: 1, name: "প্রবাস", link: "/" },
  { id: 2, name: "বিনোদন", link: "/" },
  { id: 1, name: "খেলার মাঠ", link: "/" },
  { id: 2, name: "স্বাস্থ্য", link: "/" },
  { id: 1, name: "ধর্ম", link: "/" },
  { id: 2, name: "সংকলন", link: "/" }
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
