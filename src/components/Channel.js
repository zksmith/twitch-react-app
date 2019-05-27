import React, { Component } from "react";
import Video from "./Video";
import "./Channel.css";

class Channel extends Component {
  render() {
    return <Video currentStream={this.props.channelName} />;
  }
}

export default Channel;
