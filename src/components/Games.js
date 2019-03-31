import React, { Component } from "react";
import { Link } from "@reach/router";
import { getGames } from "./utility/TwitchAPI";
import { kFormatter } from "./utility/utility";
import "./Games.css";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGames: []
    };
  }

  componentDidMount() {
    getGames.then(result => {
      this.setState({ allGames: result });
    });
  }
  render() {
    let state = this.state;
    return (
      <div className="games">
        {state.allGames.map(game => (
          <div className="game-card" key={game.game.name}>
            <Link to={`/streams/${game.game.name}`}>
              <img src={game.game.box.large} />
              <h3>{game.game.name}</h3>
              <p>{kFormatter(game.viewers)} viewers</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Games;
