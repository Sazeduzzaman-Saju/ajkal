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

const SocialShareButtons = ({
  title,
  image,
  url,
  description,
  onIncreaseFontSize,
  onDecreaseFontSize,
  onResetFontSize,
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
              imageUrl={image}
            >
              <FaFacebook />
            </FacebookShareButton>
            <TwitterShareButton
              url={url}
              hashtag={title}
              description={description}
              imageUrl={image}
            >
              <FaTwitter />
            </TwitterShareButton>
            <WhatsappShareButton
              url={url}
              hashtag={title}
              description={description}
              imageUrl={image}
            >
              <FaWhatsapp />
            </WhatsappShareButton>
          </div>
        </div>
      </div>
      <button className="share-btn text-black" onClick={onIncreaseFontSize}>
        <MdOutlineTextIncrease></MdOutlineTextIncrease>
      </button>
      <button className="share-btn text-black" onClick={onDecreaseFontSize}>
        <MdOutlineTextDecrease></MdOutlineTextDecrease>
      </button>
      <button className="share-btn text-black" onClick={onResetFontSize}>
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

export default SocialShareButtons;
