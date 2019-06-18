import React from "react";
// import Video from "./Video";
import "./Channel.css";

const Channel = ({ channelName }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}&muted=true`}
        title={`featured streamer ${channelName}`}
        frameBorder="0"
        style={{ width: "70%" }}
      />
      <iframe
        frameBorder="0"
        title={`featured streamer ${channelName} chat`}
        scrolling="no"
        id="chat_embed"
        src={`https://www.twitch.tv/embed/${channelName}/chat`}
        width="30%"
      />
    </div>
  );
};
export default Channel;
