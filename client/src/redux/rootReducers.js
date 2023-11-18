import { combineReducers } from "redux";
import userReducer from "./user/userReducer.js";
import cardReducer from "./cards/cardReducer.js";

const rootReducer = combineReducers({
  userReducer,
  cardReducer
});

export default rootReducer;
