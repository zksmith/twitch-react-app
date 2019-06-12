import React from "react";
import Video from "./Video";
import "./Channel.css";

const Channel = ({ channelName }) => <Video currentStream={channelName} />;

export default Channel;
