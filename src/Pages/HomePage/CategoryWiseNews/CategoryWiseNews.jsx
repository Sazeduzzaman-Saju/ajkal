import React from "react";
import NewsSectionOne from "../../../Comps/NewsSectionOne/NewsSectionOne";
import NewsSectionTwo from "../../../Comps/NewsSectionTwo/NewsSectionTwo";
import NewsSectionThree from "../../../Comps/NewsSectionThree/NewsSectionThree";
import PostHeader from "../../../Comps/PostHeader/PostHeader";

const CategoryWiseNews = () => {
  return (
    <div>
      {/* First Style */}
      <div>
        <PostHeader title="ইসলামী জীবন" />
        <NewsSectionOne />
      </div>
      {/* Second Style */}
      <div className="pt-2">
        <PostHeader title="বাণিজ্য সংবাদ" />
        <NewsSectionTwo />
      </div>
      {/* Third Style */}
      <div className="pt-4">
        <PostHeader title="বিজ্ঞান সংবাদ" />
        <NewsSectionThree />
      </div>
    </div>
  );
};

export default CategoryWiseNews;
