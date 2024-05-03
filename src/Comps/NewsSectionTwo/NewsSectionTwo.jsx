import { Link } from "react-router-dom";
import SanitizedParagraph from "../SanitizedParagraph";
import { useEffect, useState } from "react";
import axios from "axios";
import LazyImageNews from "../LazyImage/LazyImageNews";

const NewsSectionTwo = ({ binodon }) => {
  const [advertisementBinodon, setAdvertisementBinodon] = useState([]);

  useEffect(() => {
    const addUrl = "https://backoffice.ajkal.us/ad/all";

    axios
      .get(addUrl)
      .then((response) => {
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
                  <LazyImageNews
                    src={`https://ajkal.us/images/${title_img}`}
                    alt=""
                    className="rounded-1"
                    errorSrc="https://ajkal.us/image/settings/placeholder.jpg"
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                      overflow: "hidden",
                    }}
                  />
                  <div className="card-body" style={{ height: "9rem" }}>
                    <div
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
                    </div>
                    <div className="m-0 pt-1">
                      <SanitizedParagraph
                        htmlContent={news_short_brief
                          .split(" ")
                          .slice(0, 5)
                          .join(" ")}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
      <div className="row">
        <div className="col-lg-12">
          {advertisementBinodon.map(
            (data) =>
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

export default NewsSectionTwo;
