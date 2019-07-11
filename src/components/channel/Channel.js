import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getChannelInfo } from "../../actions/twitchActions";
// import Video from "./Video";
import "./Channel.css";

const Channel = ({ channelName, getChannelInfo }) => {
  const initalState = () =>
    localStorage.getItem("chatVisible")
      ? JSON.parse(localStorage.getItem("chatVisible"))
      : true;

  const [chatVisible, setChatVisibile] = useState(initalState);

  const toggleChat = () => {
    localStorage.setItem("chatVisible", !chatVisible);
    setChatVisibile(!chatVisible);
  };

  useEffect(() => {
    getChannelInfo(channelName);
  }, [channelName, getChannelInfo]);

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
          {chatVisible ? "Hide Chat" : "Show Chat"}
        </button>
        {chatVisible && (
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
export default connect(
  null,
  { getChannelInfo }
)(Channel);
