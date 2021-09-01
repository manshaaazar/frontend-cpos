import { combineReducers } from "redux";
import LoginReducer from "./login";
import shopReducer from "./shop";
import stockReducer from "./stock";
export default combineReducers({
  login: LoginReducer,
  shop: shopReducer,
  stock: stockReducer,
});
