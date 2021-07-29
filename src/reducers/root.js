import { combineReducers } from "redux";
import LoginReducer from "./login";
import shopReducer from "./shop";
export default combineReducers({
  login: LoginReducer,
  shop: shopReducer,
});
