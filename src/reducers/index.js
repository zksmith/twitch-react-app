import { combineReducers } from "redux";
import twitchReducer from "./twitchReducer";

export default combineReducers({
  twitch: twitchReducer
});
