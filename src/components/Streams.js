import React, { useEffect, useState, Fragment } from "react";
import { getStreamsForGame } from "../utility/TwitchAPI";
import { useSpring, animated } from "react-spring";
import StreamCard from "./StreamCard";
import Loading from "./Loading";

const Streams = ({ "*": category }) => {
  const [allStreams, setAllStreams] = useState([]);
  const [loading, setLoading] = useState(true);

  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1
  });

  const getStreams = async category => {
    setLoading(true);

    const res = await getStreamsForGame(category);
    setAllStreams(res);
    setLoading(false);
  };

  useEffect(() => {
    getStreams(category);
  }, [category]);

  if (loading) {
    return <Loading />;
  } else if (allStreams) {
    //added allStreams to if statement to handle twitch API error
    return (
      <animated.section className="streams" style={animatedStyle}>
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
          <h1>Could not find any streams for "{category}"</h1>
        )}
      </animated.section>
    );
  } else {
    return <p>Twitch API is having troubles right now</p>;
  }
};

export default Streams;
