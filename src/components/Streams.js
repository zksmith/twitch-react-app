import React, { Component } from "react";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import { Link } from "@reach/router";
import "./Streams.css";

class Streams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      allStreams: []
    };
  }
  componentDidMount() {
    const env = runtimeEnv();
    var url;
    if (this.props["*"] === "") {
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
        this.props["*"]
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
    if (this.state.allStreams) {
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
      const env = runtimeEnv();
      var url = `https://api.twitch.tv/kraken/search/streams?limit=100&query=${
        this.props["*"]
      }&client_id=${env.REACT_APP_CLIENT_ID}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            allStreams: data.streams
          });
        })
        .catch(error => console.log(error));
      return <p>Loading...</p>;
    }
  }
}

export default Streams;
