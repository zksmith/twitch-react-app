import React from "react";

const Video = props => (
  <iframe
    src={`https://player.twitch.tv/?channel=${props.currentStream}&muted=true`}
    title={`featured streamer ${props.currentStream}`}
    frameBorder="0"
  />
);

export default Video;
