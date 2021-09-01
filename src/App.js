import "./App.css";
import LoadingFig from "./resources/loading.svg";
import axios from "axios";
import { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Home = lazy(() => import("./components/home/main"));
const Dashboard = lazy(() => import("./components/dashboard/main"));
const Analytics = lazy(() => import("./components/analytics/main"));
const Stock = lazy(() => import("./components/stock/main"));
const Shop = lazy(() => import("./components/shop/main"));
// axios defaults
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.common["access_token"] =
  JSON.parse(window.localStorage.getItem("accessToken")) ?? null;
// root function
function App({}) {
  return (
    <>
      <ToastContainer
        position="bottom-right"
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
        <Suspense
          fallback={
            <div className="w-screen h-screen font-mono text-gray-700 text-xl tracking-wide leading-10 flex justify-center items-center">
              <img src={LoadingFig} />
              <div className="h-screen w-screen absolute flex justify-center items-start">
                <h4>Loading Content</h4>
              </div>
            </div>
          }
        >
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
        </Suspense>
      </Router>
    </>
  );
}

export default App;
