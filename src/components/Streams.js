import React, { Component, Fragment } from "react";
import { getStreamsForGame } from "./utility/TwitchAPI";
import "./Streams.css";
import StreamCard from "./StreamCard";
import Loading from "./Loading";

class Streams extends Component {
  state = { allStreams: [], loading: false };

  getGames = async category => {
    this.setState({ loading: true });

    const res = await getStreamsForGame(category);
    this.setState({
      allStreams: res,
      loading: false
    });
  };

  componentDidMount() {
    // this.props[*] gets the url param after /streams
    this.getGames(this.props["*"]);
  }

  componentDidUpdate(prevProps) {
    /* handling for user clicking the "Streams" navbar link
     * while browsing streams for specific game */
    if (prevProps["*"] !== this.props["*"]) {
      this.getGames(this.props["*"]);
    }
  }

  render() {
    let { loading, allStreams } = this.state;
    //added allStreams to if statement ta handle twitch API error
    if (allStreams && !loading) {
      return (
        <div className="streams">
          {/* conditional render handling successful call but no results */}
          {allStreams.length > 0 ? (
            <Fragment>
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
            </Fragment>
          ) : (
            <h1>Could not find any streams for "{this.props["*"]}"</h1>
          )}
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
