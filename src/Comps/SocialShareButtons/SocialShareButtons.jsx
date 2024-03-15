import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialShareButtons = ({ url }) => {
  return (
    <div className="social-share-buttons">
      <FacebookShareButton url={url} hashtag={"#hashtag"} description={"aiueo"}>
        <FaFacebook />
      </FacebookShareButton>
      <TwitterShareButton url={url} hashtag={"#hashtag"} description={"aiueo"}>
        <FaTwitter />
      </TwitterShareButton>
      <WhatsappShareButton url={url} hashtag={"#hashtag"} description={"aiueo"}>
        <FaWhatsapp />
      </WhatsappShareButton>
    </div>
  );
};

export default SocialShareButtons;
