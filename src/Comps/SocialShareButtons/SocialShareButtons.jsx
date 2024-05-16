import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FcShare, FcPrint } from "react-icons/fc";
import { MdOutlineTextIncrease, MdOutlineTextDecrease } from "react-icons/md";
import { FaFont } from "react-icons/fa";
import "./SocialShareButtons.css";
import ReactToPrint from "react-to-print";
import PropTypes from "prop-types";

const SocialShareButtons = ({
  title,
  image,
  url,
  description,
  increaseFontSize,
  decreaseFontSize,
  resetFontSize,
}) => {
  return (
    <div className="d-flex">
      <div className="dropdown open">
        <button
          className="share-btn"
          type="button"
          id="triggerId"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <FcShare></FcShare>
        </button>
        <div className="dropdown-menu" aria-labelledby="triggerId">
          <div className="social-share-buttons">
            <FacebookShareButton
              url={url}
              hashtag={title}
              description={description}
              image={image}
            >
              <FaFacebook />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              hashtag={title}
              description={description}
              image={image}
            >
              <FaTwitter />
            </TwitterShareButton>
            <WhatsappShareButton
              url={url}
              hashtag={title}
              description={description}
              image={image}
            >
              <FaWhatsapp />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
      <button className="share-btn text-black" onClick={increaseFontSize}>
        <MdOutlineTextIncrease></MdOutlineTextIncrease>
      </button>
      <button className="share-btn text-black" onClick={decreaseFontSize}>
        <MdOutlineTextDecrease></MdOutlineTextDecrease>
      </button>
      <button className="share-btn text-black" onClick={resetFontSize}>
        <FaFont></FaFont>
      </button>
      <ReactToPrint
        trigger={() => (
          <button className="share-btn">
            <FcPrint></FcPrint>
          </button>
        )}
        content={() => document.getElementById("printThis")}
      />
    </div>
  );
};

SocialShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  increaseFontSize: PropTypes.func.isRequired,
  decreaseFontSize: PropTypes.func.isRequired,
  resetFontSize: PropTypes.func.isRequired,
};
export default SocialShareButtons;
