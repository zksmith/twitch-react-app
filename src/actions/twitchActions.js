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
  try {
    const response = await kraken.get("streams/featured");

    dispatch({
      type: GET_FEATURED_STREAMS,
      payload: response.data.featured
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTopGames = () => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await kraken.get("games/top?limit=100");
    dispatch({
      type: GET_TOP_GAMES,
      payload: response.data.top
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStreamsByCategory = category => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await kraken.get(
      category ? `streams?limit=100&game=${category}` : `streams?limit=100`
    );
    dispatch({
      type: GET_STREAMS_BY_CATEGORY,
      payload: response.data.streams
    });
  } catch (error) {
    console.log(error);
  }
};

export const getChannelInfo = channelName => async dispatch => {
  const response = await kraken.get(`channels/${channelName}`);
  console.log(response.data);
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
