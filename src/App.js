import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStream: "",
      allFeaturedStreams: ""
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
        console.log(data.featured[0].stream);
        self.setState({
          currentStream: data.featured[0].stream.channel.name,
          allFeaturedStreams: data.featured
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
            <div className="featured-streamer">
              <div className="video">
                <iframe
                  src={`https://player.twitch.tv/?channel=${
                    this.state.currentStream
                  }&muted=true`}
                  title={`featured streamer ${this.state.currentStream}`}
                  frameBorder="0"
                  height="740"
                  width="416"
                />
              </div>
            </div>
            <div className="thumbnail-row">
              {this.state.allFeaturedStreams.map(stream => (
                <img src={stream.stream.preview.medium} />
              ))}
            </div>
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
