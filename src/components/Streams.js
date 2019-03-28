import React, { Component } from "react";
import { getAllStreams, getStreamsForGame } from "./utility/TwitchAPI";
import "./Streams.css";
import StreamCard from "./StreamCard";

let apiErrorCount = 0;

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
            <StreamCard stream={stream} key={stream.channel.name} />
          ))}
        </div>
      );
    } else if (apiErrorCount > 50) {
      return <p>Twitch API is having troubles right now</p>;
    } else {
      //Handing for twitch api server error
      apiErrorCount++;
      this.getGames(this.props["*"]);
      return <p>Loading...</p>;
    }
  }
}

export default Streams;
