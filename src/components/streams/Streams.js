import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getStreams, getGameInfo } from "../../actions/twitchActions";
import { useSpring, animated } from "react-spring";
import StreamsHeader from './StreamsHeader';
import StreamCard from "./StreamCard";
import Loading from "../layout/Loading";

const Streams = ({ "*": gameID, getStreams, getGameInfo, gameInfo, streams, loading }) => {
  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1
  });

  useEffect(() => {
    getStreams(gameID);
    getGameInfo(gameID);
  }, [gameID, getStreams, getGameInfo]);

  if (streams === null || loading) {
    return <Loading />;
  } else if (streams) {
    //added streams to if statement to handle twitch API error
    return (
      <>
      <StreamsHeader gameInfo={gameInfo[gameID]}/>
      <animated.section
        className="flex-container streams"
        style={animatedStyle}
      >
        {/* conditional render handling successful call but no results */}
        {streams.length > 0 ? (
          <Fragment>
            {streams.map(stream => (
              <StreamCard
                name={stream.user_name}
                preview={stream.thumbnail_url}
                game={stream.game_id}
                status={stream.title}
                viewers={stream.viewer_count}
                key={stream.id}
              />
            ))}
          </Fragment>
        ) : (
          <h1>Could not find any streams for "{gameID}"</h1>
        )}
      </animated.section>
      </>
    );
  } else {
    return <p>Twitch API is having troubles right now</p>;
  }
};

const mapStateToProps = ({ twitch: { streams, gameInfo, loading } }) => ({
  streams: streams,
  gameInfo: gameInfo,
  loading: loading
});

export default connect(
  mapStateToProps,
  { getStreams, getGameInfo }
)(Streams);
