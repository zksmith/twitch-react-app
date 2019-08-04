import React from "react";
import { Link } from "@reach/router";
import { kFormatter } from "../../utility/utility";
import { GameCardContainer } from "./GameCardStyles";

const GameCard = ({ name, box, viewers }) => {
  return (
    <GameCardContainer key={name}>
      <Link to={`/streams/${name}`}>
        <img src={box} alt={name} />
        <h3 title={name}>{name}</h3>
        <p>{kFormatter(viewers)} viewers</p>
      </Link>
    </GameCardContainer>
  );
};

export default GameCard;
