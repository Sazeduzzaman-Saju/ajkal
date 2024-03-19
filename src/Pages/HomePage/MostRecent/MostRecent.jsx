import React, { useState, useEffect } from "react";
import "./MostRecent.css";
import { Link } from "react-router-dom";

const MostRecent = () => {
  // State to hold category data
  const [categories, setCategories] = useState([]);

  // Simulated fetch function to fetch category data
  const fetchCategories = () => {
    // Simulated API call or fetch
    const simulatedData = [
      {
        id: 2,
        name: "বাংলাদেশ",
        imageUrl:
          "https://www.goarif.com/wp-content/uploads/2019/01/Introduction-to-Bangladesh-GoArif-1536x1024.jpg",
        description: "নিউজ গুলো দেখে আসুন এখনি।",
      },
      {
        id: 4,
        name: "বিশ্ব",
        imageUrl:
          "https://d2u0ktu8omkpf6.cloudfront.net/74154686eb66f7d7a54f2ae953992e2353edb95a457c6276.jpg",
        description: "নিউজ গুলো দেখে আসুন এখনি।",
      },
      {
        id: 6,
        name: "আজকের নিউজ",
        imageUrl:
          "https://www.jugantor.com/assets/news_photos/2020/03/16/image-289736-1584330085.jpg",
        description: "নিউজ গুলো দেখে আসুন এখনি।",
      },
      {
        id: 5,
        name: "ইন্টারন্যাশনাল",
        imageUrl: "https://static.kent.ac.uk/nexus/ems/63.jpg",
        description: "নিউজ গুলো দেখে আসুন এখনি।",
      },
    ];
    setCategories(simulatedData);
  };

  useEffect(() => {
    // Fetch categories when component mounts
    fetchCategories();
  }, []);

  return (
    <div>
      <div className="row gx-2">
        {/* Map over categories and render cards */}
        {categories.map((category) => (
          <div className="col-lg-3" key={category.id}>
            <Link to={`/categories/${category.id}`} className="card card-news p-0">
              <img
                src={category.imageUrl}
                alt="Card Background"
                style={{ height: '150px', objectFit: 'cover' }}
              />
              <div className="overlay-recents">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRecent;
