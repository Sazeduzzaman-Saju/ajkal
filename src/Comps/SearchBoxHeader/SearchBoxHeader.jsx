import React, { useState } from "react";
import { Link } from "react-router-dom";

const SearchBoxHeader = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Clear the search input after submission
    setQuery("");
  };
  return (
    <div>
      <form action="/search" method="get" onSubmit={handleFormSubmit}>
        {/* <input
          className="search expandright"
          id="searchright"
          type="search"
          name="q"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}
        /> */}
        <Link to={'/search'}>
        <label
          type="submit"
          className="buttonss searchbutton d-lg-block d-none"
          htmlFor="searchright"
          onChange={handleInputChange}
        >
          <span className="mglass">&#9906;</span>
        </label>
        </Link>
      </form>
    </div>
  );
};

export default SearchBoxHeader;
