import SanitizedParagraph from "../../Comps/SanitizedParagraph";
import BanglaTime from "../../Comps/BanglaTime/BanglaDynamicTIme";
import SocialShareButtons from "../../Comps/SocialShareButtons/SocialShareButtons";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import FacebookComments from "../../Comps/FacebookComments/FacebookComments";
import { useState } from "react";

const NewsDetailsContent = ({ singleNewsDetails, links, addvertisement }) => {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => prevSize - 2);
  };

  const resetFontSize = () => {
    setFontSize(16); // Reset font size to initial value
  };
  const urlCopy = singleNewsDetails
    ? `https://ajkal.us/${singleNewsDetails?.category_name}/${singleNewsDetails?.id}`
    : "";
  const copyUrlToClipboard = () => {
    // Create a temporary input element
    const input = document.createElement("input");
    input.setAttribute("value", urlCopy);
    document.body.appendChild(input);

    // Select the input value
    input.select();
    input.setSelectionRange(0, 99999); // For mobile devices

    // Copy the selected text
    document.execCommand("copy");

    // Remove the temporary input
    document.body.removeChild(input);

    // Optionally, provide feedback to the user
    toast.success("News URL copied : " + urlCopy);
  };
  return (
    <>
      <div className="col-lg-8 ps-0" id="printThis">
        <h5 className="fw-bold py-4 mb-0" style={{ color: "#ee2026" }}>
          {singleNewsDetails?.category_name_bangla}
        </h5>
        <h1 className="main_color">{singleNewsDetails?.news_title}</h1>
        <div className="pt-3" style={{ fontSize: `${fontSize}px` }}>
          <SanitizedParagraph
            htmlContent={singleNewsDetails?.news_short_brief}
          />
        </div>
        <div className="mt-4">
          {/* Condition to check if singleNewsDetails?.video_url is empty */}
          {singleNewsDetails?.video_url ? (
            <iframe
              width="100%"
              height="500"
              style={{ borderRadius: "5px" }}
              src={`https://www.youtube.com/embed/${singleNewsDetails?.video_url}`}
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <img
              src={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`}
              className="rounded-2 img-fluid w-100"
              alt=""
              onError={(e) => {
                e.target.src =
                  "https://ajkal.us/img/settings/placeholder.jpg";
              }}
            />
          )}
          <p className="pt-2" style={{ fontSize: `${fontSize}px` }}>
            {singleNewsDetails?.news_title} | ফাইল ছবি
          </p>
          {/* Author */}
          <div className="d-flex justify-content-between  align-items-center py-5">
            <div className="news-author-box">
              <h4 className="main-color">{singleNewsDetails?.news_author}</h4>
              <p>
                <BanglaTime
                  time={singleNewsDetails?.news_time.slice(10)}
                ></BanglaTime>
              </p>
            </div>
            <div>
              <div className="social-author">
                <SocialShareButtons
                  title={singleNewsDetails?.news_title}
                  image={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`}
                  url={`https://ajkal.us/news/${singleNewsDetails?.id}`}
                  description={singleNewsDetails?.news_detail}
                  increasefontsize={increaseFontSize}
                  decreasefontsize={decreaseFontSize}
                  resetfontsize={resetFontSize}
                  copyUrlToClipboard={copyUrlToClipboard}
                />
              </div>
            </div>
          </div>
          {/* News Details */}
          <div className="pb-4 py-3">
            {addvertisement.map((data) =>
              // Check if data "ad_category_id" is equal to "2" and status is equal to "1"
              data.ad_category_id === "4" && data.status === "1" ? (
                <Link to={data.ad_link} key={data.id}>
                  <LazyImageShortNews
                    src={`https://ajkal.us/img/news/${data.title_img}`}
                    alt={data.news_title}
                    className="img-fluid"
                    errorSrc="https://ajkal.us/img/settings/placeholder.jpg"
                    width="100%"
                    height="auto"
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              ) : null
            )}
          </div>

          <div style={{ fontSize: `${fontSize}px` }}>
            <SanitizedParagraph
              htmlContent={singleNewsDetails?.news_detail}
            ></SanitizedParagraph>
          </div>
        </div>
        <div>
          <div className="row py-4 px-3">
            <div className="col-lg-12 pb-3 ps-0">
              <div className="d-flex align-items-center justify-content-between">
                <h5 className="secondary-color mb-0 ">সংবাদ টি শেয়ার করুন।</h5>
                <div className="social-share-buttons">
                  <FacebookShareButton
                    title={singleNewsDetails?.news_title}
                    type="article"
                    image={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`} // Replace with actual image URL
                    url={`https://ajkal.us/${singleNewsDetails?.category_name_bangla}/${singleNewsDetails?.id}`} // Replace with actual page URL
                    card={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`}
                    description={singleNewsDetails?.news_detail}
                    increasefontsize={increaseFontSize}
                    decreasefontsize={decreaseFontSize}
                    resetfontsize={resetFontSize}
                  >
                    <FaFacebook />
                  </FacebookShareButton>
                  <TwitterShareButton
                    title={singleNewsDetails?.news_title}
                    type="article"
                    image={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`} // Replace with actual image URL
                    url={`https://ajkal.us/${singleNewsDetails?.category_name_bangla}/${singleNewsDetails?.id}`} // Replace with actual page URL
                    card={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`}
                    description={singleNewsDetails?.news_detail}
                    increasefontsize={increaseFontSize}
                    decreasefontsize={decreaseFontSize}
                    resetfontsize={resetFontSize}
                  >
                    <FaTwitter />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    title={singleNewsDetails?.news_title}
                    type="article"
                    image={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`} // Replace with actual image URL
                    url={`https://ajkal.us/${singleNewsDetails?.category_name_bangla}/${singleNewsDetails?.id}`} // Replace with actual page URL
                    card={`https://ajkal.us/img/news/${singleNewsDetails?.title_img}`}
                    description={singleNewsDetails?.news_detail}
                    increasefontsize={increaseFontSize}
                    decreasefontsize={decreaseFontSize}
                    resetfontsize={resetFontSize}
                  >
                    <FaWhatsapp />
                  </WhatsappShareButton>
                  <button
                    type="button"
                    title={`${singleNewsDetails?.news_title}.লিঙ্ক কপি করুন `}
                    className="react-share__ShareButton border-0"
                    onClick={copyUrlToClipboard}
                  >
                    <FaCopy />
                  </button>
                </div>
              </div>
            </div>
            {/* News Details Tags */}
            <div className="col-lg-12 px-0">
              <div>
                {links.map((link, index) => (
                  <Link to="#" className="pe-3 mb-2 d-inline-block" key={index}>
                    <span
                      tabIndex={0}
                      className="v-chip v-chip--clickable theme--light v-size--default tags-button"
                    >
                      <span className="v-chip__content">
                        <span>{link.label}</span>
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            {/* News Details Tags end*/}
          </div>

          <div className="">
            <FacebookComments
              url={`https://ajkal.us/news/${singleNewsDetails?.id}`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetailsContent;
