import React, { Component } from "react";
import Video from "./Video";
import "./Channel.css";

class Channel extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="main-content">
        <div className="featured-streamer">
          <Video currentStream={this.props.channelName} />;
        </div>
      </div>
    );
  }
}

export default Channel;
