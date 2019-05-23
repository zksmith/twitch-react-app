import React from "react";
import { Link } from "@reach/router";
import "./StreamCard.css";
import { kFormatter } from "./utility/utility";

const StreamCard = props => (
  <div className="stream-card">
    <Link to={`/channel/${props.stream.channel.name}`}>
      <img
        src={props.stream.preview.medium}
        alt={`${props.stream.channel.name} playing ${props.stream.game}`}
      />
    </Link>
    <div className="streamcard-block">
      <img
        className="channel-logo"
        src={props.stream.channel.logo}
        alt={props.stream.channel.name}
      />
      <div className="streamcard-text">
        <Link
          to={`/channel/${props.stream.channel.name}`}
          title={props.stream.channel.status}
        >
          <h3>{props.stream.channel.status}</h3>
        </Link>
        <Link to={`/channel/${props.stream.channel.name}`}>
          <p>{`${props.stream.channel.name} | ${kFormatter(
            props.stream.viewers
          )} viewers`}</p>
        </Link>
        <Link to={`/streams/${props.stream.game}`}>
          <p>{props.stream.game}</p>
        </Link>
      </div>
    </div>
  </div>
);

export default StreamCard;
