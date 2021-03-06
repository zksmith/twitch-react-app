import React, { useState } from "react";
import "./Channel.css";

const Channel = ({ channelName, getChannelInfo, channelInfo }) => {
  const initalState = () =>
    localStorage.getItem("chatVisible")
      ? JSON.parse(localStorage.getItem("chatVisible"))
      : true;

  const [chatVisible, setChatVisibile] = useState(initalState);

  const toggleChat = () => {
    localStorage.setItem("chatVisible", !chatVisible);
    setChatVisibile(!chatVisible);
  };
  return (
    <div className="channel-container">
      <iframe
        className="video-frame"
        src={`https://player.twitch.tv/?channel=${channelName}&muted=false&parent=twitch-react-app.netlify.app`}
        title={`featured streamer ${channelName}`}
        frameBorder="0"
        allowFullScreen
      />
      <div className="chat-container">
        <button className="btn" onClick={toggleChat}>
          {chatVisible ? "Hide Chat" : "Show Chat"}
        </button>
        <iframe
          frameBorder="0"
          title={`featured streamer ${channelName} chat`}
          scrolling="no"
          id="chat_embed"
          src={`https://www.twitch.tv/embed/${channelName}/chat?parent=twitch-react-app.netlify.app&darkpopout`}
          className={chatVisible ? "shown" : "hidden"}
        />
      </div>
    </div>
  );
};

export default Channel;
