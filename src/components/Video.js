import React from "react";
import "./Video.css";

const Video = ({ currentStream }) => (
  <div className="iframe-container">
    <iframe
      src={`https://player.twitch.tv/?channel=${currentStream}&muted=true`}
      title={`featured streamer ${currentStream}`}
      frameBorder="0"
      height="500px"
    />
  </div>
);

export default Video;
