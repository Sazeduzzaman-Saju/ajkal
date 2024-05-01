import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({ title, type, image, url, card, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:type" content='News' />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content={card} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="দৈনিক আজকাল" />
      <meta name="twitter:image:alt" content='https://ajkal.us/image/settings/logo_red.png' />
    </Helmet>
  );
};

export default PageHelmet;
