import React, { Component, Fragment } from "react";
import "./Landing.css";
import Video from "./Video.js";
import Loading from "./Loading.js";

class Landing extends Component {
  state = { currentStream: "" };

  render() {
    const { currentStream } = this.state;
    if (this.props.allFeaturedStreams.length <= 0) {
      return <Loading />;
    } else {
      return (
        <Fragment>
          <Video
            currentStream={
              currentStream
                ? currentStream
                : this.props.allFeaturedStreams[0].stream.channel.display_name
            }
          />
          <div className="thumbnail-row">
            {this.props.allFeaturedStreams
              .slice(0, 6)
              .map(({ image, stream: { channel } }) => (
                <button
                  className="img-container"
                  onClick={event =>
                    this.setState({ currentStream: channel.display_name })
                  }
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
        </Fragment>
      );
    }
  }
}
export default Landing;
