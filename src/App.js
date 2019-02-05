import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStream: ""
    };
  }
  componentDidMount() {
    var url =
      "https://api.twitch.tv/kraken/streams/featured?client_id=b1r5nyhmnh17p0t2orohaquamw0f3h7";
    let self = this;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        self.setState({
          currentStream: data.featured[0].stream.channel.name
        });
      })
      .catch(error => console.log(error));
  }
  render() {
    if (this.state.currentStream !== "") {
      return (
        <div className="App">
          <Sidebar />
          <div className="main-content">
            <iframe
              src={`https://player.twitch.tv/?channel=${
                this.state.currentStream
              }&muted=false`}
              title={`featured streamer ${this.state.currentStream}`}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Sidebar />
          <div className="main-content">
            <p>Loading...</p>
          </div>
        </div>
      );
    }
  }
}

export default App;
