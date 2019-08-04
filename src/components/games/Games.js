import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { getTopGames } from "../../actions/twitchActions";
import { connect } from "react-redux";
import Loading from "../layout/Loading.js";
import GameCard from "./GameCard";

const Games = ({ getTopGames, topGames, loading }) => {
  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1
  });

  useEffect(() => {
    getTopGames();
  }, [getTopGames]);

  if (topGames === null || loading) {
    return <Loading />;
  }
  return (
    <animated.section className="flex-container" style={animatedStyle}>
      {topGames.map(({ game, viewers }) => (
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

const mapStateToProps = ({ twitch: { topGames, loading } }) => ({
  topGames: topGames,
  loading: loading
});

export default connect(
  mapStateToProps,
  { getTopGames }
)(Games);
