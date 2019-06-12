import React, { Component } from "react";
import { getFeaturedStreams } from "./utility/TwitchAPI";
import "./Landing.css";
import Video from "./Video.js";
import Loading from "./Loading.js";

class Landing extends Component {
  state = { loading: true, currentStream: "", allFeaturedStreams: [] };
  setCurrentStream = channelName => {
    this.setState({ currentStream: channelName });
  };
  componentDidMount() {
    getFeaturedStreams()
      .then(({ featured }) => {
        this.setState({
          allFeaturedStreams: featured,
          currentStream: featured[0].stream.channel.name,
          loading: false
        });
      })
      .catch(e => console.error(e));
  }
  render() {
    let { loading, allFeaturedStreams, currentStream } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        <Video currentStream={currentStream} />
        <div className="thumbnail-row">
          {allFeaturedStreams
            .slice(0, 6)
            .map(({ image, stream: { channel } }) => (
              <button
                className="img-container"
                onClick={event => this.setCurrentStream(channel.display_name)}
                key={channel.display_name}
              >
                <img
                  src={image}
                  alt={channel.display_name}
                  key={channel.display_name}
                />
              </button>
            ))}
        </div>
      </div>
    );
  }
}
export default Landing;
