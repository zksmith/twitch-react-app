import {
  GET_FEATURED_STREAMS,
  GET_TOP_GAMES,
  GET_STREAMS,
  SET_LOADING,
  SET_VIEWED_CHANNEL,
  GET_GAME_INFO,
  SET_API_ERROR
} from "../actions/types";

const initialState = {
  featuredStreams: null,
  topGames: null,
  streams: null,
  gameInfo: {},
  viewedChannel: null,
  loading: false,
  isAPIError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_API_ERROR:
      return {
        ...state,
        isAPIError: action.payload
      };
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
    case GET_STREAMS:
      return {
        ...state,
        streams: action.payload,
        loading: false
      };
    case GET_GAME_INFO:
      return {
        ...state,
        gameInfo: { ...state.gameInfo, ...action.payload }
      };
    case SET_VIEWED_CHANNEL:
      return {
        ...state,
        viewedChannel: action.payload
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
