import React from "react";
import { Helmet } from "react-helmet";

const PageHelmet = ({
  title,
  description,
  keywords,
  image,
  url,
  author,
  articlePublishedTime,
  articleModifiedTime,
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Your Site Name" />
      {articlePublishedTime && (
        <meta property="article:published_time" content={articlePublishedTime} />
      )}
      {articleModifiedTime && (
        <meta property="article:modified_time" content={articleModifiedTime} />
      )}
      {/* If the article has multiple authors, loop through and add them as separate tags */}
      {author &&
        author.map((authorName, index) => (
          <meta property="article:author" content={authorName} key={index} />
        ))}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* Twitter Site Tag */}
      <meta name="twitter:site" content="@YourTwitterHandle" />

      {/* Google / Search Engine */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={author} />
      <meta name="image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default PageHelmet;
