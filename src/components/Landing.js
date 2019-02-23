import React, { Component } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import "./Landing.css";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStream: "",
      allFeaturedStreams: ""
    };
  }
  componentDidMount() {
    const env = runtimeEnv();
    var url = `https://api.twitch.tv/kraken/streams/featured?client_id=${
      env.REACT_APP_CLIENT_ID
    }`;
    let self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data.featured[0].stream);

        self.setState({
          currentStream: data.featured[0].stream.channel.name,
          allFeaturedStreams: data.featured
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    if (this.state.currentStream !== "") {
      return (
        <div className="main-content">
          <div className="featured-streamer">
            <div className="video">
              <iframe
                src={`https://player.twitch.tv/?channel=${
                  this.state.currentStream
                }&muted=true`}
                title={`featured streamer ${this.state.currentStream}`}
                frameBorder="0"
                height="740"
                width="416"
              />
            </div>
          </div>
          {/* <div className="thumbnail-row">
            {this.state.allFeaturedStreams.map(stream => (
              <img
                src={stream.stream.preview.medium}
                alt={stream.stream.channel.display_name}
              />
            ))}
          </div> */}
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}
export default Landing;
