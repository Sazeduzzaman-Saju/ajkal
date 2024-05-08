import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ videoUrl, width, height }) => {
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoUrl}`}
      width={width}
      height={height}
      style={{ borderRadius: "5px" }}
      controls
    />
  );
};

export default VideoPlayer;
