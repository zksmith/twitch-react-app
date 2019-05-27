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
          {allFeaturedStreams.slice(0, 6).map(({ image, display_name }) => (
            <button
              className="img-container"
              onClick={event => this.setCurrentStream(display_name)}
            >
              <img src={image} alt={display_name} key={display_name} />
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default Landing;
