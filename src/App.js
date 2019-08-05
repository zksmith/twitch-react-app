import React, { Suspense, lazy } from "react";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Sidebar from "./components/layout/Sidebar";
const Home = lazy(() => import("./components/home/Home"));
const Streams = lazy(() => import("./components/streams/Streams"));
const Games = lazy(() => import("./components/games/Games"));
const Channel = lazy(() => import("./components/channel/Channel"));
const NotFound = lazy(() => import("./components/layout/NotFound"));

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
        <Suspense fallback={<></>}>
          <main className="main-wrapper">
            <Router>
              <Home path="/" />
              <Streams path="streams">
                <Streams path="/:category" />
              </Streams>
              <Games path="games" />
              <Channel path="channel/:channelName" />
              <NotFound default />
            </Router>
          </main>
        </Suspense>
      </div>
    </Provider>
  );
};

export default App;
