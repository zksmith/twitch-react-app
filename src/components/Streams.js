import React, { Component } from "react";
import { Link } from "@reach/router";
import { getAllStreams, getStreamsForGame } from "./utility/TwitchAPI";
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
    var url;
    if (this.props["*"] === "") {
      getAllStreams.then(result => {
        this.setState({
          allStreams: result
        });
      });
    } else {
      getStreamsForGame(this.props["*"]).then(result => {
        this.setState({
          allStreams: result
        });
      });
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
      getStreamsForGame(this.props["*"]).then(result => {
        this.setState({
          allStreams: result
        });
      });
      return <p>Loading...</p>;
    }
  }
}

export default Streams;
