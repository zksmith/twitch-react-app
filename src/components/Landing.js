import React, { Component } from "react";
import { getFeaturedStreams } from "./utility/TwitchAPI";
import "./Landing.css";
import Video from "./Video.js";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStream: "",
      allFeaturedStreams: []
    };
  }
  componentDidMount() {
    getFeaturedStreams.then(result => {
      this.setState({
        allFeaturedStreams: result,
        currentStream: result[0].stream.channel.name
      });
    });
  }
  render() {
    let state = this.state;
    {
      /* <div className="thumbnail-row">
    {state.allFeaturedStreams.map(stream => (
        <img
          src={stream.stream.preview.medium}
          alt={stream.stream.channel.display_name}
        />
      ))}
    </div> */
    }
    if (state.currentStream !== "") {
      return <Video currentStream={state.currentStream} />;
    } else {
      return <p>Loading...</p>;
    }
  }
}
export default Landing;
