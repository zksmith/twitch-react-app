import {
  GET_FEATURED_STREAMS,
  GET_TOP_GAMES,
  GET_STREAMS_BY_CATEGORY,
  SET_LOADING
} from "../actions/types";

const initialState = {
  featuredStreams: null,
  topGames: null,
  streams: null,
  globalStream: null,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_STREAMS:
      return {
        ...state,
        featuredStreams: action.payload
      };
    case GET_TOP_GAMES:
      return {
        ...state,
        topGames: action.payload,
        loading: false
      };
    case GET_STREAMS_BY_CATEGORY:
      return {
        ...state,
        streams: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
