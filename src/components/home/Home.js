import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import {
  HomeVideoContainer,
  ThumbnailContainer,
  ThumbnailButton,
  ThumbnailButtonImage,
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
            currentStream ? currentStream : featuredStreams[0].user_name
          }
        />
      </HomeVideoContainer>
      <ThumbnailContainer>
        {featuredStreams
          .slice(0, 6)
          .map(({ thumbnail_url, id, title, user_name }) => (
            <ThumbnailButton
              onClick={() => setCurrentStream(user_name)}
              key={id}
              title={title}
            >
              <ThumbnailButtonImage
                src={thumbnail_url
                  .replace("{width}", "320")
                  .replace("{height}", "180")}
                alt={user_name}
                key={id}
                selected={
                  user_name ===
                  (currentStream ? currentStream : featuredStreams[0].user_name)
                }
              />
            </ThumbnailButton>
          ))}
      </ThumbnailContainer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  featuredStreams: state.twitch.featuredStreams,
});

export default connect(mapStateToProps)(Landing);
