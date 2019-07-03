import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import "./Home.css";
import Video from "../Video";
import Loading from "../layout/Loading";

const Landing = ({ featuredStreams }) => {
  const [currentStream, setCurrentStream] = useState("");

  if (featuredStreams === null) {
    return <Loading />;
  }
  return (
    <Fragment>
      <section className="flex-container selected-featured-stream">
        <Video
          currentStream={
            currentStream
              ? currentStream
              : featuredStreams[0].stream.channel.display_name
          }
        />
      </section>
      <section className="thumbnail-row">
        {featuredStreams
          .slice(0, 8)
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
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  featuredStreams: state.twitch.featuredStreams
});

export default connect(mapStateToProps)(Landing);
