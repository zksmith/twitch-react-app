import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { getGames } from "./utility/TwitchAPI";
import { kFormatter } from "./utility/utility";
import { useSpring, animated } from "react-spring";
import Loading from "./Loading.js";
import "./Games.css";

const Games = () => {
  const [allGames, setAllGames] = useState([]);
  const [loading, setLoading] = useState(true);

  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1
  });

  const fetchGames = async () => {
    const res = await getGames();
    setAllGames(res);
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <animated.section className="games" style={animatedStyle}>
      {allGames.map(({ game, viewers }) => (
        <div className="game-card" key={game.name}>
          <Link to={`/streams/${game.name}`}>
            <img src={game.box.large} alt={game.name} />
            <h3 title={game.name}>{game.name}</h3>
            <p>{kFormatter(viewers)} viewers</p>
          </Link>
        </div>
      ))}
    </animated.section>
  );
};

export default Games;
