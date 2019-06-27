import axios from "axios";
import {
  GET_FEATURED_STREAMS,
  GET_TOP_GAMES,
  GET_STREAMS_BY_CATEGORY,
  SET_LOADING
} from "./types";

const twitchClientId = process.env.REACT_APP_CLIENT_ID;

const kraken = axios.create({
  baseURL: "https://api.twitch.tv/kraken/",
  headers: { "Client-ID": twitchClientId }
});

// Get all featured streams - used in sidebar and homepage
export const getFeaturedStreams = () => async dispatch => {
  const response = await kraken.get("streams/featured");

  dispatch({
    type: GET_FEATURED_STREAMS,
    payload: response.data.featured
  });
};

export const getTopGames = () => async dispatch => {
  dispatch(setLoading());
  const response = await kraken.get("games/top?limit=100");
  dispatch({
    type: GET_TOP_GAMES,
    payload: response.data.top
  });
};

export const getStreamsByCategory = category => async dispatch => {
  dispatch(setLoading());
  const response = await kraken.get(
    category ? `streams?limit=100&game=${category}` : `streams?limit=100`
  );
  dispatch({
    type: GET_STREAMS_BY_CATEGORY,
    payload: response.data.streams
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
