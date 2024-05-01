import { Link, useLoaderData } from "react-router-dom";

const CategoryNewsSlider = () => {
  const singleNews = useLoaderData();
  console.log(singleNews.data, "category data"); // Log the data structure to verify

  const hasFeaturedItems = singleNews.data.some(
    (newsItem) => newsItem.is_featured === 1
  );

  return (
    <div>
      {hasFeaturedItems ? (
        singleNews.data.map((newsItem, index) => (
          <div key={index}>
            {newsItem.is_featured === 1 && (
              <p>
                <Link
                  to={`/${newsItem.category_name_bangla}/${newsItem.id}`}
                  className="shadow-sm"
                  key={newsItem.id}
                >
                  <div className="card rounded-0 border-0">
                    <div className="card-body p-0 ">
                      <div>
                        <img
                          className="img-fluid w-100 category-slider-img shadow-sm"
                          src={`https://ajkal.us/images/${newsItem.title_img}`}
                          alt=""
                          onError={(e) => {
                            e.target.src =
                              "https://ajkal.us/image/settings/placeholder.jpg";
                          }}
                        />
                      </div>
                      <div
                        className="p-2 feature-text-area"
                        style={{ backgroundColor: "var(--main)" }}
                      >
                        <h4 className="pt-1 mb-1 text-white">
                          {newsItem.news_title.slice(0, 50)}
                        </h4>
                      </div>
                    </div>
                  </div>
                </Link>
              </p>
            )}
          </div>
        ))
      ) : (
        <Link to={"/"} className="shadow-sm">
          <div className="card rounded-0 border-0">
            <div className="card-body p-0">
              <div>
                <img
                  className="img-fluid w-100 category-slider-img"
                  src={`https://ajkal.us/image/settings/placeholder.jpg`}
                  alt=""
                  onError={(e) => {
                    e.target.src =
                      "https://ajkal.us/image/settings/placeholder.jpg";
                  }}
                />
              </div>
              <div
                className="p-2 feature-text-area"
                style={{ backgroundColor: "var(--main)" }}
              >
                <h4 className="pt-1 mb-1 text-white">
                  এই ক্যাটেগরিতে কোন ফিচার নিউজ নেই।
                </h4>
              </div>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CategoryNewsSlider;
