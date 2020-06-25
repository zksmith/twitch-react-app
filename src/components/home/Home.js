import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "@reach/router";

import {
  HomeVideoContainer,
  ThumbnailContainer,
  ThumbnailButton,
  ThumbnailButtonImage,
} from "./HomeStyles";
import Video from "../Video";
import Loading from "../layout/Loading";

const Landing = ({ featuredStreams }) => {
  const [currentStream, setCurrentStream] = useState({
    user_name: "",
    title: "",
  });

  useEffect(() => {
    if (featuredStreams) {
      setCurrentStream(featuredStreams[0]);
    }
  }, [featuredStreams]);

  if (!featuredStreams) {
    return <Loading />;
  }
  return (
    <Fragment>
      <HomeVideoContainer>
        <Video currentStream={currentStream.user_name} />
        <p>
          <Link to={`/channel/${currentStream.user_name}`}>
            {currentStream.user_name.toUpperCase()}
          </Link>
        </p>
        <p>{currentStream.title}</p>
      </HomeVideoContainer>

      <ThumbnailContainer>
        {featuredStreams
          .slice(0, 6)
          .map(({ thumbnail_url, id, title, user_name }) => (
            <ThumbnailButton
              onClick={() => setCurrentStream({ user_name, title })}
              key={id}
              title={title}
            >
              <ThumbnailButtonImage
                src={thumbnail_url
                  .replace("{width}", "320")
                  .replace("{height}", "180")}
                alt={user_name}
                key={id}
                selected={user_name === currentStream.user_name}
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
