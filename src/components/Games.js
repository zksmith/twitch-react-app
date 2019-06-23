import React, { useState, useEffect } from "react";
import { getGames } from "../utility/TwitchAPI";
import { useSpring, animated } from "react-spring";
import Loading from "./Loading.js";
import GameCard from "./GameCard";

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
        <GameCard
          name={game.name}
          box={game.box.large}
          viewers={viewers}
          key={game.name}
        />
      ))}
    </animated.section>
  );
};

export default Games;
