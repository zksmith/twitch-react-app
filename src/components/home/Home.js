import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import {
  HomeVideoContainer,
  ThumbnailContainer,
  ThumbnailButton,
  ThumbnailButtonImage
} from "./HomeStyles";
import Video from "../Video";
import Loading from "../layout/Loading";

const Landing = ({ featuredStreams }) => {
  const [currentStream, setCurrentStream] = useState("");

  if (featuredStreams === null) {
    return <Loading />;
  }
  return (
    <Fragment>
      <HomeVideoContainer>
        <Video
          currentStream={
            currentStream
              ? currentStream
              : featuredStreams[0].stream.channel.display_name
          }
        />
      </HomeVideoContainer>
      <ThumbnailContainer>
        {featuredStreams
          .slice(0, 8)
          .map(({ image, stream: { channel, game } }) => (
            <ThumbnailButton
              onClick={event => setCurrentStream(channel.display_name)}
              key={channel.display_name}
              title={`${channel.display_name} playing ${game}`}
            >
              <ThumbnailButtonImage
                src={image}
                alt={channel.display_name}
                key={channel.display_name}
              />
            </ThumbnailButton>
          ))}
      </ThumbnailContainer>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  featuredStreams: state.twitch.featuredStreams
});

export default connect(mapStateToProps)(Landing);
