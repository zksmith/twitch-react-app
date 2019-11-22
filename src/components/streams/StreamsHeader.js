import React from "react";
import "./StreamsHeader.css";

const StreamsHeader = ({ gameInfo }) => {
  console.log(gameInfo);
  if (gameInfo) {
    return (
      <header className="streams-header">
        <img
          src={gameInfo.box_art_url
            .replace("{width}", "72")
            .replace("{height}", "96")}
          alt={gameInfo.name}
        />
        <h1>{gameInfo.name}</h1>
      </header>
    );
  } else {
    return <></>;
  }
};

export default StreamsHeader;
