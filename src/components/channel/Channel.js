import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getChannelInfo } from "../../actions/twitchActions";
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

  useEffect(() => {
    getChannelInfo(channelName);
  }, [channelName, getChannelInfo]);

  return (
    <>
      {channelInfo && (
        <>
          <section className="channel-container">
            <div className="info-stream">
              <header className="channel-header">
                <div className="header-block">
                  <img
                    src={channelInfo.logo}
                    style={{ width: "30px", borderRadius: "50%" }}
                  />
                  <span>{channelInfo.name}</span>
                </div>
                <div className="header-block">
                  <span>
                    <a href="#!">Followers:</a>{" "}
                    {channelInfo.followers.toLocaleString()}
                  </span>
                </div>
                <div className="header-block">
                  <a href="#!">Clips</a>
                </div>
                <div className="header-block">
                  <a href="#!">Videos</a>
                </div>
              </header>
              <iframe
                className="video-frame"
                src={`https://player.twitch.tv/?channel=${channelName}&muted=true`}
                title={`featured streamer ${channelName}`}
                frameBorder="0"
                allowFullScreen
              />
            </div>
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
        </>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  channelInfo: state.twitch.viewedChannel
});

export default connect(
  mapStateToProps,
  { getChannelInfo }
)(Channel);
