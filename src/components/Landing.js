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
    if (state.currentStream !== "") {
      return (
        <div>
          <Video currentStream={state.currentStream} />
          <div className="thumbnail-row">
            {state.allFeaturedStreams.slice(0, 6).map(stream => (
              <img
                src={stream.image}
                alt={stream.stream.channel.display_name}
                key={stream.stream.channel.display_name}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}
export default Landing;
