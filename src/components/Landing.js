import React, { useState, Fragment } from "react";
import "./Landing.css";
import Video from "./Video.js";
import Loading from "./Loading.js";

const Landing = ({ allFeaturedStreams }) => {
  const [currentStream, setCurrentStream] = useState("");

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
        <div className="thumbnail-row">
          {allFeaturedStreams
            .slice(0, 6)
            .map(({ image, stream: { channel } }) => (
              <button
                className="img-container"
                onClick={event => setCurrentStream(channel.display_name)}
                key={channel.display_name}
              >
                <img
                  src={image}
                  alt={channel.display_name}
                  key={channel.display_name}
                />
              </button>
            ))}
        </div>
      </Fragment>
    );
  }
};
export default Landing;
