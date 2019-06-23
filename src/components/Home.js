import React, { useState, Fragment } from "react";
import { useSpring, animated } from "react-spring";

import "./Home.css";
import Video from "../components/Video";
import Loading from "../components/Loading";

const Landing = ({ allFeaturedStreams }) => {
  const [currentStream, setCurrentStream] = useState("");

  const animatedStyle = useSpring({
    opacity: allFeaturedStreams.length <= 0 ? 0 : 1
  });

  if (allFeaturedStreams.length <= 0) {
    return <Loading />;
  } else {
    return (
      <Fragment>
        <Video
          currentStream={
            currentStream
              ? currentStream
              : allFeaturedStreams[0].stream.channel.display_name
          }
        />
        <animated.section className="thumbnail-row" style={animatedStyle}>
          {allFeaturedStreams
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
export default Landing;
