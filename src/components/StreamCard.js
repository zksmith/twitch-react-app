import React from "react";
import { Link } from "@reach/router";
import "./StreamCard.css";

const StreamCard = props => (
  <div className="stream-card">
    <Link to={`/channel/${props.stream.channel.name}`}>
      <img src={props.stream.preview.medium} />
    </Link>
    <div className="streamcard-block">
      <img className="channel-logo" src={props.stream.channel.logo} />
      <div className="streamcard-text">
        <Link to={`/channel/${props.stream.channel.name}`}>
          <h3>{props.stream.channel.status}</h3>
        </Link>
        <Link to={`/channel/${props.stream.channel.name}`}>
          <p>{props.stream.channel.name}</p>
        </Link>
        <Link to={`/streams/${props.stream.game}`}>
          <p>{props.stream.game}</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StreamCard;
