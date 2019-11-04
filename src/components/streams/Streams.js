import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions/twitchActions";
import { useSpring, animated } from "react-spring";
import StreamCard from "./StreamCard";
import Loading from "../layout/Loading";

const Streams = ({ "*": gameID, getStreams, streams, loading }) => {
  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1
  });

  useEffect(() => {
    getStreams(gameID);
  }, [gameID, getStreams]);

  if (streams === null || loading) {
    return <Loading />;
  } else if (streams) {
    //added streams to if statement to handle twitch API error
    return (
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
    );
  } else {
    return <p>Twitch API is having troubles right now</p>;
  }
};

const mapStateToProps = ({ twitch: { streams, loading } }) => ({
  streams: streams,
  loading: loading
});

export default connect(
  mapStateToProps,
  { getStreams }
)(Streams);
