import React, { useState, useEffect, Suspense, lazy } from "react";
import { Router } from "@reach/router";
import { getFeaturedStreams } from "./utility/TwitchAPI";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import Loading from "./components/Loading";
const Sidebar = lazy(() => import("./components/Sidebar"));
const Home = lazy(() => import("./components/Home"));
const Streams = lazy(() => import("./components/Streams"));
const Games = lazy(() => import("./components/Games"));
const Channel = lazy(() => import("./components/Channel"));
const NotFound = lazy(() => import("./components/NotFound"));

const App = () => {
  const [allFeaturedStreams, setFeaturedStreams] = useState([]);

  const fetchData = async () => {
    const { featured } = await getFeaturedStreams();
    setFeaturedStreams(featured);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Sidebar />
          <main className="main-wrapper">
            <Router>
              <Home path="/" allFeaturedStreams={allFeaturedStreams} />
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
