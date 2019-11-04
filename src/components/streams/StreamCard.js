import React from "react";
import { Link } from "@reach/router";
import "./StreamCard.css";
import { kFormatter } from "../../utility/utility";
import PropTypes from "prop-types";

const StreamCard = ({ name, preview, game, status, viewers }) => (
  <div className="stream-card">
    <Link to={`/channel/${name}`}>
      <img src={preview.replace("{width}", "320").replace("{height}", "180")} alt={`${name} playing ${game}`} />
    </Link>
    <div className="streamcard-block">
      <div className="streamcard-text">
        <Link to={`/channel/${name}`} title={status}>
          <h3>{status}</h3>
        </Link>
        <Link to={`/channel/${name}`}>
          <p>{`${name} | ${kFormatter(viewers)} viewers`}</p>
        </Link>
        <Link to={`/streams/${game}`}>
          <p>{game}</p>
        </Link>
      </div>
    </div>
  </div>
);

StreamCard.propTypes = {
  name: PropTypes.string,
  preview: PropTypes.string,
  game: PropTypes.string,
  logo: PropTypes.string,
  status: PropTypes.string,
  viewers: PropTypes.number
};

export default StreamCard;
