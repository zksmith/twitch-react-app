import React, { Component } from "react";
import { Link } from "@reach/router";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import "./Games.css";

class Games extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allGames: []
    };
  }
  componentDidMount() {
    const env = runtimeEnv();
    var url = `https://api.twitch.tv/kraken/games/top?limit=100&client_id=${
      env.REACT_APP_CLIENT_ID
    }`;
    let self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        self.setState({
          allGames: data.top
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    let state = this.state;
    return (
      <div className="games">
        {state.allGames.map(game => (
          <div className="game-card" key={game.game.name}>
            <Link to={`/streams/${game.game.name}`}>
              <img src={game.game.box.medium} />
              <p>{game.game.name}</p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default Games;
