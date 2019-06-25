import { GET_FEATURED_STREAMS } from "./types";

let twitchClientId;

if (process.env.NODE_ENV !== "production") {
  twitchClientId = process.env.REACT_APP_CLIENT_ID;
} else {
  twitchClientId = process.env.REACT_APP_CLIENT_ID;
}

export const getFeaturedStreams = () => async dispatch => {
  const response = await fetch(
    `https://api.twitch.tv/kraken/streams/featured?client_id=${twitchClientId}`
  );
  const result = await response.json();

  dispatch({
    type: GET_FEATURED_STREAMS,
    payload: result.featured
  });
};
