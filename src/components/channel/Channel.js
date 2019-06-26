import React, { useState } from "react";
// import Video from "./Video";
import "./Channel.css";

const Channel = ({ channelName }) => {
  const initalState = () =>
    JSON.parse(localStorage.getItem("chatHidden")) || false;
  const [chatHidden, setChatVisibility] = useState(initalState);

  const toggleChat = () => {
    localStorage.setItem("chatHidden", !chatHidden);
    setChatVisibility(!chatHidden);
  };

  return (
    <div style={{ display: "flex", height: "90vh" }}>
      <iframe
        src={`https://player.twitch.tv/?channel=${channelName}&muted=true`}
        title={`featured streamer ${channelName}`}
        frameBorder="0"
        style={{ width: "70%" }}
      />
      <div className="chat-container" style={{ width: "30%", height: "100%" }}>
        <button
          className="btn"
          style={{ height: "7%", marginBottom: "5px", width: "100%" }}
          onClick={toggleChat}
        >
          {chatHidden ? "Show Chat" : "Hide Chat"}
        </button>
        {!chatHidden && (
          <iframe
            frameBorder="0"
            title={`featured streamer ${channelName} chat`}
            scrolling="no"
            id="chat_embed"
            src={`https://www.twitch.tv/embed/${channelName}/chat`}
            width="100%"
            height="92%"
          />
        )}
      </div>
    </div>
  );
};
export default Channel;
