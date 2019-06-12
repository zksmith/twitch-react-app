import React, { Component } from "react";
import { Link } from "@reach/router";
import { getGames } from "./utility/TwitchAPI";
import { kFormatter } from "./utility/utility";
import Loading from "./Loading.js";
import "./Games.css";

class Games extends Component {
  state = { allGames: [], loading: true };

  componentDidMount() {
    getGames().then(result => {
      this.setState({ allGames: result, loading: false });
    });
  }

  render() {
    let { allGames, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div className="games">
        {allGames.map(({ game: game, viewers }) => (
          <div className="game-card" key={game.name}>
            <Link to={`/streams/${game.name}`}>
              <img src={game.box.large} alt={game.name} />
              <h3 title={game.name}>{game.name}</h3>
              <p>{kFormatter(viewers)} viewers</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Games;
