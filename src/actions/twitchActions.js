import axios from "axios";
import {
  GET_FEATURED_STREAMS,
  GET_TOP_GAMES,
  GET_STREAMS,
  SET_LOADING,
  SET_VIEWED_CHANNEL,
  GET_GAME_INFO,
  SET_API_ERROR,
  FILTER_GAMES,
} from "./types";

const twitchClientId = process.env.REACT_APP_CLIENT_ID;
const twitchAccessToken = process.env.REACT_APP_ACCESS_TOKEN;

const helix = axios.create({
  baseURL: "https://api.twitch.tv/helix/",
  headers: {
    "Client-ID": twitchClientId,
    Authorization: `Bearer ${twitchAccessToken}`,
  },
});

export const setAPIError = (bool) => {
  return {
    type: SET_API_ERROR,
    payload: bool,
  };
};

// Get all featured streams - used in sidebar and homepage
export const getFeaturedStreams = () => async (dispatch) => {
  try {
    const response = await helix.get("streams");
    dispatch({
      type: GET_FEATURED_STREAMS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch(setAPIError(true));
  }
};

export const getTopGames = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await helix.get("games/top?first=100");
    dispatch({
      type: GET_TOP_GAMES,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch(setAPIError(true));
  }
};

export const filterGames = (text) => {
  return {
    type: FILTER_GAMES,
    payload: text.toLowerCase(),
  };
};

export const getStreams = (gameID) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const response = await helix.get(
      gameID ? `streams?first=100&game_id=${gameID}` : `streams?first=100`
    );
    dispatch({
      type: GET_STREAMS,
      payload: response.data.data,
    });
  } catch (error) {
    dispatch(setAPIError(true));
  }
};

export const getGameInfo = (gameID) => async (dispatch) => {
  try {
    const response = await helix.get(`games?id=${gameID}`);
    dispatch({
      type: GET_GAME_INFO,
      payload: {
        [gameID]: response.data.data[0],
      },
    });
  } catch (error) {
    dispatch(setAPIError(true));
  }
};

export const getChannelInfo = (channelName) => async (dispatch) => {
  const response = await helix.get(`channels/${channelName}`);
  dispatch({
    type: SET_VIEWED_CHANNEL,
    payload: response.data,
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
