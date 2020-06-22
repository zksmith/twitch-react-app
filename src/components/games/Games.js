import React, { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { getTopGames, filterGames } from "../../actions/twitchActions";
import { connect } from "react-redux";
import Loading from "../layout/Loading.js";
import GameCard from "./GameCard";

const Games = ({
  getTopGames,
  topGames,
  loading,
  filterGames,
  filteredGames,
  isAPIError,
}) => {
  const animatedStyle = useSpring({
    opacity: loading ? 0 : 1,
  });

  useEffect(() => {
    getTopGames();
  }, [getTopGames]);

  if (isAPIError) {
    return <h2>Error loading data from the Twitch API</h2>;
  } else if (topGames === null || loading) {
    return <Loading />;
  }
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <input
          type="text"
          placeholder="Search Games"
          style={{
            width: "50%",
            height: "30px",
            backgroundColor: "#1e1f26",
            color: "#fff",
            border: "1px solid #623fa5",
          }}
          onChange={(e) => filterGames(e.target.value)}
        />
      </div>
      <animated.section className="flex-container" style={animatedStyle}>
        {(filteredGames || topGames).map(({ name, box_art_url, id }) => (
          <GameCard name={name} box={box_art_url} id={id} key={id} />
        ))}
      </animated.section>
    </>
  );
};

const mapStateToProps = ({
  twitch: { topGames, loading, isAPIError, filteredGames },
}) => ({
  topGames: topGames,
  loading: loading,
  isAPIError: isAPIError,
  filteredGames: filteredGames,
});

export default connect(mapStateToProps, { getTopGames, filterGames })(Games);
