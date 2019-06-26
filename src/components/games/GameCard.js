import React from "react";
import { Link } from "@reach/router";
import { kFormatter } from "../../utility/utility";
import "./GameCard.css";

function GameCard({ name, box, viewers }) {
  return (
    <div className="game-card" key={name}>
      <Link to={`/streams/${name}`}>
        <img src={box} alt={name} />
        <h3 title={name}>{name}</h3>
        <p>{kFormatter(viewers)} viewers</p>
      </Link>
    </div>
  );
}

export default GameCard;
