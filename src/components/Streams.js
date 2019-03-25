import React, { Component } from "react";
import { Link } from "@reach/router";
import { getAllStreams, getStreamsForGame } from "./utility/TwitchAPI";
import "./Streams.css";

class Streams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStreams: []
    };
    this.getGames = this.getGames.bind(this);
  }
  getGames(category) {
    if (category === "") {
      getAllStreams.then(result => {
        console.log(result);
        this.setState({
          allStreams: result
        });
      });
    } else {
      getStreamsForGame(category).then(result => {
        this.setState({
          allStreams: result
        });
      });
    }
  }
  componentDidMount() {
    // this.props[*] gets the url param after /streams
    this.getGames(this.props["*"]);
  }
  componentWillReceiveProps(nextProps) {
    /* handling for user clicking the "Streams" navbar link
     * while browsing streams for specific game */
    this.setState({ allStreams: [] });
    this.getGames(nextProps.path);
  }
  render() {
    let state = this.state;
    if (state.allStreams) {
      return (
        <div className="streams">
          {state.allStreams.map(stream => (
            <div className="stream-card" key={stream.channel.name}>
              <Link to={`/channel/${stream.channel.name}`}>
                <img src={stream.preview.medium} />
              </Link>
              <img className="channel-logo" src={stream.channel.logo} />
              <Link to={`/channel/${stream.channel.name}`}>
                <h3>{stream.channel.status}</h3>
              </Link>
              <Link to={`/channel/${stream.channel.name}`}>
                <p>{stream.channel.name}</p>
              </Link>
              <Link to={`/streams/${stream.game}`}>
                <p>{stream.game}</p>
              </Link>
            </div>
          ))}
        </div>
      );
    } else {
      //Handing for twitch api 503ing
      this.getGames(this.props["*"]);
      return <p>Loading...</p>;
    }
  }
}

export default Streams;
