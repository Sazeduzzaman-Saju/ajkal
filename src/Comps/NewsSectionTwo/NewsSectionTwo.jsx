import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import SanitizedParagraph from "../SanitizedParagraph";
import { useEffect, useState } from "react";
import axios from "axios";

const NewsSectionTwo = ({ binodon }) => {
  // Check if binodon is empty or null
  if (!binodon || binodon.length === 0) {
    return <div>Loading...</div>;
  }
  const [addvertisementBinodon, setAdvertisementBinodon] = useState([]);
  const addUrl = "https://backoffice.ajkal.us/ad/all";

  useEffect(() => {
    axios
      .get(addUrl)
      .then((response) => {
        // Check if the response contains an array
        if (Array.isArray(response.data)) {
          setAdvertisementBinodon(response.data);
        } else if (Array.isArray(response.data.data)) {
          setAdvertisementBinodon(response.data.data);
        } else {
          console.error(
            "Invalid data structure in API response:",
            response.data
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
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
      <div className="row">
        <div className="col-lg-12">
          {/* binodon category addvertisementBinodon */}
          {addvertisementBinodon.map(
            (data) =>
              // Check if data.status is "1" and data.ad_position is "HeaderTop"
              data.status === 1 &&
              data.ad_position === "BelowNewsCategory2" && (
                <Link to={data.ad_link} key={data.id} target="_blank">
                  <img
                    className="img-fluid w-100"
                    src={`https://ajkal.us/img/ad/${data.ad_banner}`}
                    alt={`https://ajkal.us/img/ad/${data.ad_banner}`}
                    onError={(e) => {
                      e.target.src =
                        "https://ajkal.us/image/settings/placeholder.jpg";
                    }}
                  />
                </Link>
              )
          )}
        </div>
      </div>
    </div>
  );
};

// NewsSectionTwo.propTypes = {
//   binodon: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       title_img: PropTypes.string.isRequired,
//       news_title: PropTypes.string.isRequired,
//       postDescription: PropTypes.string.isRequired,
//       category_name_bangla: PropTypes.string.isRequired, // Ensure you have this prop type
//       // Add any other properties and their types as needed
//     })
//   ),
// };

export default NewsSectionTwo;
