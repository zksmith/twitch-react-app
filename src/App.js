import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Landing from "./components/Landing";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <Landing />
      </div>
    );
  }
}

export default App;
