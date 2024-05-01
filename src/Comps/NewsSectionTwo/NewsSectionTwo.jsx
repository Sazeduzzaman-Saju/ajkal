import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SanitizedParagraph from "../SanitizedParagraph";

const NewsSectionTwo = ({ binodon }) => {
  // Check if binodon is empty or null
  if (!binodon || binodon.length === 0) {
    return <div>Loading...</div>;
  }
  console.log(binodon, "binodon");
  return (
    <div>
      <div className="row gx-3">
        {binodon.map(
          ({
            id,
            title_img,
            news_title,
            news_short_brief,
            category_name_bangla,
          }) => (
            <div className="col-lg-3" key={id}>
              <Link
                to={`/${category_name_bangla}/${id}`}
                className="text-muted"
              >
                <div className="card border-0 shadow-sm mb-3">
                  <img
                    src={`https://ajkal.us/images/${title_img}`}
                    className="card-img-top rounded-1"
                    alt=""
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                  <div className="card-body" style={{ height: "9rem" }}>
                    <h6
                      className="mb-0 main-color"
                      style={{ fontSize: "20px" }}
                    >
                      <SanitizedParagraph
                        className="mb-0"
                        style={{ marginBottom: "0px" }}
                        htmlContent={news_title
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                      />
                    </h6>
                    <p className="m-0 pt-1">
                      <SanitizedParagraph
                        htmlContent={news_short_brief
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

NewsSectionTwo.propTypes = {
  binodon: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title_img: PropTypes.string.isRequired,
      news_title: PropTypes.string.isRequired,
      postDescription: PropTypes.string.isRequired,
      category_name_bangla: PropTypes.string.isRequired, // Ensure you have this prop type
      // Add any other properties and their types as needed
    })
  ),
};

export default NewsSectionTwo;
