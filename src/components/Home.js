import React, { useState, Fragment } from "react";
import { connect } from "react-redux";
import { useSpring, animated } from "react-spring";

import "./Home.css";
import Video from "../components/Video";
import Loading from "../components/Loading";

const Landing = ({ featuredStreams }) => {
  const [currentStream, setCurrentStream] = useState("");

  const animatedStyle = useSpring({
    opacity: featuredStreams !== null && featuredStreams.length <= 0 ? 0 : 1
  });

  if (featuredStreams === null) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <Video
          currentStream={
            currentStream
              ? currentStream
              : featuredStreams[0].stream.channel.display_name
          }
        />
        <animated.section className="thumbnail-row" style={animatedStyle}>
          {featuredStreams
            .slice(0, 6)
            .map(({ image, stream: { channel, game } }) => (
              <button
                className="img-container"
                onClick={event => setCurrentStream(channel.display_name)}
                key={channel.display_name}
                title={`${channel.display_name} playing ${game}`}
              >
                <img
                  src={image}
                  alt={channel.display_name}
                  key={channel.display_name}
                />
              </button>
            ))}
        </animated.section>
      </Fragment>
    );
  }
};

const mapStateToProps = state => ({
  featuredStreams: state.twitch.featuredStreams
});

export default connect(mapStateToProps)(Landing);
