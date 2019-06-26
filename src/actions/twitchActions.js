import axios from "axios";
import { GET_FEATURED_STREAMS } from "./types";

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
