import runtimeEnv from "@mars/heroku-js-runtime-env";

const ENV = runtimeEnv();

const GAMESURL = `https://api.twitch.tv/kraken/games/top?limit=100&client_id=${
  ENV.REACT_APP_CLIENT_ID}`;
const ALLSTREAMSURL = `https://api.twitch.tv/kraken/streams?limit=100&client_id=${
  ENV.REACT_APP_CLIENT_ID
  }`;
const FEATUREDSTREAMSURL = `https://api.twitch.tv/kraken/streams/featured?client_id=${
  ENV.REACT_APP_CLIENT_ID
  }`;

const getFeaturedStreams = fetch(FEATUREDSTREAMSURL)
  .then(response => response.json())
  .then(data => {
    return data.featured;
  })
  .catch(error => console.log(error));

const getGames = fetch(GAMESURL)
  .then(response => response.json())
  .then(data => {
    return data.top;
  })
  .catch(error => console.log(error));

const getAllStreams = fetch(ALLSTREAMSURL)
  .then(response => response.json())
  .then(data => {
    return data.streams;
  })
  .catch(error => console.log(error));

const getStreamsForGame = game => {
  let url = `https://api.twitch.tv/kraken/search/streams?limit=100&query=${game}&client_id=${
    ENV.REACT_APP_CLIENT_ID
    }`;
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      return data.streams;
    })
    .catch(error => console.log(error));
};
export { getGames, getAllStreams, getStreamsForGame, getFeaturedStreams };
