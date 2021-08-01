import "./App.css";
import axios from "axios";
import Home from "./components/home/main";
import Dashboard from "./components/dashboard/main";
import Analytics from "./components/analytics/main";
import Stock from "./components/stock/main";
import Shop from "./components/shop/main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// axios defaults
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common["access_token"] =
  JSON.parse(window.localStorage.getItem("accessToken")) ?? null;
// root function
function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose="3000"
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        pauseOnHover
        draggable
        pauseOnFocusLoss
        toastClassName="text-gray-700 font-medium"
        progressStyle={{ backgroundColor: "#053742" }}
      />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/analytics">
            <Analytics />
          </Route>
          <Route path="/stock">
            <Stock />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
