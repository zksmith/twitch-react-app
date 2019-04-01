import React from "react";
import "./Video.css";

const Video = props => (
  <div className="iframe-container">
    <iframe
      src={`https://player.twitch.tv/?channel=${
        props.currentStream
      }&muted=true`}
      title={`featured streamer ${props.currentStream}`}
      frameBorder="0"
    />
  </div>
);

export default Video;
