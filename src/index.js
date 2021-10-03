import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/root";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.css";
const enhancedComposeWithDevTools = composeWithDevTools({
  trace: true,
});
ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(
        rootReducer,
        {},
        enhancedComposeWithDevTools(applyMiddleware(thunk))
      )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
