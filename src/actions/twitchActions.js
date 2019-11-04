import axios from "axios";
import {
  GET_FEATURED_STREAMS,
  GET_TOP_GAMES,
  GET_STREAMS,
  SET_LOADING,
  SET_VIEWED_CHANNEL
} from "./types";

const twitchClientId = process.env.REACT_APP_CLIENT_ID;

const helix = axios.create({
  baseURL: "https://api.twitch.tv/helix/",
  headers: { "Client-ID": twitchClientId }
});

// Get all featured streams - used in sidebar and homepage
export const getFeaturedStreams = () => async dispatch => {
  try {
    const response = await helix.get("streams/featured");

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
    const response = await helix.get("games/top?first=100");
    console.log(response);
    dispatch({
      type: GET_TOP_GAMES,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getStreams = gameID => async dispatch => {
  try {
    dispatch(setLoading());
    const response = await helix.get(
      gameID ? `streams?first=100&game_id=${gameID}` : `streams?first=100`
    );
    dispatch({
      type: GET_STREAMS,
      payload: response.data.data
    });
  } catch (error) {
    console.log(error);
  }
};

export const getChannelInfo = channelName => async dispatch => {
  const response = await helix.get(`channels/${channelName}`);
  dispatch({
    type: SET_VIEWED_CHANNEL,
    payload: response.data
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
