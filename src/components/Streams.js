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
    var url;
    if (this.props.category === "all") {
      url = `https://api.twitch.tv/kraken/streams?limit=100&client_id=${
        env.REACT_APP_CLIENT_ID
      }`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            allStreams: data.streams
          });
        })
        .catch(error => console.log(error));
    } else {
      url = `https://api.twitch.tv/kraken/search/streams?limit=100&query=${
        this.props.category
      }&client_id=${env.REACT_APP_CLIENT_ID}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            allStreams: data.streams
          });
        })
        .catch(error => console.log(error));
    }
  }
  render() {
    let state = this.state;
    if (this.state.allStreams.length > 0) {
      console.log([]);
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
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default Streams;
