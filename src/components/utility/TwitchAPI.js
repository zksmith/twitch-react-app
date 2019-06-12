import runtimeEnv from "@mars/heroku-js-runtime-env";

const ENV = runtimeEnv();

const GAMESURL = `https://api.twitch.tv/kraken/games/top?limit=100&client_id=${
  ENV.REACT_APP_CLIENT_ID
}`;
const ALLSTREAMSURL = `https://api.twitch.tv/kraken/streams?limit=100&client_id=${
  ENV.REACT_APP_CLIENT_ID
}`;
const FEATUREDSTREAMSURL = `https://api.twitch.tv/kraken/streams/featured?client_id=${
  ENV.REACT_APP_CLIENT_ID
}`;

const getFeaturedStreams = async () => {
  const response = await fetch(FEATUREDSTREAMSURL);
  const result = await response.json();
  return result;
};

const getGames = async () => {
  const response = await fetch(GAMESURL);
  const result = await response.json();
  return result.top;
};

const getStreamsForGame = async game => {
  if (game) {
    let url = `https://api.twitch.tv/kraken/search/streams?limit=100&query=${game}&client_id=${
      ENV.REACT_APP_CLIENT_ID
    }`;
    const response = await fetch(url);
    const result = await response.json();
    return result.streams;
  } else {
    const response = await fetch(ALLSTREAMSURL);
    const result = await response.json();
    return result.streams;
  }
};
export { getGames, getStreamsForGame, getFeaturedStreams };
