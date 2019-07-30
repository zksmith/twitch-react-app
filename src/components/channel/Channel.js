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
    <section className="channel-container">
      <iframe
        className="video-frame"
        src={`https://player.twitch.tv/?channel=${channelName}&muted=true`}
        title={`featured streamer ${channelName}`}
        frameBorder="0"
      />
      <div className="chat-container">
        <button className="btn" onClick={toggleChat}>
          {chatVisible ? "Hide Chat" : "Show Chat"}
        </button>
        {chatVisible && (
          <iframe
            frameBorder="0"
            title={`featured streamer ${channelName} chat`}
            scrolling="no"
            id="chat_embed"
            src={`https://www.twitch.tv/embed/${channelName}/chat`}
          />
        )}
      </div>
    </section>
  );
};
export default connect(
  null,
  { getChannelInfo }
)(Channel);
