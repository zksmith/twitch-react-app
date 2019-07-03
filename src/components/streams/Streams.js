import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getStreamsByCategory } from "../../actions/twitchActions";
import { useSpring, animated } from "react-spring";
import StreamCard from "./StreamCard";
import Loading from "../layout/Loading";

const Streams = ({ "*": category, getStreamsByCategory, streams, loading }) => {
  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1
  });

  useEffect(() => {
    getStreamsByCategory(category);
  }, [category]);

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
          <h1>Could not find any streams for "{category}"</h1>
        )}
      </animated.section>
    );
  } else {
    return <p>Twitch API is having troubles right now</p>;
  }
};

const mapStateToProps = state => ({
  streams: state.twitch.streams,
  loading: state.twitch.loading
});

export default connect(
  mapStateToProps,
  { getStreamsByCategory }
)(Streams);
