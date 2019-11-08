import React from "react";
import { Link } from "@reach/router";
import { GameCardContainer } from "./GameCardStyles";

const GameCard = ({ name, box, id }) => {
  return (
    <GameCardContainer key={name}>
      <Link to={`/streams/${id}`}>
        <img src={box.replace("{width}", "272").replace("{height}", "380")} 
          alt={name} />
        <h3 title={name}>{name}</h3>
      </Link>
    </GameCardContainer>
  );
};

export default GameCard;
