import { GET_FEATURED_STREAMS } from "../actions/types";

const initialState = {
  featuredStreams: null,
  globalStream: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FEATURED_STREAMS:
      return {
        ...state,
        featuredStreams: action.payload
      };
    default:
      return state;
  }
};
