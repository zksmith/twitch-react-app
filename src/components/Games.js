import React, { Component } from "react";
import { Link } from "@reach/router";
import { getGames } from "./utility/TwitchAPI";
import { kFormatter } from "./utility/utility";
import Loading from "./Loading.js";
import "./Games.css";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGames: [],
      loading: true
    };
  }

  componentDidMount() {
    getGames.then(result => {
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
        {allGames.map(game => (
          <div className="game-card" key={game.game.name}>
            <Link to={`/streams/${game.game.name}`}>
              <img src={game.game.box.large} alt={game.game.name} />
              <h3 title={game.game.name}>{game.game.name}</h3>
              <p>{kFormatter(game.viewers)} viewers</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Games;
