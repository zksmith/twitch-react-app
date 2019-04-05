import React, { Component } from "react";
import { getFeaturedStreams } from "./utility/TwitchAPI";
import "./Landing.css";
import Video from "./Video.js";
import Loading from "./Loading.js";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentStream: "",
      allFeaturedStreams: []
    };
  }
  setCurrentStream(channelName) {
    this.setState({ currentStream: channelName });
  }
  componentDidMount() {
    getFeaturedStreams.then(result => {
      this.setState({
        allFeaturedStreams: result,
        currentStream: result[0].stream.channel.name,
        loading: false
      });
    });
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
          {allFeaturedStreams.slice(0, 6).map(stream => (
            <button
              className="img-container"
              onClick={event =>
                this.setCurrentStream(stream.stream.channel.display_name)
              }
            >
              <img
                src={stream.image}
                alt={stream.stream.channel.display_name}
                key={stream.stream.channel.display_name}
              />
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default Landing;
