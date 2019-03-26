import React from "react";

const Video = props => (
  <div className="video">
    <iframe
      src={`https://player.twitch.tv/?channel=${
        props.currentStream
      }&muted=true`}
      title={`featured streamer ${props.currentStream}`}
      frameBorder="0"
      height="740"
      width="416"
    />
  </div>
);

export default Video;
