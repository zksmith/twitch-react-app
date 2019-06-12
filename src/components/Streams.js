import React, { Component } from "react";
import { getAllStreams, getStreamsForGame } from "./utility/TwitchAPI";
import "./Streams.css";
import StreamCard from "./StreamCard";
import Loading from "./Loading";

class Streams extends Component {
  state = { allStreams: [], loading: false };

  getGames = category => {
    this.setState({ loading: true });
    //if no game provided in url fetch top streams
    if (category === "") {
      getAllStreams().then(result => {
        this.setState({
          allStreams: result,
          loading: false
        });
      });
    } else {
      getStreamsForGame(category).then(result => {
        this.setState({
          allStreams: result,
          loading: false
        });
      });
    }
  };

  componentDidMount() {
    // this.props[*] gets the url param after /streams
    this.getGames(this.props["*"]);
  }

  componentDidUpdate(prevProps) {
    /* handling for user clicking the "Streams" navbar link
     * while browsing streams for specific game */
    if (prevProps["*"] !== this.props["*"]) {
      console.log("here");
      this.getGames(this.props["*"]);
    }
  }

  render() {
    let { loading, allStreams } = this.state;
    //added allStreams to if statement ta handle twitch API error
    if (allStreams && !loading) {
      return (
        <div className="streams">
          {allStreams.map(stream => (
            <StreamCard
              name={stream.channel.name}
              preview={stream.preview.medium}
              game={stream.game}
              logo={stream.channel.logo}
              status={stream.channel.status}
              viewers={stream.viewers}
              key={stream.channel.name}
            />
          ))}
        </div>
      );
    } else if (loading) {
      return <Loading />;
    } else {
      return <p>Twitch API is having troubles right now</p>;
    }
  }
}

export default Streams;
