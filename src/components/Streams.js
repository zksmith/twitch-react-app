import React, { Component } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import { Link } from "@reach/router";
import "./Streams.css";

class Streams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStreams: []
    };
  }
  componentDidMount() {
    const env = runtimeEnv();
    var url = `https://api.twitch.tv/kraken/streams?limit=100&client_id=${
      env.REACT_APP_CLIENT_ID
    }`;
    let self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        self.setState({
          allStreams: data.streams
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    let state = this.state;
    return (
      <div className="streams">
        {state.allStreams.map(stream => (
          <div className="stream-card" key={stream.channel.name}>
            <Link to={`/channel/${stream.channel.name}`}>
              <img src={stream.preview.medium} />
              <p>{stream.channel.name}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Streams;
