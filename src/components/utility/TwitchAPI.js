import runtimeEnv from "@mars/heroku-js-runtime-env";

const ENV = runtimeEnv();
const GAMESURL = `https://api.twitch.tv/kraken/games/top?limit=100&client_id=${
  ENV.REACT_APP_CLIENT_ID
}`;
const getGames = fetch(GAMESURL)
  .then(response => response.json())
  .then(data => {
    return data.top;
  })
  .catch(error => console.log(error));

export { getGames };
